"use client";

import React, { useState } from "react";

type ErrorType = {
  content: string;
  title: string;
  submitError: string;
};
type fromSchema = {
  title: string;
  content: string;
};

type InputPropsType = {
  error: string;
};

function ErrorText({ error }: { error: string }) {
  return <p className="text-red-600">{error}</p>;
}

function Input({ error }: InputPropsType) {
  return (
    <div className="flex flex-col gap-2 justify-center w-full">
      <label htmlFor="title" className="p text-opacity-50">
        Title:
      </label>
      <input
        type="text"
        placeholder="Write your post's title here"
        name="title"
        id="title"
        className="py-2 rounded-lg p-2 border border-black dark:border-white"
      />
      {error ? <ErrorText error={error} /> : null}
    </div>
  );
}

function TextArea({ error }: InputPropsType) {
  return (
    <div className="flex flex-col gap-2 justify-center w-full">
      <label htmlFor="content" className="p text-opacity-50">
        Content:
      </label>
      <textarea
        placeholder="Write your post's content here"
        name="content"
        id="content"
        className="w-full rounded-lg p-2 border border-black dark:border-white"
      />
      {error ? <ErrorText error={error} /> : null}
    </div>
  );
}

function SuccessMessage() {
  return <p className="text-green-600">Post submitted successfully!</p>;
};  

const submitPost = async (post: { title: string; content: string }) => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = Math.random() > 0.5;
      if (error) {
        reject(new Error("Failed to submit post."));
      }
      resolve(post);
    }, 1000);
  });
};

export function NewPostForm() {
  const [error, setError] = useState<ErrorType>({} as ErrorType);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = ({ title, content }: fromSchema) => {
    setError({} as ErrorType);

    const e = { title: "", content: "", submitError: "" } as ErrorType;
    if (!title.trim()) e.title = "Title cannot be empty.";
    if (!content.trim()) e.content = "Content cannot be empty.";

    const hasError = e.title || e.content;
    if (hasError) setError(e);

    return hasError;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const post = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    };
    if (validateForm(post)) return;

    setLoading(true);
    
    try {
      await submitPost(post);
      setSubmitted(true);
    } catch (err: any) {
      setError({ ...error, submitError: err.message });
      setSubmitted(false);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={async (e) => await handleSubmit(e)}
      className="w-full flex flex-col gap-4 justify-center my-64"
    >
      <Input error={error.title} />
      <TextArea error={error.content} />
      {error.submitError ? <ErrorText error={error.submitError} /> : null}
      {submitted && !loading ? <SuccessMessage /> : null}
      <button
        type="submit"
        className="dark:bg-white dark:text-black bg-black text-white rounded-lg py-2"
      >
        {loading ? "Loading..." : "Create Post"}
      </button>
    </form>
  );
}
export default NewPostForm;
