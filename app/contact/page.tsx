'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiInstagram, FiChevronDown, FiCheck, FiSend, FiAlertCircle } from 'react-icons/fi';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

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
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
      // Form validation
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        throw new Error(t('error.missingFields'));
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error(t('error.invalidEmail'));
      }
      
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

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
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
        {/* Enhanced Hero Section with Background */}
        <section className="relative bg-gradient-to-b from-indigo-50 to-white py-20 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute w-full h-full overflow-hidden">
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-indigo-200 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-300 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-indigo-400 rounded-full opacity-20"></div>
            <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-indigo-300 rounded-full opacity-20"></div>
          </div>
          
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-[0.15]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center max-w-3xl mx-auto space-y-6"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <motion.div
                  className="w-16 h-1 bg-indigo-600 mx-auto mb-4"
                  initial={{ width: 0 }}
                  animate={{ width: '4rem' }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                ></motion.div>
                <span className="text-indigo-600 font-medium tracking-wider uppercase text-sm">Let's Connect</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                {t('contact.getInTouch')}
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                {t('contact.subtitle')}
              </p>
              
              {/* Contact quick links */}
              <motion.div 
                className="flex flex-wrap justify-center gap-4 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <a href="#contactform" className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <FiSend className="mr-2" />
                  <span>Send Message</span>
                </a>
                <a href="mailto:bilguunnaranuurtsaikh@example.com" className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-indigo-700 font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200">
                  <FiMail className="mr-2" />
                  <span>Email Me</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 md:py-24">
          {/* Contact Cards Grid */}
          <section className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: <FiMail size={24} />,
                  title: t('contact.email'),
                  content: "bilguunnaranuurtsaikh@example.com",
                  action: "mailto:bilguunnaranuurtsaikh@example.com",
                  delay: 0
                },
                {
                  icon: <FiPhone size={24} />,
                  title: t('contact.phone'),
                  content: "+81 XX-XXXX-XXXX",
                  action: "tel:+81XXXXXXXX",
                  delay: 0.1
                },
                {
                  icon: <FiMapPin size={24} />,
                  title: t('contact.location'),
                  content: "Tokyo, Japan",
                  action: "https://maps.google.com/?q=Tokyo,Japan",
                  delay: 0.2
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + item.delay, duration: 0.6 }}
                >
                  <div className="p-6">
                    <div className="bg-indigo-50 w-14 h-14 rounded-lg flex items-center justify-center text-indigo-600 mb-5">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-indigo-600 mb-4">
                      {item.content}
                    </p>
                    <a href={item.action} target={item.title === t('contact.location') ? "_blank" : undefined} rel="noreferrer" className="text-indigo-600 font-medium hover:text-indigo-800 text-sm flex items-center">
                      {item.title === t('contact.email') ? "Send Email" :
                       item.title === t('contact.phone') ? "Call Now" :
                       "View on Maps"}
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact Form and Information - Two Columns */}
          <section className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Contact Information Column */}
            <motion.div 
              className="space-y-10 order-2 md:order-1"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div>
                <div className="inline-block mb-4">
                  <div className="w-12 h-1 bg-indigo-600 mb-4"></div>
                  <h2 className="text-3xl font-bold text-slate-900">{t('contact.info')}</h2>
                </div>
                <p className="text-lg text-slate-600 mb-8">
                  {t('contact.infoSubtitle')}
                </p>
              </div>
              
              {/* Location Map or Image */}
              <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg mb-8">
                <Image 
                  src="/images/tokyo-map.jpg" 
                  alt="Tokyo, Japan Map" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-indigo-900/20 flex items-center justify-center">
                  <div className="bg-white p-3 rounded-lg shadow-lg">
                    <FiMapPin size={24} className="text-indigo-600" />
                  </div>
                </div>
              </div>
              
              {/* Office Hours Section */}
              <div className="bg-gradient-to-r from-indigo-50 to-slate-50 p-6 rounded-xl shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-700 mb-3">{t('contact.officeHours')}</h3>
                    <p className="text-slate-700 mb-2 font-medium">{t('contact.officeHoursTime')}</p>
                    <p className="text-slate-600 text-sm">{t('contact.officeHoursNote')}</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('contact.socialMedia')}</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-white p-4 rounded-lg text-indigo-600 shadow-sm hover:shadow-md hover:bg-indigo-600 hover:text-white transition-all duration-300"
                  >
                    <FiLinkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-white p-4 rounded-lg text-indigo-600 shadow-sm hover:shadow-md hover:bg-indigo-600 hover:text-white transition-all duration-300"
                  >
                    <FiTwitter size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-white p-4 rounded-lg text-indigo-600 shadow-sm hover:shadow-md hover:bg-indigo-600 hover:text-white transition-all duration-300"
                  >
                    <FiInstagram size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form Column */}
            <motion.div
              id="contactform"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 order-1 md:order-2"
            >
              <div className="inline-block mb-6">
                <div className="w-12 h-1 bg-indigo-600 mb-4"></div>
                <h2 className="text-3xl font-bold text-slate-900">{t('contact.sendMessage')}</h2>
              </div>
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    className="bg-green-50 border border-green-200 p-8 rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full text-green-600 mb-4">
                      <FiCheck size={30} />
                    </div>
                    <h3 className="text-2xl font-semibold text-green-700 mb-2">{t('contact.thankYou')}</h3>
                    <p className="text-green-600 mb-6">{t('contact.successMessage')}</p>
                    <button 
                      onClick={() => setSubmitted(false)} 
                      className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      {t('contact.sendAnother')}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {error && (
                      <motion.div 
                        className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg flex items-start gap-3"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FiAlertCircle className="mt-0.5 flex-shrink-0" />
                        <span>{error}</span>
                      </motion.div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label 
                          htmlFor="name" 
                          className={`absolute left-4 ${focusedField === 'name' || formData.name ? 'text-xs -top-2 bg-white px-1' : 'text-slate-500 top-3'} transition-all duration-200`}
                        >
                          {t('contact.yourName')}
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none pt-4"
                          placeholder=""
                        />
                      </div>
                      
                      <div className="relative">
                        <label 
                          htmlFor="email" 
                          className={`absolute left-4 ${focusedField === 'email' || formData.email ? 'text-xs -top-2 bg-white px-1' : 'text-slate-500 top-3'} transition-all duration-200`}
                        >
                          {t('contact.yourEmail')}
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none pt-4"
                          placeholder=""
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label 
                        htmlFor="subject" 
                        className={`absolute left-4 ${focusedField === 'subject' || formData.subject ? 'text-xs -top-2 bg-white px-1' : 'text-slate-500 top-3'} transition-all duration-200`}
                      >
                        {t('contact.subject')}
                      </label>
                      <select 
                        id="subject" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none appearance-none bg-white pt-4"
                      >
                        {subjectOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label[language as keyof typeof option.label]}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-400">
                        <FiChevronDown size={18} />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label 
                        htmlFor="message" 
                        className={`absolute left-4 ${focusedField === 'message' || formData.message ? 'text-xs -top-2 bg-white px-1' : 'text-slate-500 top-3'} transition-all duration-200`}
                      >
                        {t('contact.messageContent')}
                      </label>
                      <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none resize-none pt-4"
                        placeholder=""
                      />
                    </div>
                    
                    <motion.button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`w-full py-4 rounded-lg text-white font-medium ${isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center`}
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {t('contact.sending')}
                        </>
                      ) : (
                        <>
                          <FiSend className="mr-2" />
                          {t('contact.send')}
                        </>
                      )}
                    </motion.button>
                    
                    <p className="text-xs text-slate-500 text-center mt-4">
                      * All fields are required. Your information is protected by our privacy policy.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </section>
          
          {/* FAQ Section - Enhanced with animation */}
          <section className="max-w-4xl mx-auto mt-24">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 font-medium text-sm rounded-full mb-4">FAQ</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('contact.faq')}</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">Find answers to some commonly asked questions. If you have more questions, feel free to contact me directly.</p>
              </div>
              
              <div className="mt-10 space-y-4">
                {faqItems.map((faq, index) => (
                  <motion.div 
                    key={index}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <button
                      className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                      onClick={() => toggleFaq(index)}
                    >
                      <h3 className="text-lg font-semibold text-indigo-700">
                        {faq.question[language as keyof typeof faq.question]}
                      </h3>
                      <div
                        className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-indigo-50 text-indigo-600 transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}
                      >
                        <FiChevronDown />
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-slate-600 border-t border-slate-100 pt-4">
                            {faq.answer[language as keyof typeof faq.answer]}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
          
          {/* Final CTA */}
          <section className="max-w-3xl mx-auto mt-24 text-center">
            <motion.div 
              className="bg-gradient-to-r from-indigo-600 to-blue-600 p-10 rounded-2xl shadow-xl text-white relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 w-64 h-64 bg-white rounded-full opacity-10"></div>
              <div className="absolute bottom-0 left-0 transform -translate-x-1/3 translate-y-1/3 w-64 h-64 bg-white rounded-full opacity-10"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h3>
                <p className="text-indigo-100 mb-8 max-w-xl mx-auto">Let's work together to achieve your cross-cultural career goals or find the perfect international talent for your team.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a 
                    href="#contactform" 
                    className="px-8 py-3 bg-white text-indigo-700 rounded-lg hover:bg-indigo-50 transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
                  >
                    Contact Me Now
                  </a>
                  <a 
                    href="/about" 
                    className="px-8 py-3 bg-transparent text-white border border-white rounded-lg hover:bg-white/10 transition-colors duration-300 font-medium"
                  >
                    Learn More About Me
                  </a>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
        
        <Footer />
      </motion.div>
    </>
  );
}
