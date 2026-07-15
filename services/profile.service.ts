import { supabase } from "@/lib/supabase";

export type Profile = {

  id: string;

  full_name: string;

  monthly_income: number;

  monthly_budget: number;

  currency: string;

  avatar_url?: string | null;

};

export async function getProfile() {

  const {
    data: {
      user,
    },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const {
    data,
    error,
  } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (
    error &&
    error.code !== "PGRST116"
  ) {

    throw error;

  }

  return data;

}

export async function saveProfile(
  profile: Omit<Profile, "id">
) {

  const {
    data: {
      user,
    },
  } = await supabase.auth.getUser();

  if (!user) {

    throw new Error(
      "User not found"
    );

  }

  const { error } =
    await supabase
      .from("profiles")
      .upsert({

        id: user.id,

        full_name:
          profile.full_name,

        monthly_income:
          profile.monthly_income,

        monthly_budget:
          profile.monthly_budget,

        currency:
          profile.currency,

        avatar_url:
          profile.avatar_url,

      });

  if (error) {

    throw error;

  }

}