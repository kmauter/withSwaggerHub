import express from 'express';

import { signin, signup } from "../controllers/user.js";

const router = express.Router();

/**
 * @swagger
 * /users/signin:
 *      post: 
 *          tags: 
 *          - Users
 *          summary: Signs a user in
 *          description: Signs a user in
 *          operationId: signin
 *          consumes: 
 *          - application/json
 *          produces: 
 *          - application/json
 *          parameters: 
 *          -   in: body
 *              name: signInItem 
 *              description: Signin
 *              schema:
 *                  type: object
 *                  required: 
 *                  -   email
 *                  -   password
 *                  properties:
 *                      email:
 *                          type: string
 *                          example: "Garfield@odie.com"
 *                      password:
 *                          type: string
 *                          example: "cartoon"
 *          responses:
 *              '200':
 *                  description: A user has been signed in
 *              '500':
 *                  description: Something went wrong
 */
router.post("/signin", signin);

/**
 * @swagger
 * /users/signup:
 *      post: 
 *          tags: 
 *          - Users
 *          summary: Signs a user up
 *          description: Signs a user up
 *          operationId: signup
 *          consumes: 
 *          - application/json
 *          produces: 
 *          - application/json
 *          parameters: 
 *          -   in: body
 *              name: signUpItem 
 *              description: Signup
 *              schema:
 *                  type: object
 *                  required: 
 *                  -   email
 *                  -   password
 *                  -   confirmPassword
 *                  -   firstName
 *                  -   lastName
 *                  properties:
 *                      email:
 *                          type: string
 *                          example: "Garfield@odie.com"
 *                      password:
 *                          type: string
 *                          example: "cartoon"
 *                      confirmPassword:
 *                          type: string
 *                          example: "cartoon"
 *                      firstName:
 *                          type: string
 *                          example: "Garfield"
 *                      lastName:
 *                          type: string
 *                          example: "The Cat"
 *          responses:
 *              '200':
 *                  description: A user has been signed up
 *              '500':
 *                  description: Something went wrong
 */
router.post("/signup", signup);

export default router;