import { Metadata } from "next";
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import ProfileBannerArea from "./_components/profile-banner-area";
import ProfileBio from "./_components/profile-bio";
import MyCourses from "./_components/my-courses";

export const metadata: Metadata = {
  title: "Profil - Aktuel Analiz",
};

export default async function ProfilePage() {
  const cookieStore = await cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
      },
    }
  )

  // 1. Oturumu kontrol et
  const { data: { user } } = await supabase.auth.getUser()

  // Giriş yapılmamışsa login'e fırlat
  if (!user) {
    redirect('/login')
  }

  // 2. Profiles tablosundan gerçek kullanıcı bilgilerini çek
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return (
    <main className="tp-dashboard-body-bg">
      {/* Banner alanına profil verisini gönderiyoruz */}
      <ProfileBannerArea profile={profile} email={user.email} />

      {/* Bio kısmına profil verisini gönderiyoruz */}
      <ProfileBio profile={profile} />

      {/* Kurslar genelde başka bir tablodan gelir, şimdilik böyle bırakabiliriz */}
      <MyCourses />
    </main>
  );
}