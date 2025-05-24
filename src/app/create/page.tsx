import React from "react";
import { createProfile } from "./actions";

const Create = async () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-white font-bold text-2xl">
          Create your profile details
        </h1>
        <form className="flex flex-col gap-4" action={createProfile}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="border-2 border-gray-300 rounded-md p-2"
              name="name"
              placeholder="Name"
              required
              defaultValue="John Doe"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="border-2 border-gray-300 rounded-md p-2"
              name="location"
              placeholder="Location"
              defaultValue="New York"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              className="border-2 border-gray-300 rounded-md p-2"
              placeholder="Image"
              defaultValue="https://example.com/image.jpg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="headline">Headline</label>
            <input
              type="text"
              className="border-2 border-gray-300 rounded-md p-2"
              name="headline"
              placeholder="Headline"
              defaultValue="Software Engineer"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="aboutMe">About Me</label>
            <textarea
              name="aboutMe"
              className="border-2 border-gray-300 rounded-md p-2"
              placeholder="About Me"
              defaultValue="Passionate about technology and innovation"
            />
          </div>
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            type="submit"
          >
            Create
          </button>
        </form>
      </main>
    </div>
  );
};

export default Create;
