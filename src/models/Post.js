import mongoose from "mongoose";

//const {Schema} = mongoose

const postSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
    },
    name:{
        type: String,
        unique:true,
    },
});
let Post;
if (mongoose.models.Post){
    Post=mongoose.model('Post')
}else {
    Post=mongoose.model('Post',postSchema)
}

export default Post;
//export default mongoose.model("Post",postSchema);
