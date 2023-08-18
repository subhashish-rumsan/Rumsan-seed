// eslint-disable-next-line import/no-extraneous-dependencies
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy users
  const user1 = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: 'securepassword123',
      name: 'Administrator',
      age: 30,
      lastLoginDate: new Date(),
      token: 'sampleToken123',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { username: 'john_doe' },
    update: {},
    create: {
      username: 'john_doe',
      password: 'password123',
      name: 'John Doe',
      age: 25,
      lastLoginDate: new Date(),
      token: 'sampleToken456',
    },
  });

  console.log({ user1, user2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
