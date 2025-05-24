import React from "react";
import { PrismaClient } from "../../../generated/prisma";
import { updateProfile } from "./actions";

const Edit = async () => {
  const prisma = new PrismaClient();

  const profile = await prisma.profile.findUnique({
    where: {
      id: 1,
    },
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-white font-bold text-2xl">
          Edit your profile details
        </h1>
        <form action={updateProfile} className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              required
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              name="name"
              defaultValue={profile?.name}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="location">Location</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              name="location"
              defaultValue={profile?.location || ""}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="image">Image</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2"
              type="text"
              name="image"
              defaultValue={profile?.image || ""}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="headline">Headline</label>
            <input
              type="text"
              className="border-2 border-gray-300 rounded-md p-2"
              name="headline"
              defaultValue={profile?.headline || ""}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="aboutMe">About Me</label>
            <textarea
              className="border-2 border-gray-300 rounded-md p-2"
              name="aboutMe"
              defaultValue={profile?.aboutMe || ""}
            />
          </div>
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            type="submit"
          >
            Update
          </button>
        </form>
      </main>
    </div>
  );
};

export default Edit;
