/**
 * ============================================
 * Roaa Sultan - Portfolio Localization System
 * ============================================
 * نظام متعدد اللغات للملف الشخصي - رؤى سلطان
 * يدعم اللغتين العربية والإنجليزية
 * ============================================
 */

(function () {
  // ============================================
  // SECTION 1: CONFIGURATION & INITIALIZATION
  // ============================================
  
  /**
   * قائمة الصفحات في الموقع
   * List of all pages in the website
   */
  const pages = ["index.html", "kfmc.html", "smartcat.html", "family.html", "projects.html"];

  /**
   ============================================
   * SECTION 2: TRANSLATION DICTIONARY
   * ============================================
   * يحتوي على جميع النصوص المترجمة للغتين
   * Contains all translated texts for both languages
   */
  const dict = {
    en: {
      // ============ Navigation ============
      nav_home: "Home",
      nav_kfmc: "KFMC",
      nav_smartcat: "Smartcat",
      nav_family: "Family Platform",
      nav_projects: "Projects",
      lang_btn: "AR",
      
      // ============ CV Download ============
      hero_cv: "Download CV",

      // ============ Hero Section ============
      hero_kicker: "Riyadh, Saudi Arabia • Software Developer",
      hero_title: "Roaa Sultan",
      hero_sub: "Software Developer with hands-on experience in ASP.NET, CRUD operations, reporting (PDF/Excel), and building user-friendly systems across medical and family management platforms.",
      hero_cta1: "View Projects",
      hero_cta2: "Contact",

      // ============ Quick Info ============
      quick_title: "Quick Info",
      quick_email: "Email",
      quick_phone: "Phone",
      quick_langs: "Languages",
      quick_langs_val: "Arabic (Native) • English (Advanced)",

      // ============ Professional Summary ============
      sec_summary: "Professional Summary",
      summary_text: "Emerging Software Developer experienced in building and enhancing electronic systems using ASP.NET, implementing CRUD, and integrating data with clean, usable interfaces. Strong in IT support, remote technical management, and cross-functional collaboration.",

      // ============ Experience ============
      sec_experience: "Professional Experience",
      exp1_title: "Smartcat Company",
      exp1_role: "IT Department Manager (Remote)",
      exp1_date: "Feb 2024 – Nov 2025",
      exp1_text: "Directed IT operations, provided remote technical support, resolved web platform issues, supported digital project execution, and delivered periodic performance reports.",
      exp2_title: "King Fahad Medical City",
      exp2_role: "Tamheer Trainee – IT Technical Support & Systems Developer",
      exp2_date: "Jan 2025 – Present",
      exp2_text: "Frontline IT support and systems maintenance in a healthcare environment; designed interfaces and automated structured operational reporting (PDF/Excel); improved usability via workflow automation and feedback-driven refinements.",
      exp3_title: "King Fahad Medical City",
      exp3_role: "Cooperative Trainee – Full-Stack Web Developer",
      exp3_date: "Jan 2025 – May 2025",
      exp3_text: "Developed an electronic clearance & permit management system using ASP.NET. Implemented CRUD, integrated modules, designed UI, and automated administrative processes with reporting.",
      exp4_title: "Aloha Spa",
      exp4_role: "Receptionist & Administrative Support",
      exp4_date: "Apr 2023 – Jul 2023",
      exp4_text: "Managed appointments, handled inquiries, supported admin operations, and coordinated booking & scheduling.",

      // ============ Skills ============
      sec_skills: "Skills",
      skills_tech: "Technical",
      skills_pro: "Professional",
      skills_personal: "Personal",

      // ============ Education ============
      sec_edu: "Education",
      edu_title: "Diploma in Computer Science – Programming",
      edu_place: "Princess Nourah bint Abdulrahman University (PNU) • 2025",

      // ============ Certifications ============
      sec_certs: "Courses & Certifications",
      c1: "English for IT 1 — Cisco Networking Academy & OpenEDG (Nov 2024)",
      c2: "Training Certificate — King Fahad Medical City (Jan–May 2025)",
      c3: "Effective Communication in the Workplace — KFMC (Feb 2025)",
      c4: "GSO Program Certificate — KFMC (Feb 2025)",

      // ============ Contact ============
      sec_contact: "Contact",
      contact_hint: "This form is optional. If you're hosting static only, use the email link.",
      form_name: "Name",
      form_email: "Email",
      form_msg: "Message",
      form_send: "Send",

      // ============ Page Titles ============
      kfmc_title: "KFMC Experience",
      kfmc_sub: "Highlights of roles and contributions at King Fahad Medical City.",
      smartcat_title: "Smartcat Experience",
      smartcat_sub: "Remote IT management and technical support highlights.",
      family_title: "Family Platform (Web & Android)",
      family_sub: "A synchronized family management system across Web and Android.",
      projects_title: "Projects",
      projects_sub: "A concise list of key systems and platforms built/contributed to.",

      // ============ Projects ============
      p1: "Electronic Clearance & Permit Management System",
      p1d: "ASP.NET system to manage permits/approvals with CRUD, modular integration, and automated PDF/Excel reporting.",
      p2: "Family Management Platform (Web & Android)",
      p2d: "Expense tracking, shared tasks, family calendars, and real-time notes with cross-device synchronization.",
      p3: "Family Android Application",
      p3d: "Android companion app for the family platform with consistent experience and synced data.",
      p4: "Roaahub — Smartcat Product (2025)",
      p4d: "Product contribution within Smartcat ecosystem (technical support + digital project execution).",

      // ============ Footer ============
      footer: "© 2026 Roaa Sultan — Built as a lightweight bilingual portfolio."
    },
    
    ar: {
      // ============ التنقل ============
      nav_home: "الرئيسية",
      nav_kfmc: "المدينة الطبية",
      nav_smartcat: "سمارت كات",
      nav_family: "منصة الأسرة",
      nav_projects: "المشاريع",
      lang_btn: "English",
      
      // ============ تحميل السيرة ============
      hero_cv: "تحميل السيرة الذاتية",

      // ============ قسم البطل ============
      hero_kicker: "الرياض، المملكة العربية السعودية • مطورة برمجيات",
      hero_title: "رؤى سلطان",
      hero_sub: "مطورة برمجيات تتمتع بخبرة عملية في ASP.NET، عمليات CRUD، إنشاء التقارير (PDF/Excel)، وبناء أنظمة سهلة الاستخدام في المنصات الطبية وإدارة الأسرة.",
      hero_cta1: "عرض المشاريع",
      hero_cta2: "تواصل معي",

      // ============ معلومات سريعة ============
      quick_title: "معلومات سريعة",
      quick_email: "البريد الإلكتروني",
      quick_phone: "رقم الجوال",
      quick_langs: "اللغات",
      quick_langs_val: "العربية (اللغة الأم) • الإنجليزية (متقدم)",

      // ============ الملخص المهني ============
      sec_summary: "الملخص المهني",
      summary_text: "مطورة برمجيات ناشئة لديها خبرة في بناء وتطوير الأنظمة الإلكترونية باستخدام ASP.NET، وتنفيذ عمليات CRUD ودمج البيانات مع واجهات نظيفة وقابلة للاستخدام. تتمتع بمهارات قوية في الدعم الفني، والإدارة التقنية عن بعد، والتعاون بين الفرق المختلفة.",

      // ============ الخبرات ============
      sec_experience: "الخبرة المهنية",
      exp1_title: "شركة سمارت كات",
      exp1_role: "مديرة قسم تكنولوجيا المعلومات (عن بُعد)",
      exp1_date: "فبراير 2024 – نوفمبر 2025",
      exp1_text: "توجيه عمليات تكنولوجيا المعلومات، تقديم الدعم الفني عن بعد، حل مشاكل منصات الويب، دعم تنفيذ المشاريع الرقمية، وتقديم تقارير أداء دورية.",
      exp2_title: "مدينة الملك فهد الطبية",
      exp2_role: "متدربة تمهير – دعم فني وتطوير أنظمة",
      exp2_date: "يناير 2025 – حتى الآن",
      exp2_text: "الدعم الفني الأمامي وصيانة الأنظمة في بيئة الرعاية الصحية؛ تصميم الواجهات وأتمتة التقارير التشغيلية المنظمة (PDF/Excel)؛ تحسين سهولة الاستخدام عبر أتمتة سير العمل والتعديلات القائمة على الملاحظات.",
      exp3_title: "مدينة الملك فهد الطبية",
      exp3_role: "متدربة تعاونية – مطورة ويب شاملة",
      exp3_date: "يناير 2025 – مايو 2025",
      exp3_text: "تطوير نظام إلكتروني لإدارة التصاريح والموافقات باستخدام ASP.NET. تنفيذ عمليات CRUD، دمج الوحدات، تصميم واجهة المستخدم، وأتمتة العمليات الإدارية مع التقارير.",
      exp4_title: "ألوها سبا",
      exp4_role: "موظفة استقبال ودعم إداري",
      exp4_date: "أبريل 2023 – يوليو 2023",
      exp4_text: "إدارة المواعيد، التعامل مع الاستفسارات، دعم العمليات الإدارية، وتنسيق الحجوزات والجدولة.",

      // ============ المهارات ============
      sec_skills: "المهارات",
      skills_tech: "تقنية",
      skills_pro: "مهنية",
      skills_personal: "شخصية",

      // ============ التعليم ============
      sec_edu: "التعليم",
      edu_title: "دبلوم علوم الحاسب – البرمجة",
      edu_place: "جامعة الأميرة نورة بنت عبدالرحمن (PNU) • 2025",

      // ============ الشهادات ============
      sec_certs: "الدورات والشهادات",
      c1: "الإنجليزية لتكنولوجيا المعلومات 1 — أكاديمية سيسكو للشبكات و OpenEDG (نوفمبر 2024)",
      c2: "شهادة التدريب — مدينة الملك فهد الطبية (يناير–مايو 2025)",
      c3: "التواصل الفعال في مكان العمل — KFMC (فبراير 2025)",
      c4: "شهادة برنامج GSO — KFMC (فبراير 2025)",

      // ============ التواصل ============
      sec_contact: "اتصل بي",
      contact_hint: "هذا النموذج اختياري. إذا كان الموقع ثابتًا فقط، استخدم رابط البريد الإلكتروني.",
      form_name: "الاسم",
      form_email: "البريد الإلكتروني",
      form_msg: "الرسالة",
      form_send: "إرسال",

      // ============ عناوين الصفحات ============
      kfmc_title: "خبرة المدينة الطبية",
      kfmc_sub: "أبرز الأدوار والمساهمات في مدينة الملك فهد الطبية.",
      smartcat_title: "خبرة سمارت كات",
      smartcat_sub: "إدارة الدعم الفني والمهام التقنية عن بُعد.",
      family_title: "منصة إدارة الأسرة (ويب وأندرويد)",
      family_sub: "نظام متزامن لإدارة شؤون الأسرة عبر الويب والأندرويد.",
      projects_title: "المشاريع",
      projects_sub: "قائمة موجزة لأهم الأنظمة والمنصات التي تم بناؤها/المساهمة فيها.",

      // ============ المشاريع ============
      p1: "نظام إدارة التصاريح والموافقات الإلكتروني",
      p1d: "نظام ASP.NET لإدارة التصاريح والموافقات مع عمليات CRUD، دمج وحدات، وتوليد تقارير PDF/Excel آليًا.",
      p2: "منصة إدارة الأسرة (ويب وأندرويد)",
      p2d: "تتبع المصروفات، مهام مشتركة، تقاويم عائلية، وملاحظات فورية مع مزامنة عبر الأجهزة.",
      p3: "تطبيق الأسرة (أندرويد)",
      p3d: "تطبيق مرافق لمنصة الأسرة مع تجربة متسقة ومزامنة البيانات.",
      p4: "رؤى هب — منتج سمارت كات (2025)",
      p4d: "مساهمة ضمن منظومة سمارت كات (دعم فني + دعم تنفيذ المشاريع الرقمية).",

      // ============ التذييل ============
      footer: "© 2026 رؤى سلطان — موقع تعريفي خفيف الوزن يدعم لغتين."
    }
  };

  // ============================================
  // SECTION 3: UTILITY FUNCTIONS
  // ============================================

  /**
   * الحصول على اسم الصفحة الحالية
   * Get the current page name
   * @returns {string} اسم الصفحة الحالية | Current page name
   */
  function getCurrentPage() {
    try {
      const path = window.location.pathname;
      const fileName = path.split('/').pop() || 'index.html';
      return fileName.toLowerCase();
    } catch (error) {
      console.error('❌ خطأ في الحصول على الصفحة الحالية:', error);
      return 'index.html';
    }
  }

  /**
   * تعيين التنقل النشط بناءً على الصفحة الحالية
   * Set active navigation based on current page
   */
  function setActiveNav() {
    try {
      const currentPage = getCurrentPage();
      const navLinks = document.querySelectorAll('[data-nav]');
      
      navLinks.forEach(link => {
        if (!link) return;
        
        const linkHref = link.getAttribute('href') || '';
        const linkPage = linkHref.split('/').pop().toLowerCase();
        
        // التحقق إذا كانت الصفحة الحالية هي الصفحة الرئيسية
        const isActive = linkPage === currentPage || 
                        (currentPage === 'index.html' && (linkPage === '' || linkPage === 'index.html'));
        
        // إضافة/إزالة فئة النشط
        link.classList.toggle('active', isActive);
        
        // إضافة سمة aria-current للمساعدة في الوصول
        if (isActive) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });
      
      console.log('✅ تم تعيين التنقل النشط للصفحة:', currentPage);
    } catch (error) {
      console.error('❌ خطأ في تعيين التنقل النشط:', error);
    }
  }

  /**
   * تحديث عنوان الصفحة حسب اللغة
   * Update page title based on language
   * @param {string} lang - اللغة الحالية | Current language
   * @param {string} page - الصفحة الحالية | Current page
   */
  function updatePageTitle(lang, page) {
    try {
      const titleMap = {
        'index.html': {
          en: 'Roaa Sultan • Portfolio',
          ar: 'رؤى سلطان • الملف الشخصي'
        },
        'kfmc.html': {
          en: 'KFMC • Roaa Sultan',
          ar: 'المدينة الطبية • رؤى سلطان'
        },
        'smartcat.html': {
          en: 'Smartcat • Roaa Sultan',
          ar: 'سمارت كات • رؤى سلطان'
        },
        'family.html': {
          en: 'Family Platform • Roaa Sultan',
          ar: 'منصة الأسرة • رؤى سلطان'
        },
        'projects.html': {
          en: 'Projects • Roaa Sultan',
          ar: 'المشاريع • رؤى سلطان'
        }
      };

      if (titleMap[page] && titleMap[page][lang]) {
        document.title = titleMap[page][lang];
        console.log(`✅ تم تحديث عنوان الصفحة إلى: "${titleMap[page][lang]}"`);
      }
    } catch (error) {
      console.error('❌ خطأ في تحديث عنوان الصفحة:', error);
    }
  }

  /**
   * تحديث التنسيق بناءً على اللغة
   * Update layout based on language
   * @param {string} lang - اللغة الحالية | Current language
   */
  function updateLayoutForLanguage(lang) {
    try {
      // إضافة فئة للجسم بناءً على اللغة
      document.body.classList.remove('lang-ar', 'lang-en');
      document.body.classList.add(`lang-${lang}`);
      
      // تحديث تنسيق العناصر النصية للغة العربية
      if (lang === 'ar') {
        // تحديث خطوط النصوص للغة العربية
        const textElements = document.querySelectorAll('body *:not(script):not(style)');
        textElements.forEach(el => {
          if (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
            el.style.fontFamily = "'Segoe UI', 'Tahoma', 'Arial', sans-serif";
          }
        });
        
        // تحسين تباعد الأسطر للغة العربية
        const paragraphs = document.querySelectorAll('p, li, .muted, .h-sub');
        paragraphs.forEach(p => {
          p.style.lineHeight = '1.8';
        });
        
        // تحسين تباعد الحروف للعناوين
        const headings = document.querySelectorAll('h1, h2, h3, .h-title, .h2');
        headings.forEach(h => {
          h.style.letterSpacing = 'normal';
          h.style.fontWeight = '600';
        });
      } else {
        // إعادة تعيين التنسيقات للغة الإنجليزية
        const textElements = document.querySelectorAll('body *:not(script):not(style)');
        textElements.forEach(el => {
          if (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
            el.style.fontFamily = '';
          }
        });
        
        const paragraphs = document.querySelectorAll('p, li, .muted, .h-sub');
        paragraphs.forEach(p => {
          p.style.lineHeight = '';
        });
        
        const headings = document.querySelectorAll('h1, h2, h3, .h-title, .h2');
        headings.forEach(h => {
          h.style.letterSpacing = '';
          h.style.fontWeight = '';
        });
      }
      
      console.log(`✅ تم تحديث التنسيق للغة: ${lang}`);
    } catch (error) {
      console.error('❌ خطأ في تحديث التنسيق:', error);
    }
  }

  /**
   * إضافة تأثير انتقال عند تغيير اللغة
   * Add transition effect when changing language
   */
  function addLanguageTransition() {
    try {
      document.body.style.opacity = '0.7';
      document.body.style.transition = 'opacity 0.3s ease-in-out';
      
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 50);
      
      setTimeout(() => {
        document.body.style.transition = '';
      }, 350);
      
      console.log('✅ تم تطبيق تأثير الانتقال');
    } catch (error) {
      console.error('❌ خطأ في إضافة تأثير الانتقال:', error);
    }
  }

  /**
   * إصلاح مشكلة الملفات المفقودة للسيرة الذاتية
   * Fix missing CV file issue
   */
  function fixCVDownload() {
    try {
      const cvLinks = document.querySelectorAll('a[href*="CV"], a[download]');
      cvLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes('CV')) {
          // التحقق من وجود الملف
          fetch(href)
            .then(response => {
              if (!response.ok) {
                console.warn(`⚠️ الملف غير موجود: ${href}`);
                // اقتراح مسار بديل
                link.setAttribute('href', 'assets/Roaa_Sultan_CV.pdf');
                link.setAttribute('download', 'Roaa_Sultan_CV.pdf');
                console.log('✅ تم تعيين مسار بديل للسيرة الذاتية');
              }
            })
            .catch(() => {
              console.warn(`⚠️ خطأ في الوصول إلى الملف: ${href}`);
            });
        }
      });
    } catch (error) {
      console.error('❌ خطأ في إصلاح تحميل السيرة:', error);
    }
  }

  // ============================================
  // SECTION 4: CORE LANGUAGE MANAGEMENT
  // ============================================

  /**
   * تطبيق اللغة على كافة عناصر الصفحة
   * Apply language to all page elements
   * @param {string} lang - اللغة المراد تطبيقها | Language to apply
   */
  function applyLang(lang) {
    try {
      console.log(`🔄 جاري تطبيق اللغة: ${lang}`);
      
      // التحقق من وجود اللغة في القاموس
      if (!dict[lang]) {
        console.warn(`⚠️ اللغة ${lang} غير موجودة، سيتم استخدام الإنجليزية`);
        lang = 'en';
      }

      const translations = dict[lang];
      const currentPage = getCurrentPage();
      
      // ======== تحديث إعدادات الصفحة الأساسية ========
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      
      // تحديث عنوان الصفحة
      updatePageTitle(lang, currentPage);
      
      // حفظ اللغة في التخزين المحلي
      try {
        localStorage.setItem('portfolio_lang', lang);
        console.log(`💾 تم حفظ اللغة في التخزين المحلي: ${lang}`);
      } catch (storageError) {
        console.warn('⚠️ تعذر حفظ تفضيل اللغة في التخزين المحلي:', storageError);
      }

      // ======== تحديث النصوص ========
      console.log('🔤 جاري تحديث النصوص...');
      
      // تحديث النصوص العادية
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
          element.textContent = translations[key];
        } else if (dict.en[key]) {
          console.warn(`⚠️ النص المترجم مفقود للمفتاح "${key}" في ${lang}، سيتم استخدام الإنجليزية`);
          element.textContent = dict.en[key];
        }
      });

      // تحديث النصوص التوضيحية
      document.querySelectorAll('[data-i18n-ph]').forEach(element => {
        const key = element.getAttribute('data-i18n-ph');
        if (translations[key]) {
          element.setAttribute('placeholder', translations[key]);
        }
      });

      // تحديث أزرار القيمة
      document.querySelectorAll('[data-i18n-value]').forEach(element => {
        const key = element.getAttribute('data-i18n-value');
        if (translations[key]) {
          element.setAttribute('value', translations[key]);
        }
      });

      // تحديث العناوين البديلة
      document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (translations[key]) {
          element.setAttribute('title', translations[key]);
        }
      });

      // ======== تحديث زر اللغة ========
      const langButton = document.getElementById('langBtn');
      if (langButton && translations.lang_btn) {
        langButton.textContent = translations.lang_btn;
        langButton.setAttribute('aria-label', 
          lang === 'ar' ? 'التغيير إلى الإنجليزية' : 'Switch to Arabic'
        );
        console.log('🔘 تم تحديث زر اللغة');
      }

      // ======== تحديث التنسيقات ========
      updateLayoutForLanguage(lang);
      
      // ======== إعادة تعيين التنقل ========
      setActiveNav();
      
      // ======== إضافة تأثيرات ========
      addLanguageTransition();
      
      // ======== إصلاح السيرة الذاتية ========
      fixCVDownload();
      
      console.log(`✅ تم تطبيق اللغة ${lang} بنجاح!`);
      
    } catch (error) {
      console.error('❌ خطأ في تطبيق اللغة:', error);
      // المحاولة باستخدام الإنجليزية كاحتياطي
      try {
        if (lang !== 'en') {
          console.log('🔄 المحاولة باستخدام الإنجليزية كاحتياطي...');
          applyLang('en');
        }
      } catch (fallbackError) {
        console.error('❌ فشل الاحتياطي أيضاً:', fallbackError);
      }
    }
  }

  // ============================================
  // SECTION 5: INITIALIZATION FUNCTIONS
  // ============================================

  /**
   * تهيئة إعدادات اللغة
   * Initialize language settings
   */
  function initializeLanguage() {
    try {
      console.log('🚀 بدء تهيئة النظام...');
      
      let savedLang = 'en';
      
      // محاولة استرجاع اللغة المحفوظة
      try {
        savedLang = localStorage.getItem('portfolio_lang') || 'en';
        console.log(`📖 اللغة المحفوظة: ${savedLang}`);
      } catch (storageError) {
        console.warn('⚠️ تعذر قراءة تفضيل اللغة:', storageError);
      }

      // الكشف التلقائي عن لغة المتصفح
      const browserLang = navigator.language || navigator.userLanguage;
      if (!savedLang || savedLang === 'en') {
        if (browserLang.startsWith('ar')) {
          savedLang = 'ar';
          console.log('🌍 تم الكشف عن اللغة العربية من المتصفح');
        }
      }

      // التحقق من صحة اللغة
      if (!dict[savedLang]) {
        console.warn(`⚠️ اللغة ${savedLang} غير صالحة، سيتم استخدام الإنجليزية`);
        savedLang = 'en';
      }

      // تطبيق اللغة
      applyLang(savedLang);

      // إضافة مستمع الحدث لزر اللغة
      const langButton = document.getElementById('langBtn');
      if (langButton) {
        langButton.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          const currentLang = document.documentElement.lang || 'en';
          const newLang = currentLang === 'en' ? 'ar' : 'en';
          
          console.log(`🔄 تغيير اللغة من ${currentLang} إلى ${newLang}`);
          
          // تأثير بسيط عند النقر
          this.style.transform = 'scale(0.9)';
          setTimeout(() => {
            this.style.transform = '';
          }, 200);
          
          applyLang(newLang);
        });
        
        console.log('🎯 تم إعداد مستمع زر اللغة');
      }

    } catch (error) {
      console.error('❌ خطأ في تهيئة اللغة:', error);
      // المحاولة باستخدام الإنجليزية
      try {
        applyLang('en');
      } catch (fallbackError) {
        console.error('❌ فشل التهيئة الاحتياطية:', fallbackError);
      }
    }
  }

  /**
   * تحسين تحميل الصفحة
   * Enhance page loading
   */
  function enhancePageLoad() {
    try {
      // إضافة تأثير تحميل
      window.addEventListener('load', function() {
        setTimeout(() => {
          document.body.style.opacity = '1';
          document.body.style.transition = 'opacity 0.5s ease';
          console.log('✨ تم تحميل الصفحة');
        }, 100);
      });

      // تحسين تجربة التنقل بين الصفحات
      document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href]');
        if (link && link.getAttribute('href') && 
            !link.getAttribute('href').startsWith('http') &&
            !link.getAttribute('href').startsWith('mailto') &&
            !link.getAttribute('href').startsWith('tel') &&
            link.getAttribute('href') !== '#' &&
            !link.getAttribute('href').includes('#')) {
          
          // تأثير انتقال لطيف
          document.body.style.opacity = '0.8';
          document.body.style.transition = 'opacity 0.2s ease';
          
          setTimeout(() => {
            document.body.style.opacity = '1';
          }, 300);
        }
      });
      
      console.log('⚡ تم تحسين تحميل الصفحة');
    } catch (error) {
      console.error('❌ خطأ في تحسين تحميل الصفحة:', error);
    }
  }

  /**
   * التحقق من الصور المفقودة
   * Check for missing images
   */
  function checkMissingImages() {
    try {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        img.addEventListener('error', function() {
          console.warn(`⚠️ الصورة غير موجودة: ${this.src}`);
          this.style.display = 'none';
          const altText = this.alt || 'صورة';
          const replacement = document.createElement('div');
          replacement.className = 'image-placeholder';
          replacement.textContent = `[${altText}]`;
          replacement.style.cssText = `
            background: rgba(232, 60, 65, 0.1);
            border: 2px dashed rgba(232, 60, 65, 0.3);
            border-radius: 10px;
            padding: 20px;
            text-align: center;
            color: rgba(255,255,255,0.6);
            font-size: 14px;
          `;
          this.parentNode.insertBefore(replacement, this);
        });
      });
    } catch (error) {
      console.error('❌ خطأ في التحقق من الصور:', error);
    }
  }

  // ============================================
  // SECTION 6: MAIN INITIALIZATION
  // ============================================

  /**
   * وظيفة التهيئة الرئيسية
   * Main initialization function
   */
  function initialize() {
    try {
      console.log('🎬 بدء تشغيل نظام الترجمة...');
      
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
          console.log('📄 تم تحميل DOM');
          setActiveNav();
          initializeLanguage();
          enhancePageLoad();
          checkMissingImages();
        });
      } else {
        console.log('⚡ DOM محمل بالفعل، بدء التهيئة الفورية');
        setActiveNav();
        initializeLanguage();
        enhancePageLoad();
        checkMissingImages();
      }
      
    } catch (error) {
      console.error('❌ خطأ في التهيئة الرئيسية:', error);
    }
  }

  // ============================================
  // SECTION 7: GLOBAL EXPORTS
  // ============================================

  /**
   * تصدير الوظائف للاستخدام الخارجي
   * Export functions for external use
   */
  window.portfolioLocalization = {
    /**
     * تغيير اللغة يدوياً
     * Change language manually
     * @param {string} lang - اللغة (ar/en)
     */
    setLanguage: applyLang,
    
    /**
     * الحصول على اللغة الحالية
     * Get current language
     * @returns {string} اللغة الحالية
     */
    getCurrentLanguage: function() {
      return document.documentElement.lang || 'en';
    },
    
    /**
     * الحصول على قاموس الترجمة
     * Get translation dictionary
     * @returns {object} القاموس الكامل
     */
    getDictionary: function() {
      return dict;
    },
    
    /**
     * إعادة تعيين التنقل
     * Reset navigation
     */
    resetNavigation: setActiveNav,
    
    /**
     * إعادة تحميل الصفحة مع لغة محددة
     * Reload page with specific language
     * @param {string} lang - اللغة المطلوبة
     */
    reloadWithLanguage: function(lang) {
      if (dict[lang]) {
        localStorage.setItem('portfolio_lang', lang);
        window.location.reload();
      }
    }
  };

  // ============================================
  // SECTION 8: START THE APPLICATION
  // ============================================
  
  // بدء تشغيل التطبيق
  initialize();

  // إضافة رسالة ترحيب في وحدة التحكم
  console.log('========================================');
  console.log('🌐 نظام ترجمة رؤى سلطان - مفعل');
  console.log('📚 الإصدار: 2.0.0');
  console.log('👨‍💻 المطور: فريق الدعم');
  console.log('📅 تم التحديث: ' + new Date().toLocaleDateString());
  console.log('========================================');

})();
