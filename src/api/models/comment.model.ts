import {Schema, Types, model } from 'mongoose'

export interface IComment {
    _id?: Types.ObjectId;
    comment: string;
    user: Types.ObjectId;
    status?: boolean;
}

const commentSchema = new Schema({
    comment: {
        type: String,
        required: [true, 'Comment is required']
    },
    user: {
        type: Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: Boolean,
        default: true
    }
},{
    timestamps: false,
    versionKey: false
})

const CommentModel = model<IComment>('Comment', commentSchema)

export default CommentModel