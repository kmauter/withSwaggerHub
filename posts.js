import express from 'express';
import {getPostsBySearch, getPosts, getPost, createPosts, updatePost, deletePost, likePost} from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

/**
 * @swagger
 * /posts/:
 *      get: 
 *          tags: 
 *          - Posts
 *          summary: Gets a page of posts
 *          description: Gets a page of posts
 *          operationId: getPosts
 *          produces: 
 *          - application/json
 *          parameters: 
 *          -   in: query
 *              name: page
 *              description: pageNumber
 *              schema:
 *                  type: integer
 *                  required: true
 *                  example: 1
 *          responses:
 *              '200':
 *                  description: A user has been signed in
 *              '404':
 *                  description: Something went wrong
 */
router.get('/', getPosts);
router.get('/search', getPostsBySearch);
router.get('/:_id', getPost);
router.post('/', auth, createPosts);
router.patch('/:_id',auth, updatePost);
router.delete('/:_id',auth, deletePost);
router.patch('/:_id/likePost',auth, likePost);

export default router;