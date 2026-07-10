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
  "ติดตามบน Facebook": "Follow on Facebook",
  "แกลเลอรี": "Gallery",
  "ร้านวัสดุก่อสร้างครบวงจร กันทรลักษ์ ศรีสะเกษ": "Complete construction materials store in Kantharalak, Sisaket",
  "723 หมู่ที่ 5 ตำบลน้ำอ้อม อำเภอกันทรลักษ์ จังหวัดศรีสะเกษ 33110": "723 Moo 5, Nam Om Subdistrict, Kantharalak District, Sisaket 33110",
  "ข้อมูลที่อยู่และช่องทางติดต่อควรตรวจสอบให้ตรงกับ Google Business Profile, Facebook และเอกสารหน้าร้านทุกครั้งก่อนเผยแพร่": "Address and contact details should be checked against Google Business Profile, Facebook, and store documents before publishing.",
  "เวลาเปิด-ปิด: 08:00-17:00 น.": "Opening hours: 08:00-17:00",
  "เวลาเปิด-ปิด:": "Opening hours:",
  "08:00-17:00 น.": "08:00-17:00",
  "ดูรายละเอียด": "View details",
  "ดูรายละเอียดจัดส่ง": "View delivery details",
  "อิฐมวลเบา/อิฐแดง": "Lightweight brick / red brick",
  "หิน ทราย": "Stone and sand",
  "ปูนซีเมนต์ กันทรลักษ์": "Cement in Kantharalak",
  "ร้านสยามคอนกรีต 2008 จำหน่ายปูนซีเมนต์สำหรับงานบ้าน งานช่าง ผู้รับเหมา และลูกค้าโครงการในพื้นที่กันทรลักษ์ ศรีสะเกษ": "Siam Concrete 2008 supplies cement for homes, tradespeople, contractors, and project customers in Kantharalak, Sisaket.",
  "โทร 094-535-9888": "Call 094-535-9888",
  "ข้อมูลก่อนสั่งซื้อ": "Before ordering",
  "เลือกวัสดุให้ตรงงาน ลดความเสี่ยงสั่งผิด และวางแผนส่งของง่ายขึ้น": "Choose the right materials, reduce ordering mistakes, and plan delivery more easily.",
  "หน้านี้ทำไว้เพื่อช่วยให้ลูกค้าในกันทรลักษ์และพื้นที่ใกล้เคียงเห็นหมวดสินค้าหลักก่อนส่งรายการให้ร้านเช็กสต็อกและราคา": "This page helps customers in Kantharalak and nearby areas review main product categories before sending a list for stock and price checks.",
  "งานโครงสร้าง": "Structural work",
  "เหมาะสำหรับลูกค้าที่ต้องการปูนสำหรับฐานราก เสา คาน พื้น และงานคอนกรีตทั่วไป โดยควรแจ้งลักษณะงานก่อนสั่งซื้อ": "Suitable for customers needing cement for foundations, columns, beams, slabs, and general concrete work. Please describe the job before ordering.",
  "งานก่อและงานฉาบ": "Masonry and plastering",
  "สอบถามปูนสำหรับงานก่ออิฐ ฉาบผนัง และงานซ่อมแซม เพื่อเลือกประเภทสินค้าให้เหมาะกับหน้างาน": "Ask about cement for bricklaying, wall plastering, and repair work so the product fits the jobsite.",
  "งานเทและงานซ่อมทั่วไป": "Pouring and general repairs",
  "เตรียมจำนวนพื้นที่ ความหนา และจำนวนถุงโดยประมาณ เพื่อให้ร้านช่วยประสานรายการและการจัดส่ง": "Prepare the area size, thickness, and approximate bag quantity so the store can coordinate items and delivery.",
  "พื้นที่บริการ": "Service area",
  "ประสานจัดส่งถึงหน้างานในกันทรลักษ์และพื้นที่ใกล้เคียง": "Delivery coordination to jobsites in Kantharalak and nearby areas.",
  "ส่งรายการวัสดุ จำนวนโดยประมาณ รูปหน้างาน และพิกัดจัดส่งผ่านโทรศัพท์ Facebook หรือ Line เพื่อให้ทีมงานประสานราคา สต็อก และเงื่อนไขการจัดส่งที่เหมาะกับงานของคุณ": "Send material lists, approximate quantities, jobsite photos, and delivery pin by phone, Facebook, or Line so our team can coordinate price, stock, and delivery terms.",
  "ส่งรายการผ่าน Line": "Send list via Line",
  "ข้อมูลที่ควรเตรียม": "Information to prepare",
  "1) รายการสินค้าและจำนวน 2) พื้นที่จัดส่ง 3) วันเวลาที่ต้องการ 4) รูปหน้างานหรือข้อจำกัดรถเข้าออก 5) ต้องการใบเสนอราคาหรือใบกำกับภาษีหรือไม่": "1) Product list and quantity 2) Delivery area 3) Preferred date and time 4) Jobsite photos or vehicle access limits 5) Whether a quotation or tax invoice is needed",
  "คำถามที่พบบ่อย": "Frequently asked questions",
  "ต้องเช็กราคาปูนอย่างไร?": "How should I check cement prices?",
  "โทรหรือส่งข้อความพร้อมจำนวนถุงและพื้นที่จัดส่ง ร้านจะช่วยเช็กสต็อก ราคา และเงื่อนไขส่งของตามรอบปัจจุบัน": "Call or message with the number of bags and delivery area. The store will help check current stock, price, and delivery terms.",
  "มีบริการส่งปูนถึงหน้างานไหม?": "Is jobsite cement delivery available?",
  "มีการประสานจัดส่งถึงหน้างานในกันทรลักษ์และพื้นที่ใกล้เคียง โดยขึ้นกับจำนวนสินค้า ระยะทาง และความสะดวกของรถเข้าออก": "Jobsite delivery can be coordinated in Kantharalak and nearby areas, depending on quantity, distance, and vehicle access.",
  "ควรสั่งปูนเผื่อเท่าไร?": "How much extra cement should I order?",
  "ควรแจ้งขนาดพื้นที่ ประเภทงาน และรูปหน้างานให้ร้านช่วยประเมินเบื้องต้นก่อนสั่งซื้อ เพื่อหลีกเลี่ยงของขาดหรือเหลือเกินจำเป็น": "Share the area size, job type, and jobsite photos so the store can help with an initial estimate before ordering.",
  "เหล็กเส้นและเหล็กรูปพรรณ กันทรลักษ์": "Rebar and structural steel in Kantharalak",
  "เหล็ก กันทรลักษ์": "Steel in Kantharalak",
  "รวมวัสดุเหล็กสำหรับงานฐานราก โครงสร้าง ต่อเติม งานเชื่อม และงานช่างในพื้นที่กันทรลักษ์": "Steel materials for foundations, structures, extensions, welding, and trade work in Kantharalak.",
  "เหล็กเส้นและเหล็กข้ออ้อย": "Round bar and deformed bar",
  "ใช้ในงานคอนกรีตเสริมเหล็ก ควรแจ้งขนาด จำนวนเส้น และมาตรฐานที่ต้องการก่อนเช็กราคา": "Used for reinforced concrete work. Share size, quantity, and required standard before price checking.",
  "เหล็กรูปพรรณ": "Structural steel sections",
  "เหมาะกับงานโครงหลังคา งานเชื่อม งานต่อเติม และงานโครงสร้างเบา ควรระบุขนาดและความยาวที่ต้องใช้": "Suitable for roof frames, welding, extensions, and light structures. Specify the size and length needed.",
  "งานผู้รับเหมาและโครงการ": "Contractor and project work",
  "ส่งรายการ BOQ หรือรูปแบบงานให้ร้านช่วยประสานราคาและรอบส่ง เพื่อควบคุมต้นทุนและเวลาหน้างาน": "Send a BOQ or job plan so the store can coordinate pricing and delivery rounds.",
  "ควรส่งรายการเหล็กแบบไหนให้ร้าน?": "What steel details should I send?",
  "ระบุชนิดเหล็ก ขนาด จำนวน ความยาว และพื้นที่จัดส่ง ถ้ามี BOQ หรือรูปแบบงานควรส่งมาพร้อมกัน": "Specify steel type, size, quantity, length, and delivery area. Send BOQ or drawings if available.",
  "เหล็กราคาขึ้นลงไหม?": "Do steel prices change?",
  "ราคาเหล็กเปลี่ยนได้ตามตลาดและสต็อกปัจจุบัน ควรเช็กราคาก่อนสั่งซื้อทุกครั้ง": "Steel prices can change with market conditions and current stock, so check prices before every order.",
  "ส่งเหล็กถึงหน้างานได้ไหม?": "Can steel be delivered to the jobsite?",
  "ประสานจัดส่งได้ตามจำนวน ระยะทาง และเงื่อนไขรถเข้าออกหน้างาน": "Delivery can be coordinated based on quantity, distance, and jobsite vehicle access.",
  "อิฐมวลเบาและอิฐแดง กันทรลักษ์": "Lightweight brick and red brick in Kantharalak",
  "อิฐมวลเบา อิฐแดง กันทรลักษ์": "Lightweight brick and red brick in Kantharalak",
  "เลือกวัสดุก่อผนังให้เหมาะกับบ้าน อาคาร ร้านค้า และงานต่อเติม พร้อมประสานสินค้าเกี่ยวข้องอย่างปูนก่อและปูนฉาบ": "Choose wall materials for homes, buildings, shops, and extensions, with related products such as masonry and plastering cement.",
  "อิฐมวลเบา": "Lightweight brick",
  "เหมาะกับงานผนังที่ต้องการน้ำหนักเบาและทำงานเป็นระบบ ควรแจ้งขนาด จำนวนก้อน และพื้นที่ใช้งาน": "Suitable for wall work needing lighter weight and systematic installation. Share size, block count, and use area.",
  "อิฐแดงและอิฐก่อทั่วไป": "Red brick and general masonry brick",
  "เหมาะกับงานก่อผนัง งานซ่อมแซม และงานทั่วไป ควรตรวจสอบจำนวนและพื้นที่ส่งก่อนสั่ง": "Suitable for wall building, repairs, and general work. Check quantity and delivery area before ordering.",
  "วัสดุประกอบงานผนัง": "Wall-work supporting materials",
  "สอบถามปูนก่อ ปูนฉาบ อุปกรณ์ และวัสดุเสริมที่ใช้ร่วมกับงานอิฐเพื่อเตรียมของให้ครบ": "Ask about masonry cement, plastering cement, tools, and supporting materials for brick work.",
  "ต้องใช้กี่ก้อนถึงจะพอ?": "How many blocks or bricks are enough?",
  "ควรแจ้งพื้นที่ผนังโดยประมาณ ความสูง ความยาว และขนาดอิฐที่ต้องการ ร้านจะช่วยประสานการคำนวณเบื้องต้น": "Share approximate wall area, height, length, and desired brick size so the store can help with an initial calculation.",
  "สั่งอิฐพร้อมปูนก่อได้ไหม?": "Can I order bricks with masonry cement?",
  "ได้ ควรแจ้งชนิดอิฐ จำนวน และลักษณะงาน เพื่อประสานรายการปูนก่อหรือปูนฉาบที่เหมาะสม": "Yes. Share brick type, quantity, and job details so suitable masonry or plastering cement can be coordinated.",
  "มีบริการส่งอิฐจำนวนมากไหม?": "Is bulk brick delivery available?",
  "ประสานจัดส่งได้ตามจำนวนสินค้า ระยะทาง และสภาพหน้างาน": "Delivery can be coordinated based on quantity, distance, and jobsite conditions.",
  "ท่อ PVC และอุปกรณ์ระบบน้ำ กันทรลักษ์": "PVC pipes and water system supplies in Kantharalak",
  "ท่อ PVC กันทรลักษ์": "PVC pipes in Kantharalak",
  "รวมท่อ ข้อต่อ และอุปกรณ์ระบบน้ำสำหรับงานบ้าน งานเกษตร งานซ่อม และงานระบบของช่างในพื้นที่กันทรลักษ์": "Pipes, fittings, and water system supplies for homes, agriculture, repairs, and trade work in Kantharalak.",
  "ท่อ PVC หลายขนาด": "PVC pipes in multiple sizes",
  "ควรแจ้งขนาดท่อ ชั้นท่อ และจำนวนเส้นที่ต้องการ เพื่อให้เช็กสต็อกและราคาได้แม่นขึ้น": "Share pipe size, class, and quantity so stock and price can be checked more accurately.",
  "ข้อต่อและอุปกรณ์ระบบน้ำ": "Fittings and water system supplies",
  "เตรียมรายการข้องอ สามทาง บอลวาล์ว กาวทาท่อ และอุปกรณ์ประกอบให้ครบก่อนเริ่มงาน": "Prepare elbows, tees, ball valves, pipe adhesive, and accessories before starting work.",
  "งานบ้านและงานเกษตร": "Home and agricultural work",
  "แจ้งลักษณะการใช้งาน เช่น น้ำประปา น้ำเกษตร หรือระบบระบายน้ำ เพื่อเลือกรายการที่เหมาะสม": "Share the use case, such as tap water, agricultural water, or drainage, to choose suitable items.",
  "ต้องเลือกท่อชั้นไหนดี?": "Which pipe class should I choose?",
  "ขึ้นกับแรงดันและลักษณะการใช้งาน ควรแจ้งว่าใช้กับน้ำประปา งานเกษตร หรือระบบระบาย เพื่อให้ร้านช่วยแนะนำเบื้องต้น": "It depends on pressure and use. Tell the store whether it is for tap water, agriculture, or drainage for basic advice.",
  "ซื้อข้อต่อพร้อมท่อได้ไหม?": "Can fittings be ordered with pipes?",
  "ได้ ควรส่งแบบคร่าว ๆ หรือรายการจำนวนจุดใช้งาน เพื่อป้องกันข้อต่อขาด": "Yes. Send a rough layout or number of connection points to reduce missing fittings.",
  "ส่งท่อ PVC ได้ไหม?": "Can PVC pipes be delivered?",
  "ประสานจัดส่งได้ตามจำนวนและระยะทาง โดยท่อมีความยาวควรแจ้งข้อจำกัดพื้นที่รับของด้วย": "Delivery can be coordinated by quantity and distance. Since pipes are long, share receiving-area limits too.",
  "หลังคาและเมทัลชีท กันทรลักษ์": "Roofing and metal sheet in Kantharalak",
  "หลังคา เมทัลชีท กันทรลักษ์": "Roofing and metal sheet in Kantharalak",
  "เลือกวัสดุมุงหลังคาและอุปกรณ์ประกอบให้เหมาะกับงานบ้าน อาคาร ร้านค้า โรงจอดรถ และงานต่อเติม": "Choose roofing materials and accessories for homes, buildings, shops, carports, and extensions.",
  "วัสดุมุงหลังคา": "Roofing materials",
  "สอบถามประเภทหลังคา สี ขนาด และจำนวนที่ต้องใช้ตามหน้างานจริง": "Ask about roof type, color, size, and quantity based on the actual jobsite.",
  "เมทัลชีทและอุปกรณ์ประกอบ": "Metal sheet and accessories",
  "ควรแจ้งความยาว พื้นที่ติดตั้ง และอุปกรณ์เสริมที่ต้องใช้ร่วมกัน": "Share the required length, installation area, and related accessories.",
  "งานต่อเติมและซ่อมแซม": "Extensions and repairs",
  "ส่งรูปหน้างานและขนาดคร่าว ๆ ให้ร้านช่วยประสานรายการวัสดุเบื้องต้น": "Send jobsite photos and rough dimensions so the store can help coordinate an initial material list.",
  "ต้องวัดขนาดหลังคายังไงก่อนสั่ง?": "How should I measure roofing before ordering?",
  "ควรมีความกว้าง ความยาว ความลาดเอียง และรูปหน้างาน เพื่อช่วยประสานจำนวนวัสดุเบื้องต้น": "Prepare width, length, slope, and jobsite photos to help coordinate an initial material quantity.",
  "มีอุปกรณ์หลังคาด้วยไหม?": "Are roofing accessories available?",
  "สามารถสอบถามอุปกรณ์ประกอบ เช่น สกรู ครอบ แฟลชชิ่ง หรือวัสดุที่เกี่ยวข้องตามงานจริง": "You can ask about accessories such as screws, caps, flashing, or other job-related materials.",
  "ส่งเมทัลชีทถึงหน้างานได้ไหม?": "Can metal sheet be delivered to the jobsite?",
  "ประสานจัดส่งได้ตามความยาว จำนวน ระยะทาง และข้อจำกัดการขนย้าย": "Delivery can be coordinated based on length, quantity, distance, and handling limits.",
  "หิน ทราย และวัสดุถม กันทรลักษ์": "Stone, sand, and fill materials in Kantharalak",
  "หิน ทราย กันทรลักษ์": "Stone and sand in Kantharalak",
  "วัสดุมวลรวมสำหรับงานเทคอนกรีต งานก่อ งานปรับพื้นที่ งานถม และงานหน้างานทั่วไปในพื้นที่กันทรลักษ์": "Aggregates for concrete pouring, masonry, site leveling, filling, and general jobsite work in Kantharalak.",
  "ทรายสำหรับงานก่อสร้าง": "Sand for construction",
  "แจ้งประเภทงาน เช่น ก่อ ฉาบ เท หรือปรับพื้นที่ เพื่อประสานชนิดทรายและปริมาณที่เหมาะสม": "Share the job type, such as masonry, plastering, pouring, or leveling, to coordinate suitable sand and quantity.",
  "หินสำหรับงานคอนกรีต": "Stone for concrete work",
  "สอบถามขนาดหิน ปริมาณ และพื้นที่จัดส่งเพื่อเช็กความเหมาะสมของรอบส่ง": "Ask about stone size, quantity, and delivery area to check delivery suitability.",
  "งานปรับพื้นที่และงานถม": "Site leveling and filling",
  "ควรส่งรูปหน้างาน พิกัด และปริมาณโดยประมาณ เพื่อช่วยประสานรอบรถและราคา": "Send jobsite photos, pin location, and approximate quantity to coordinate truck rounds and pricing.",
  "ควรสั่งหินทรายเป็นหน่วยอะไร?": "What unit should I use to order stone or sand?",
  "ขึ้นกับสินค้าและรอบส่ง ควรแจ้งพื้นที่ หน้างาน และปริมาณโดยประมาณให้ร้านเช็กเงื่อนไขปัจจุบัน": "It depends on the product and delivery round. Share area, jobsite, and approximate quantity for current terms.",
  "ต้องเตรียมพื้นที่รับของอย่างไร?": "How should I prepare the receiving area?",
  "ควรมีจุดลงของชัดเจน รถเข้าออกได้ และแจ้งข้อจำกัด เช่น ถนนแคบ สายไฟต่ำ หรือพื้นที่เปียก": "Prepare a clear drop-off point with vehicle access and share limits such as narrow roads, low wires, or wet areas.",
  "เช็กค่าขนส่งอย่างไร?": "How do I check delivery cost?",
  "แจ้งพิกัดปลายทาง ปริมาณสินค้า และวันเวลาที่ต้องการ เพื่อให้ร้านประสานค่าขนส่งตามงานจริง": "Share destination pin, product quantity, and preferred date/time so the store can coordinate actual delivery cost.",
  "บริการจัดส่งวัสดุก่อสร้างถึงหน้างาน กันทรลักษ์": "Construction material jobsite delivery in Kantharalak",
  "จัดส่งวัสดุก่อสร้าง กันทรลักษ์": "Construction material delivery in Kantharalak",
  "ร้านสยามคอนกรีต 2008 ช่วยประสานการจัดส่งวัสดุก่อสร้างไปยังบ้าน อาคาร ร้านค้า และหน้างานก่อสร้างในกันทรลักษ์และพื้นที่ใกล้เคียง": "Siam Concrete 2008 helps coordinate construction material delivery to homes, buildings, shops, and jobsites in Kantharalak and nearby areas.",
  "ส่งรายการให้ชัด": "Send a clear list",
  "ส่งสินค้า จำนวน พิกัด และวันเวลาที่ต้องการ เพื่อให้ประสานรอบส่งได้เร็วขึ้น": "Send products, quantities, pin location, and preferred date/time to coordinate delivery faster.",
  "ประเมินข้อจำกัดหน้างาน": "Assess jobsite limits",
  "แจ้งถนนแคบ ทางลาด สายไฟต่ำ จุดลงของ หรือข้อจำกัดรถเข้าออกล่วงหน้า": "Share narrow roads, slopes, low wires, drop-off points, or vehicle access limits in advance.",
  "เช็กของและราคา": "Check stock and price",
  "ทีมงานจะช่วยประสานสต็อก ราคา และเงื่อนไขจัดส่งตามรายการจริงก่อนยืนยัน": "The team will coordinate stock, price, and delivery terms based on the actual list before confirmation.",
  "คิดค่าจัดส่งอย่างไร?": "How is delivery cost calculated?",
  "ค่าจัดส่งขึ้นกับประเภทสินค้า จำนวน ระยะทาง และข้อจำกัดหน้างาน ควรส่งพิกัดและรายการสินค้าเพื่อประสานราคาจริง": "Delivery cost depends on product type, quantity, distance, and jobsite limits. Send the pin and product list for actual pricing.",
  "ต้องสั่งขั้นต่ำไหม?": "Is there a minimum order?",
  "ขึ้นกับประเภทสินค้าและรอบส่งปัจจุบัน ควรติดต่อร้านเพื่อเช็กเงื่อนไขก่อนสั่ง": "It depends on product type and current delivery rounds. Contact the store to check terms before ordering.",
  "ถ้าเป็นผู้รับเหมาส่งหลายรอบได้ไหม?": "Can contractors arrange multiple delivery rounds?",
  "สามารถประสานแผนส่งเป็นรอบตามหน้างานได้ โดยควรส่งแผนการใช้วัสดุล่วงหน้า": "Delivery rounds can be coordinated by jobsite schedule. Send the material-use plan in advance."
};

const reversePhraseTranslations = {};
Object.entries(phraseTranslations).forEach(([thai, english]) => {
  if (!reversePhraseTranslations[english]) {
    reversePhraseTranslations[english] = thai;
  }
});

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
