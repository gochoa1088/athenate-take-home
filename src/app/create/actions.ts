"use server";

import { redirect } from "next/navigation";
import { PrismaClient } from "../../../generated/prisma";
import { revalidatePath } from "next/cache";

export const createProfile = async (formData: FormData) => {
  const prisma = new PrismaClient();

  await prisma.profile.create({
    data: {
      name: formData.get("name") as string,
      location: formData.get("location") as string,
      image: formData.get("image") as string,
      headline: formData.get("headline") as string,
      aboutMe: formData.get("aboutMe") as string,
    },
  });

  revalidatePath("/");
  redirect("/");
};
