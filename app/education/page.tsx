'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import React, { useState } from 'react';

export default function Education() {
  const { t, language } = useLanguage();
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({
    waseda: false,
    orchlon: false
  });
  
  // Updated education logos with actual image paths
  const educationLogos = {
    waseda: "/images/waseda.png",
    orchlon: "/images/orchlon.jpg",
    certifications: "/placeholder-cert.png"
  };

  // Bilingual education data - corrected timeline
  const educationData = [
    {
      year: "2018 - Present",
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
    },
    {
      year: "2013 - 2020",
      degree: {
        en: "High School Diploma",
        ja: "高校卒業証書"
      },
      institution: {
        en: "Orchlon International School",
        ja: "オルホン国際学校"
      },
      description: {
        en: "Received comprehensive Cambridge education with an international curriculum, developing strong foundations in multiple disciplines including languages, humanities, sciences, and arts with a focus on cross-cultural understanding and global citizenship.",
        ja: "国際的なカリキュラムを備えた総合的なケンブリッジ教育を受け、異文化理解とグローバル市民権に重点を置き、言語、人文科学、科学、芸術など複数の分野で強固な基礎を築きました。"
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

  // Helper function to handle image errors
  const handleImageError = (school: string) => {
    console.log(`${school} image failed to load`);
    setImageErrors(prev => ({
      ...prev,
      [school]: true
    }));
  };

  return (
    <>
      <Header />
      
      <motion.div 
        className="transition-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Enhanced hero section with background pattern */}
        <div className="bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute w-full h-full bg-[url('/images/pattern-grid.svg')] bg-repeat"></div>
          </div>
          
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <motion.div
              className="text-center max-w-3xl mx-auto space-y-6"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <motion.div
                  className="w-20 h-1 bg-indigo-600 mx-auto mb-4"
                  initial={{ width: 0 }}
                  animate={{ width: '5rem' }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                ></motion.div>
                <span className="text-indigo-600 font-medium text-lg tracking-wider uppercase">Academic Journey</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                {language === 'en' ? (
                  <><span className="text-indigo-700">Education</span> & Certifications</>
                ) : (
                  <><span className="text-indigo-700">学歴</span>と資格</>
                )}
              </h1>
              
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed px-2 max-w-2xl mx-auto">
                {t('education.subtitle')}
              </p>
              
              <motion.div 
                className="flex justify-center space-x-2 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="px-4 py-2 bg-white shadow-md rounded-full flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-slate-600 text-sm font-medium">Currently Active</span>
                </div>
                <div className="px-4 py-2 bg-white shadow-md rounded-full flex items-center">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                  <span className="text-slate-600 text-sm font-medium">Completed</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Decorative circles */}
          <div className="hidden md:block absolute top-20 left-10">
            <div className="w-32 h-32 rounded-full bg-indigo-100 opacity-60"></div>
          </div>
          <div className="hidden md:block absolute bottom-20 right-10">
            <div className="w-24 h-24 rounded-full bg-indigo-200 opacity-60"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-16 space-y-16 md:space-y-24">
          {/* Improved timeline section */}
          <section className="relative pt-8 pb-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Education Timeline</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Exploring my academic journey from high school to university and beyond.</p>
            </div>
            
            {/* Timeline center line - Improved styling */}
            <div className="absolute left-4 md:left-1/2 top-28 bottom-0 w-1 bg-gradient-to-b from-indigo-200 via-indigo-400 to-indigo-100 z-0 md:transform md:-translate-x-1/2 rounded-full"></div>
            
            {/* Timeline nodes */}
            <div className="space-y-16 md:space-y-24">
              {educationData.map((education, index) => (
                <motion.div 
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + (index * 0.2) }}
                >
                  {/* Year indicator - styled differently based on active/completed */}
                  <div className={`absolute left-4 md:left-1/2 transform -translate-y-1 md:-translate-x-1/2 md:-translate-y-4 
                    ${education.year.includes("Present") ? "bg-white border-4 border-green-500" : "bg-white border-4 border-indigo-500"}
                    w-10 h-10 md:w-16 md:h-16 rounded-full z-10 flex items-center justify-center translate-x-[-0.5rem]
                    shadow-lg`}>
                    <span className={`font-bold text-xs md:text-sm ${education.year.includes("Present") ? "text-green-700" : "text-indigo-700"}`}>
                      {education.year.split(' - ')[0]}
                    </span>
                  </div>
                  
                  {/* Education card - redesigned for visual appeal */}
                  <div className={`ml-12 md:ml-0 
                    ${index % 2 === 0 ? 'md:mr-auto md:ml-auto md:pr-20 md:pl-8 md:w-[45%]' : 'md:ml-auto md:pr-8 md:pl-20 md:w-[45%]'} 
                    bg-white p-5 md:p-8 rounded-xl shadow-lg border border-slate-100
                    hover:shadow-xl transition-shadow duration-300
                    ${education.year.includes("Present") ? "ring-2 ring-green-100" : ""}`}>
                    <div className="flex flex-col gap-4">
                      {/* Year badge - visible on all devices */}
                      <div className="flex justify-between items-center">
                        <span className={`text-xs ${education.year.includes("Present") ? "bg-green-50 text-green-700" : "bg-indigo-50 text-indigo-700"} px-3 py-1 rounded-full font-medium`}>
                          {education.year}
                        </span>
                        
                        {/* "Current" badge if applicable */}
                        {education.year.includes("Present") && (
                          <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full font-medium animate-pulse">
                            Current
                          </span>
                        )}
                      </div>
                      
                      {/* Institution details with logo */}
                      <div className="flex items-center gap-4 mb-2">
                        {/* Institution logo */}
                        <div className="flex-shrink-0 w-14 h-14 bg-slate-100 rounded-lg overflow-hidden shadow-sm">
                          {education.institution[language as keyof typeof education.institution].includes("Waseda") && !imageErrors.waseda ? (
                            <Image 
                              src="/images/waseda.png"
                              alt="Waseda University Logo"
                              width={56}
                              height={56}
                              onError={() => handleImageError('waseda')}
                              priority
                              className="object-contain w-full h-full p-1"
                            />
                          ) : education.institution[language as keyof typeof education.institution].includes("Orchlon") && !imageErrors.orchlon ? (
                            <Image 
                              src="/images/orchlon.jpg"
                              alt="Orchlon International School Logo"
                              width={56}
                              height={56}
                              onError={() => handleImageError('orchlon')}
                              priority
                              className="object-cover w-full h-full"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-slate-100">
                              <span className="text-indigo-700 font-bold text-xl">
                                {education.institution[language as keyof typeof education.institution].charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                            {education.degree[language as keyof typeof education.degree]}
                          </h3>
                          <h4 className="text-md text-indigo-600 font-medium">
                            {education.institution[language as keyof typeof education.institution]}
                          </h4>
                        </div>
                      </div>
                      
                      {/* Separator */}
                      <div className="border-t border-slate-100 my-2"></div>
                      
                      {/* Description with improved typography */}
                      <div className="prose prose-slate prose-sm max-w-none">
                        <p className="text-slate-600 leading-relaxed">
                          {education.description[language as keyof typeof education.description]}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Honors & Awards Section - Enhanced design */}
          <section className="bg-gradient-to-r from-indigo-700 to-blue-700 p-5 md:p-10 rounded-2xl shadow-xl text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-64 h-64 bg-indigo-500 rounded-full opacity-20"></div>
            <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-20"></div>
            
            <div className="relative z-10">
              <motion.div 
                className="max-w-4xl mx-auto space-y-6 md:space-y-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-10">
                  <span className="inline-block bg-indigo-900 bg-opacity-30 px-4 py-1 rounded-full text-sm font-medium text-indigo-100 mb-3">Recognition</span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{t('education.honors')}</h2>
                  <div className="w-20 h-1 bg-indigo-300 mx-auto"></div>
                </div>
                
                <div className="mt-6 md:mt-8">
                  <motion.div 
                    className="bg-white bg-opacity-10 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white border-opacity-20"
                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                      {/* Trophy icon - enhanced */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-100 bg-opacity-20 rounded-full flex items-center justify-center">
                          <span className="text-yellow-300 text-2xl md:text-3xl">🏆</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
                          <h3 className="text-xl md:text-2xl font-bold">
                            {t('education.honorsScholarship')}
                          </h3>
                          <span className="inline-block px-3 py-1 bg-indigo-600 bg-opacity-30 rounded-full text-xs text-indigo-100">Nov 2020</span>
                        </div>
                        
                        <p className="text-indigo-100">
                          {t('education.honorsDescription')}
                        </p>
                        
                        <div className="flex items-center gap-3 justify-center md:justify-start mt-4">
                          <div className="w-6 h-6 bg-indigo-600 bg-opacity-20 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white">W</div>
                          <span className="text-indigo-200 text-sm">
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
            </div>
          </section>

          {/* Skills Gained - Redesigned with categories */}
          <section className="py-12">
            <div className="text-center mb-12">
              <span className="inline-block bg-slate-100 px-4 py-1 rounded-full text-sm font-medium text-indigo-700 mb-3">Competencies</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">{t('education.skills')}</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Key abilities and knowledge gained through academic pursuits.</p>
            </div>
            
            <motion.div 
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {skillsData.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-5 rounded-xl shadow-md border border-slate-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                      backgroundColor: '#F9FAFB' 
                    }}
                  >
                    <span className="inline-block text-xs font-semibold bg-indigo-100 text-indigo-700 py-1 px-2.5 rounded-full mb-3">
                      {item.category[language as keyof typeof item.category]}
                    </span>
                    
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      {item.skill[language as keyof typeof item.skill]}
                    </h3>
                    
                    {/* Visual skill indicator */}
                    <div className="mt-3 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-indigo-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${75 + Math.random() * 25}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.05) }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Language Proficiency - Completely redesigned */}
          <section className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100">
            <motion.div 
              className="max-w-4xl mx-auto space-y-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <span className="inline-block bg-indigo-50 px-4 py-1 rounded-full text-sm font-medium text-indigo-700 mb-3">Trilingual</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">{t('education.languages')}</h2>
                <p className="text-slate-600">Professional fluency across multiple languages enabling cross-cultural communication.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {languageData.map((lang, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-xl shadow-md border border-slate-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {/* Language flag emoji */}
                    <div className="mb-4 text-center">
                      <span className="text-3xl">
                        {lang.language[language as keyof typeof lang.language] === "English" || 
                         lang.language[language as keyof typeof lang.language] === "英語" ? "🇬🇧" :
                         lang.language[language as keyof typeof lang.language] === "Japanese" || 
                         lang.language[language as keyof typeof lang.language] === "日本語" ? "🇯🇵" : "🇲🇳"}
                      </span>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-slate-800 mb-1">
                        {lang.language[language as keyof typeof lang.language]}
                      </h3>
                      <p className="text-sm text-indigo-600 font-medium mb-4">
                        {lang.certification[language as keyof typeof lang.certification]}
                      </p>
                    </div>
                    
                    {/* Circular progress indicator */}
                    <div className="relative w-32 h-32 mx-auto my-4">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        {/* Background circle */}
                        <circle
                          className="text-slate-200"
                          strokeWidth="8"
                          stroke="currentColor"
                          fill="transparent"
                          r="42"
                          cx="50"
                          cy="50"
                        />
                        {/* Progress circle */}
                        <motion.circle
                          className="text-indigo-600"
                          strokeWidth="8"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="transparent"
                          r="42"
                          cx="50"
                          cy="50"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: lang.level / 100 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 }}
                          // Need to counteract the default rotation of the SVG
                          style={{
                            rotate: "-90deg",
                            transformOrigin: "50% 50%",
                          }}
                        />
                      </svg>
                      {/* Percentage text in the middle */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <span className="text-2xl font-bold text-indigo-700">{lang.level}%</span>
                      </div>
                    </div>
                    
                    {/* Proficiency level description */}
                    <div className="text-center mt-4">
                      <span className="inline-block bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full">
                        {lang.level >= 95 ? (
                          language === 'en' ? "Native / Bilingual" : "ネイティブ/バイリンガル"
                        ) : lang.level >= 90 ? (
                          language === 'en' ? "Full Professional" : "ビジネスレベル"
                        ) : (
                          language === 'en' ? "Professional Working" : "実務レベル"
                        )}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
          
          {/* Bottom CTA section */}
          <section className="text-center py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Interested in learning more?</h3>
              <p className="text-slate-600 mb-6">Contact me to discuss how my educational background can contribute to your organization.</p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Get in Touch
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </motion.div>
          </section>
        </div>
        
        <Footer />
      </motion.div>
    </>
  );
}
