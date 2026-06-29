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

const phraseTranslations = {
  "ข้ามไปยังเนื้อหา": "Skip to content",
  "สยามคอนกรีต 2008": "Siam Concrete 2008",
  "หน้าแรก": "Home",
  "สินค้า": "Products",
  "เกี่ยวกับเรา": "About",
  "ติดต่อเรา": "Contact",
  "ร้านวัสดุก่อสร้าง กันทรลักษ์ ศรีสะเกษ": "Construction materials store in Kantharalak, Sisaket",
  "วัสดุก่อสร้างครบวงจร ในอำเภอกันทรลักษ์ จังหวัดศรีสะเกษ": "Complete Construction Materials in Kantharalak, Sisaket",
  "ปูน เหล็ก อิฐ หิน ทราย หลังคา ท่อ PVC สี และอุปกรณ์ช่าง พร้อมบริการจัดส่งถึงหน้างาน": "Cement, steel, bricks, stone, sand, roofing, PVC pipes, paint, and trade tools with jobsite delivery service.",
  "โทรสอบถาม": "Call us",
  "ดูสินค้า": "View products",
  "แผนที่ร้าน": "Store map",
  "ปูน": "Cement",
  "เหล็ก": "Steel",
  "อิฐ": "Bricks",
  "ส่งถึงหน้างาน": "Jobsite delivery",
  "ปรึกษาฟรี": "Free advice",
  "ความมั่นใจของลูกค้า": "Why customers trust us",
  "ครบ คุ้ม พร้อมส่ง สำหรับงานก่อสร้างทุกขนาด": "Complete, fair, and ready to deliver for construction projects of every size",
  "สินค้าคุณภาพ": "Quality products",
  "คัดสรรวัสดุก่อสร้างที่ใช้งานได้จริง เหมาะกับบ้าน อาคาร ร้านค้า และงานโครงการ": "Selected practical construction materials for homes, buildings, shops, and project work.",
  "ช่วยประสานการจัดส่งให้สะดวก ลดเวลาหน้างาน และวางแผนสั่งของได้ง่ายขึ้น": "We coordinate delivery to reduce jobsite handling time and make ordering easier.",
  "ราคายุติธรรม": "Fair pricing",
  "เสนอราคาตรงไปตรงมา เหมาะกับช่าง ผู้รับเหมา เจ้าของบ้าน และลูกค้าโครงการ": "Straightforward pricing for builders, contractors, homeowners, and project customers.",
  "ให้คำปรึกษาฟรี": "Free consultation",
  "ช่วยแนะนำสินค้า ปริมาณเบื้องต้น และตัวเลือกที่เหมาะกับรูปแบบงานของคุณ": "We help recommend products, rough quantities, and options that fit your type of work.",
  "หมวดสินค้าหลัก": "Main product categories",
  "วัสดุหลักสำหรับงานโครงสร้าง งานระบบ และงานตกแต่ง": "Essential materials for structural, utility, and finishing work",
  "รวมสินค้าจำเป็นสำหรับงานก่อสร้างตั้งแต่เริ่มวางฐานรากจนถึงงานเก็บรายละเอียด พร้อมทีมงานช่วยแนะนำก่อนสั่งซื้อ": "Essential construction supplies from foundation work to finishing details, with a team ready to advise before you order.",
  "ดูหมวดสินค้าทั้งหมด": "View all product categories",
  "ปูนซีเมนต์": "Cement",
  "เหล็กเส้น": "Rebar",
  "หลังคา": "Roofing",
  "ท่อ PVC": "PVC pipes",
  "เริ่มต้นสั่งวัสดุก่อสร้าง": "Start ordering construction materials",
  "ต้องการเช็กราคา ขอใบเสนอราคา หรือขอเส้นทางมาที่ร้าน?": "Need to check prices, request a quotation, or get directions to the store?",
  "ดูบริการ": "View services",
  "ร้านวัสดุก่อสร้างครบวงจรในอำเภอกันทรลักษ์ จังหวัดศรีสะเกษ": "Complete construction materials store in Kantharalak, Sisaket",
  "ลิงก์สำคัญ": "Important links",
  "บริการ": "Services",
  "โปรโมชั่น": "Promotions",
  "แกลเลอรี": "Gallery",
  "ติดต่อ": "Contact",
  "โทร 045-663-473": "Call 045-663-473",
  "โทร 094-535-9888": "Call 094-535-9888",
  "ร้านวัสดุก่อสร้างเก่าแก่ อยู่คู่เมืองกันทรลักษ์มากกว่า 30 ปี": "A long-established construction materials store serving Kantharalak for over 30 years",
  "สยามคอนกรีต 2008 คือร้านวัสดุก่อสร้างที่ช่าง ผู้รับเหมา เจ้าของบ้าน และลูกค้าโครงการในพื้นที่ไว้วางใจ ด้วยประสบการณ์ยาวนาน สินค้าครบ และบริการที่ตรงไปตรงมา": "Siam Concrete 2008 is trusted by local builders, contractors, homeowners, and project customers for long experience, complete product categories, and straightforward service.",
  "ปีแห่งความไว้วางใจ": "years of trust",
  "สินค้าโครงสร้างและงานระบบครบ": "Complete structural and utility materials",
  "บริการจัดส่งถึงหน้างาน": "Jobsite delivery service",
  "ให้คำปรึกษากับช่างและเจ้าของบ้าน": "Advice for builders and homeowners",
  "เรื่องราวของเรา": "Our story",
  "รากฐานจากความไว้วางใจของชุมชน": "Built on community trust",
  "ร้านสยามคอนกรีต 2008 เปิดให้บริการมายาวนานมากกว่า 30 ปี และเติบโตไปพร้อมเมืองกันทรลักษ์ จากร้านวัสดุก่อสร้างที่คนในพื้นที่คุ้นเคย สู่ร้านที่ช่าง ผู้รับเหมา เจ้าของบ้าน และลูกค้าโครงการเลือกใช้เมื่อต้องการวัสดุที่เชื่อถือได้": "Siam Concrete 2008 has served customers for more than 30 years and grown alongside Kantharalak. From a familiar local materials shop, we have become a trusted choice for builders, contractors, homeowners, and project customers who need dependable supplies.",
  "ตลอดหลายทศวรรษที่ผ่านมา เราให้ความสำคัญกับความซื่อสัตย์ คุณภาพสินค้า ราคาเหมาะสม และการบริการที่รับผิดชอบ เพราะเราเข้าใจว่าวัสดุก่อสร้างทุกชิ้นคือส่วนหนึ่งของบ้าน อาคาร และงานที่ลูกค้าตั้งใจสร้าง": "Across the decades, we have focused on honest service, reliable product quality, fair pricing, and responsible support because every material becomes part of a home, building, or project our customers care about.",
  "ปีในพื้นที่กันทรลักษ์": "years in Kantharalak",
  "ช่องทางโทรโดยตรง": "direct phone lines",
  "คำมั่นของร้าน": "Our promise",
  "บริการแบบร้านเก่าแก่ พร้อมมาตรฐานที่ทันสมัย": "Long-standing local service with modern standards",
  "สินค้าคัดสรร": "Selected materials",
  "เลือกสินค้าที่ใช้งานได้จริง ครอบคลุมงานโครงสร้าง งานระบบ งานหลังคา งานสี และอุปกรณ์ช่าง": "Practical products for structural work, utilities, roofing, paint, and trade tools.",
  "แนะนำตรงงาน": "Relevant advice",
  "ช่วยลูกค้าเลือกวัสดุให้เหมาะกับหน้างาน งบประมาณ และลักษณะการใช้งาน": "We help customers choose materials that fit the jobsite, budget, and intended use.",
  "ประสานการจัดส่งเพื่อลดเวลาขนย้ายและช่วยให้งานก่อสร้างเดินหน้าได้ต่อเนื่อง": "We coordinate delivery to reduce handling time and keep construction work moving.",
  "ดูแลระยะยาว": "Long-term care",
  "พร้อมดูแลลูกค้าประจำ ช่าง ผู้รับเหมา และลูกค้าโครงการด้วยความรับผิดชอบ": "We support returning customers, tradespeople, contractors, and project buyers responsibly.",
  "เป็นร้านวัสดุก่อสร้างที่ลูกค้าเชื่อใจได้ในทุกงาน": "A materials store customers can trust for every project",
  "พันธกิจของเราคือทำให้การเลือกซื้อวัสดุก่อสร้างง่าย ชัดเจน และมั่นใจ ตั้งแต่การสอบถามสินค้า การแนะนำวัสดุ ไปจนถึงการจัดส่งถึงหน้างาน วิสัยทัศน์ของเราคือการเป็นร้านที่อยู่คู่ชุมชนกันทรลักษ์ต่อไปอย่างมั่นคง": "Our mission is to make buying construction materials easier, clearer, and more confident, from product inquiries and advice to jobsite delivery. Our vision is to continue serving the Kantharalak community with stability and trust.",
  "ติดต่อร้าน": "Contact the store",
  "กว่า 30 ปีที่ผ่านมา": "Over 30 years",
  "เริ่มต้นและเติบโตจากความไว้วางใจของลูกค้าในพื้นที่กันทรลักษ์": "Built and grown through the trust of customers in Kantharalak.",
  "พัฒนาหมวดสินค้า": "Expanded categories",
  "ขยายสินค้าครอบคลุมปูน เหล็ก อิฐ หิน ทราย หลังคา ท่อ PVC สี และเครื่องมือช่าง": "Expanded products covering cement, steel, bricks, stone, sand, roofing, PVC pipes, paint, and tools.",
  "วันนี้": "Today",
  "ยกระดับประสบการณ์ลูกค้าให้ทันสมัยขึ้น พร้อมคงความจริงใจแบบร้านท้องถิ่นที่ลูกค้าคุ้นเคย": "Modernizing the customer experience while keeping the sincerity of a familiar local store.",
  "วัสดุก่อสร้างครบวงจร กันทรลักษ์ ศรีสะเกษ": "Complete construction materials in Kantharalak, Sisaket",
  "เมนู": "Menu",
  "หมวดวัสดุก่อสร้างครบวงจรสำหรับช่างและผู้รับเหมา": "Complete construction material categories for builders and contractors",
  "เลือกสินค้าหลักสำหรับงานบ้าน งานอาคาร งานระบบ และงานโครงการ พร้อมสอบถามราคาและบริการจัดส่งถึงหน้างาน": "Choose essential products for homes, buildings, utility systems, and project work, with price inquiries and jobsite delivery available.",
  "ปูนสำหรับงานโครงสร้าง งานก่อ ฉาบ เท และงานซ่อมทั่วไป": "Cement for structural work, masonry, plastering, pouring, and general repairs.",
  "สอบถามราคา": "Ask for price",
  "เหล็กเส้นและเหล็กรูปพรรณ": "Rebar and structural steel",
  "เหล็กสำหรับงานฐานราก โครงสร้าง งานเชื่อม และงานต่อเติม": "Steel for foundations, structures, welding, and extensions.",
  "อิฐ หิน ทราย": "Bricks, stone, and sand",
  "วัสดุมวลรวมสำหรับงานก่อสร้างและงานปรับพื้นที่": "Aggregate materials for construction and site preparation.",
  "หลังคาและเมทัลชีท": "Roofing and metal sheet",
  "วัสดุมุงหลังคาและอุปกรณ์ประกอบสำหรับบ้านและอาคาร": "Roofing materials and accessories for homes and buildings.",
  "ท่อ PVC และระบบน้ำ": "PVC pipes and water systems",
  "ท่อ ข้อต่อ และอุปกรณ์ระบบน้ำสำหรับงานบ้านและงานเกษตร": "Pipes, fittings, and water system supplies for home and agricultural work.",
  "สีทาอาคารและเคมีภัณฑ์": "Architectural paint and chemicals",
  "สีและเคมีภัณฑ์สำหรับงานตกแต่ง ป้องกัน และซ่อมแซมพื้นผิว": "Paints and chemicals for finishing, protection, and surface repair.",
  "เครื่องมือช่าง": "Trade tools",
  "อุปกรณ์และเครื่องมือจำเป็นสำหรับช่างและงานซ่อมบำรุง": "Essential equipment and tools for tradespeople and maintenance work.",
  "ต้องการสินค้าหลายรายการ?": "Need several items?",
  "ส่งรายการวัสดุเพื่อขอใบเสนอราคาได้": "Send your material list to request a quotation.",
  "ขอใบเสนอราคา": "Request a quotation",
  "สอบถามราคา ขอเส้นทาง หรือประสานจัดส่งวัสดุก่อสร้าง": "Ask for prices, get directions, or coordinate construction material delivery",
  "ติดต่อร้านสยามคอนกรีต 2008 ได้ผ่านช่องทางออนไลน์ หรือเปิดแผนที่เพื่อเดินทางมาที่ร้าน": "Contact Siam Concrete 2008 online or open the map to visit the store.",
  "โทรศัพท์": "Phone",
  "โทรสอบถามราคา รายการสินค้า และบริการจัดส่งได้โดยตรง": "Call directly to ask about prices, product lists, and delivery service.",
  "ติดตามข่าวสาร สอบถามสินค้า และส่งข้อความหาเราได้โดยตรง": "Follow updates, ask about products, and message us directly.",
  "เปิดเส้นทางมายังร้านสยามคอนกรีต 2008 ในอำเภอกันทรลักษ์": "Open directions to Siam Concrete 2008 in Kantharalak.",
  "เพิ่มเพื่อนหรือส่งรายการวัสดุเพื่อสอบถามราคาและประสานการจัดส่ง": "Add us or send your material list to ask for prices and coordinate delivery.",
  "ข้อมูลสำหรับติดต่อ": "Contact information",
  "ร้านสยามคอนกรีต 2008": "Siam Concrete 2008",
  "อำเภอกันทรลักษ์ จังหวัดศรีสะเกษ ประเทศไทย": "Kantharalak District, Sisaket Province, Thailand",
  "โทร:": "Phone:",
  "และ": "and",
  "แนะนำให้ติดต่อผ่านโทรศัพท์ Facebook หรือ Line เพื่อส่งรายการสินค้า รูปหน้างาน หรือสอบถามเงื่อนไขการจัดส่ง": "We recommend contacting us by phone, Facebook, or Line to send product lists, jobsite photos, or delivery questions.",
  "เปิดแผนที่ร้าน": "Open store map",
  "ออนไลน์": "Online",
  "บริการครบสำหรับงานก่อสร้าง ตั้งแต่เลือกสินค้าไปจนถึงส่งถึงหน้างาน": "Complete services for construction work, from product selection to jobsite delivery",
  "เราช่วยให้การสั่งวัสดุก่อสร้างสะดวกขึ้นสำหรับเจ้าของบ้าน ช่าง ผู้รับเหมา และลูกค้าโครงการ": "We make ordering construction materials easier for homeowners, builders, contractors, and project customers.",
  "ประสานการจัดส่งวัสดุไปยังพื้นที่ก่อสร้าง ลดเวลาขนย้ายและช่วยให้งานเดินหน้าได้ต่อเนื่อง": "We coordinate material delivery to construction sites, reducing handling time and helping work continue smoothly.",
  "สอบถามพื้นที่จัดส่ง": "Ask about delivery areas",
  "บริการให้คำปรึกษา": "Consultation service",
  "แนะนำสินค้าเบื้องต้นตามประเภทงาน งบประมาณ และความต้องการของหน้างาน": "Basic product advice based on work type, budget, and jobsite needs.",
  "ส่งรายละเอียดงาน": "Send project details",
  "ส่งรายการวัสดุ จำนวน และสถานที่จัดส่ง เพื่อให้ทีมงานช่วยประสานราคาและรายการสินค้า": "Send material lists, quantities, and delivery location so our team can coordinate prices and product details.",
  "ลูกค้าโครงการ": "Project customers",
  "รองรับลูกค้ากลุ่มงานก่อสร้าง งานต่อเติม หน่วยงาน ร้านค้า และผู้รับเหมาที่ต้องการสั่งซื้อหลายรายการ": "Supporting construction projects, extensions, organizations, shops, and contractors who need to order multiple items.",
  "ภาพสินค้าจริง การจัดส่ง และหน้างานลูกค้า": "Real product, delivery, and customer jobsite photos",
  "ตัวอย่างบรรยากาศสินค้าและบริการ เพื่อให้ลูกค้าเห็นภาพก่อนติดต่อสอบถามหรือสั่งซื้อ": "Examples of products and services so customers can see what to expect before asking or ordering.",
  "ภาพสินค้าจริง": "Real product photos",
  "ปูน เหล็ก ท่อ หลังคา สี และวัสดุก่อสร้างหมวดหลัก": "Cement, steel, pipes, roofing, paint, and main construction material categories.",
  "ภาพการจัดส่ง": "Delivery photos",
  "การประสานวัสดุเพื่อส่งถึงพื้นที่ก่อสร้างหรือหน้างานลูกค้า": "Coordinating materials for delivery to construction areas or customer jobsites.",
  "ภาพหน้างานลูกค้า": "Customer jobsite photos",
  "ตัวอย่างงานบ้าน งานต่อเติม และงานโครงการในพื้นที่ให้บริการ": "Examples of home, extension, and project work in our service area.",
  "โปรโมชั่นล่าสุดและสินค้าแนะนำสำหรับงานก่อสร้าง": "Latest promotions and recommended products for construction work",
  "ติดต่อร้านเพื่อเช็กราคา รายการสินค้า และเงื่อนไขโปรโมชั่นปัจจุบันก่อนสั่งซื้อ": "Contact the store to check prices, product lists, and current promotion conditions before ordering.",
  "โปรโมชั่นล่าสุด": "Latest promotions",
  "เช็กราคาวัสดุหลักก่อนเริ่มงาน": "Check key material prices before starting work",
  "สอบถามรายการปูน เหล็ก อิฐ หิน ทราย และวัสดุระบบน้ำ พร้อมประสานจัดส่งถึงหน้างาน": "Ask about cement, steel, bricks, stone, sand, and water system materials, with jobsite delivery coordination.",
  "สอบถามโปรโมชั่น": "Ask about promotions",
  "สินค้าแนะนำ": "Recommended products",
  "วัสดุหลักที่นิยมใช้ในงานบ้าน งานต่อเติม และงานซ่อมแซม": "Key materials commonly used for homes, extensions, and repairs.",
  "พื้นที่สำหรับประกาศชุดโปรโมชั่นตามฤดูกาล สินค้าราคาพิเศษ หรือรายการใหม่": "A space for seasonal promotions, special-price products, or new arrivals.",
  "ติดตามบน Facebook": "Follow on Facebook"
};

const reversePhraseTranslations = Object.fromEntries(
  Object.entries(phraseTranslations).map(([thai, english]) => [english, thai])
);

const languageButtons = document.querySelectorAll("[data-lang-switch]");
const translatableItems = document.querySelectorAll("[data-i18n]");

const translateWholePage = (dictionary) => {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const text = node.nodeValue.trim();
        const parent = node.parentElement;
        if (!text || !parent || parent.closest("script, style, [data-lang-switch]")) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const nodes = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => {
    const currentText = node.nodeValue.trim().replace(/\s+/g, " ");
    const replacement = dictionary[currentText];
    if (replacement) {
      node.nodeValue = node.nodeValue.replace(node.nodeValue.trim(), replacement);
    }
  });
};

if (languageButtons.length) {
  const applyLanguage = (language) => {
    document.documentElement.lang = language === "en" ? "en" : "th";
    translateWholePage(language === "en" ? phraseTranslations : reversePhraseTranslations);
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
