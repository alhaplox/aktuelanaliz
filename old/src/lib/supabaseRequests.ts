import { createClient } from "@/utils/supabase/server";

// 1. Hero alanı için en güncel tek kursu getirir
export async function getHeroCourse() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error("Supabase Hero Fetch Hatası:", error.message);
    return null;
  }

  return data;
}

// 2. Tüm kursları veya belirli bir kategoriye ait kursları getirir
export async function getAllCourses(categorySlug?: string) {
  const supabase = await createClient();

  let query = supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  // Eğer bir kategori filtresi gelirse sorguya ekle
  if (categorySlug) {
    query = query.eq("category_slug", categorySlug);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Supabase All Courses Fetch Hatası:", error.message);
    return [];
  }

  return data;
}
