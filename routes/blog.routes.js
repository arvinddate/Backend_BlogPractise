import { Router } from "express";
import { getAllBlogs,createBlog,getBlogById, deleteBlogById, updateBlogById } from "../controllers/blog.controllers.js";
const router= Router();

router.get('/',getAllBlogs);
router.post('/',createBlog);
router.get('/:blogId',getBlogById);
router.put('/:blogId',updateBlogById);
router.delete('/:blogId',deleteBlogById);
export default router;