(function () {
  const pages = ["index.html","kfmc.html","smartcat.html","family.html","projects.html"];

  const dict = {
    en: {
      nav_home: "Home",
      nav_kfmc: "KFMC",
      nav_smartcat: "Smartcat",
      nav_family: "Family Platform",
      nav_projects: "Projects",
      lang_btn: "AR",

      hero_kicker: "Riyadh, Saudi Arabia • Software Developer",
      hero_title: "Roaa Sultan",
      hero_sub: "Software Developer with hands-on experience in ASP.NET, CRUD operations, reporting (PDF/Excel), and building user-friendly systems across medical and family management platforms.",
      hero_cta1: "View Projects",
      hero_cta2: "Contact",

      quick_title: "Quick Info",
      quick_email: "Email",
      quick_phone: "Phone",
      quick_langs: "Languages",
      quick_langs_val: "Arabic (Native) • English (Advanced)",

      sec_summary: "Professional Summary",
      summary_text: "Emerging Software Developer experienced in building and enhancing electronic systems using ASP.NET, implementing CRUD, and integrating data with clean, usable interfaces. Strong in IT support, remote technical management, and cross-functional collaboration.",

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

      sec_skills: "Skills",
      skills_tech: "Technical",
      skills_pro: "Professional",
      skills_personal: "Personal",

      sec_edu: "Education",
      edu_title: "Diploma in Computer Science – Programming",
      edu_place: "Princess Nourah bint Abdulrahman University (PNU) • 2025",

      sec_certs: "Courses & Certifications",
      c1: "English for IT 1 — Cisco Networking Academy & OpenEDG (Nov 2024)",
      c2: "Training Certificate — King Fahad Medical City (Jan–May 2025)",
      c3: "Effective Communication in the Workplace — KFMC (Feb 2025)",
      c4: "GSO Program Certificate — KFMC (Feb 2025)",

      sec_contact: "Contact",
      contact_hint: "This form is optional. If you're hosting static only, use the email link.",
      form_name: "Name",
      form_email: "Email",
      form_msg: "Message",
      form_send: "Send",

      kfmc_title: "KFMC Experience",
      kfmc_sub: "Highlights of roles and contributions at King Fahad Medical City.",
      smartcat_title: "Smartcat Experience",
      smartcat_sub: "Remote IT management and technical support highlights.",
      family_title: "Family Platform (Web & Android)",
      family_sub: "A synchronized family management system across Web and Android.",
      projects_title: "Projects",
      projects_sub: "A concise list of key systems and platforms built/contributed to.",

      p1: "Electronic Clearance & Permit Management System",
      p1d: "ASP.NET system to manage permits/approvals with CRUD, modular integration, and automated PDF/Excel reporting.",
      p2: "Family Management Platform (Web & Android)",
      p2d: "Expense tracking, shared tasks, family calendars, and real-time notes with cross-device synchronization.",
      p3: "Family Android Application",
      p3d: "Android companion app for the family platform with consistent experience and synced data.",
      p4: "Roaahub — Smartcat Product (2025)",
      p4d: "Product contribution within Smartcat ecosystem (technical support + digital project execution).",

      footer: "© 2026 Roaa Sultan — Built as a lightweight bilingual portfolio."
    },
    ar: {
      nav_home: "الرئيسية",
      nav_kfmc: "KFMC",
      nav_smartcat: "Smartcat",
      nav_family: "منصة العائلة",
      nav_projects: "المشاريع",
      lang_btn: "EN",

      hero_kicker: "الرياض، السعودية • مطورة برمجيات",
      hero_title: "رؤى سلطان",
      hero_sub: "مطورة برمجيات بخبرة عملية في ASP.NET وعمليات CRUD وإخراج التقارير (PDF/Excel) وبناء أنظمة سهلة الاستخدام في بيئات طبية ومنصات إدارة الأسرة.",
      hero_cta1: "عرض المشاريع",
      hero_cta2: "تواصل",

      quick_title: "معلومات سريعة",
      quick_email: "البريد",
      quick_phone: "الجوال",
      quick_langs: "اللغات",
      quick_langs_val: "العربية (أم) • الإنجليزية (متقدم)",

      sec_summary: "الملخص المهني",
      summary_text: "مطورة برمجيات ناشئة لديها خبرة في بناء وتطوير الأنظمة الإلكترونية باستخدام ASP.NET، وتنفيذ CRUD وربط البيانات مع واجهات واضحة وسهلة. متمكنة في الدعم الفني وإدارة الدعم عن بُعد والتعاون مع الفرق.",

      sec_experience: "الخبرات العملية",
      exp1_title: "شركة Smartcat",
      exp1_role: "مديرة قسم تقنية المعلومات (عن بُعد)",
      exp1_date: "فبراير 2024 – نوفمبر 2025",
      exp1_text: "إدارة عمليات التقنية وتقديم دعم فني عن بُعد، حل مشاكل منصات الويب، دعم تنفيذ المشاريع الرقمية، ورفع تقارير أداء دورية للإدارة.",
      exp2_title: "مدينة الملك فهد الطبية",
      exp2_role: "متدربة تمهير — دعم فني وتقنيات / مطورة أنظمة",
      exp2_date: "يناير 2025 – حتى الآن",
      exp2_text: "دعم فني وصيانة أنظمة في بيئة طبية، تصميم واجهات وتوليد تقارير تشغيلية منظمة (PDF/Excel)، وتحسين تجربة المستخدم عبر الأتمتة وتحسين سير العمل.",
      exp3_title: "مدينة الملك فهد الطبية",
      exp3_role: "متدربة تعاونية — مطورة ويب Full-Stack",
      exp3_date: "يناير 2025 – مايو 2025",
      exp3_text: "تطوير نظام إخلاء طرف وإدارة تصاريح باستخدام ASP.NET، تنفيذ CRUD وربط وحدات النظام، تصميم واجهات، وأتمتة الإجراءات الإدارية مع تقارير.",
      exp4_title: "Aloha Spa",
      exp4_role: "استقبال ودعم إداري",
      exp4_date: "أبريل 2023 – يوليو 2023",
      exp4_text: "إدارة المواعيد، الرد على الاستفسارات، دعم إداري، وتنظيم الحجوزات والجدولة.",

      sec_skills: "المهارات",
      skills_tech: "تقنية",
      skills_pro: "مهنية",
      skills_personal: "شخصية",

      sec_edu: "التعليم",
      edu_title: "دبلوم علوم الحاسب — برمجة",
      edu_place: "جامعة الأميرة نورة بنت عبدالرحمن (PNU) • 2025",

      sec_certs: "الدورات والشهادات",
      c1: "English for IT 1 — Cisco Networking Academy & OpenEDG (نوفمبر 2024)",
      c2: "شهادة تدريب — مدينة الملك فهد الطبية (يناير–مايو 2025)",
      c3: "التواصل الفعال في بيئة العمل — KFMC (فبراير 2025)",
      c4: "شهادة برنامج GSO — KFMC (فبراير 2025)",

      sec_contact: "التواصل",
      contact_hint: "النموذج اختياري. إذا الموقع ثابت، استخدمي رابط البريد.",
      form_name: "الاسم",
      form_email: "البريد",
      form_msg: "الرسالة",
      form_send: "إرسال",

      kfmc_title: "خبرة KFMC",
      kfmc_sub: "أبرز الأدوار والمساهمات في مدينة الملك فهد الطبية.",
      smartcat_title: "خبرة Smartcat",
      smartcat_sub: "إدارة دعم تقنية ومهام تقنية عن بُعد.",
      family_title: "منصة إدارة الأسرة (ويب وأندرويد)",
      family_sub: "نظام متزامن لإدارة شؤون الأسرة بين الويب والأندرويد.",
      projects_title: "المشاريع",
      projects_sub: "قائمة مختصرة بأهم الأنظمة والمنصات.",

      p1: "نظام إخلاء الطرف وإدارة التصاريح",
      p1d: "نظام ASP.NET لإدارة التصاريح والموافقات مع CRUD وربط وحدات متعددة وتوليد تقارير PDF/Excel.",
      p2: "منصة إدارة الأسرة (ويب وأندرويد)",
      p2d: "تتبع المصروفات، مهام مشتركة، تقويم عائلي، وملاحظات فورية مع تزامن كامل بين الأجهزة.",
      p3: "تطبيق الأسرة (أندرويد)",
      p3d: "تطبيق مرافق للمنصة مع تجربة متسقة وتزامن بيانات.",
      p4: "Roaahub — منتج Smartcat (2025)",
      p4d: "مساهمة ضمن منظومة Smartcat (دعم تقني + دعم تنفيذ المشاريع الرقمية).",

      footer: "© 2026 رؤى سلطان — موقع تعريفي خفيف يدعم لغتين."
    }
  };

  function setActiveNav() {
    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll("[data-nav]").forEach(a => {
      a.classList.toggle("active", a.getAttribute("href").toLowerCase() === path);
    });
  }

  function applyLang(lang) {
    const d = dict[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (d[key]) el.textContent = d[key];
    });

    // Update placeholders
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
      const key = el.getAttribute("data-i18n-ph");
      if (d[key]) el.setAttribute("placeholder", d[key]);
    });

    const btn = document.getElementById("langBtn");
    if (btn) btn.textContent = d.lang_btn;

    setActiveNav();
  }

  document.addEventListener("DOMContentLoaded", () => {
    setActiveNav();
    const saved = localStorage.getItem("lang") || "en";
    applyLang(saved);

    const btn = document.getElementById("langBtn");
    if (btn) {
      btn.addEventListener("click", () => {
        const current = localStorage.getItem("lang") || "en";
        applyLang(current === "en" ? "ar" : "en");
      });
    }
  });
})();
