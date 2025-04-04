'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      
      <main>
        {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-white py-24 md:py-32">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-indigo-200 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-300 rounded-full filter blur-3xl"></div>
          </div>
          
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-[0.15] pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <motion.div 
                className="lg:w-1/2 space-y-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '6rem' }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="h-1 bg-indigo-600 mb-2 max-w-[6rem]"
                  ></motion.div>
                  <h2 className="text-xl md:text-2xl text-indigo-700 font-semibold tracking-wide">
                    {t('home.hero.greeting')}
                  </h2>
                  <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                    <span className="inline-block">
                      {t('home.hero.name')}
                    </span>
                  </h1>
                  <div className="relative">
                    <p className="text-2xl md:text-3xl text-indigo-700 font-bold">
                      {t('home.hero.title')}
                    </p>
                    <div className="absolute -bottom-2 left-0 h-1 w-24 bg-indigo-300"></div>
                  </div>
                </div>
                
                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                  {t('home.hero.description')}
                </p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex items-center space-x-4"
                >
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span>{t('home.hero.cta')}</span>
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                  
                  <Link 
                    href="/about" 
                    className="inline-flex items-center text-indigo-700 font-medium hover:text-indigo-900 transition-colors duration-300"
                  >
                    <span>Learn more</span>
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </motion.div>
                
                {/* Languages tags */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex flex-wrap gap-2 pt-4"
                >
                  <div className="flex items-center gap-1 bg-white py-1.5 px-3 rounded-full shadow-sm text-sm font-medium text-slate-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 mr-1"></span>
                    English
                  </div>
                  <div className="flex items-center gap-1 bg-white py-1.5 px-3 rounded-full shadow-sm text-sm font-medium text-slate-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 mr-1"></span>
                    日本語
                  </div>
                  <div className="flex items-center gap-1 bg-white py-1.5 px-3 rounded-full shadow-sm text-sm font-medium text-slate-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-1"></span>
                    Монгол
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="lg:w-1/2 flex justify-center lg:justify-end"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative">
                  {/* Decorative rings around the image */}
                  <motion.div 
                    className="absolute -inset-4 rounded-full border-2 border-indigo-200 border-dashed"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                  
                  <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl">
                    <Image 
                      src="/images/Bilguunnaran_headshot.jpeg" 
                      alt="Bilguunnaran Uurtsaikh"
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                      className="rounded-full"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Bottom wave divider */}
          <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,213.2,56.44Z" className="fill-white"></path>
            </svg>
          </div>
        </section>

        {/* About section - Enhanced */}
        <section className="py-24 bg-white relative">
          <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-indigo-50 opacity-70 rounded-bl-full pointer-events-none"></div>
          
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 font-medium text-sm rounded-full mb-4">About Me</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{t('home.about.title')}</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10 mx-auto max-w-3xl">
                {t('home.about.description')}
              </p>
              
              <div className="inline-block relative">
                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-indigo-700 font-medium py-3 px-8 rounded-lg shadow-sm border border-slate-200 transition-all duration-300"
                >
                  {t('home.about.button')}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
                
                {/* Decorative dot pattern */}
                <div className="absolute -bottom-6 -right-6 w-12 h-12 grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-300"></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience section - Enhanced */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
          <div className="absolute inset-0 bg-[url('/images/dot-pattern.svg')] bg-repeat opacity-[0.2] pointer-events-none"></div>
          
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 font-medium text-sm rounded-full mb-4">My Journey</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{t('home.experience.title')}</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10 mx-auto max-w-3xl">
                {t('home.experience.description')}
              </p>
              
              {/* Experience stats */}
              <div className="grid grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-indigo-600 mb-2">3+</h3>
                  <p className="text-slate-700">Years Experience</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-indigo-600 mb-2">3</h3>
                  <p className="text-slate-700">Languages</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-indigo-600 mb-2">10+</h3>
                  <p className="text-slate-700">Projects</p>
                </div>
              </div>
              
              <Link 
                href="/experience" 
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                {t('home.experience.button')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services section - Enhanced */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="hidden lg:block absolute top-40 -left-10 w-40 h-40 bg-indigo-100 rounded-full opacity-60 filter blur-xl"></div>
          <div className="hidden lg:block absolute bottom-20 -right-10 w-60 h-60 bg-indigo-200 rounded-full opacity-60 filter blur-xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 font-medium text-sm rounded-full mb-4">What I Offer</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{t('home.services.title')}</h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: t('home.services.forJobSeekers'),
                  description: t('home.services.jobSeekersDescription'),
                  icon: '👤',
                  delay: 0
                },
                {
                  title: t('home.services.forCompanies'),
                  description: t('home.services.companiesDescription'),
                  icon: '🏢',
                  delay: 0.2
                },
                {
                  title: t('home.services.workshops'),
                  description: t('home.services.workshopsDescription'),
                  icon: '🔄',
                  delay: 0.4
                }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: service.delay }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-3xl">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700"
                  >
                    Learn more 
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA section - Enhanced */}
        <section className="relative py-24 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-700"></div>
          
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500 rounded-full opacity-30"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/images/dot-pattern-light.svg')] bg-repeat opacity-[0.1]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-10 backdrop-blur-sm rounded-full mb-8">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('home.contact.title')}</h2>
              <p className="text-xl text-indigo-100 leading-relaxed mb-10">
                {t('home.contact.description')}
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center bg-white hover:bg-indigo-50 text-indigo-700 font-medium py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t('home.contact.button')}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </motion.div>
              
              <div className="mt-12 flex justify-center space-x-6">
                <a href="#" className="text-white hover:text-indigo-200 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-indigo-200 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-indigo-200 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
