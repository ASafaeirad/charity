import { PrismaClient } from '@prisma/client';

import { contactBody, familyBody, householdBody, membersBody } from './data';

const client = new PrismaClient();

async function seed() {
  await client.family.deleteMany({});

  const contact = await client.contact.create({ data: contactBody });

  await client.family.create({
    data: {
      ...familyBody,
      household: {
        create: { ...householdBody, Contact: { connect: { id: contact.id } } },
      },
      members: {
        create: { ...membersBody[0], Contact: { connect: { id: contact.id } } },
      },
    },
  });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => client.$disconnect());
