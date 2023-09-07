import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected mongodb")
    } catch (error) {
        throw new Error("failed");
    }
};
export default connect();