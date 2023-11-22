import Blog from "../models/blog.model.js";


export const getAllBlogs=async(req,res) =>{
    try {
        const data = await Blog.find();
        res.status(200).send(data);
    }catch (e) {
        res.status(503).send(e);
    }

}
export const createBlog=async(req,res) =>{
    const blogData = req.body;

    try {
        const data = await Blog.create(blogData);
        res.status(200).send(data);
    }catch (e) {
        res.status(503).send(e);
    }

}

export const getBlogById=async(req,res ) =>{
    const {blogId}=req.params;
    try {
        const data = await Blog.findById(blogId);
        res.status(200).send(data);
    }catch (e) {
        res.status(503).send(e);
    }

}

export const updateBlogById=async(req,res)=>{
    const {blogId} = req.params;
    try{
        const blogData=req.body;
        const data= await Blog.updateOne({_id:blogId},{$set:blogData});
        res.status(200).send(data)

    }catch(e){
        res.status(503).send(e);
    }
}

export const deleteBlogById =async(req,res)=>{
    const {blogId}=req.params;
    try{
        const data=await Blog.findByIdAndDelete(blogId);
        res.status(200).send(data);
    }catch(e){
        res.status(503).send(e);
    }
}

export const renderBlogs = async(req,res)=>{
    const blogs = await Blog.find();
    res.render('blogList',{blogs})

}
export const renderBlogDetailsById=async(req,res)=>{
    const {blogId}= req.params;
    const blog = await Blog.findById(blogId);
    res.render('BlogDetails',{blog})
}