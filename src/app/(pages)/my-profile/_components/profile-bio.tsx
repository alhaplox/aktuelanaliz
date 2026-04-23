'use client';
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

interface ProfileBioProps {
    profile: any;
}

export default function ProfileBio({ profile }: ProfileBioProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [bio, setBio] = useState(profile?.bio || "");
    const [loading, setLoading] = useState(false);
    const supabase = createClient();

    const handleSave = async () => {
        setLoading(true);
        const { error } = await supabase
            .from('profiles')
            .update({ bio: bio })
            .eq('id', profile.id);

        if (error) {
            alert("Güncelleme hatası: " + error.message);
        } else {
            setIsEditing(false);
            alert("Biyografiniz başarıyla güncellendi.");
        }
        setLoading(false);
    };

    return (
        <section className="tp-profile-arae">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-profile-box my-profile p-relative">
                            <div className="tp-profile-content">
                                <div className="d-flex justify-content-between align-items-center mb-20">
                                    <h3 className="tp-profile-title">Biyografi</h3>
                                    <button
                                        className="tp-btn-inner"
                                        style={{ padding: '5px 15px', fontSize: '14px' }}
                                        onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                                        disabled={loading}
                                    >
                                        {loading ? 'Kaydediliyor...' : (isEditing ? 'Kaydet' : 'Düzenle')}
                                    </button>
                                </div>

                                {isEditing ? (
                                    <div className="tp-profile-edit-form">
                                        <textarea
                                            className="form-control"
                                            rows={5}
                                            value={bio}
                                            onChange={(e) => setBio(e.target.value)}
                                            placeholder="Kendinizden bahsedin..."
                                            style={{
                                                width: '100%',
                                                padding: '15px',
                                                borderRadius: '10px',
                                                border: '1px solid #ddd'
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <div className="tp-profile-bio-text">
                                        {bio ? (
                                            <p>{bio}</p>
                                        ) : (
                                            <p className="text-muted italic">
                                                Henüz bir biyografi eklenmemiş. "Düzenle" butonuna basarak kendinizden bahsedebilirsiniz.
                                            </p>
                                        )}
                                    </div>
                                )}

                                <div className="tp-profile-details mt-30">
                                    <h4 className="tp-profile-details-title">Ek Bilgiler</h4>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        <li><strong>Telefon:</strong> {profile?.phone_number || 'Belirtilmemiş'}</li>
                                        <li><strong>E-posta:</strong> {profile?.email}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}