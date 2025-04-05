'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Language = 'en' | 'ja';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    
    // Common sections
    'common.readMore': 'Read More',
    'common.viewAll': 'View All',
    
    // About page
    'about.title': 'About Me',
    'about.philosophy': 'My Philosophy',
    'about.skills': 'Professional Skills',
    'about.careerFocus': 'Career Focus',
    'about.interests': 'Personal Interests',
    'about.forJobSeekers': 'For Job Seekers',
    'about.forEmployers': 'For Employers',
    
    // Education page
    'education.title': 'Education & Certifications',
    'education.honors': 'Honors & Awards',
    'education.skills': 'Skills Gained Through Education',
    'education.languages': 'Language Proficiency',
    
    // Contact page overview
    'contact.title': 'Get In Touch',
    'contact.info': 'Contact Information',
    'contact.messageSection': 'Send Me a Message',
    'contact.faq': 'Frequently Asked Questions',

    // Contact page details
    'contact.getInTouch': 'Get In Touch',
    'contact.subtitle': "I'm always open to discussing new opportunities, creative ideas, or ways to help bridge international talent with Japanese companies.",
    'contact.infoSubtitle': 'Feel free to reach out through any of these channels. I am typically able to respond within 24-48 hours.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.socialMedia': 'Connect On Social Media',
    'contact.officeHours': 'Office Hours',
    'contact.officeHoursTime': 'Monday - Friday: 9:00 AM - 6:00 PM (JST)',
    'contact.officeHoursNote': 'I am also available for online meetings in different time zones with prior arrangement.',
    'contact.sendMessage': 'Send Me a Message',
    'contact.yourName': 'Your Name',
    'contact.yourEmail': 'Your Email',
    'contact.subject': 'Subject',
    'contact.messageContent': 'Your Message',
    'contact.sending': 'Sending...',
    'contact.send': 'Send Message',
    'contact.thankYou': 'Thank You!',
    'contact.successMessage': 'Your message has been sent successfully. I will ll get back to you as soon as possible.',
    'contact.sendAnother': 'Send Another Message',

    // Education page
    'education.timeline': 'Academic Timeline',
    'education.subtitle': 'My academic journey from Orchlon International School to Waseda University has equipped me with trilingual skills and cross-cultural knowledge essential for bridging international talent with opportunities.',
    'education.ib': 'International Baccalaureate',
    'education.ibDescription': 'Received comprehensive education with an international curriculum, developing strong foundations in multiple disciplines including languages, humanities, sciences, and arts with a focus on cross-cultural understanding and global citizenship.',
    'education.waseda': 'Bachelor\'s Degree',
    'education.wasedaDescription': 'Specialized in International Relations with a focus on cross-cultural communication and global business practices in the Asian market. Developed expertise in trilingual communication, international business etiquette, and cross-cultural negotiation strategies.',
    'education.certifications': 'Professional Certifications',
    'education.certificationsDescription': 'Continuous professional development through certifications relevant to international career consulting and cross-cultural communication, including Cross-Cultural Communication Specialist, Career Development Facilitator (CDF), Digital Marketing for Recruitment, and Japanese-English Business Translation.',
    'education.honorsScholarship': 'Honors Scholarship for Privately Financed International Students',
    'education.honorsDescription': 'Awarded by the Japan Student Services Organization (JASSO) for academic excellence and contribution to international relations.',
    
    // Contact page subjects
    'subject.select': 'Select a subject',
    'subject.job': 'Job Opportunity',
    'subject.collaboration': 'Collaboration',
    'subject.recruitment': 'Recruitment Services',
    'subject.speaking': 'Speaking Engagement',
    'subject.other': 'Other',
    
    // Contact page FAQs
    'faq.jobServices': 'What services do you offer for job seekers?',
    'faq.jobServices.answer': 'I provide career counseling, resume optimization, interview preparation, and guidance on navigating the Japanese job market as an international professional.',
    'faq.companies': 'Do you work with companies hiring international talent?',
    'faq.companies.answer': 'Yes, I help companies develop recruitment strategies for international talent and provide cross-cultural workplace training to facilitate better integration.',
    'faq.languages': 'What languages do you speak fluently?',
    'faq.languages.answer': 'I am trilingual, speaking English, Japanese, and Mongolian fluently, which allows me to bridge communication gaps effectively.',
    'faq.speaking': 'Are you available for speaking engagements?',
    'faq.speaking.answer': 'Yes, I\'m available for speaking on topics related to cross-cultural communication, international talent acquisition, and career development in Japan.',
    
    // Form placeholders
    'placeholder.name': 'John Doe',
    'placeholder.email': 'john@example.com',
    'placeholder.message': 'I\'d like to discuss...',
    
    // Error messages
    'error.form': 'An error occurred while sending your message. Please try again.',
    'error.missingFields': 'Please fill in all required fields.',
    'error.invalidEmail': 'Please enter a valid email address.',
    'error.emailSent': 'Your message has been sent successfully!',

    // Experience page
    'experience.title': 'Professional Experience',
    'experience.subtitle': 'My diverse career journey across talent development, marketing, and customer service, showcasing adaptability and cross-disciplinary skills.',
    'experience.workHistory': 'Work History',
    'experience.keyProjects': 'Key Projects',
    'experience.skillsEndorsements': 'Skills & Endorsements',
    'experience.keyResponsibilities': 'Key Responsibilities',
    'experience.skills': 'Professional Skills',
    'experience.languageCommunication': 'Language & Communication',
    'experience.yogaWellness': 'Yoga & Wellness',

    // Experience page jobs
    'experience.jobs.consultant.role': 'Consultant',
    'experience.jobs.consultant.company': 'ICC Consultants Inc.',
    'experience.jobs.consultant.period': 'Feb 2025 - Present',
    'experience.jobs.consultant.description': 'Working on-site in Shibuya-ku, Tokyo, Japan to bridge international talent with local companies and provide comprehensive career consulting services.',
    'experience.jobs.consultant.responsibility1': 'Provided career counseling to international students and professionals in Japan, facilitating their integration into the local job market',
    'experience.jobs.consultant.responsibility2': 'Collaborated with companies to ensure effective communication and talent integration, enhancing global business relationships',
    'experience.jobs.consultant.responsibility3': 'Assisted in navigating the professional landscape in Japan, fostering successful partnerships between students and businesses',

    'experience.jobs.marketing.role': 'Marketing Intern',
    'experience.jobs.marketing.company': 'Internship in Japan by ICC Consultants Inc.',
    'experience.jobs.marketing.period': 'Dec 2024 - Feb 2025',
    'experience.jobs.marketing.description': 'Worked in a hybrid setting in Shibuya-ku, Tokyo, Japan to promote internship opportunities for international students through digital marketing strategies.',
    'experience.jobs.marketing.responsibility1': 'Assisted in content creation, video editing, and social media posting to promote internship programs',
    'experience.jobs.marketing.responsibility2': 'Executed digital marketing strategies to attract international students and host companies',
    'experience.jobs.marketing.responsibility3': 'Enhanced brand visibility and engagement to increase student participation',

    'experience.jobs.barista.role': 'Barista',
    'experience.jobs.barista.company': 'Orange Cat Inc.',
    'experience.jobs.barista.period': 'Jun 2023 - Jul 2024',
    'experience.jobs.barista.description': 'Worked on-site in Tokyo, Japan, developing customer service and teamwork skills in a fast-paced café environment.',
    'experience.jobs.barista.responsibility1': 'Provided exceptional customer service and efficient order management',
    'experience.jobs.barista.responsibility2': 'Enhanced time management and problem-solving skills in a fast-paced café environment',
    'experience.jobs.barista.responsibility3': 'Ensured high-quality service and smooth café operations, honing communication and teamwork skills',

    'experience.jobs.yoga.role': 'Certified Yoga Instructor',
    'experience.jobs.yoga.company': 'Freelance',
    'experience.jobs.yoga.period': '2018 - Present',
    'experience.jobs.yoga.description': 'Lead group and private yoga sessions focusing on mindfulness, vinyasa flow, and holistic wellness practices.',
    'experience.jobs.yoga.responsibility1': 'Design and conduct yoga programs for individuals and groups at various skill levels',
    'experience.jobs.yoga.responsibility2': 'Integrate mindfulness meditation techniques to enhance overall wellness practice',
    'experience.jobs.yoga.responsibility3': 'Provide personalized guidance for proper alignment and breathing techniques',
    'experience.jobs.yoga.responsibility4': 'Create supportive and inclusive learning environment for practitioners',

    // Professional Skills
    'skills.careerCounseling': 'Career Counseling',
    'skills.studentCounseling': 'Student Counseling',
    'skills.marketing': 'Marketing',
    'skills.socialMediaMarketing': 'Social Media Marketing',
    'skills.socialMediaContentCreation': 'Social Media Content Creation',
    'skills.videoEditing': 'Video Editing',
    'skills.targetAudience': 'Target Audience',
    'skills.customerService': 'Customer Service',
    'skills.teamwork': 'Teamwork',
    'skills.negotiation': 'Negotiation',
    'skills.teamManagement': 'Team Management',
    'skills.adobeCreativeSuite': 'Adobe Creative Suite',
    
    // Language & Communication Skills
    'skills.communication': 'Communication',
    'skills.spokenEnglish': 'Spoken English',
    'skills.english': 'English',
    'skills.japanese': 'Japanese',
    'skills.socialCommunication': 'Social Communication',
    'skills.presentations': 'Presentations',
    
    // Yoga & Wellness Skills
    'skills.yogaInstruction': 'Yoga Instruction',
    'skills.vinyasa': 'Vinyasa',
    'skills.mindfulnessMeditation': 'Mindfulness Meditation',
    
    // Company Names
    'company.iccConsultants': 'ICC Consultants Inc.',
    'company.wasedaUniversity': 'Waseda University',
    'company.orangeCat': 'Orange Cat Inc.',
    'company.yogaInstructor': 'Certified Yoga Instructor',

    // Projects
    'projects.socialMedia.title': 'Social Media Growth Campaign',
    'projects.socialMedia.client': 'ICC Consultants Inc.',
    'projects.socialMedia.year': '2024',
    'projects.socialMedia.description': 'Increased social media engagement by 45% through targeted content strategy and audience analysis.',
    'projects.socialMedia.tag1': 'Social Media',
    'projects.socialMedia.tag2': 'Marketing',
    'projects.socialMedia.tag3': 'Content Creation',

    'projects.careerVideo.title': 'Career Pathway Video Series',
    'projects.careerVideo.client': 'ICC Consultants Inc.',
    'projects.careerVideo.year': '2024',
    'projects.careerVideo.description': 'Produced and edited a series of video interviews with successful international professionals working in Japan.',
    'projects.careerVideo.tag1': 'Video Editing',
    'projects.careerVideo.tag2': 'Career Counseling',
    'projects.careerVideo.tag3': 'Media Production',

    'projects.crossCultural.title': 'Cross-Cultural Workplace Training',
    'projects.crossCultural.client': 'Corporate Clients',
    'projects.crossCultural.year': '2024',
    'projects.crossCultural.description': 'Developed training materials to help Japanese companies better integrate international employees.',
    'projects.crossCultural.tag1': 'Training',
    'projects.crossCultural.tag2': 'Cross-Cultural',
    'projects.crossCultural.tag3': 'Corporate',

    'projects.mindfulness.title': 'Mindfulness for Professionals Workshop',
    'projects.mindfulness.client': 'Freelance',
    'projects.mindfulness.year': '2024',
    'projects.mindfulness.description': 'Created and led workshops combining yoga, meditation, and stress management techniques for corporate clients.',
    'projects.mindfulness.tag1': 'Wellness',
    'projects.mindfulness.tag2': 'Yoga',
    'projects.mindfulness.tag3': 'Professional Development',

    // Home page
    'home.hero.greeting': 'Hello, I am',
    'home.hero.name': 'Bilguunnaran Uurtsaikh',
    'home.hero.title': 'Cross-Cultural Career Consultant',
    'home.hero.description': 'Connecting international talent with Japanese opportunities through trilingual expertise in English, Japanese, and Mongolian.',
    'home.hero.cta': 'Get In Touch',
    
    'home.about.title': 'About Me',
    'home.about.description': 'As a trilingual career consultant based in Tokyo, I help international professionals navigate the Japanese job market while assisting companies in building diverse teams.',
    'home.about.button': 'Learn More',
    
    'home.experience.title': 'My Experience',
    'home.experience.description': 'With experience across talent development, marketing, and international relations, I bring a unique perspective to bridging cultural gaps in professional environments.',
    'home.experience.button': 'View My Journey',
    
    'home.services.title': 'Services',
    'home.services.forJobSeekers': 'For Job Seekers',
    'home.services.jobSeekersDescription': 'Career counseling, resume optimization, interview preparation, and guidance on the Japanese job market.',
    'home.services.forCompanies': 'For Companies',
    'home.services.companiesDescription': 'Recruitment strategies for international talent and cross-cultural workplace training to facilitate better integration.',
    'home.services.workshops': 'Workshops & Training',
    'home.services.workshopsDescription': 'Specialized workshops on cross-cultural communication and mindfulness in professional settings.',
    
    'home.contact.title': 'Let\'s Connect',
    'home.contact.description': 'Interested in working together? I am always open to discussing new opportunities and ideas.',
    'home.contact.button': 'Contact Me',

    // About page in detail
    'about.hero.title': 'About Me',
    'about.hero.subtitle': 'Bridging cultures and connecting talent across borders',
    
    'about.philosophy.title': 'My Philosophy',
    'about.philosophy.content1': 'I believe that meaningful career development happens at the intersection of cultural understanding, personal growth, and professional opportunity.',
    'about.philosophy.content2': 'Through my trilingual capabilities and cross-cultural experiences, I work to create bridges that enable both international talent and Japanese companies to thrive together.',
    'about.philosophy.content3': 'My approach combines practical career guidance with cultural context, helping professionals navigate not just job markets but entire cultural ecosystems.',
    
    'about.career.title': 'Career Focus',
    'about.career.content1': 'My career focuses on creating meaningful connections between international talent and Japanese professional opportunities.',
    'about.career.content2': 'By leveraging my trilingual abilities and deep understanding of both Western and Asian business cultures, I help reduce friction in cross-cultural professional relationships.',
    'about.career.content3': 'I specialize in guiding international professionals through the nuances of Japanese work culture while helping Japanese organizations understand how to better integrate and retain global talent.',
    
    'about.interests.title': 'Personal Interests',
    'about.interests.content1': 'Beyond my professional life, I am a certified yoga instructor focused on mindfulness practices that enhance work-life balance and professional performance.',
    'about.interests.content2': 'I have a keen interest in languages and linguistics, constantly working to improve my communication skills in multiple cultural contexts.',
    'about.interests.content3': 'Travel and cultural exploration remain lifelong passions, as they continually expand my perspective and enhance my ability to connect with people from diverse backgrounds.',
    
    'about.jobSeekers.title': 'For Job Seekers',
    'about.jobSeekers.point1': 'Personalized career counseling tailored to the Japanese market',
    'about.jobSeekers.point2': 'Resume and LinkedIn optimization for the Japanese recruitment context',
    'about.jobSeekers.point3': 'Interview preparation with cultural context and expectations',
    'about.jobSeekers.point4': 'Guidance on professional etiquette and workplace culture in Japan',
    'about.jobSeekers.point5': 'Support throughout the job search and onboarding process',
    
    'about.employers.title': 'For Employers',
    'about.employers.point1': 'Consultation on effective international recruitment strategies',
    'about.employers.point2': 'Support in creating inclusive workplace environments for international staff',
    'about.employers.point3': 'Cross-cultural communication training for management and teams',
    'about.employers.point4': 'Mediation services for addressing cultural misunderstandings',
    'about.employers.point5': 'Ongoing advisory to enhance retention of international talent',
  },
  ja: {
    // Header
    'nav.home': 'ホーム',
    'nav.about': '私について',
    'nav.education': '学歴',
    'nav.experience': '経歴',
    'nav.contact': 'お問い合わせ',
    
    // Common sections
    'common.readMore': '詳細を見る',
    'common.viewAll': 'すべて見る',
    
    // About page
    'about.title': '私について',
    'about.philosophy': '私の理念',
    'about.skills': '専門スキル',
    'about.careerFocus': 'キャリアの焦点',
    'about.interests': '個人的な興味',
    'about.forJobSeekers': '求職者の方へ',
    'about.forEmployers': '採用企業の方へ',
    
    // Education page
    'education.title': '学歴と資格',
    'education.honors': '受賞歴',
    'education.skills': '教育を通じて得たスキル',
    'education.languages': '言語能力',
    
    // Contact page overview
    'contact.title': 'お問い合わせ',
    'contact.messageSection': 'メッセージを送る',

    // Contact page details
    'contact.getInTouch': 'お問い合わせ',
    'contact.subtitle': '新しい機会やアイデア、日本企業と国際人材をつなぐ方法について、いつでもご相談をお待ちしております。',
    'contact.info': '連絡先情報',
    'contact.infoSubtitle': '以下の連絡手段からお気軽にご連絡ください。通常24-48時間以内に返信いたします。',
    'contact.email': 'メールアドレス',
    'contact.phone': '電話番号',
    'contact.location': '所在地',
    'contact.socialMedia': 'ソーシャルメディア',
    'contact.officeHours': '営業時間',
    'contact.officeHoursTime': '月曜日～金曜日：9:00～18:00（日本時間）',
    'contact.officeHoursNote': '事前調整により、異なるタイムゾーンでのオンラインミーティングも可能です。',
    'contact.sendMessage': 'メッセージを送る',
    'contact.yourName': 'お名前',
    'contact.yourEmail': 'メールアドレス',
    'contact.subject': '件名',
    'contact.messageContent': 'メッセージ',
    'contact.sending': '送信中...',
    'contact.send': '送信する',
    'contact.thankYou': 'ありがとうございました！',
    'contact.successMessage': 'メッセージが正常に送信されました。できるだけ早くご返信いたします。',
    'contact.sendAnother': '別のメッセージを送る',
    'contact.faq': 'よくある質問',

    // Education page
    'education.timeline': '学歴',
    'education.subtitle': 'オルホン国際学校から早稲田大学までの学びを通じて、三カ国語の運用能力と異文化理解を深め、国際人材と機会をつなぐために必要なスキルを習得しました。',
    'education.ib': '国際バカロレア',
    'education.ibDescription': '国際カリキュラムに基づく総合的な教育を受け、言語、人文科学、自然科学、芸術など多岐にわたる分野で強固な基礎を築き、異文化理解とグローバル市民性を重視した学びを修めました。',
    'education.waseda': '学士号',
    'education.wasedaDescription': '国際関係学を専攻し、アジア市場におけるクロスカルチャーコミュニケーションとグローバルビジネス実践に焦点を当てました。三カ国語でのコミュニケーション、国際ビジネスマナー、異文化間交渉戦略について専門知識を深めました。',
    'education.certifications': '専門資格',
    'education.certificationsDescription': '国際キャリアコンサルティングと異文化コミュニケーションに関連する資格（異文化コミュニケーションスペシャリスト、キャリア開発ファシリテーター、採用のためのデジタルマーケティング、日英ビジネス翻訳）を取得し、継続的な専門能力開発に努めています。',
    'education.honorsScholarship': '私費外国人留学生学習奨励費',
    'education.honorsDescription': '日本学生支援機構（JASSO）より、学業成績および国際交流への貢献が評価され授与されました。',
    
    // Contact page subjects
    'subject.select': 'お問い合わせ内容を選択',
    'subject.job': '求人に関して',
    'subject.collaboration': '協業について',
    'subject.recruitment': '採用サービス',
    'subject.speaking': '講演依頼',
    'subject.other': 'その他',
    
    // Contact page FAQs
    'faq.jobServices': '求職者向けにどのようなサービスを提供していますか？',
    'faq.jobServices.answer': 'キャリアカウンセリング、履歴書の最適化、面接準備、外国人プロフェッショナルとして日本の就職市場を案内するガイダンスを提供しています。',
    'faq.companies': '国際人材を採用する企業と連携していますか？',
    'faq.companies.answer': 'はい、企業が国際人材の採用戦略を開発するのを支援し、より良い統合を促進するために異文化間ワークプレイストレーニングを提供しています。',
    'faq.languages': 'どの言語を流暢に話せますか？',
    'faq.languages.answer': '英語、日本語、モンゴル語の3カ国語を流暢に話せるため、コミュニケーションギャップを効果的に埋めることができます。',
    'faq.speaking': '講演依頼は受け付けていますか？',
    'faq.speaking.answer': 'はい、異文化コミュニケーション、国際人材獲得、日本でのキャリア開発に関連するトピックについての講演を承っています。',
    
    // Form placeholders
    'placeholder.name': '山田太郎',
    'placeholder.email': 'taro@example.com',
    'placeholder.message': 'ご相談したいことがあります...',
    
    // Error messages
    'error.form': 'メッセージの送信中にエラーが発生しました。もう一度お試しください。',
    'error.missingFields': '必須項目をすべて入力してください。',
    'error.invalidEmail': '有効なメールアドレスを入力してください。',
    'error.emailSent': 'メッセージが正常に送信されました！',

    // Experience page
    'experience.title': '職務経験',
    'experience.subtitle': '人材開発、マーケティング、カスタマーサービスにわたる多様なキャリアの旅を通じて、適応力と学際的なスキルを示しています。',
    'experience.workHistory': '職務履歴',
    'experience.keyProjects': '主なプロジェクト',
    'experience.skillsEndorsements': 'スキルと推薦',
    'experience.keyResponsibilities': '主な責任',
    'experience.skills': '専門スキル',
    'experience.languageCommunication': '言語とコミュニケーション',
    'experience.yogaWellness': 'ヨガとウェルネス',

    // Experience page jobs
    'experience.jobs.consultant.role': 'コンサルタント',
    'experience.jobs.consultant.company': 'ICC コンサルタンツ株式会社',
    'experience.jobs.consultant.period': '2025年2月 - 現在',
    'experience.jobs.consultant.description': '東京都渋谷区にて、国際人材と日本企業をつなぎ、包括的なキャリアコンサルティングサービスを提供しています。',
    'experience.jobs.consultant.responsibility1': '日本での就職を目指す留学生や専門家に対してキャリアカウンセリングを提供し、現地の就職市場への適応を支援',
    'experience.jobs.consultant.responsibility2': '効果的なコミュニケーションと人材統合を確保するために企業と協力し、グローバルなビジネス関係を強化',
    'experience.jobs.consultant.responsibility3': '日本のプロフェッショナルな環境での道案内をサポートし、学生と企業の間の成功したパートナーシップを促進',

    'experience.jobs.marketing.role': 'マーケティングインターン',
    'experience.jobs.marketing.company': 'インターンシップ・イン・ジャパン by ICC コンサルタンツ',
    'experience.jobs.marketing.period': '2024年12月 - 2025年2月',
    'experience.jobs.marketing.description': '東京都渋谷区のハイブリッド環境で、デジタルマーケティング戦略を通じて留学生向けのインターンシップ機会を促進しました。',
    'experience.jobs.marketing.responsibility1': 'インターンシッププログラムを宣伝するためのコンテンツ作成、動画編集、ソーシャルメディア投稿をサポート',
    'experience.jobs.marketing.responsibility2': '留学生と受け入れ企業を惹きつけるためのデジタルマーケティング戦略を実施',
    'experience.jobs.marketing.responsibility3': 'ブランドの可視性とエンゲージメントを高め、学生の参加を増加',

    'experience.jobs.barista.role': 'バリスタ',
    'experience.jobs.barista.company': 'オレンジキャット株式会社',
    'experience.jobs.barista.period': '2023年6月 - 2024年7月',
    'experience.jobs.barista.description': '東京で対面で勤務し、忙しいカフェ環境で顧客サービスとチームワークのスキルを磨きました。',
    'experience.jobs.barista.responsibility1': '優れた顧客サービスと効率的な注文管理を提供',
    'experience.jobs.barista.responsibility2': '忙しいカフェ環境での時間管理と問題解決スキルを向上',
    'experience.jobs.barista.responsibility3': '高品質なサービスとスムーズなカフェ運営を確保し、コミュニケーションとチームワークのスキルを磨く',

    'experience.jobs.yoga.role': '認定ヨガインストラクター',
    'experience.jobs.yoga.company': 'フリーランス',
    'experience.jobs.yoga.period': '2018年 - 現在',
    'experience.jobs.yoga.description': 'マインドフルネス、ヴィンヤサフロー、総合的なウェルネスプラクティスに焦点を当てたグループおよびプライベートヨガセッションを指導。',
    'experience.jobs.yoga.responsibility1': '様々なスキルレベルの個人やグループ向けにヨガプログラムを設計・実施',
    'experience.jobs.yoga.responsibility2': '全体的なウェルネス実践を強化するためのマインドフルネス瞑想技術を統合',
    'experience.jobs.yoga.responsibility3': '正しいアライメントと呼吸法のためのパーソナライズされたガイダンスを提供',
    'experience.jobs.yoga.responsibility4': '実践者のための支援的で包括的な学習環境を創出',

    // Professional Skills
    'skills.careerCounseling': 'キャリアカウンセリング',
    'skills.studentCounseling': '学生カウンセリング',
    'skills.marketing': 'マーケティング',
    'skills.socialMediaMarketing': 'ソーシャルメディアマーケティング',
    'skills.socialMediaContentCreation': 'ソーシャルメディアコンテンツ制作',
    'skills.videoEditing': '動画編集',
    'skills.targetAudience': 'ターゲットオーディエンス分析',
    'skills.customerService': '接客サービス',
    'skills.teamwork': 'チームワーク',
    'skills.negotiation': '交渉力',
    'skills.teamManagement': 'チーム管理',
    'skills.adobeCreativeSuite': 'Adobe Creative Suite',
    
    // Language & Communication Skills
    'skills.communication': 'コミュニケーション',
    'skills.spokenEnglish': '英会話',
    'skills.english': '英語',
    'skills.japanese': '日本語',
    'skills.socialCommunication': 'ソーシャルコミュニケーション',
    'skills.presentations': 'プレゼンテーション',
    
    // Yoga & Wellness Skills
    'skills.yogaInstruction': 'ヨガ指導',
    'skills.vinyasa': 'ヴィンヤサ',
    'skills.mindfulnessMeditation': 'マインドフルネス瞑想',
    
    // Company Names
    'company.iccConsultants': 'ICC コンサルタンツ株式会社',
    'company.wasedaUniversity': '早稲田大学',
    'company.orangeCat': 'オレンジキャット株式会社',
    'company.yogaInstructor': '認定ヨガインストラクター',

    // Projects
    'projects.socialMedia.title': 'ソーシャルメディア成長キャンペーン',
    'projects.socialMedia.client': 'ICCコンサルタンツ株式会社',
    'projects.socialMedia.year': '2022年',
    'projects.socialMedia.description': 'ターゲットを絞ったコンテンツ戦略とオーディエンス分析により、ソーシャルメディアエンゲージメントを45%向上させました。',
    'projects.socialMedia.tag1': 'ソーシャルメディア',
    'projects.socialMedia.tag2': 'マーケティング',
    'projects.socialMedia.tag3': 'コンテンツ制作',

    'projects.careerVideo.title': 'キャリアパス動画シリーズ',
    'projects.careerVideo.client': 'ICCコンサルタンツ株式会社',
    'projects.careerVideo.year': '2022年',
    'projects.careerVideo.description': '日本で働く成功した国際的なプロフェッショナルたちへのインタビュー動画シリーズを制作・編集しました。',
    'projects.careerVideo.tag1': '動画編集',
    'projects.careerVideo.tag2': 'キャリアカウンセリング',
    'projects.careerVideo.tag3': 'メディア制作',

    'projects.crossCultural.title': '異文化職場トレーニング',
    'projects.crossCultural.client': '企業顧客',
    'projects.crossCultural.year': '2023年',
    'projects.crossCultural.description': '日本企業が国際社員をより良く統合するための研修資料を開発しました。',
    'projects.crossCultural.tag1': 'トレーニング',
    'projects.crossCultural.tag2': '異文化',
    'projects.crossCultural.tag3': '企業',

    'projects.mindfulness.title': 'プロフェッショナルのためのマインドフルネスワークショップ',
    'projects.mindfulness.client': 'フリーランス',
    'projects.mindfulness.year': '2022年',
    'projects.mindfulness.description': '企業顧客向けに、ヨガ、瞑想、ストレス管理テクニックを組み合わせたワークショップを企画・実施しました。',
    'projects.mindfulness.tag1': 'ウェルネス',
    'projects.mindfulness.tag2': 'ヨガ',
    'projects.mindfulness.tag3': '専門能力開発',

    // Home page
    'home.hero.greeting': 'こんにちは、私は',
    'home.hero.name': 'Bilguunnaran Uurtsaikh',
    'home.hero.title': '異文化キャリアコンサルタント',
    'home.hero.description': '英語、日本語、モンゴル語の3カ国語で、国際人材と日本の機会をつなぎます。',
    'home.hero.cta': 'お問い合わせ',
    
    'home.about.title': '私について',
    'home.about.description': '東京を拠点とする3カ国語を話すキャリアコンサルタントとして、国際的なプロフェッショナルの日本の就職市場での活動をサポートし、企業の多様なチーム構築をお手伝いします。',
    'home.about.button': '詳細を見る',
    
    'home.experience.title': '私の経験',
    'home.experience.description': '人材開発、マーケティング、国際関係の経験を活かし、プロフェッショナルな環境での文化的ギャップを埋める独自の視点を提供します。',
    'home.experience.button': '私の経歴を見る',
    
    'home.services.title': 'サービス',
    'home.services.forJobSeekers': '求職者の方へ',
    'home.services.jobSeekersDescription': 'キャリアカウンセリング、履歴書の最適化、面接準備、日本の就職市場に関するガイダンスを提供します。',
    'home.services.forCompanies': '企業の方へ',
    'home.services.companiesDescription': '国際人材の採用戦略と、より良い統合を促進するための異文化職場トレーニングを提供します。',
    'home.services.workshops': 'ワークショップ＆トレーニング',
    'home.services.workshopsDescription': '異文化コミュニケーションとプロフェッショナルな環境でのマインドフルネスに関する専門ワークショップを提供します。',
    
    'home.contact.title': 'ご連絡ください',
    'home.contact.description': '一緒に仕事をすることに興味がありますか？新しい機会やアイデアについて、いつでもご相談をお待ちしております。',
    'home.contact.button': 'お問い合わせ',

    // About page in detail
    'about.hero.title': '私について',
    'about.hero.subtitle': '文化の架け橋として、国境を超えた人材をつなぐ',
    
    'about.philosophy.title': '私の理念',
    'about.philosophy.content1': '意義あるキャリア開発は、文化的理解、個人の成長、専門的な機会の交差点で起こると信じています。',
    'about.philosophy.content2': '3カ国語の能力と多文化経験を通じて、国際人材と日本企業が共に繁栄できる架け橋を創造するために取り組んでいます。',
    'about.philosophy.content3': '私のアプローチは、実践的なキャリアガイダンスと文化的文脈を組み合わせ、専門家が単なる就職市場だけでなく、文化的なエコシステム全体を理解できるようサポートします。',
    
    'about.career.title': 'キャリアの焦点',
    'about.career.content1': '私のキャリアは、国際人材と日本の専門的な機会との間に意義ある関係を構築することに重点を置いています。',
    'about.career.content2': '3カ国語の能力と西洋・アジアのビジネス文化への深い理解を活かし、異文化間の専門的な関係における摩擦を軽減するお手伝いをしています。',
    'about.career.content3': '日本の職場文化の微妙なニュアンスを国際的なプロフェッショナルにガイドし、日本の組織がグローバル人材をより効果的に統合・維持する方法を理解するためのサポートを専門としています。',
    
    'about.interests.title': '個人的な興味',
    'about.interests.content1': '職業生活以外では、ワークライフバランスと職業的パフォーマンスを向上させるマインドフルネス実践に焦点を当てた認定ヨガインストラクターです。',
    'about.interests.content2': '言語と言語学に強い関心を持ち、複数の文化的文脈でのコミュニケーション能力向上に常に取り組んでいます。',
    'about.interests.content3': '旅行と文化探索は生涯の情熱であり、それらは常に私の視野を広げ、多様な背景を持つ人々との繋がりを深める能力を高めてくれます。',
    
    'about.jobSeekers.title': '求職者の方へ',
    'about.jobSeekers.point1': '日本市場に特化したパーソナライズされたキャリアカウンセリング',
    'about.jobSeekers.point2': '日本の採用コンテキストに合わせた履歴書とLinkedInの最適化',
    'about.jobSeekers.point3': '文化的コンテキストと期待を含めた面接準備',
    'about.jobSeekers.point4': '日本におけるビジネスマナーと職場文化に関するガイダンス',
    'about.jobSeekers.point5': '就職活動からオンボーディングプロセスまでの一貫したサポート',
    
    'about.employers.title': '採用企業の方へ',
    'about.employers.point1': '効果的な国際採用戦略に関するコンサルテーション',
    'about.employers.point2': '国際スタッフのための包括的な職場環境作りのサポート',
    'about.employers.point3': '管理職とチーム向けの異文化コミュニケーショントレーニング',
    'about.employers.point4': '文化的誤解に対応するための調停サービス',
    'about.employers.point5': '国際人材の定着率向上のための継続的なアドバイザリー',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  // Set default language based on browser settings
  useEffect(() => {
    if (typeof navigator !== 'undefined' && navigator.language.startsWith('ja')) {
      setLanguage('ja');
    }
  }, []);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
