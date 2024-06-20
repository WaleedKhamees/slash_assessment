"use client";
import { postType } from "../lib/types/post";

 


type PostPropsType = {
    post: postType;
}

export default function Post({ post } : PostPropsType) {
    return (
    <div className="py-4">
        <h2 className="h2">{post.title}</h2>
        <p className="p text-opacity-50">{post.body}</p>
      </div>
    )
}