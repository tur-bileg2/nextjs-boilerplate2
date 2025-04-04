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
        {/* Hero section */}
        <section className="bg-gradient-to-r from-slate-50 to-indigo-50 py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <motion.div 
                className="lg:w-1/2 space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-3">
                  <h2 className="text-2xl text-indigo-700 font-semibold">{t('home.hero.greeting')}</h2>
                  <h1 className="text-5xl lg:text-6xl font-bold text-slate-900">{t('home.hero.name')}</h1>
                  <p className="text-3xl text-slate-700">{t('home.hero.title')}</p>
                </div>
                
                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                  {t('home.hero.description')}
                </p>
                
                <div>
                  <Link 
                    href="/contact" 
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t('home.hero.cta')}
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                className="lg:w-1/2 flex justify-center lg:justify-end"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl">
                  <Image 
                    src="/images/Bilguunnaran_headshot.jpeg" 
                    alt="Bilguun Naran"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{t('home.about.title')}</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {t('home.about.description')}
              </p>
              <Link 
                href="/about" 
                className="inline-block bg-slate-100 hover:bg-slate-200 text-indigo-700 font-medium py-3 px-8 rounded-lg transition-all duration-300"
              >
                {t('home.about.button')}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Experience section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{t('home.experience.title')}</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {t('home.experience.description')}
              </p>
              <Link 
                href="/experience" 
                className="inline-block bg-slate-100 hover:bg-slate-200 text-indigo-700 font-medium py-3 px-8 rounded-lg transition-all duration-300"
              >
                {t('home.experience.button')}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900">{t('home.services.title')}</h2>
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
                  className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: service.delay }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA section */}
        <section className="py-20 bg-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">{t('home.contact.title')}</h2>
              <p className="text-xl text-indigo-100 leading-relaxed mb-8">
                {t('home.contact.description')}
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-white hover:bg-indigo-50 text-indigo-700 font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('home.contact.button')}
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
