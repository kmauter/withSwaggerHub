import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use(express.json())
app.use('/posts', postRoutes);
app.use('/users', userRoutes);

const CONNECTION_URL = 'mongodb+srv://admin:38MKAAAOhd70@cluster0.u0pkn.mongodb.net/chefdb?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

const swaggerOptions = {
    swaggerDefinition: {
        info: {
        title: 'Large-Project API',
        description: 'Large-Project API description',
        servers: ["http://localhost:5000"]
        }
    },
    apis: ["./routes/*.js"]
};

const swaggerDocs = await swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

mongoose.connect(CONNECTION_URL, {  })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`))

