const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const backToTop = document.querySelector("[data-back-to-top]");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (backToTop) {
  const toggleBackToTop = () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 500);
  };

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const translations = {
  th: {
    "nav.home": "หน้าแรก",
    "nav.products": "สินค้า",
    "nav.about": "เกี่ยวกับเรา",
    "nav.contact": "ติดต่อเรา",
    "about.eyebrow": "เกี่ยวกับเรา",
    "about.heroTitle": "ร้านวัสดุก่อสร้างเก่าแก่ อยู่คู่เมืองกันทรลักษ์มากกว่า 30 ปี",
    "about.heroText": "สยามคอนกรีต 2008 คือร้านวัสดุก่อสร้างที่ช่าง ผู้รับเหมา เจ้าของบ้าน และลูกค้าโครงการในพื้นที่ไว้วางใจ ด้วยประสบการณ์ยาวนาน สินค้าครบ และบริการที่ตรงไปตรงมา",
    "about.call": "โทรสอบถาม",
    "about.products": "ดูสินค้า",
    "about.map": "แผนที่ร้าน",
    "about.years": "ปีแห่งความไว้วางใจ",
    "about.trust1": "สินค้าโครงสร้างและงานระบบครบ",
    "about.trust2": "บริการจัดส่งถึงหน้างาน",
    "about.trust3": "ให้คำปรึกษากับช่างและเจ้าของบ้าน",
    "story.eyebrow": "เรื่องราวของเรา",
    "story.title": "รากฐานจากความไว้วางใจของชุมชน",
    "story.p1": "ร้านสยามคอนกรีต 2008 เปิดให้บริการมายาวนานมากกว่า 30 ปี และเติบโตไปพร้อมเมืองกันทรลักษ์ จากร้านวัสดุก่อสร้างที่คนในพื้นที่คุ้นเคย สู่ร้านที่ช่าง ผู้รับเหมา เจ้าของบ้าน และลูกค้าโครงการเลือกใช้เมื่อต้องการวัสดุที่เชื่อถือได้",
    "story.p2": "ตลอดหลายทศวรรษที่ผ่านมา เราให้ความสำคัญกับความซื่อสัตย์ คุณภาพสินค้า ราคาเหมาะสม และการบริการที่รับผิดชอบ เพราะเราเข้าใจว่าวัสดุก่อสร้างทุกชิ้นคือส่วนหนึ่งของบ้าน อาคาร และงานที่ลูกค้าตั้งใจสร้าง",
    "metric.years": "ปีในพื้นที่กันทรลักษ์",
    "metric.categories": "หมวดสินค้าหลัก",
    "metric.phones": "ช่องทางโทรโดยตรง",
    "promise.eyebrow": "คำมั่นของร้าน",
    "promise.title": "บริการแบบร้านเก่าแก่ พร้อมมาตรฐานที่ทันสมัย",
    "promise.card1Title": "สินค้าคัดสรร",
    "promise.card1Text": "เลือกสินค้าที่ใช้งานได้จริง ครอบคลุมงานโครงสร้าง งานระบบ งานหลังคา งานสี และอุปกรณ์ช่าง",
    "promise.card2Title": "แนะนำตรงงาน",
    "promise.card2Text": "ช่วยลูกค้าเลือกวัสดุให้เหมาะกับหน้างาน งบประมาณ และลักษณะการใช้งาน",
    "promise.card3Title": "ส่งถึงหน้างาน",
    "promise.card3Text": "ประสานการจัดส่งเพื่อลดเวลาขนย้ายและช่วยให้งานก่อสร้างเดินหน้าได้ต่อเนื่อง",
    "promise.card4Title": "ดูแลระยะยาว",
    "promise.card4Text": "พร้อมดูแลลูกค้าประจำ ช่าง ผู้รับเหมา และลูกค้าโครงการด้วยความรับผิดชอบ",
    "mission.eyebrow": "Mission & Vision",
    "mission.title": "เป็นร้านวัสดุก่อสร้างที่ลูกค้าเชื่อใจได้ในทุกงาน",
    "mission.text": "พันธกิจของเราคือทำให้การเลือกซื้อวัสดุก่อสร้างง่าย ชัดเจน และมั่นใจ ตั้งแต่การสอบถามสินค้า การแนะนำวัสดุ ไปจนถึงการจัดส่งถึงหน้างาน วิสัยทัศน์ของเราคือการเป็นร้านที่อยู่คู่ชุมชนกันทรลักษ์ต่อไปอย่างมั่นคง",
    "mission.cta": "ติดต่อร้าน",
    "timeline.t1": "กว่า 30 ปีที่ผ่านมา",
    "timeline.d1": "เริ่มต้นและเติบโตจากความไว้วางใจของลูกค้าในพื้นที่กันทรลักษ์",
    "timeline.t2": "พัฒนาหมวดสินค้า",
    "timeline.d2": "ขยายสินค้าครอบคลุมปูน เหล็ก อิฐ หิน ทราย หลังคา ท่อ PVC สี และเครื่องมือช่าง",
    "timeline.t3": "วันนี้",
    "timeline.d3": "ยกระดับประสบการณ์ลูกค้าให้ทันสมัยขึ้น พร้อมคงความจริงใจแบบร้านท้องถิ่นที่ลูกค้าคุ้นเคย",
    "footer.desc": "วัสดุก่อสร้างครบวงจร กันทรลักษ์ ศรีสะเกษ",
    "footer.menu": "เมนู",
    "footer.contact": "ติดต่อ"
  },
  en: {
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.contact": "Contact",
    "about.eyebrow": "About us",
    "about.heroTitle": "A long-established construction materials store serving Kantharalak for over 30 years",
    "about.heroText": "Siam Concrete 2008 is trusted by local builders, contractors, homeowners, and project customers for practical advice, complete product categories, and straightforward service.",
    "about.call": "Call us",
    "about.products": "View products",
    "about.map": "Store map",
    "about.years": "years of trust",
    "about.trust1": "Complete structural and utility materials",
    "about.trust2": "Jobsite delivery service",
    "about.trust3": "Advice for builders and homeowners",
    "story.eyebrow": "Our story",
    "story.title": "Built on community trust",
    "story.p1": "Siam Concrete 2008 has served customers for more than 30 years and grown alongside Kantharalak. From a familiar local materials shop, we have become a trusted choice for builders, contractors, homeowners, and project customers who need dependable supplies.",
    "story.p2": "Across the decades, we have focused on honest service, reliable product quality, fair pricing, and responsible support because every material becomes part of a home, building, or project our customers care about.",
    "metric.years": "years in Kantharalak",
    "metric.categories": "main product categories",
    "metric.phones": "direct phone lines",
    "promise.eyebrow": "Our promise",
    "promise.title": "Long-standing local service with modern standards",
    "promise.card1Title": "Selected materials",
    "promise.card1Text": "Practical products for structural work, utilities, roofing, paint, and trade tools.",
    "promise.card2Title": "Relevant advice",
    "promise.card2Text": "We help customers choose materials that fit the jobsite, budget, and intended use.",
    "promise.card3Title": "Jobsite delivery",
    "promise.card3Text": "We coordinate delivery to reduce handling time and keep construction work moving.",
    "promise.card4Title": "Long-term care",
    "promise.card4Text": "We support returning customers, tradespeople, contractors, and project buyers responsibly.",
    "mission.eyebrow": "Mission & Vision",
    "mission.title": "A materials store customers can trust for every project",
    "mission.text": "Our mission is to make buying construction materials easier, clearer, and more confident, from product inquiries and advice to jobsite delivery. Our vision is to continue serving the Kantharalak community with stability and trust.",
    "mission.cta": "Contact us",
    "timeline.t1": "Over 30 years",
    "timeline.d1": "Built and grown through the trust of customers in Kantharalak.",
    "timeline.t2": "Expanded categories",
    "timeline.d2": "Covering cement, steel, bricks, stone, sand, roofing, PVC pipes, paint, and tools.",
    "timeline.t3": "Today",
    "timeline.d3": "Modernizing the customer experience while keeping the sincerity of a familiar local store.",
    "footer.desc": "Complete construction materials in Kantharalak, Sisaket",
    "footer.menu": "Menu",
    "footer.contact": "Contact"
  }
};

const languageButtons = document.querySelectorAll("[data-lang-switch]");
const translatableItems = document.querySelectorAll("[data-i18n]");

if (languageButtons.length && translatableItems.length) {
  const applyLanguage = (language) => {
    const dictionary = translations[language] || translations.th;
    document.documentElement.lang = language === "en" ? "en" : "th";
    translatableItems.forEach((item) => {
      const key = item.getAttribute("data-i18n");
      if (key && dictionary[key]) {
        item.textContent = dictionary[key];
      }
    });
    languageButtons.forEach((button) => {
      const isActive = button.getAttribute("data-lang-switch") === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    window.localStorage.setItem("siteLanguage", language);
  };

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.getAttribute("data-lang-switch") || "th");
    });
  });

  applyLanguage(window.localStorage.getItem("siteLanguage") || "th");
}
