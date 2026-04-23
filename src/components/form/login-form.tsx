'use client';
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CloseEye, GoogleSvg, OpenEye } from '../svg';
import ErrMsg from "../err-msg";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

type Inputs = {
  email: string;
  password: string;
  remember: boolean;
}

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()

  // --- 1. E-posta ve Şifre ile Giriş ---
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      alert("Hata: " + error.message); // Örn: Invalid login credentials
      setLoading(false);
      return;
    }

    // Başarılı girişten sonra yönlendirilecek sayfa
    router.push('/my-profile');
    router.refresh(); // Session'ın güncellenmesi için önemli
  }

  // --- 2. Google ile Giriş ---
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) alert("Google hatası: " + error.message);
  }

  return (
    <form className="tp-login-input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        {/* E-posta Alanı */}
        <div className="col-12">
          <div className="tp-login-input p-relative">
            <label>E-posta Adresi</label>
            <input
              type="email"
              placeholder="E-posta adresinizi girin"
              {...register("email", { required: "E-posta alanı zorunludur" })}
            />
            {errors.email?.message && <ErrMsg msg={errors.email.message} />}
          </div>
        </div>

        {/* Şifre Alanı */}
        <div className="col-12">
          <div className="tp-login-input p-relative">
            <label>Şifre</label>
            <div className="password-input p-relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Şifreniz"
                {...register("password", { required: "Şifre alanı zorunludur" })}
              />
              <div className="tp-login-input-eye password-show-toggle">
                <span className={`${showPass ? "open-eye" : "open-close"}`} onClick={() => setShowPass(!showPass)}>
                  {showPass ? <OpenEye /> : <CloseEye />}
                </span>
              </div>
            </div>
            {errors.password?.message && <ErrMsg msg={errors.password.message} />}
          </div>
        </div>

        {/* Hatırla & Şifremi Unuttum */}
        <div className="col-12">
          <div className="tp-login-from-remeber">
            <div className="row">
              <div className="col-6">
                <div className="tp-contact-input-remeber login">
                  <input id="remember" type="checkbox" {...register("remember", { required: false })} />
                  <label htmlFor="remember">Beni Hatırla</label>
                </div>
              </div>
              <div className="col-6">
                <div className="tp-login-input-remeber text-end">
                  <a href="#">Şifremi Unuttum?</a>
                </div>
              </div>
            </div>
          </div>

          {/* Giriş Butonu */}
          <div className="tp-login-from-btn">
            <button type='submit' disabled={loading} className="tp-btn-inner w-100 text-center">
              {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
            </button>
          </div>

          <div className="tp-login-from-subtitle-heading">
            <h5 className="tp-login-from-subtitle">Veya şununla devam et</h5>
          </div>

          {/* Google Giriş Butonu */}
          <div className="tp-login-from-google-btn">
            <button type="button" className="w-100" onClick={handleGoogleLogin}>
              <GoogleSvg />
              Google ile Devam Et
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}