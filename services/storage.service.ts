import { supabase } from "@/lib/supabase";

export async function uploadAvatar(
  file: File
) {

  const {
    data: {
      user,
    },
  } = await supabase.auth.getUser();

  if (!user)
    throw new Error("Not logged in");

  const ext =
    file.name.split(".").pop();

  const fileName =
    `${user.id}.${ext}`;

  const { error } =
    await supabase.storage
      .from("avatars")
      .upload(
        fileName,
        file,
        {
          upsert: true,
        }
      );

  if (error)
    throw error;

  const {
    data,
  } = supabase.storage
    .from("avatars")
    .getPublicUrl(
      fileName
    );

  return data.publicUrl;

}