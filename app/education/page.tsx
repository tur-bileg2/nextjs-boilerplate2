'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function Education() {
  const { t, language } = useLanguage();
  
  // Define placeholder images for educational institutions
  const educationLogos = {
    waseda: "/placeholder-waseda.png",
    orchlon: "/placeholder-orchlon.png",
    certifications: "/placeholder-cert.png"
  };

  // Bilingual education data
  const educationData = [
    {
      year: "2010 - 2020",
      degree: {
        en: "International Baccalaureate",
        ja: "国際バカロレア"
      },
      institution: {
        en: "Orchlon International School",
        ja: "オルホン国際学校"
      },
      description: {
        en: "Received comprehensive education with an international curriculum, developing strong foundations in multiple disciplines including languages, humanities, sciences, and arts with a focus on cross-cultural understanding and global citizenship.",
        ja: "国際カリキュラムに基づく総合的な教育を受け、言語、人文科学、自然科学、芸術など多岐にわたる分野で強固な基礎を築き、異文化理解とグローバル市民性を重視した学びを修めました。"
      },
      logo: educationLogos.orchlon
    },
    {
      year: "2020 - 2024",
      degree: {
        en: "Bachelor's Degree",
        ja: "学士号"
      },
      institution: {
        en: "Waseda University",
        ja: "早稲田大学"
      },
      description: {
        en: "Specialized in International Relations with a focus on cross-cultural communication and global business practices in the Asian market. Developed expertise in trilingual communication, international business etiquette, and cross-cultural negotiation strategies.",
        ja: "国際関係学を専攻し、アジア市場におけるクロスカルチャーコミュニケーションとグローバルビジネス実践に焦点を当てました。三カ国語でのコミュニケーション、国際ビジネスマナー、異文化間交渉戦略について専門知識を深めました。"
      },
      logo: educationLogos.waseda
    },
    {
      year: "2022 - Present",
      degree: {
        en: "Professional Certifications",
        ja: "専門資格"
      },
      institution: {
        en: "Various Institutions",
        ja: "様々な機関"
      },
      description: {
        en: "Continuous professional development through certifications relevant to international career consulting and cross-cultural communication, including Cross-Cultural Communication Specialist, Career Development Facilitator (CDF), Digital Marketing for Recruitment, and Japanese-English Business Translation.",
        ja: "国際キャリアコンサルティングと異文化コミュニケーションに関連する資格（異文化コミュニケーションスペシャリスト、キャリア開発ファシリテーター、採用のためのデジタルマーケティング、日英ビジネス翻訳）を取得し、継続的な専門能力開発に努めています。"
      },
      logo: educationLogos.certifications
    }
  ];

  // Skills data
  const skillsData = [
    { 
      skill: { en: "Multilingual Communication", ja: "多言語コミュニケーション" }, 
      category: { en: "Languages", ja: "言語" }
    },
    { 
      skill: { en: "Cross-Cultural Awareness", ja: "異文化理解" }, 
      category: { en: "Cultural", ja: "文化" }
    },
    { 
      skill: { en: "Career Counseling", ja: "キャリアカウンセリング" }, 
      category: { en: "Professional", ja: "専門" }
    },
    { 
      skill: { en: "International Relations", ja: "国際関係" }, 
      category: { en: "Academic", ja: "学術" }
    },
    { 
      skill: { en: "Digital Marketing", ja: "デジタルマーケティング" }, 
      category: { en: "Technical", ja: "技術" }
    },
    { 
      skill: { en: "Global Business Etiquette", ja: "国際ビジネスマナー" }, 
      category: { en: "Cultural", ja: "文化" }
    },
    { 
      skill: { en: "Research Methodology", ja: "研究方法論" }, 
      category: { en: "Academic", ja: "学術" }
    },
    { 
      skill: { en: "Public Speaking", ja: "パブリックスピーキング" }, 
      category: { en: "Communication", ja: "コミュニケーション" }
    },
    { 
      skill: { en: "Talent Acquisition", ja: "人材採用" }, 
      category: { en: "Professional", ja: "専門" }
    }
  ];

  // Language proficiency data
  const languageData = [
    { 
      language: { en: "English", ja: "英語" }, 
      level: 95, 
      certification: { en: "IELTS - Advanced", ja: "IELTS - 上級" }
    },
    { 
      language: { en: "Japanese", ja: "日本語" }, 
      level: 90, 
      certification: { en: "JLPT N1 - Business Fluent", ja: "JLPT N1 - ビジネスレベル" }
    },
    { 
      language: { en: "Mongolian", ja: "モンゴル語" }, 
      level: 100, 
      certification: { en: "Native Speaker", ja: "ネイティブ" }
    }
  ];

  return (
    <>
      <Header />
      
      <motion.div 
        className="transition-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4 py-16 space-y-16">
          {/* Hero Section */}
          <section>
            <motion.div
              className="text-center max-w-3xl mx-auto space-y-6"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-slate-900">
                {language === 'en' ? (
                  <><span className="text-indigo-700">Education</span> & Certifications</>
                ) : (
                  <><span className="text-indigo-700">学歴</span>と資格</>
                )}
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed">
                {t('education.subtitle')}
              </p>
            </motion.div>
          </section>

          {/* Timeline - Now in Chronological Order */}
          <section className="relative py-10">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-100 z-0"></div>
            
            <div className="space-y-24">
              {educationData.map((education, index) => (
                <motion.div 
                  key={index}
                  className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + (index * 0.2) }}
                >
                  <div className="hidden md:block w-1/2"></div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 bg-white w-16 h-16 rounded-full border-4 border-indigo-500 z-10 flex items-center justify-center">
                    <span className="text-indigo-700 font-bold">{education.year.split(' - ')[0]}</span>
                  </div>
                  
                  <div className={`md:w-1/2 bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-100 ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    <div className="flex items-start gap-6">
                      <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-slate-100 rounded-lg items-center justify-center">
                        <span className="text-indigo-700 font-bold text-sm text-center">
                          {education.institution[language as keyof typeof education.institution].split(' ')[0]}
                        </span>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-indigo-700">
                          {education.degree[language as keyof typeof education.degree]}
                        </h3>
                        <h4 className="text-xl text-slate-800">
                          {education.institution[language as keyof typeof education.institution]}
                        </h4>
                        <p className="text-slate-600">
                          {education.description[language as keyof typeof education.description]}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Honors & Awards Section */}
          <section className="bg-white p-8 rounded-xl shadow-md">
            <motion.div 
              className="max-w-4xl mx-auto space-y-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center">{t('education.honors')}</h2>
              
              <div className="mt-8 space-y-6">
                <motion.div 
                  className="bg-gradient-to-r from-indigo-50 to-slate-50 p-6 rounded-lg border border-slate-100"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="hidden md:block flex-shrink-0 w-16 h-16 relative">
                      <div className="w-full h-full bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-indigo-600 text-2xl">🏆</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <h3 className="text-xl font-bold text-indigo-700">
                          {t('education.honorsScholarship')}
                        </h3>
                        <span className="text-sm text-slate-500">Nov 2020</span>
                      </div>
                      <p className="text-slate-600">
                        {t('education.honorsDescription')}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-6 h-6 bg-slate-100 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-indigo-700">W</div>
                        <span className="text-sm text-slate-500">
                          {language === 'en' ? 
                            "Associated with Waseda University" : 
                            "早稲田大学関連"
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Skills Gained */}
          <section className="bg-gradient-to-r from-indigo-50 to-slate-50 p-8 rounded-xl shadow-sm">
            <motion.div 
              className="max-w-4xl mx-auto space-y-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center">{t('education.skills')}</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {skillsData.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md"
                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 py-1 px-2 rounded-full">
                      {item.category[language as keyof typeof item.category]}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-800 mt-2">
                      {item.skill[language as keyof typeof item.skill]}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Language Proficiency */}
          <section className="bg-white p-8 rounded-xl shadow-md">
            <motion.div 
              className="max-w-3xl mx-auto space-y-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">{t('education.languages')}</h2>
              
              <div className="space-y-6">
                {languageData.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-lg font-semibold text-slate-800">
                          {lang.language[language as keyof typeof lang.language]}
                        </span>
                        <span className="ml-3 text-sm text-indigo-600">
                          {lang.certification[language as keyof typeof lang.certification]}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-slate-600">{lang.level}%</span>
                    </div>
                    <div className="h-3 w-full bg-slate-200 rounded-full">
                      <motion.div 
                        className="h-full bg-indigo-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${lang.level}%` }}
                        transition={{ delay: 1.0 + (index * 0.2), duration: 1.5 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>
        </div>
        
        <Footer />
      </motion.div>
    </>
  );
}
