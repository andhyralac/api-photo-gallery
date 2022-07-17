import { Schema, Types, model} from 'mongoose'

export interface IUser {
    _id?: Types.ObjectId; 
    full_name: string;
    nickname: string;
    email: string;
    password: string;
    profile_picture?: string;
    friends?: Types.ObjectId[];
}


const userSchema = new Schema({
    full_name: {
        type: String,
        required: [true, 'full name is required']
    },
    nickname: {
        type: String,
        required: [true, 'Nickname is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    profile_picture: String,
    friends: [{
        type: Types.ObjectId,
        ref: 'User'
    }]
},{
    timestamps: false,
    versionKey: false
})

const UserModel = model<IUser>('User', userSchema)

export default UserModel