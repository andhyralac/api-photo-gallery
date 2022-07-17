import {Schema, Types, model} from 'mongoose'

export interface IPhoto {
    _id?: Types.ObjectId;
    description: string;
    img: string;
    user: Types.ObjectId;
    comment?: Types.ObjectId[];
    likes?: Types.ObjectId[];
    status?: boolean;
}

const photoSchema = new Schema({
    description: {
        type: String,
        required: [true, 'description is required']
    },
    img: {
        type: String,
        required: [true, 'img is required']
    },
    user: {
        type: Types.ObjectId,
        ref: 'User'
    },
    comment: [{
        type: Types.ObjectId,
        ref: 'Comment'
    }],
    like: [{
        type: Types.ObjectId,
        ref: 'User'
    }],
    status: {
        type: Boolean,
        default: true
    }
},{
    timestamps: false,
    versionKey: false
})

const PhotoModel = model<IPhoto>('Photo', photoSchema)

export default PhotoModel
