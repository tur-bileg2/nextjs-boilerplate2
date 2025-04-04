'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t, language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Send the form data to our API endpoint
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || t('error.form'));
      }
      
      // On success
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      let errorMessage = t('error.form');
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Subject options for the dropdown
  const subjectOptions = [
    { value: '', label: { en: 'Select a subject', ja: 'お問い合わせ内容を選択' } },
    { value: 'job', label: { en: 'Job Opportunity', ja: '求人に関して' } },
    { value: 'collaboration', label: { en: 'Collaboration', ja: '協業について' } },
    { value: 'recruitment', label: { en: 'Recruitment Services', ja: '採用サービス' } },
    { value: 'speaking', label: { en: 'Speaking Engagement', ja: '講演依頼' } },
    { value: 'other', label: { en: 'Other', ja: 'その他' } },
  ];
  
  // FAQ items
  const faqItems = [
    {
      question: { 
        en: "What services do you offer for job seekers?",
        ja: "求職者向けにどのようなサービスを提供していますか？"
      },
      answer: { 
        en: "I provide career counseling, resume optimization, interview preparation, and guidance on navigating the Japanese job market as an international professional.",
        ja: "キャリアカウンセリング、履歴書の最適化、面接準備、外国人プロフェッショナルとして日本の就職市場を案内するガイダンスを提供しています。"
      }
    },
    {
      question: { 
        en: "Do you work with companies hiring international talent?",
        ja: "国際人材を採用する企業と連携していますか？"
      },
      answer: { 
        en: "Yes, I help companies develop recruitment strategies for international talent and provide cross-cultural workplace training to facilitate better integration.",
        ja: "はい、企業が国際人材の採用戦略を開発するのを支援し、より良い統合を促進するために異文化間ワークプレイストレーニングを提供しています。"
      }
    },
    {
      question: { 
        en: "What languages do you speak fluently?",
        ja: "どの言語を流暢に話せますか？"
      },
      answer: { 
        en: "I am trilingual, speaking English, Japanese, and Mongolian fluently, which allows me to bridge communication gaps effectively.",
        ja: "英語、日本語、モンゴル語の3カ国語を流暢に話せるため、コミュニケーションギャップを効果的に埋めることができます。"
      }
    },
    {
      question: { 
        en: "Are you available for speaking engagements?",
        ja: "講演依頼は受け付けていますか？"
      },
      answer: { 
        en: "Yes, I'm available for speaking on topics related to cross-cultural communication, international talent acquisition, and career development in Japan.",
        ja: "はい、異文化コミュニケーション、国際人材獲得、日本でのキャリア開発に関連するトピックについての講演を承っています。"
      }
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
                {t('contact.getInTouch')}
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed">
                {t('contact.subtitle')}
              </p>
            </motion.div>
          </section>

          {/* Contact Information */}
          <section className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div 
              className="space-y-10"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('contact.info')}</h2>
                <p className="text-lg text-slate-700 mb-8">
                  {t('contact.infoSubtitle')}
                </p>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-full text-indigo-700">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{t('contact.email')}</h3>
                    <p className="text-indigo-600">bilguunnaranuurtsaikh@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-full text-indigo-700">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{t('contact.phone')}</h3>
                    <p className="text-indigo-600">+81 XX-XXXX-XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-full text-indigo-700">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{t('contact.location')}</h3>
                    <p className="text-slate-600">Tokyo, Japan</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('contact.socialMedia')}</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full text-indigo-600 shadow-sm hover:shadow-md hover:bg-indigo-50 transition-all duration-300"
                  >
                    <FiLinkedin size={24} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full text-indigo-600 shadow-sm hover:shadow-md hover:bg-indigo-50 transition-all duration-300"
                  >
                    <FiTwitter size={24} />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full text-indigo-600 shadow-sm hover:shadow-md hover:bg-indigo-50 transition-all duration-300"
                  >
                    <FiInstagram size={24} />
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-50 to-slate-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">{t('contact.officeHours')}</h3>
                <p className="text-slate-700 mb-2">{t('contact.officeHoursTime')}</p>
                <p className="text-slate-600">{t('contact.officeHoursNote')}</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{t('contact.sendMessage')}</h2>
              
              {submitted ? (
                <motion.div 
                  className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{t('contact.thankYou')}</h3>
                  <p>{t('contact.successMessage')}</p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="mt-4 px-5 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-all duration-300"
                  >
                    {t('contact.sendAnother')}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-slate-700 font-medium mb-2">{t('contact.yourName')}</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 outline-none"
                      placeholder={language === 'en' ? "John Doe" : "山田太郎"}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-slate-700 font-medium mb-2">{t('contact.yourEmail')}</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 outline-none"
                      placeholder={language === 'en' ? "john@example.com" : "taro@example.com"}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-slate-700 font-medium mb-2">{t('contact.subject')}</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 outline-none"
                    >
                      {subjectOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label[language as keyof typeof option.label]}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-slate-700 font-medium mb-2">{t('contact.messageContent')}</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 outline-none resize-none"
                      placeholder={language === 'en' ? "I'd like to discuss..." : "ご相談したいことがあります..."}
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-md text-white font-medium ${isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} transition-all duration-300 shadow-md hover:shadow-lg`}
                  >
                    {isSubmitting ? t('contact.sending') : t('contact.send')}
                  </button>
                </form>
              )}
            </motion.div>
          </section>
          
          {/* FAQ Section */}
          <section className="max-w-4xl mx-auto">
            <motion.div 
              className="space-y-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center">{t('contact.faq')}</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {faqItems.map((faq, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                  >
                    <h3 className="text-lg font-semibold text-indigo-700 mb-3">
                      {faq.question[language as keyof typeof faq.question]}
                    </h3>
                    <p className="text-slate-600">
                      {faq.answer[language as keyof typeof faq.answer]}
                    </p>
                  </motion.div>
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
