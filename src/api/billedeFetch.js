import supabase from "./supabaseClient";

export const fetchBillede = async () => {
  const { data, error } = await supabase.storage
    .from("public")
    .download("images/profile.png");

  if (error) {
    throw new Error(error.message);
  }

  const url = URL.createObjectURL(data);
  return url;
};
