import mongoose, {Schema} from "mongoose";

const usersSchema = new Schema(
    {
    fname: String,
    mname: String,
    lname: String,
    age: Number,
    gender: String,
    role: String,
    address: String,
    username: String,
    password: String,
    },
    {
        timestamps: true,   
    }
)

const Users =mongoose.models.Users || mongoose.model('Users', usersSchema);

export default Users;