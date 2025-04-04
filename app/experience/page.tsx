'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from '@/context/LanguageContext';

export default function Experience() {
  const [activeTab, setActiveTab] = useState("work");
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
        <div className="container mx-auto px-4 py-16 space-y-12">
          {/* Hero Section */}
          <section>
            <motion.div
              className="text-center max-w-3xl mx-auto space-y-6"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-slate-900">
                {t('experience.title')}
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed">
                {t('experience.subtitle')}
              </p>
            </motion.div>
          </section>

          {/* Tab Navigation */}
          <section className="max-w-4xl mx-auto">
            <motion.div 
              className="flex justify-center space-x-6 border-b border-slate-200"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                className={`py-3 px-6 font-medium text-lg ${activeTab === "work" ? "text-indigo-700 border-b-2 border-indigo-700" : "text-slate-600 hover:text-indigo-600"}`}
                onClick={() => setActiveTab("work")}
              >
                {t('experience.workHistory')}
              </button>
              <button
                className={`py-3 px-6 font-medium text-lg ${activeTab === "projects" ? "text-indigo-700 border-b-2 border-indigo-700" : "text-slate-600 hover:text-indigo-600"}`}
                onClick={() => setActiveTab("projects")}
              >
                {t('experience.keyProjects')}
              </button>
              <button
                className={`py-3 px-6 font-medium text-lg ${activeTab === "skills" ? "text-indigo-700 border-b-2 border-indigo-700" : "text-slate-600 hover:text-indigo-600"}`}
                onClick={() => setActiveTab("skills")}
              >
                {t('experience.skillsEndorsements')}
              </button>
            </motion.div>
          </section>

          {/* Content Sections */}
          <section className="max-w-4xl mx-auto min-h-[500px]">
            <AnimatePresence mode="wait">
              {activeTab === "work" && (
                <motion.div
                  key="work"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-10"
                >
                  {[
                    {
                      roleKey: 'experience.jobs.consultant.role',
                      companyKey: 'experience.jobs.consultant.company',
                      periodKey: 'experience.jobs.consultant.period',
                      descriptionKey: 'experience.jobs.consultant.description',
                      responsibilities: [
                        'experience.jobs.consultant.responsibility1',
                        'experience.jobs.consultant.responsibility2',
                        'experience.jobs.consultant.responsibility3'
                      ]
                    },
                    {
                      roleKey: 'experience.jobs.marketing.role',
                      companyKey: 'experience.jobs.marketing.company',
                      periodKey: 'experience.jobs.marketing.period',
                      descriptionKey: 'experience.jobs.marketing.description',
                      responsibilities: [
                        'experience.jobs.marketing.responsibility1',
                        'experience.jobs.marketing.responsibility2',
                        'experience.jobs.marketing.responsibility3'
                      ]
                    },
                    {
                      roleKey: 'experience.jobs.barista.role',
                      companyKey: 'experience.jobs.barista.company',
                      periodKey: 'experience.jobs.barista.period',
                      descriptionKey: 'experience.jobs.barista.description',
                      responsibilities: [
                        'experience.jobs.barista.responsibility1',
                        'experience.jobs.barista.responsibility2',
                        'experience.jobs.barista.responsibility3'
                      ]
                    },
                    {
                      roleKey: 'experience.jobs.yoga.role',
                      companyKey: 'experience.jobs.yoga.company',
                      periodKey: 'experience.jobs.yoga.period',
                      descriptionKey: 'experience.jobs.yoga.description',
                      responsibilities: [
                        'experience.jobs.yoga.responsibility1',
                        'experience.jobs.yoga.responsibility2',
                        'experience.jobs.yoga.responsibility3',
                        'experience.jobs.yoga.responsibility4'
                      ]
                    }
                  ].map((job, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-md border border-slate-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-indigo-700">{t(job.roleKey)}</h3>
                          <h4 className="text-xl text-slate-800">{t(job.companyKey)}</h4>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span className="bg-indigo-50 text-indigo-700 py-1 px-3 rounded-full font-medium">{t(job.periodKey)}</span>
                        </div>
                      </div>
                      <p className="text-slate-600 mb-4">{t(job.descriptionKey)}</p>
                      <div>
                        <h5 className="font-semibold text-slate-800 mb-2">{t('experience.keyResponsibilities')}:</h5>
                        <ul className="list-disc pl-5 space-y-1">
                          {job.responsibilities.map((respKey, i) => (
                            <li key={i} className="text-slate-600">{t(respKey)}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "projects" && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {[
                    {
                      titleKey: 'projects.socialMedia.title',
                      clientKey: 'projects.socialMedia.client',
                      yearKey: 'projects.socialMedia.year',
                      descriptionKey: 'projects.socialMedia.description',
                      tagKeys: ['projects.socialMedia.tag1', 'projects.socialMedia.tag2', 'projects.socialMedia.tag3']
                    },
                    {
                      titleKey: 'projects.careerVideo.title',
                      clientKey: 'projects.careerVideo.client',
                      yearKey: 'projects.careerVideo.year',
                      descriptionKey: 'projects.careerVideo.description',
                      tagKeys: ['projects.careerVideo.tag1', 'projects.careerVideo.tag2', 'projects.careerVideo.tag3']
                    },
                    {
                      titleKey: 'projects.crossCultural.title',
                      clientKey: 'projects.crossCultural.client',
                      yearKey: 'projects.crossCultural.year',
                      descriptionKey: 'projects.crossCultural.description',
                      tagKeys: ['projects.crossCultural.tag1', 'projects.crossCultural.tag2', 'projects.crossCultural.tag3']
                    },
                    {
                      titleKey: 'projects.mindfulness.title',
                      clientKey: 'projects.mindfulness.client',
                      yearKey: 'projects.mindfulness.year',
                      descriptionKey: 'projects.mindfulness.description',
                      tagKeys: ['projects.mindfulness.tag1', 'projects.mindfulness.tag2', 'projects.mindfulness.tag3']
                    }
                  ].map((project, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-md border border-slate-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-indigo-700">{t(project.titleKey)}</h3>
                        <span className="bg-indigo-50 text-indigo-700 py-1 px-2 rounded-full text-sm font-medium">{t(project.yearKey)}</span>
                      </div>
                      <h4 className="text-lg text-slate-800 mb-2">{t(project.clientKey)}</h4>
                      <p className="text-slate-600 mb-4">{t(project.descriptionKey)}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tagKeys.map((tagKey, i) => (
                          <span key={i} className="bg-slate-100 text-slate-700 py-1 px-2 rounded-full text-sm">
                            {t(tagKey)}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "skills" && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-12"
                >
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900">{t('experience.skills')}</h3>
                    
                    <div className="grid md:grid-cols-3 gap-y-8 gap-x-12">
                      {[
                        { skillKey: 'skills.careerCounseling', companyKey: 'company.iccConsultants', endorsements: 15 },
                        { skillKey: 'skills.studentCounseling', companyKey: 'company.iccConsultants', endorsements: 12 },
                        { skillKey: 'skills.marketing', companyKey: 'company.iccConsultants', endorsements: 18 },
                        { skillKey: 'skills.socialMediaMarketing', companyKey: 'company.iccConsultants', endorsements: 22 },
                        { skillKey: 'skills.socialMediaContentCreation', companyKey: 'company.iccConsultants', endorsements: 17 },
                        { skillKey: 'skills.videoEditing', companyKey: 'company.iccConsultants', endorsements: 8 },
                        { skillKey: 'skills.targetAudience', companyKey: 'company.iccConsultants', endorsements: 11 },
                        { skillKey: 'skills.customerService', companyKey: 'company.orangeCat', endorsements: 14 },
                        { skillKey: 'skills.teamwork', companyKey: 'company.orangeCat', endorsements: 19 },
                        { skillKey: 'skills.negotiation', companyKey: null, endorsements: 7 },
                        { skillKey: 'skills.teamManagement', companyKey: null, endorsements: 9 },
                        { skillKey: 'skills.adobeCreativeSuite', companyKey: null, endorsements: 6 }
                      ].map((skill, index) => (
                        <motion.div 
                          key={index}
                          className="flex flex-col"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-slate-800">{t(skill.skillKey)}</span>
                            <span className="text-indigo-600 text-sm font-semibold bg-indigo-50 py-1 px-2 rounded-full">
                              {skill.endorsements}
                            </span>
                          </div>
                          {skill.companyKey && (
                            <span className="text-sm text-slate-500">{t(skill.companyKey)}</span>
                          )}
                          <div className="mt-2 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-indigo-500"
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.min(Math.max(skill.endorsements * 4, 30), 100)}%` }}
                              transition={{ delay: 0.8 + (index * 0.05), duration: 1 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900">{t('experience.languageCommunication')}</h3>
                    
                    <div className="grid md:grid-cols-3 gap-y-8 gap-x-12">
                      {[
                        { skillKey: 'skills.communication', companyKey: 'company.iccConsultants', company2Key: 'company.wasedaUniversity', endorsements: 24 },
                        { skillKey: 'skills.spokenEnglish', companyKey: null, endorsements: 20 },
                        { skillKey: 'skills.english', companyKey: 'company.wasedaUniversity', endorsements: 18 },
                        { skillKey: 'skills.japanese', companyKey: 'company.wasedaUniversity', endorsements: 25 },
                        { skillKey: 'skills.socialCommunication', companyKey: 'company.yogaInstructor', endorsements: 16 },
                        { skillKey: 'skills.presentations', companyKey: null, endorsements: 13 }
                      ].map((skill, index) => (
                        <motion.div 
                          key={index}
                          className="flex flex-col"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + (index * 0.05) }}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-slate-800">{t(skill.skillKey)}</span>
                            <span className="text-indigo-600 text-sm font-semibold bg-indigo-50 py-1 px-2 rounded-full">
                              {skill.endorsements}
                            </span>
                          </div>
                          {skill.companyKey && (
                            <span className="text-sm text-slate-500">
                              {skill.company2Key ? `${t(skill.companyKey)}, ${t(skill.company2Key)}` : t(skill.companyKey)}
                            </span>
                          )}
                          <div className="mt-2 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-indigo-500"
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.min(Math.max(skill.endorsements * 3, 30), 100)}%` }}
                              transition={{ delay: 1 + (index * 0.05), duration: 1 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900">{t('experience.yogaWellness')}</h3>
                    
                    <div className="grid md:grid-cols-3 gap-y-8 gap-x-12">
                      {[
                        { skillKey: 'skills.yogaInstruction', companyKey: 'company.yogaInstructor', endorsements: 17 },
                        { skillKey: 'skills.vinyasa', companyKey: 'company.yogaInstructor', endorsements: 14 },
                        { skillKey: 'skills.mindfulnessMeditation', companyKey: 'company.yogaInstructor', endorsements: 15 }
                      ].map((skill, index) => (
                        <motion.div 
                          key={index}
                          className="flex flex-col"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + (index * 0.05) }}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-slate-800">{t(skill.skillKey)}</span>
                            <span className="text-indigo-600 text-sm font-semibold bg-indigo-50 py-1 px-2 rounded-full">
                              {skill.endorsements}
                            </span>
                          </div>
                          {skill.companyKey && (
                            <span className="text-sm text-slate-500">{t(skill.companyKey)}</span>
                          )}
                          <div className="mt-2 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-indigo-500"
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.min(Math.max(skill.endorsements * 4, 30), 100)}%` }}
                              transition={{ delay: 1.2 + (index * 0.05), duration: 1 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>
        
        <Footer />
      </motion.div>
    </>
  );
}
