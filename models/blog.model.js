import { Schema, model } from "mongoose";

const blogSchema= new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    image:{
        type:String,
    },
    autherName:{
        type:String,
    }

},{
   timestamps:true 
});
const Blog=model('Blog',blogSchema);
export default Blog;