'use client';
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CloseEye, GoogleSvg, OpenEye } from '../svg';
import ErrMsg from "../err-msg";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  password: string;
  conformPassword: string;
  remember: boolean;
}

export default function RegisterForm() {
  const [showPass, setShowPass] = useState(false);
  const [showConformPass, setShowConformPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<Inputs>()

  // --- 1. NORMAL KAYIT (E-posta/Şifre) ---
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        // ÖNEMLİ: Trigger'ın okuyabilmesi için metadata gönderiyoruz
        data: {
          first_name: data.name.split(' ')[0],
          last_name: data.name.split(' ').slice(1).join(' '),
          phone_number: data.phone,
        }
      }
    });

    if (authError) {
      alert(authError.message);
      setLoading(false);
      return;
    }

    // Not: Eğer Database Trigger kurduysan buradaki .from('profiles').insert kısmına 
    // teknik olarak gerek kalmaz, trigger otomatik halleder. 
    // Ama trigger yoksa bu kod bloğu kalmalı.
    if (authData.user && !authError) {
      alert("Success! Please check your email for the confirmation link.");
      reset();
      router.push('/login');
    }
    setLoading(false);
  }

  // --- 2. GOOGLE KAYIT ---
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      }
    });
    if (error) alert(error.message);
  }

  return (
    <form className="tp-login-input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        {/* İsim alanı */}
        <div className="col-12">
          <div className="tp-login-input p-relative">
            <label>İsim Soyisim</label>
            <input type="text" placeholder="Aktuel Analiz" {...register("name", { required: "Name is required" })} />
            {errors.name?.message && <ErrMsg msg={errors.name.message} />}
          </div>
        </div>

        {/* E-posta alanı */}
        <div className="col-12">
          <div className="tp-login-input p-relative">
            <label>Email</label>
            <input type="email" placeholder="example@mail.com" {...register("email", { required: "Email is required" })} />
            {errors.email?.message && <ErrMsg msg={errors.email.message} />}
          </div>
        </div>

        {/* Telefon alanı */}
        <div className="col-12">
          <div className="tp-login-input p-relative">
            <label>Telefon</label>
            <input type="text" placeholder="+90 5XX XXX XX XX" {...register("phone", { required: "Phone is required" })} />
            {errors.phone?.message && <ErrMsg msg={errors.phone.message} />}
          </div>
        </div>

        {/* Şifre ve Diğer Alanlar (Senin kodunla aynı devam ediyor) */}
        <div className="col-12">
          <div className="tp-login-input p-relative">
            <label>Şifre</label>
            <div className="password-input p-relative">
              <input type={showPass ? "text" : "password"} placeholder="Şifre" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Min 6 chars" } })} />
              <div className="tp-login-input-eye password-show-toggle">
                <span className={`${showPass ? "open-eye" : "open-close"}`} onClick={() => setShowPass(!showPass)}>
                  {showPass ? <OpenEye /> : <CloseEye />}
                </span>
              </div>
            </div>
            {errors.password?.message && <ErrMsg msg={errors.password.message} />}
          </div>
        </div>

        <div className="col-12">
          <div className="tp-login-input p-relative">
            <label>Şifre Doğrulama</label>
            <div className="password-input p-relative">
              <input type={showConformPass ? "text" : "password"} placeholder="Şifre Doğrulama" {...register("conformPassword", { required: true, validate: (val: string) => { if (watch('password') != val) { return "Passwords do not match" } } })} />
              <div className="tp-login-input-eye password-show-toggle">
                <span className={`${showConformPass ? "open-eye" : "open-close"}`} onClick={() => setShowConformPass(!showConformPass)}>
                  {showConformPass ? <OpenEye /> : <CloseEye />}
                </span>
              </div>
            </div>
            {errors.conformPassword?.message && <ErrMsg msg={errors.conformPassword.message} />}
          </div>
        </div>

        <div className="col-12">
          <div className="tp-login-from-btn">
            <button type="submit" disabled={loading} className="tp-btn-inner w-100 text-center">
              {loading ? "Registering..." : "Kayıt Ol"}
            </button>
          </div>
          <div className="tp-login-from-google-btn">
            {/* Google butonu handleGoogleLogin fonksiyonunu çağırmalı */}
            <button type="button" className="w-100" onClick={handleGoogleLogin}>
              <GoogleSvg /> Google ile Kayıt Ol
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}