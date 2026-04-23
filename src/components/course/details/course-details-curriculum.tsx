import {
  AudioPlayerSvg,
  Document,
  Lock,
  OpenEyeTwo,
  VideoPlayerTwoSvg,
} from "@/components/svg";

// Aktuel Analiz Eğitim Müfredatı Verisi
const CurriculumData = [
  {
    moduleTitle: "Eğitime Başlangıç ve Temel Kavramlar",
    lessons: [
      {
        type: "video",
        title: "Finansal Özgürlük Yolculuğu",
        duration: "12 dk",
        preview: true,
      },
      {
        type: "video",
        title: "Piyasa Psikolojisi ve Disiplin",
        duration: "15 dk",
        preview: true,
      },
      {
        type: "reading",
        title: "Temel Terimler Sözlüğü (PDF)",
        duration: "5 dk",
        preview: false,
      },
    ],
    totalLessons: 3,
    totalTime: "32 dk",
  },
  {
    moduleTitle: "Teknik Analiz: Grafiklerin Dili",
    lessons: [
      {
        type: "video",
        title: "Mum Grafiklerini Okuma",
        duration: "25 dk",
        preview: true,
      },
      {
        type: "video",
        title: "Destek ve Direnç Seviyeleri",
        duration: "30 dk",
        preview: false,
      },
      {
        type: "video",
        title: "Trend Çizgileri ve Kanallar",
        duration: "20 dk",
        preview: false,
      },
    ],
    totalLessons: 3,
    totalTime: "75 dk",
  },
  {
    moduleTitle: "İleri Seviye Stratejiler",
    lessons: [
      {
        type: "video",
        title: "RSI ve MACD ile Onay Alma",
        duration: "22 dk",
        preview: false,
      },
      {
        type: "audio",
        title: "Piyasa Analizi Sabah Bülteni",
        duration: "10 dk",
        preview: false,
      },
      {
        type: "reading",
        title: "Risk Yönetimi Kontrol Listesi",
        duration: "8 dk",
        preview: false,
      },
    ],
    totalLessons: 3,
    totalTime: "40 dk",
  },
];

export default function CourseDetailsCurriculum() {
  return (
    <div className="tp-course-details-2-faq">
      <div className="accordion" id="accordionPanelsStayOpenExample">
        {CurriculumData.map((module, moduleIndex) => (
          <div className="accordion-item" key={moduleIndex}>
            <h2 className="accordion-header" id={`heading-${moduleIndex}`}>
              <button
                className={`accordion-button ${moduleIndex !== 0 ? "collapsed" : ""} d-flex justify-content-between`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${moduleIndex}`}
                aria-expanded={moduleIndex === 0 ? "true" : "false"}
                aria-controls={`collapse-${moduleIndex}`}
              >
                <span className="span">{module.moduleTitle}</span>
                <span className="lesson">
                  {module.totalLessons} Ders • {module.totalTime}
                </span>
                <span className="accordion-btn"></span>
              </button>
            </h2>

            <div
              id={`collapse-${moduleIndex}`}
              className={`accordion-collapse collapse ${moduleIndex === 0 ? "show" : ""
                }`}
              aria-labelledby={`heading-${moduleIndex}`}
            >
              <div className="accordion-body">
                {module.lessons.map((lesson, lessonIndex) => (
                  <div
                    className="tp-course-details-2-faq-item d-flex justify-content-between align-items-center"
                    key={lessonIndex}
                  >
                    <div className="left">
                      <span>
                        {lesson.type === "video" && <VideoPlayerTwoSvg />}
                        {lesson.type === "audio" && <AudioPlayerSvg />}
                        {lesson.type === "reading" && <Document />}
                        <i className="ms-2">
                          {lesson.type === "video" ? "Video" :
                            lesson.type === "audio" ? "Ses" : "Okuma"}:
                        </i>{" "}
                        {lesson.title}
                      </span>
                    </div>
                    <div className="right">
                      <span>
                        {lesson.duration}{" "}
                        {lesson.preview ? (
                          <a href="#" className="ms-2">
                            <OpenEyeTwo /> İzle
                          </a>
                        ) : (
                          <span className="ms-2"><Lock /></span>
                        )}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}