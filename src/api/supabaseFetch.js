import supabase from "./supabaseClient";

export const fetchKommentarer = async () => {
  const { data, error } = await supabase.from("kommentarer").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
