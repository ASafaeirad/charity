import { toCamelCase } from '@fullstacksjs/toolbox';
import path from 'path';
import pluralize from 'pluralize';
import type {
  Node,
  SourceFile,
  ts,
  TypeAliasDeclaration,
  TypeNode,
  UnionTypeNode,
  VariableStatement,
} from 'ts-morph';
import { Project, SyntaxKind, VariableDeclarationKind } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: path.resolve(__dirname, '..', 'tsconfig.web.json'),
});

const isAllLiteral = (t: TypeNode<ts.TypeNode>) =>
  t?.getKindName() === 'LiteralType';

const isLiteralUnion = (t?: UnionTypeNode) =>
  t?.getTypeNodes().every(isAllLiteral);

const getIdentifierName = (n: Node<ts.Node>) =>
  n?.getFirstDescendantByKind(SyntaxKind.Identifier)?.getText();

const findIdentifier =
  (name: string) =>
  (n: Node<ts.Node>): boolean =>
    n
      .getChildrenOfKind(SyntaxKind.Identifier)
      .some((i) => i.getText() === name);

const getAllUnionTypeDeclarations = (file: SourceFile) =>
  file
    .getChildrenOfKind(SyntaxKind.TypeAliasDeclaration)
    .filter((t) => isLiteralUnion(t.getFirstChildByKind(SyntaxKind.UnionType)));

const getAllUnions = (t: TypeAliasDeclaration) => {
  return t
    .getFirstChildByKind(SyntaxKind.UnionType)
    ?.getChildrenOfKind(SyntaxKind.LiteralType)
    .map((n) => n.getText());
};

const getAllUnionsFromDeclaration = (v: VariableStatement) => {
  return v
    .getDescendantsOfKind(SyntaxKind.StringLiteral)
    .map((t) => t.getText());
};

const toTuple = (unions: string[], name: string) =>
  `[${unions.map((literal) => `${name}[${literal}]`).join(', ')}] as const`;

const isIdentifierExists = (file: SourceFile, name: string) =>
  file
    .getDescendantsOfKind(SyntaxKind.VariableDeclaration)
    .some(findIdentifier(name));

const getEnumVariableDeclarations = (file: SourceFile) =>
  file
    .getChildrenOfKind(SyntaxKind.VariableStatement)
    .filter((v) =>
      v
        .getFirstDescendantByKind(SyntaxKind.AsExpression)
        ?.getDescendantsOfKind(SyntaxKind.ObjectLiteralExpression),
    );

function transformUnionToTuples(
  file: SourceFile,
  typeAliases: TypeAliasDeclaration[],
) {
  typeAliases?.forEach((typeAlias) => {
    const unions = getAllUnions(typeAlias);
    const name = getIdentifierName(typeAlias);
    if (!unions || !name) return;

    const pluralName = pluralize(name);
    const tuple = toTuple(unions, name);

    const variableName = toCamelCase(pluralName);
    const isDeclarationExists = isIdentifierExists(file, variableName);
    if (!isDeclarationExists)
      file.addVariableStatement({
        isExported: true,
        declarations: [{ name: variableName, initializer: tuple }],
        declarationKind: VariableDeclarationKind.Const,
      });

    const tupleName = pluralName;
    const isTupleExists = isIdentifierExists(file, tupleName);
    if (!isTupleExists)
      file.addTypeAlias({
        name: tupleName,
        isExported: true,
        type: `typeof ${variableName}[number]`,
      });
  });
}

function transform(filePath: string) {
  const file = project.getSourceFileOrThrow(filePath);
  const variableDeclarations = getEnumVariableDeclarations(file);

  variableDeclarations?.forEach((declaration) => {
    const literals = getAllUnionsFromDeclaration(declaration);
    const name = getIdentifierName(declaration);

    if (!literals || !name) return;

    const pluralName = pluralize(name);
    const tuple = toTuple(literals, name);

    const variableName = toCamelCase(pluralName);
    const isDeclarationExists = isIdentifierExists(file, variableName);
    if (!isDeclarationExists)
      file.addVariableStatement({
        isExported: true,
        declarations: [{ name: variableName, initializer: tuple }],
        declarationKind: VariableDeclarationKind.Const,
      });

    const tupleName = pluralName;
    const isTupleExists = isIdentifierExists(file, tupleName);
    if (!isTupleExists)
      file.addTypeAlias({
        name: tupleName,
        isExported: true,
        type: `typeof ${variableName}[number]`,
      });
  });

  file.save();
}

transform('web/src/generated/api.schemas.ts');
