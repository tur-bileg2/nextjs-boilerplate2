'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
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
                {t('about.hero.title')}
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed">
                {t('about.hero.subtitle')}
              </p>
            </motion.div>
          </section>
          
          {/* Profile Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/Bilguunnaran_headshot.jpeg"
                  alt="Bilguun Naran"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </motion.div>
            
            <motion.div
              className="space-y-8"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-indigo-700">{t('about.philosophy.title')}</h2>
                <div className="space-y-3 text-slate-700">
                  <p>{t('about.philosophy.content1')}</p>
                  <p>{t('about.philosophy.content2')}</p>
                  <p>{t('about.philosophy.content3')}</p>
                </div>
              </div>
            </motion.div>
          </section>
          
          {/* Career and Interests */}
          <section className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-slate-50 p-8 rounded-xl shadow-sm space-y-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-indigo-700">{t('about.career.title')}</h2>
              <div className="space-y-3 text-slate-700">
                <p>{t('about.career.content1')}</p>
                <p>{t('about.career.content2')}</p>
                <p>{t('about.career.content3')}</p>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-slate-50 p-8 rounded-xl shadow-sm space-y-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-indigo-700">{t('about.interests.title')}</h2>
              <div className="space-y-3 text-slate-700">
                <p>{t('about.interests.content1')}</p>
                <p>{t('about.interests.content2')}</p>
                <p>{t('about.interests.content3')}</p>
              </div>
            </motion.div>
          </section>
          
          {/* Services Sections */}
          <section className="space-y-12">
            <motion.div
              className="bg-indigo-50 p-8 rounded-xl shadow-sm space-y-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-indigo-700">{t('about.jobSeekers.title')}</h2>
              <ul className="space-y-3">
                {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
                  <li key={num} className="flex items-start gap-3">
                    <span className="text-indigo-600 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-slate-700">{t(`about.jobSeekers.point${num}`)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              className="bg-indigo-50 p-8 rounded-xl shadow-sm space-y-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-indigo-700">{t('about.employers.title')}</h2>
              <ul className="space-y-3">
                {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
                  <li key={num} className="flex items-start gap-3">
                    <span className="text-indigo-600 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-slate-700">{t(`about.employers.point${num}`)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </section>
        </div>
        
        <Footer />
      </motion.div>
    </>
  );
}
