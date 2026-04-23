'use client';
import Link from "next/link";
import Image from "next/image";
import { CloseThreeSvg, DocumentTwo, NextArrowFive, PrevArrowFive, PrevArrowTwo, QuestionTwoSvg, VideoPlayerFourSvg } from "@/components/svg";
import learning_bg from '@/assets/img/dashboard/bg/learning-bg.jpg';

// Finans Odaklı Eğitim Verileri
const learningData = [
    {
        title: "Piyasalara Giriş",
        progress: "3/3",
        lessons: [
            { type: "document", title: "Finansal Okuryazarlık Nedir?", time: "", completed: true },
            { type: "video", title: "Piyasa Türlerini Tanıyalım", time: "14:20", completed: true },
            { type: "question", title: "Temel Kavramlar Testi", time: "", completed: true }
        ]
    },
    {
        title: "Teknik Analiz Temelleri",
        progress: "1/3",
        lessons: [
            { type: "document", title: "Mum Grafikleri Okuma", time: "", completed: true },
            { type: "video", title: "Destek ve Direnç Noktaları", time: "20:45", completed: false },
            { type: "question", title: "Grafik Analizi Uygulaması", time: "", completed: false }
        ]
    },
    {
        title: "Trend Analizi",
        progress: "0/2",
        lessons: [
            { type: "document", title: "Yükselen ve Düşen Kanallar", time: "", completed: false },
            { type: "video", title: "Trend Çizgileri Nasıl Çizilir?", time: "25:00", completed: false }
        ]
    },
    {
        title: "İndikatörler ve Kullanımı",
        progress: "0/3",
        lessons: [
            { type: "document", title: "RSI ve MACD Kullanımı", time: "", completed: false },
            { type: "video", title: "Hareketli Ortalamalar", time: "18:10", completed: false },
            { type: "question", title: "İndikatör Stratejileri Testi", time: "", completed: false }
        ]
    }
];

export default function CourseLessonArea() {
    return (
        <div className="tpd-dashboard-wrap-bg" style={{ backgroundImage: "url(/assets/img/dashboard/bg/dashboard-bg-shape-1.jpg)" }}>
            <div className="tpd-continue-learning-wrapper">
                {/* Sol Sidebar - Ders Programı */}
                <div className="tpd-continue-learning-sidebar">
                    <div className="tpd-continue-learning-accordion">
                        <div className="accordion" id="accordionExample">
                            {learningData.map((section, index) => (
                                <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header" id={`heading${index}`}>
                                        <button className={`accordion-button ${index === 0 ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={index === 0 ? "true" : "false"}>
                                            {section.title}
                                            <span>{section.progress}</span>
                                        </button>
                                    </h2>
                                    <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`} aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                                        <div className="tpd-continue-learning-body">
                                            <div className="tpd-continue-learning-body-item">
                                                {section.lessons.map((lesson, lessonIndex) => (
                                                    <a href="#" className={lesson.completed ? "active" : ""} key={lessonIndex}>
                                                        <p>
                                                            <span>
                                                                {lesson.type === "document" && <DocumentTwo />}
                                                                {lesson.type === "video" && <VideoPlayerFourSvg />}
                                                                {lesson.type === "question" && <QuestionTwoSvg />}
                                                            </span>
                                                            {lesson.title}
                                                        </p>
                                                        {lesson.time && (
                                                            <div className="time">
                                                                <p>{lesson.time}</p>
                                                            </div>
                                                        )}
                                                        {lesson.completed && <i className="fa-solid fa-circle-check"></i>}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Ana İçerik Alanı */}
                <div className="tpd-continue-learning-main">
                    <div className="tpd-continue-learning-popup d-flex justify-content-between align-items-center">
                        <div className="tpd-continue-learning-popup-main d-flex align-items-center">
                            <Link href="/course-details/1">
                                <span className="close">
                                    <PrevArrowTwo cls="svg-1" />
                                </span>
                            </Link>
                            <p>Teknik Analiz ve Trade Stratejileri Masterclass</p>
                        </div>
                        <div className="tpd-continue-learning-popup-main d-flex align-items-center">
                            <p>İlerlemen: 8 / 10 (%80)</p>
                            <Link href="/course-details/1">
                                <span className="crose">
                                    <CloseThreeSvg />
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="tpd-continue-learning-about-bg">
                        <div className="tpd-continue-learning-about-thumb mb-45">
                            {/* Buraya Video Player bileşeni gelecek */}
                            <Image src={learning_bg} alt="Ders Arkaplanı" style={{ height: "auto", width: "100%", borderRadius: "10px" }} />
                        </div>
                        <div className="tpd-continue-learning-about-wrapper">
                            <h4>Ders Hakkında</h4>
                            <p>Bu derste piyasa psikolojisi, fiyat hareketleri ve yatırım disiplini üzerine temel dinamikleri inceleyeceğiz.</p>
                        </div>
                        <div className="tpd-continue-learning-about-btn d-flex justify-content-center">
                            <div className="prv">
                                <a href="#">
                                    <span><PrevArrowFive /></span>{" "}
                                    Önceki Ders
                                </a>
                            </div>
                            <div className="next">
                                <a href="#">
                                    Sonraki Ders{" "}
                                    <span><NextArrowFive /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}