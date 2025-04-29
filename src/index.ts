import express, { Application } from 'express';
import { PrismaClient } from '@prisma/client';
import { setupSwagger } from './config/swagger';
import userRoute from './modules/users/userRoute';

const app: Application = express();
const prisma = new PrismaClient();

// Middleware
app.use(express.json());
setupSwagger(app);

app.use('/users', userRoute);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Server ready at: http://localhost:${PORT}`);
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
