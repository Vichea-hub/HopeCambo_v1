/* ==========================================================
   HopeCambo Bilingual Translations (English & Khmer)
   ========================================================== */

const flagKhmerSVG = `<svg class="flag-icon" viewBox="0 0 30 20" width="18" height="12" aria-hidden="true"><rect width="30" height="20" fill="#032ea1"/><rect y="5" width="30" height="10" fill="#e00025"/><g fill="#ffffff"><rect x="7" y="11" width="16" height="3"/><rect x="9" y="10" width="12" height="1"/><polygon points="15,6 13,10 17,10"/><polygon points="10,8 9,10 11,10"/><polygon points="20,8 19,10 21,10"/></g></svg>`;

const flagUKSVG = `<svg class="flag-icon" viewBox="0 0 30 20" width="18" height="12" aria-hidden="true"><clipPath id="flag_uk_s"><path d="M0,0 v20 h30 v-20 z"/></clipPath><clipPath id="flag_uk_t"><path d="M15,10 L0,0 v20 z M15,10 L30,0 v20 z"/></clipPath><g clip-path="url(#flag_uk_s)"><path d="M0,0 v20 h30 v-20 z" fill="#012169"/><path d="M0,0 L30,20 M30,0 L0,20" stroke="#fff" stroke-width="4"/><path d="M0,0 L30,20 M30,0 L0,20" clip-path="url(#flag_uk_t)" stroke="#c8102e" stroke-width="2"/><path d="M15,0 v20 M0,10 h30" stroke="#fff" stroke-width="6"/><path d="M15,0 v20 M0,10 h30" stroke="#c8102e" stroke-width="3"/></g></svg>`;

const translations = {
  en: {
    // Nav
    nav_home: "Home",
    nav_about: "About Us",
    nav_volunteer: "Volunteer",
    nav_contact: "Contact",
    nav_donate: "Donate Now",

    // Hero
    hero_tag: "Non-Profit Organization",
    hero_title: "Empowering Communities, Changing Lives in Cambodia",
    hero_desc: "We work directly on the ground in rural Cambodia to provide sustainable clean water wells, digital education, and food security for vulnerable families.",
    hero_btn_donate: "Make a Difference Today",
    hero_btn_mission: "Our Mission",

    // Stats
    stat_lives: "120K+",
    stat_lives_lbl: "Lives Impacted",
    stat_projects: "45+",
    stat_projects_lbl: "Active Projects",
    stat_rate: "98%",
    stat_rate_lbl: "Direct Impact Rate",

    // Campaigns
    campaigns_title: "Active Campaigns in Cambodia",
    campaigns_sub: "Explore our current initiatives that need your immediate support.",
    camp1_cat: "Water Project",
    camp1_title: "Clean Water for Siem Reap Rural Schools",
    camp1_desc: "Installing solar-powered deep filtration wells and sanitary water stations across primary schools in rural Siem Reap province.",
    camp1_raised: "$37,500 raised",
    camp1_goal: "Goal: $50,000",
    camp2_cat: "Education",
    camp2_title: "Digital Classrooms for Battambang Youth",
    camp2_desc: "Equipping remote village schools with solar tablets, educational software, and Khmer-language literacy training.",
    camp2_raised: "$13,500 raised",
    camp2_goal: "Goal: $30,000",
    camp3_cat: "Nutrition & Agriculture",
    camp3_title: "Emergency Food & Seed Kits for Kampong Speu",
    camp3_desc: "Distributing drought-resilient seed packets, farming tools, and emergency rice rations to vulnerable farming families.",
    camp3_raised: "$45,000 raised",
    camp3_goal: "Goal: $50,000",
    camp4_cat: "Healthcare & Solar",
    camp4_title: "Solar Power for Rural Health Clinics",
    camp4_desc: "Supplying reliable solar electricity for vaccine refrigeration, newborn incubators, and nighttime emergency care.",
    camp4_raised: "$28,400 raised",
    camp4_goal: "Goal: $35,000",
    camp5_cat: "Women Empowerment",
    camp5_title: "Clean Water Artisan & Weaving Micro-Grants",
    camp5_desc: "Providing micro-capital, clean water sanitizers, and sustainable loom equipment to rural women cooperative weavers.",
    camp5_raised: "$18,200 raised",
    camp5_goal: "Goal: $25,000",
    camp6_cat: "Youth Sanitation",
    camp6_title: "Eco-Friendly School Sanitation Blocks",
    camp6_desc: "Constructing modern, hygienic washrooms and handwashing stations across 12 primary schools in Kampong Cham.",
    camp6_raised: "$21,500 raised",
    camp6_goal: "Goal: $30,000",
    support_btn: "Support Campaign",
    share_campaign: "Share:",
    share_copied: "Campaign link copied to clipboard!",

    // Timeline
    timeline_title: "Project Milestone & Execution Timeline",
    timeline_sub: "How every HopeCambo initiative moves transparently from local assessment to sustained impact.",
    step1_badge: "Step 01",
    step1_title: "Community Need & Hydro Survey",
    step1_desc: "Collaborating with local commune councils, testing groundwater tables, and ensuring priority for marginalized families.",
    step2_badge: "Step 02",
    step2_title: "Solar Infrastructure & Drilling",
    step2_desc: "Procuring durable local parts, drilling deep potable wells, and installing renewable solar-powered filtration stations.",
    step3_badge: "Step 03",
    step3_title: "Committee Training & Tech Setup",
    step3_desc: "Equipping village teachers with tablets, training local technicians for repairs, and ensuring water safety monitoring.",
    step4_badge: "Step 04",
    step4_title: "Independent Audit & Sustainment",
    step4_desc: "Quarterly water quality tests, open financial disclosures to donors, and full community maintenance ownership.",

    // Testimonials
    testimonials_title: "Voices from the Community",
    testimonials_sub: "Real stories from the people our programs have directly impacted across rural Cambodia.",
    testimonial1_text: "Before HopeCambo installed our school well, our children had to walk 3 kilometers to fetch murky canal water. Now they drink safely and stay in class.",
    testimonial1_name: "Sokha Meas",
    testimonial1_role: "Community Leader, Siem Reap",
    testimonial2_text: "The solar tablets brought a modern world into our remote classroom. Seeing our students learn Khmer literature and math interactively has been priceless.",
    testimonial2_name: "Vanna Sok",
    testimonial2_role: "Primary School Teacher, Battambang",
    testimonial3_text: "The drought-resilient seed packets allowed our village to withstand severe heatwaves and feed over 60 families through the dry season.",
    testimonial3_name: "Rith Chea",
    testimonial3_role: "Farmer Representative, Kampong Speu",

    // FAQ
    faq_title: "Frequently Asked Questions",
    faq_sub: "Everything you need to know about supporting HopeCambo and our operations.",
    faq_q1: "How is my donation allocated and tracked?",
    faq_a1: "85% goes directly into tangible field infrastructure (drilling, solar pumps, classroom tablets, food kits). 10% covers technical water testing and safety audits, and 5% handles accounting and admin.",
    faq_q2: "Can I donate directly in Cambodian Riel or via KHQR?",
    faq_a2: "Yes! Our donation portal generates dynamic KHQR codes compatible with Bakong, ABA Mobile, Wing, ACLEDA, and all major Cambodian financial apps.",
    faq_q3: "Can international volunteers participate remotely?",
    faq_a3: "Absolutely. We welcome remote volunteers for curriculum building, graphic design, social media reporting, translation, and tech mentorship.",
    faq_q4: "How can corporate partners or NGOs collaborate with HopeCambo?",
    faq_a4: "We actively collaborate with commune councils, international NGOs, and private donors. You can reach out through our Contact page or directly via Telegram.",

    // Partners & Endorsements
    partners_title: "Trusted Partners & Community Endorsements",
    partners_sub: "Proudly cooperating with community councils, educational departments, and development leaders in Cambodia.",
    partner1_desc: "Rural School Sanitation Partner",
    partner2_desc: "Commune Council Representative",
    partner3_desc: "Solar Water Engineering Partner",
    partner4_desc: "Literacy & Digital Skills Partner",

    // Quick Chat Widget
    chat_bubble_btn: "Need help? Chat with us",
    chat_box_title: "Chat with HopeCambo",
    chat_box_sub: "Our team in Phnom Penh & Siem Reap is online to assist you directly.",
    chat_telegram: "Chat via Telegram",
    chat_telegram_sub: "@hopecambo_support",
    chat_whatsapp: "Chat via WhatsApp",
    chat_whatsapp_sub: "+855 23 987 654",

    // Gallery
    gallery_title: "Field Impact & Photo Gallery",
    gallery_sub: "Visual stories from our ongoing community development work across Cambodia.",
    filter_all: "All Projects",
    filter_water: "Clean Water",
    filter_edu: "Education",
    filter_comm: "Community",
    gal1_title: "Siem Reap Water Well",
    gal1_desc: "Clean solar water station serving 400 school students.",
    gal2_title: "Battambang Digital Class",
    gal2_desc: "Primary students using interactive learning tablets.",
    gal3_title: "Tonle Sap Outreach",
    gal3_desc: "Health and clean water deliveries to floating villages.",
    gal4_title: "Kampong Speu Agriculture",
    gal4_desc: "Distributing organic seeds and drought assistance.",
    gal5_title: "Volunteer Well Drilling",
    gal5_desc: "Local community leaders testing freshwater purity.",
    gal6_title: "Clean Drinking Purity",
    gal6_desc: "Safe potable water accessible to every village child.",
    gal7_title: "Solar Clinic Installation",
    gal7_desc: "Powering life-saving medical equipment and vaccines.",
    gal8_title: "Women Artisan Cooperative",
    gal8_desc: "Empowering rural mothers through sustainable craft training.",
    gal9_title: "Kampong Cham Sanitation Block",
    gal9_desc: "Hygienic school washrooms promoting youth health.",
    filter_health: "Healthcare",
    filter_women: "Women & Youth",

    // Top Donors
    donors_title: "Our Top Supporters",
    donors_sub: "Recognizing those who have made extraordinary contributions to our mission.",
    donor_top: "Top Supporter",
    donor_key: "Key Benefactor",
    donor_patron: "Community Patron",
    donor_advocate: "Advocate",

    // About Page
    about_banner_title: "Who We Are",
    about_banner_sub: "Dedicated to creating lasting impact through transparent and community-led solutions in Cambodia.",
    about_mission_tag: "Our Mission",
    about_mission_h2: "Creating Sustainable Futures, Together",
    about_mission_p1: "Founded in 2018, HopeCambo operates with a single conviction: long-term poverty alleviation requires local community ownership, sustainable infrastructure, and total financial clarity.",
    about_mission_p2: "We work directly alongside Cambodian village leaders, educators, and local authorities to build clean water wells, equip rural classrooms, and ensure food security for generations to come.",
    about_trans_title: "Financial Transparency",
    about_trans_sub: "We hold ourselves accountable to every contributor. Here is exactly where your contributions go.",
    trans_card1_h: "Direct Programs",
    trans_card1_p: "Funds directly purchasing water filtration pumps, school technology, agricultural tools, and local labor.",
    trans_card2_h: "Operations & Safety",
    trans_card2_p: "Covers water quality testing, technical monitoring, safety equipment, and logistics in rural provinces.",
    trans_card3_h: "Fundraising & Admin",
    trans_card3_p: "Sustains transparent accounting, secure payment gateway compliance, and public community reporting.",
    about_values_title: "Our Core Values",
    about_values_sub: "The principles that guide every decision we make in the field.",
    val_card1_h: "Community Driven",
    val_card1_p: "We listen before we act. Projects are chosen, co-designed, and maintained by local Cambodian leaders.",
    val_card2_h: "Radical Transparency",
    val_card2_p: "Every dollar is tracked. We publish verifiable financial reports and project updates for complete trust.",
    val_card3_h: "Sustainability First",
    val_card3_p: "Every solar pump and water filtration unit is installed with local repair parts and trained village mechanics.",

    // Volunteer Page
    vol_banner_title: "Join Our Mission",
    vol_banner_sub: "Lend your time, passion, and skills to empower communities across Cambodia.",
    vol_form_title: "Volunteer Application",
    vol_name_lbl: "Full Name",
    vol_email_lbl: "Email Address",
    vol_phone_lbl: "Phone / Telegram Handle",
    vol_loc_lbl: "Current Location",
    vol_loc_opt1: "Phnom Penh, Cambodia",
    vol_loc_opt2: "Siem Reap, Cambodia",
    vol_loc_opt3: "Battambang, Cambodia",
    vol_loc_opt4: "Other Province in Cambodia",
    vol_loc_opt5: "International / Remote",
    vol_role_lbl: "Area of Interest",
    vol_role_opt1: "Water Station Maintenance & Field Work",
    vol_role_opt2: "Digital Literacy & English Teaching",
    vol_role_opt3: "Photography, Media & Field Reporting",
    vol_role_opt4: "Logistics & Emergency Aid Distribution",
    vol_avail_lbl: "Availability",
    vol_avail_opt1: "Weekends Only",
    vol_avail_opt2: "Part-time (1-2 days/week)",
    vol_avail_opt3: "Full-time (1-3 months)",
    vol_avail_opt4: "Remote / Online Volunteering",
    vol_msg_lbl: "Why do you want to join HopeCambo?",
    vol_submit_btn: "Submit Application",
    vol_success_title: "Application Received!",
    vol_success_desc: "Thank you for stepping up to help. Our volunteer coordinator in Phnom Penh will reach out via Telegram or Email within 48 hours.",
    vol_filter_label: "Filter Roles by Focus:",
    vol_filter_all: "All Roles (4)",
    vol_filter_water: "Clean Water",
    vol_filter_edu: "Education & Tech",
    vol_filter_media: "Media & Reporting",
    vol_filter_aid: "Relief & Logistics",
    vol_shift_days_lbl: "Preferred Days",
    vol_shift_weekdays: "Weekdays (Mon-Fri)",
    vol_shift_weekends: "Weekends (Sat-Sun)",
    vol_shift_flexible: "Flexible Days",
    vol_shift_time_lbl: "Preferred Time of Day",
    vol_shift_morning: "Morning (8 AM - 12 PM)",
    vol_shift_afternoon: "Afternoon (1 PM - 5 PM)",
    vol_shift_allday: "Flexible Hours",
    vol_start_date_lbl: "Earliest Start Date",
    cert_promo_title: "Official Volunteer Certificate",
    cert_promo_sub: "Earn an official verified Certificate of Community Service signed by HopeCambo directors.",
    cert_btn_preview: "Preview Certificate (Live)",
    cert_modal_title: "Certificate of Volunteer Service",
    cert_awarded_to: "This certificate is proudly awarded to",
    cert_body: "For outstanding dedication and volunteer service empowering rural communities in Cambodia.",
    cert_hours: "50+ Verified Field Hours",
    cert_director: "Country Director",
    cert_field_lead: "Field Operations Lead",
    cert_print_btn: "Print / Save Certificate (PDF)",
    vol_testi_title: "Voices From Our Volunteers",
    vol_testi_sub: "Real stories from local students, educators, and international supporters working in Cambodian communities.",
    testi1_name: "Sreyneath Meas",
    testi1_role: "Digital Literacy Volunteer • Phnom Penh & Battambang",
    testi1_text: "Teaching village students how to navigate educational tablets was the most rewarding experience of my university life. Seeing children's faces light up when reading their first digital sentence is something I will never forget.",
    testi2_name: "Thomas Bennett",
    testi2_role: "Clean Water Engineering Intern • Melbourne, Australia",
    testi2_text: "Working alongside Siem Reap commune leaders to install solar filtration wells taught me the power of community-led development. The transparency and local respect at HopeCambo is extraordinary.",
    testi3_name: "Bopha Seng",
    testi3_role: "Field Media & Storytelling Volunteer • Siem Reap",
    testi3_text: "Documenting clean water flowing into a remote primary school for the very first time was deeply moving. Volunteering here gave me direct hands-on experience and a deep pride in helping rural families.",

    // Contact Page
    contact_title: "Get In Touch",
    contact_sub: "Have questions or want to partner with us? We'd love to hear from you.",
    contact_form_title: "Send Us a Message",
    contact_name_lbl: "Your Name",
    contact_email_lbl: "Your Email",
    contact_subject_lbl: "Subject",
    contact_subject_opt1: "General Inquiry",
    contact_subject_opt2: "Partnership Opportunity",
    contact_subject_opt3: "Donation Question",
    contact_subject_opt4: "Volunteer Information",
    contact_subject_opt5: "Media & Press",
    contact_msg_lbl: "Your Message",
    contact_submit_btn: "Send Message",
    contact_success_title: "Message Sent Successfully!",
    contact_success_desc: "Thank you for reaching out. Our team in Phnom Penh will review your message and respond within 24-48 hours.",
    contact_office_h: "Head Office",
    contact_office_p: "No. 45, Street 240, Sangkat Chaktomuk, Khan Daun Penh, Phnom Penh, Cambodia",
    contact_field_h: "Field Operations Office",
    contact_field_p: "Svay Dangkum Commune, Siem Reap Province, Cambodia",

    // Donate Page
    donate_banner_title: "Support Our Cause",
    donate_banner_sub: "Your contribution directly funds clean water stations, school digital kits, and village nourishment.",
    donate_freq_lbl: "Select Donation Frequency",
    donate_freq_once: "One-Time",
    donate_freq_month: "Monthly",
    donate_amt_lbl: "Select Amount ($ USD)",
    donate_custom_lbl: "Or Custom Amount ($ USD)",
    donate_custom_ph: "Enter custom amount (e.g. 75)",
    donate_info_h: "Donor Information",
    donate_name_lbl: "Full Name",
    donate_email_lbl: "Email Address",
    donate_camp_lbl: "Designate Contribution",
    donate_camp_gen: "Where Needed Most (Cambodia Priority)",
    donate_camp_water: "Clean Water for Siem Reap Schools",
    donate_camp_edu: "Digital Classrooms in Battambang",
    donate_camp_food: "Emergency Food & Seed Assistance",
    donate_camp_health: "Solar Power for Rural Health Clinics",
    donate_camp_women: "Clean Water Artisan & Weaving Micro-Grants",
    donate_camp_sanitation: "Eco-Friendly School Sanitation Blocks",
    donate_method_lbl: "Choose Payment Method",
    donate_method_khqr: "KHQR (Bakong / ABA / All Cambodia Banks)",
    donate_method_card: "Credit / Debit Card",
    donate_method_bank: "Direct Bank Wire Transfer",
    donate_submit_btn: "Proceed to Payment",
    khqr_modal_title: "Scan KHQR to Donate",
    khqr_modal_sub: "Scan with Bakong, ABA Mobile, or any Cambodian banking app.",
    khqr_scan_confirm: "I Have Completed Payment",
    thank_modal_title: "Thank You For Your Generosity!",
    thank_modal_sub: "Your donation makes an immediate and verified difference in Cambodia.",
    thank_close_btn: "Return to Home",
    print_receipt: "Print / Save Receipt (PDF)",
    qr_save_btn: "Download / Save QR",
    qr_save_msg: "KHQR payment details copied!",
    close_modal_btn: "Close",
    card_info_h: "Card Payment Details",
    card_num_lbl: "Card Number",
    card_num_ph: "1234 5678 9012 3456",
    card_exp_lbl: "Expiry (MM/YY)",
    card_exp_ph: "MM/YY",
    card_cvv_lbl: "CVV / CVC",
    card_cvv_ph: "123",
    card_name_lbl: "Cardholder Name",
    card_name_ph: "Full Name on Card",
    card_pay_now_btn: "Confirm & Pay Securely",
    bank_info_h: "Cambodian Direct Bank Transfer Details",
    bank_info_desc: "Please transfer to our certified NGO account via ABA or ACLEDA, then click confirm below.",
    bank_aba_usd_lbl: "ABA Bank USD",
    bank_aba_khr_lbl: "ABA Bank KHR",
    bank_account_name: "HopeCambo Community Foundation",
    bank_swift_lbl: "SWIFT / BIC",
    copy_btn: "Copy",
    copied_toast: "Copied to clipboard!",
    bank_confirm_btn: "I Have Sent The Wire Transfer",

    // Footer
    footer_desc: "Building resilient communities in Cambodia through transparent and impactful development programs.",
    footer_quick_links: "Quick Links",
    footer_contact_title: "Contact Info",
    footer_email: "Email: contact@hopecambo.org",
    footer_phone: "Phone: +855 (0) 23 987 654",
    footer_address: "Phnom Penh & Siem Reap, Cambodia",
    footer_news_title: "Newsletter",
    footer_news_sub: "Get monthly field reports and transparent impact stories.",
    footer_news_ph: "Enter your email",
    footer_news_btn: "Subscribe",
    footer_news_success: "Thank you for subscribing to our monthly updates!",
    footer_rights: "© 2026 HopeCambo Non-Profit Organization. All rights reserved."
  },

  km: {
    // Nav
    nav_home: "ទំព័រដើម",
    nav_about: "អំពីយើង",
    nav_volunteer: "ស្ម័គ្រចិត្ត",
    nav_contact: "ទំនាក់ទំនង",
    nav_donate: "បរិច្ចាគឥឡូវនេះ",

    // Hero
    hero_tag: "អង្គការមិនស្វែងរកប្រាក់ចំណេញ",
    hero_title: "ផ្តល់អំណាចដល់សហគមន៍ ផ្លាស់ប្តូរជីវិតនៅកម្ពុជា",
    hero_desc: "យើងធ្វើការដោយផ្ទាល់នៅតាមជនបទនៃប្រទេសកម្ពុជា ដើម្បីផ្តល់អណ្តូងទឹកស្អាតប្រកបដោយនិរន្តរភាព ការអប់រំបច្ចេកវិទ្យា និងសន្តិសុខស្បៀងសម្រាប់គ្រួសារងាយរងគ្រោះ។",
    hero_btn_donate: "ចូលរួមបរិច្ចាគថ្ងៃនេះ",
    hero_btn_mission: "បេសកកម្មរបស់យើង",

    // Stats
    stat_lives: "១២០ពាន់+",
    stat_lives_lbl: "ជីវិតទទួលបានផលប្រយោជន៍",
    stat_projects: "៤៥+",
    stat_projects_lbl: "គម្រោងកំពុងដំណើរការ",
    stat_rate: "៩៨%",
    stat_rate_lbl: "អត្រាផលប៉ះពាល់ផ្ទាល់",

    // Campaigns
    campaigns_title: "គម្រោងសកម្មនៅកម្ពុជា",
    campaigns_sub: "ស្វែងយល់ពីគំនិតផ្តួចផ្តើមបច្ចុប្បន្នដែលត្រូវការការគាំទ្រជាបន្ទាន់របស់អ្នក។",
    camp1_cat: "គម្រោងទឹកស្អាត",
    camp1_title: "ទឹកស្អាតសម្រាប់សាលាបឋមសិក្សាជនបទនៅសៀមរាប",
    camp1_desc: "ការដំឡើងប្រព័ន្ធចម្រោះទឹកស្អាតដើរដោយពន្លឺព្រះអាទិត្យ ដល់សាលាបឋមសិក្សានៅទូទាំងខេត្តសៀមរាប។",
    camp1_raised: "រៃអង្គាសបាន $៣៧,៥០០",
    camp1_goal: "គោលដៅ: $៥០,០០០",
    camp2_cat: "ការអប់រំ",
    camp2_title: "ថ្នាក់រៀនឌីជីថលសម្រាប់យុវជនបាត់ដំបង",
    camp2_desc: "បំពាក់ថេប្លេតពន្លឺព្រះអាទិត្យ កម្មវិធីសិក្សាអន្តរកម្ម និងការបណ្តុះបណ្តាលអក្ខរកម្មភាសាខ្មែរនៅសាលាដាច់ស្រយាល។",
    camp2_raised: "រៃអង្គាសបាន $១៣,៥០០",
    camp2_goal: "គោលដៅ: $៣០,០០០",
    camp3_cat: "អាហារូបត្ថម្ភ និងកសិកម្ម",
    camp3_title: "កញ្ចប់ស្បៀង និងពូជដំណាំបន្ទាន់នៅកំពង់ស្ពឺ",
    camp3_desc: "ចែករំលែកគ្រាប់ពូជដែលធន់នឹងភាពរាំងស្ងួត ឧបករណ៍កសិកម្ម និងអង្ករសង្គ្រោះបន្ទាន់ដល់គ្រួសារកសិករងាយរងគ្រោះ។",
    camp3_raised: "រៃអង្គាសបាន $៤៥,០០០",
    camp3_goal: "គោលដៅ: $៥០,០០០",
    camp4_cat: "សុខាភិបាល និងថាមពលពន្លឺព្រះអាទិត្យ",
    camp4_title: "ថាមពលពន្លឺព្រះអាទិត្យសម្រាប់មណ្ឌលសុខភាពជនបទ",
    camp4_desc: "ការផ្គត់ផ្គង់អគ្គិសនីពន្លឺព្រះអាទិត្យសម្រាប់ទូរទឹកកកវ៉ាក់សាំង ទូរកម្តៅទារក និងសង្គ្រោះបន្ទាន់ពេលយប់។",
    camp4_raised: "រៃអង្គាសបាន $២៨,៤០០",
    camp4_goal: "គោលដៅ: $៣៥,០០០",
    camp5_cat: "ការផ្តល់អំណាចដល់ស្ត្រី",
    camp5_title: "ជំនួយខ្នាតតូចសម្រាប់សិប្បករត្បាញ និងទឹកស្អាត",
    camp5_desc: "ការផ្តល់ដើមទុនខ្នាតតូច ឧបករណ៍ចម្រោះទឹកស្អាត និងឧបករណ៍តម្បាញដល់សហករណ៍ស្ត្រីជនបទ។",
    camp5_raised: "រៃអង្គាសបាន $១៨,២០០",
    camp5_goal: "គោលដៅ: $២៥,០០០",
    camp6_cat: "អនាម័យយុវជន",
    camp6_title: "អគារអនាម័យបៃតងតាមសាលារៀន",
    camp6_desc: "សាងសង់បន្ទប់ទឹក និងកន្លែងលាងដៃអនាម័យស្តង់ដារតាមសាលាបឋមសិក្សាចំនួន ១២ ក្នុងខេត្តកំពង់ចាម។",
    camp6_raised: "រៃអង្គាសបាន $២១,៥០០",
    camp6_goal: "គោលដៅ: $៣០,០០០",
    support_btn: "គាំទ្រគម្រោងនេះ",
    share_campaign: "ចែករំលែក៖",
    share_copied: "បានចម្លងតំណភ្ជាប់គម្រោងជោគជ័យ!",

    // Timeline
    timeline_title: "ដំណាក់កាល និងដំណើរការអនុវត្តគម្រោង",
    timeline_sub: "របៀបដែលគំនិតផ្តួចផ្តើមរបស់ HopeCambo ដំណើរការប្រកបដោយតម្លាភាពពីការស្ទង់មតិរហូតដល់និរន្តរភាព។",
    step1_badge: "ដំណាក់កាល ០១",
    step1_title: "ការស្ទង់តម្រូវការសហគមន៍ និងធនធានទឹក",
    step1_desc: "សហការជាមួយក្រុមប្រឹក្សាឃុំ សង្កាត់ ធ្វើតេស្តគុណភាពទឹកក្រោមដី និងកំណត់អាទិភាពជូនគ្រួសារងាយរងគ្រោះបំផុត។",
    step2_badge: "ដំណាក់កាល ០២",
    step2_title: "ការខួង និងដំឡើងប្រព័ន្ធពន្លឺព្រះអាទិត្យ",
    step2_desc: "ផ្គត់ផ្គង់គ្រឿងបន្លាស់ក្នុងស្រុកដែលមានគុណភាព ខួងអណ្តូងជម្រៅ និងដំឡើងស្ថានីយ៍ចម្រោះទឹកដើរដោយពន្លឺព្រះអាទិត្យ។",
    step3_badge: "ដំណាក់កាល ០៣",
    step3_title: "ការបណ្តុះបណ្តាលគណៈកម្មការ និងបច្ចេកវិទ្យា",
    step3_desc: "បំពាក់ថេប្លេតដល់គ្រូបង្រៀនជនបទ បណ្តុះបណ្តាលជាងភូមិសម្រាប់ការថែទាំ និងត្រួតពិនិត្យសុវត្ថិភាពទឹកជាប្រចាំ។",
    step4_badge: "ដំណាក់កាល ០៤",
    step4_title: "សវនកម្មឯករាជ្យ និងភាពជាម្ចាស់សហគមន៍",
    step4_desc: "ធ្វើតេស្តគុណភាពទឹកប្រចាំត្រីមាស ផ្សព្វផ្សាយរបាយការណ៍ហិរញ្ញវត្ថុបើកចំហ និងប្រគល់ការគ្រប់គ្រងពេញលេញដល់សហគមន៍។",

    // Testimonials
    testimonials_title: "សំឡេងពីសហគមន៍",
    testimonials_sub: "រឿងរ៉ាវពិតពីប្រជាជនដែលទទួលបានអត្ថប្រយោជន៍ដោយផ្ទាល់ពីកម្មវិធីអភិវឌ្ឍន៍របស់យើងនៅតាមជនបទ។",
    testimonial1_text: "មុនពេល HopeCambo ដំឡើងអណ្តូងទឹកនៅសាលា កូនៗយើងត្រូវដើរ ៣ គីឡូម៉ែត្ររាល់ព្រឹកដើម្បីដងទឹកប្រឡាយល្អក់។ ឥឡូវពួកគេមានទឹកស្អាតពិសា និងសិក្សាបានទៀងទាត់។",
    testimonial1_name: "សុខា មាស",
    testimonial1_role: "តំណាងសហគមន៍ ខេត្តសៀមរាប",
    testimonial2_text: "ថេប្លេតដើរដោយពន្លឺព្រះអាទិត្យបានបើកទ្វារចំណេះដឹងថ្មីដល់ថ្នាក់រៀនជនបទ។ ការឃើញសិស្សានុសិស្សរីករាយរៀនអក្ខរកម្មខ្មែរ និងគណិតវិទ្យាពិតជាមានតម្លៃខ្លាំងណាស់។",
    testimonial2_name: "វណ្ណា សុខ",
    testimonial2_role: "លោកគ្រូបង្រៀនបឋមសិក្សា ខេត្តបាត់ដំបង",
    testimonial3_text: "កញ្ចប់ពូជស្រូវធន់នឹងភាពរាំងស្ងួត បានជួយស្រោចស្រង់ភូមិរបស់យើងក្នុងរដូវប្រាំងកន្លងទៅ ធានាស្បៀងអាហារដល់គ្រួសារជាង ៦០ ខ្នងផ្ទះ។",
    testimonial3_name: "រិទ្ធ ជា",
    testimonial3_role: "តំណាងកសិករ ខេត្តកំពង់ស្ពឺ",

    // FAQ
    faq_title: "សំណួរដែលសួរញឹកញាប់",
    faq_sub: "ព័ត៌មានលម្អិតអំពីការចូលរួមបរិច្ចាគ និងប្រតិបត្តិការរបស់យើងនៅកម្ពុជា។",
    faq_q1: "តើការបរិច្ចាគរបស់ខ្ញុំត្រូវបានបែងចែក និងត្រួតពិនិត្យយ៉ាងដូចម្តេច?",
    faq_a1: "៨៥% ប្រើប្រាស់ដោយផ្ទាល់សម្រាប់ហេដ្ឋារចនាសម្ព័ន្ធ (ការខួងអណ្តូង ម៉ាស៊ីនពន្លឺព្រះអាទិត្យ ថេប្លេត និងស្បៀងអាហារ)។ ១០% សម្រាប់តេស្តគុណភាពទឹក និងសុវត្ថិភាព ហើយ ៥% សម្រាប់រដ្ឋបាល។",
    faq_q2: "តើខ្ញុំអាចបរិច្ចាគជាប្រាក់រៀល ឬតាម KHQR បានទេ?",
    faq_a2: "បាទ/ចាស! ប្រព័ន្ធរបស់យើងបង្កើតកូដ KHQR ភ្លាមៗ អាចស្កេនទូទាត់ជាមួយបាគង ABA Mobile, Wing, ACLEDA និងធនាគារទាំងអស់នៅកម្ពុជា។",
    faq_q3: "តើអ្នកស្ម័គ្រចិត្តអន្តរជាតិ ឬនៅឆ្ងាយអាចចូលរួមតាមអនឡាញបានទេ?",
    faq_a3: "បានយ៉ាងពិតប្រាកដ។ យើងស្វាគមន៍អ្នកស្ម័គ្រចិត្តក្នុងការបង្កើតមេរៀន ឌីហ្សាញ ផ្សព្វផ្សាយព័ត៌មាន និងបកប្រែឯកសារ។",
    faq_q4: "តើដៃគូសាជីវកម្ម ឬអង្គការ NGO អាចសហការជាមួយ HopeCambo ដោយរបៀបណា?",
    faq_a4: "យើងស្វាគមន៍ភាពជាដៃគូជាមួយក្រុមប្រឹក្សាឃុំ អង្គការសង្គមស៊ីវិល និងវិស័យឯកជន។ លោកអ្នកអាចទាក់ទងមកកាន់ទំព័រទំនាក់ទំនង ឬ Telegram របស់យើង។",

    // Partners & Endorsements
    partners_title: "ដៃគូសហការ និងការគាំទ្រពីសហគមន៍",
    partners_sub: "សហការយ៉ាងជិតស្និទ្ធជាមួយក្រុមប្រឹក្សាឃុំ មន្ទីរអប់រំ និងអង្គការអភិវឌ្ឍន៍សហគមន៍នៅកម្ពុជា។",
    partner1_desc: "ដៃគូអនាម័យសាលាបឋមសិក្សាជនបទ",
    partner2_desc: "តំណាងក្រុមប្រឹក្សាឃុំសង្កាត់មូលដ្ឋាន",
    partner3_desc: "ដៃគូវិស្វកម្មទឹកស្អាតពន្លឺព្រះអាទិត្យ",
    partner4_desc: "ដៃគូបណ្តុះបណ្តាលបច្ចេកវិទ្យា និងអក្ខរកម្ម",

    // Quick Chat Widget
    chat_bubble_btn: "ត្រូវការជំនួយ? ជជែកជាមួយយើង",
    chat_box_title: "ទំនាក់ទំនងជាមួយ HopeCambo",
    chat_box_sub: "ក្រុមការងាររបស់យើងនៅភ្នំពេញ និងសៀមរាប រង់ចាំឆ្លើយតបអ្នកផ្ទាល់។",
    chat_telegram: "ផ្ញើសារតាម Telegram",
    chat_telegram_sub: "@hopecambo_support",
    chat_whatsapp: "ផ្ញើសារតាម WhatsApp",
    chat_whatsapp_sub: "+855 23 987 654",

    // Gallery
    gallery_title: "រូបភាពសកម្មភាព និងផលប៉ះពាល់ផ្ទាល់",
    gallery_sub: "ទិដ្ឋភាពពិតនៃការងារអភិវឌ្ឍន៍សហគមន៍របស់យើងនៅតាមបណ្តាខេត្តនៃប្រទេសកម្ពុជា។",
    filter_all: "គម្រោងទាំងអស់",
    filter_water: "ទឹកស្អាត",
    filter_edu: "ការអប់រំ",
    filter_comm: "សហគមន៍",
    gal1_title: "អណ្តូងទឹកស្អាតខេត្តសៀមរាប",
    gal1_desc: "ស្ថានីយ៍ទឹកស្អាតពន្លឺព្រះអាទិត្យសម្រាប់សិស្សសាលា ៤០០ នាក់។",
    gal2_title: "ថ្នាក់រៀនឌីជីថលបាត់ដំបង",
    gal2_desc: "សិស្សបឋមសិក្សាកំពុងប្រើប្រាស់ថេប្លេតសម្រាប់ការរៀនសូត្រ។",
    gal3_title: "បេសកកម្មបឹងទន្លេសាប",
    gal3_desc: "ការផ្តល់សេវាសុខភាព និងទឹកស្អាតដល់ភូមិបណ្តែតទឹក។",
    gal4_title: "កសិកម្មខេត្តកំពង់ស្ពឺ",
    gal4_desc: "ការចែកពូជដំណាំធម្មជាតិ និងជំនួយទប់ទល់ភាពរាំងស្ងួត។",
    gal5_title: "ការខួងអណ្តូងដោយអ្នកស្ម័គ្រចិត្ត",
    gal5_desc: "មេដឹកនាំសហគមន៍មូលដ្ឋានធ្វើតេស្តគុណភាពទឹកស្អាត។",
    gal6_title: "ភាពបរិសុទ្ធនៃទឹកពិសា",
    gal6_desc: "ទឹកស្អាតប្រកបដោយសុវត្ថិភាពសម្រាប់កុមារគ្រប់ៗរូបក្នុងភូមិ។",
    gal7_title: "ការដំឡើងពន្លឺព្រះអាទិត្យនៅមណ្ឌលសុខភាព",
    gal7_desc: "ផ្គត់ផ្គង់ថាមពលដល់ឧបករណ៍វេជ្ជសាស្ត្រ និងការថែរក្សាវ៉ាក់សាំង។",
    gal8_title: "សហករណ៍សិប្បករស្ត្រី",
    gal8_desc: "ផ្តល់អំណាចដល់ម្តាយជនបទតាមរយៈការបណ្តុះបណ្តាលសិប្បកម្មនិរន្តរភាព។",
    gal9_title: "អគារអនាម័យខេត្តកំពង់ចាម",
    gal9_desc: "បន្ទប់ទឹកអនាម័យសាលារៀនដើម្បីលើកកម្ពស់សុខភាពសិស្សានុសិស្ស។",
    filter_health: "សុខាភិបាល",
    filter_women: "ស្ត្រី និងយុវជន",

    // Top Donors
    donors_title: "សប្បុរសជនឆ្នើមរបស់យើង",
    donors_sub: "ការថ្លែងអំណរគុណចំពោះសប្បុរសជនដែលបានចូលរួមចំណែកយ៉ាងធំធេងដល់បេសកកម្មរបស់យើង។",
    donor_top: "សប្បុរសជនកិត្តិយសកំពូល",
    donor_key: "សប្បុរសជនសំខាន់",
    donor_patron: "ឧបត្ថម្ភសហគមន៍",
    donor_advocate: "អ្នកគាំទ្រសកម្ម",

    // About Page
    about_banner_title: "អំពីអង្គការយើង",
    about_banner_sub: "ប្តេជ្ញាបង្កើតផលប៉ះពាល់យូរអង្វែង តាមរយៈដំណោះស្រាយដឹកនាំដោយសហគមន៍នៅកម្ពុជា។",
    about_mission_tag: "បេសកកម្មរបស់យើង",
    about_mission_h2: "កសាងអនាគតប្រកបដោយនិរន្តរភាព រួមគ្នា",
    about_mission_p1: "បង្កើតឡើងក្នុងឆ្នាំ ២០១៨ HopeCambo ប្រកាន់ខ្ជាប់នូវជំនឿជាក់តែមួយ៖ ការកាត់បន្ថយភាពក្រីក្ររយៈពេលវែងតម្រូវឱ្យមានភាពជាម្ចាស់ពីសហគមន៍មូលដ្ឋាន ហេដ្ឋារចនាសម្ព័ន្ធនិរន្តរភាព និងតម្លាភាពហិរញ្ញវត្ថុពេញលេញ។",
    about_mission_p2: "យើងធ្វើការដោយផ្ទាល់ជាមួយមេដឹកនាំភូមិ លោកគ្រូអ្នកគ្រូ និងអាជ្ញាធរមូលដ្ឋាន ដើម្បីកសាងអណ្តូងទឹកស្អាត បំពាក់ថ្នាក់រៀនជនបទ និងធានាសន្តិសុខស្បៀងសម្រាប់កូនចៅជំនាន់ក្រោយ។",
    about_trans_title: "តម្លាភាពហិរញ្ញវត្ថុ",
    about_trans_sub: "យើងមានការទទួលខុសត្រូវខ្ពស់ចំពោះម្ចាស់ជំនួយគ្រប់រូប។ នេះជាកន្លែងដែលការបរិច្ចាគរបស់អ្នកត្រូវបានប្រើប្រាស់។",
    trans_card1_h: "គម្រោងផ្ទាល់នៅមូលដ្ឋាន",
    trans_card1_p: "មូលនិធិប្រើប្រាស់ដោយផ្ទាល់ក្នុងការទិញម៉ាស៊ីនបូមទឹក បច្ចេកវិទ្យាសាលារៀន គ្រាប់ពូជកសិកម្ម និងពលកម្មក្នុងស្រុក។",
    trans_card2_h: "ប្រតិបត្តិការ និងសុវត្ថិភាព",
    trans_card2_p: "រ៉ាប់រងការត្រួតពិនិត្យបច្ចេកទេស ការធ្វើតេស្តគុណភាពទឹក ឧបករណ៍សុវត្ថិភាព និងការដឹកជញ្ជូនទៅកាន់ខេត្តជនបទ។",
    trans_card3_h: "រដ្ឋបាល និងការរៃអង្គាស",
    trans_card3_p: "ទ្រទ្រង់ប្រព័ន្ធគណនេយ្យប្រកបដោយតម្លាភាព សុវត្ថិភាពទូទាត់ និងការរាយការណ៍ជាសាធារណៈជូនសហគមន៍។",
    about_values_title: "គុណតម្លៃស្នូលរបស់យើង",
    about_values_sub: "គោលការណ៍ដែលដឹកនាំរាល់ការសម្រេចចិត្តរបស់យើងនៅមូលដ្ឋាន។",
    val_card1_h: "ដឹកនាំដោយសហគមន៍",
    val_card1_p: "យើងស្តាប់មុននឹងធ្វើសកម្មភាព។ គម្រោងនីមួយៗត្រូវបានជ្រើសរើស និងថែទាំដោយមេដឹកនាំសហគមន៍មូលដ្ឋាន។",
    val_card2_h: "តម្លាភាពដាច់ខាត",
    val_card2_p: "រាល់ដុល្លារត្រូវបានតាមដានយ៉ាងច្បាស់លាស់។ យើងផ្សព្វផ្សាយរបាយការណ៍ហិរញ្ញវត្ថុពិតប្រាកដ ដើម្បីទំនុកចិត្តពេញលេញ។",
    val_card3_h: "និរន្តរភាពជាចម្បង",
    val_card3_p: "រាល់ម៉ាស៊ីនបូមទឹកពន្លឺព្រះអាទិត្យ ត្រូវបានដំឡើងជាមួយគ្រឿងបន្លាស់ក្នុងស្រុក និងបណ្តុះបណ្តាលជាងជួសជុលភូមិ។",

    // Volunteer Page
    vol_banner_title: "ចូលរួមបេសកកម្មជាមួយយើង",
    vol_banner_sub: "ផ្តល់ពេលវេលា ថាមពល និងជំនាញរបស់អ្នកដើម្បីជួយសហគមន៍នៅកម្ពុជា។",
    vol_form_title: "ពាក្យស្នើសុំការងារស្ម័គ្រចិត្ត",
    vol_name_lbl: "ឈ្មោះពេញ",
    vol_email_lbl: "អាសយដ្ឋានអ៊ីមែល",
    vol_phone_lbl: "លេខទូរស័ព្ទ / គណនី Telegram",
    vol_loc_lbl: "ទីតាំងបច្ចុប្បន្ន",
    vol_loc_opt1: "រាជធានីភ្នំពេញ កម្ពុជា",
    vol_loc_opt2: "ខេត្តសៀមរាប កម្ពុជា",
    vol_loc_opt3: "ខេត្តបាត់ដំបង កម្ពុជា",
    vol_loc_opt4: "ខេត្តផ្សេងទៀតនៅកម្ពុជា",
    vol_loc_opt5: "អន្តរជាតិ / តាមអ៊ីនធឺណិត",
    vol_role_lbl: "ជំនាញ ឬផ្នែកដែលចាប់អារម្មណ៍",
    vol_role_opt1: "ការងារខួង និងថែទាំអណ្តូងទឹកស្អាត",
    vol_role_opt2: "បង្រៀនអក្ខរកម្មឌីជីថល និងភាសាអង់គ្លេស",
    vol_role_opt3: "ថតរូប វីដេអូ និងការរាយការណ៍ព័ត៌មាន",
    vol_role_opt4: "ភស្តុភារ និងការចែកអំណោយសង្គ្រោះបន្ទាន់",
    vol_avail_lbl: "ពេលវេលាដែលអាចចូលរួមបាន",
    vol_avail_opt1: "ចុងសប្តាហ៍ប៉ុណ្ណោះ",
    vol_avail_opt2: "ក្រៅម៉ោង (១-២ ថ្ងៃក្នុងមួយសប្តាហ៍)",
    vol_avail_opt3: "ពេញម៉ោង (១-៣ ខែ)",
    vol_avail_opt4: "ស្ម័គ្រចិត្តតាមអនឡាញពីចម្ងាយ",
    vol_msg_lbl: "ហេតុអ្វីអ្នកចង់ចូលរួមជាមួយ HopeCambo?",
    vol_submit_btn: "ដាក់ពាក្យស្នើសុំ",
    vol_success_title: "ទទួលបានពាក្យស្នើសុំជោគជ័យ!",
    vol_success_desc: "សូមអរគុណចំពោះទឹកចិត្តរបស់អ្នក។ អ្នកសម្របសម្រួលអ្នកស្ម័គ្រចិត្តរបស់យើងនៅភ្នំពេញ នឹងទាក់ទងមកអ្នកតាម Telegram ឬអ៊ីមែលក្នុងរយៈពេល ៤៨ ម៉ោង។",
    vol_filter_label: "ចម្រាញ់ផ្នែកតាមជំនាញ:",
    vol_filter_all: "តួនាទីទាំងអស់ (៤)",
    vol_filter_water: "ទឹកស្អាត",
    vol_filter_edu: "អប់រំ និងឌីជីថល",
    vol_filter_media: "ប្រព័ន្ធផ្សព្វផ្សាយ",
    vol_filter_aid: "ជំនួយសង្គ្រោះ",
    vol_shift_days_lbl: "ថ្ងៃដែលអាចចូលរួម",
    vol_shift_weekdays: "ថ្ងៃធ្វើការ (ច័ន្ទ-សុក្រ)",
    vol_shift_weekends: "ចុងសប្តាហ៍ (សៅរ៍-អាទិត្យ)",
    vol_shift_flexible: "ថ្ងៃបត់បែន",
    vol_shift_time_lbl: "ពេលវេលាក្នុងថ្ងៃ",
    vol_shift_morning: "ពេលព្រឹក (៨ព្រឹក - ១២ថ្ងៃត្រង់)",
    vol_shift_afternoon: "ពេលរសៀល (១រសៀល - ៥ល្ងាច)",
    vol_shift_allday: "ម៉ោងបត់បែន",
    vol_start_date_lbl: "កាលបរិច្ឆេទចាប់ផ្តើមដំបូងបំផុត",
    cert_promo_title: "វិញ្ញាបនបត្រការងារស្ម័គ្រចិត្តផ្លូវការ",
    cert_promo_sub: "ទទួលបានវិញ្ញាបនបត្របញ្ជាក់ការងារសហគមន៍ផ្លូវការ ចុះហត្ថលេខាដោយនាយកអង្គការ HopeCambo។",
    cert_btn_preview: "មើលគំរូវិញ្ញាបនបត្រ (ផ្ទាល់)",
    cert_modal_title: "វិញ្ញាបនបត្រទទួលស្គាល់ការងារស្ម័គ្រចិត្ត",
    cert_awarded_to: "វិញ្ញាបនបត្រនេះត្រូវបានប្រគល់ជូនដោយកិត្តិយសដល់",
    cert_body: "សម្រាប់ការលះបង់ និងការចូលរួមយ៉ាងសកម្មក្នុងការជួយលើកកម្ពស់សហគមន៍ជនបទនៅប្រទេសកម្ពុជា។",
    cert_hours: "៥០+ ម៉ោងការងារមូលដ្ឋានដែលបានផ្ទៀងផ្ទាត់",
    cert_director: "នាយកប្រចាំប្រទេស",
    cert_field_lead: "ប្រធានប្រតិបត្តិការមូលដ្ឋាន",
    cert_print_btn: "បោះពុម្ព / រក្សាទុកវិញ្ញាបនបត្រ (PDF)",
    vol_testi_title: "សម្រែកចិត្តពីអ្នកស្ម័គ្រចិត្តរបស់យើង",
    vol_testi_sub: "រឿងរ៉ាវពិតពីនិស្សិត អ្នកជំនាញ និងអ្នកគាំទ្រអន្តរជាតិដែលបានចុះជួយសហគមន៍នៅកម្ពុជា។",
    testi1_name: "មាស ស្រីណាត",
    testi1_role: "អ្នកស្ម័គ្រចិត្តអក្ខរកម្មឌីជីថល • ភ្នំពេញ និងបាត់ដំបង",
    testi1_text: "ការបង្រៀនកុមារនៅជនបទឱ្យចេះប្រើប្រាស់ថេប្លេតអប់រំ គឺជាបទពិសោធន៍ដ៏មានអត្ថន័យបំផុតក្នុងជីវិតជានិស្សិតរបស់ខ្ញុំ។ ការឃើញស្នាមញញឹមរបស់កុមារពេលចេះអានអក្សរឌីជីថលដំបូង គឺជាការចងចាំមិនអាចបំភ្លេចបាន។",
    testi2_name: "Thomas Bennett",
    testi2_role: "កម្មសិក្សាការីវិស្វកម្មទឹកស្អាត • ទីក្រុង Melbourne ប្រទេសអូស្ត្រាលី",
    testi2_text: "ការធ្វើការជាមួយថ្នាក់ដឹកនាំឃុំនៅសៀមរាបក្នុងការដំឡើងអណ្តូងសូឡា បានបង្រៀនខ្ញុំពីតម្លៃនៃការអភិវឌ្ឍដឹកនាំដោយសហគមន៍។ តម្លាភាព និងការគោរពវប្បធម៌មូលដ្ឋាននៅ HopeCambo ពិតជាអស្ចារ្យ។",
    testi3_name: "សេង បុប្ផា",
    testi3_role: "អ្នកស្ម័គ្រចិត្តថតរូប និងរាយការណ៍ • ខេត្តសៀមរាប",
    testi3_text: "ការថតរូបភាពទឹកស្អាតហូរចូលសាលាបឋមសិក្សាដាច់ស្រយាលជាលើកដំបូង គឺជាអារម្មណ៍រំភើបយ៉ាងខ្លាំង។ ការងារស្ម័គ្រចិត្តនៅទីនេះបានផ្តល់ឱ្យខ្ញុំនូវជំនាញអនុវត្តជាក់ស្តែង និងមោទនភាពក្នុងការជួយកុមារកម្ពុជា។",

    // Contact Page
    contact_title: "ទំនាក់ទំនងមកយើង",
    contact_sub: "មានសំណួរ ឬចង់សហការជាដៃគូជាមួយយើង? ក្រុមការងារយើងរីករាយស្វាគមន៍ការសន្ទនាពីអ្នក។",
    contact_form_title: "ផ្ញើសារមកកាន់យើង",
    contact_name_lbl: "ឈ្មោះរបស់អ្នក",
    contact_email_lbl: "អាសយដ្ឋានអ៊ីមែល",
    contact_subject_lbl: "ប្រធានបទ",
    contact_subject_opt1: "សំណួរទូទៅ",
    contact_subject_opt2: "ឱកាសភាពជាដៃគូ",
    contact_subject_opt3: "សំណួរអំពីការបរិច្ចាគ",
    contact_subject_opt4: "ព័ត៌មានការងារស្ម័គ្រចិត្ត",
    contact_subject_opt5: "ព័ត៌មាន និងប្រព័ន្ធផ្សព្វផ្សាយ",
    contact_msg_lbl: "ខ្លឹមសារសាររបស់អ្នក",
    contact_submit_btn: "ផ្ញើសារឥឡូវនេះ",
    contact_success_title: "ទទួលបានសារជោគជ័យ!",
    contact_success_desc: "សូមអរគុណចំពោះការទាក់ទងមកកាន់ HopeCambo។ ក្រុមការងាររបស់យើងនៅរាជធានីភ្នំពេញ នឹងឆ្លើយតបមកកាន់អ្នកក្នុងរយៈពេល ២៤-៤៨ ម៉ោង។",
    contact_office_h: "ការិយាល័យកណ្តាល",
    contact_office_p: "ផ្ទះលេខ ៤៥ ផ្លូវ ២៤០ សង្កាត់ចតុមុខ ខណ្ឌដូនពេញ រាជធានីភ្នំពេញ កម្ពុជា",
    contact_field_h: "ការិយាល័យប្រតិបត្តិការមូលដ្ឋាន",
    contact_field_p: "ឃុំស្វាយដង្គំ ក្រុងសៀមរាប ខេត្តសៀមរាប កម្ពុជា",

    // Donate Page
    donate_banner_title: "ចូលរួមគាំទ្របេសកកម្ម",
    donate_banner_sub: "ការចូលរួមរបស់អ្នកនឹងផ្តល់អណ្តូងទឹកស្អាត ឧបករណ៍រៀនសូត្រឌីជីថល និងស្បៀងអាហារដល់សហគមន៍ជនបទ។",
    donate_freq_lbl: "ជ្រើសរើសប្រភេទនៃការបរិច្ចាគ",
    donate_freq_once: "ម្តងគត់",
    donate_freq_month: "ប្រចាំខែ",
    donate_amt_lbl: "ជ្រើសរើសចំនួនទឹកប្រាក់ ($ ដុល្លារ)",
    donate_custom_lbl: "ឬបញ្ចូលចំនួនទឹកប្រាក់ផ្សេងទៀត ($ ដុល្លារ)",
    donate_custom_ph: "ឧទាហរណ៍៖ 75",
    donate_info_h: "ព័ត៌មានអ្នកបរិច្ចាគ",
    donate_name_lbl: "ឈ្មោះពេញ",
    donate_email_lbl: "អាសយដ្ឋានអ៊ីមែល",
    donate_camp_lbl: "ជ្រើសរើសគម្រោងដែលចង់គាំទ្រ",
    donate_camp_gen: "គម្រោងដែលត្រូវការចាំបាច់បំផុត (អាទិភាពកម្ពុជា)",
    donate_camp_water: "ទឹកស្អាតសម្រាប់សាលារៀនខេត្តសៀមរាប",
    donate_camp_edu: "ថ្នាក់រៀនឌីជីថលនៅខេត្តបាត់ដំបង",
    donate_camp_food: "កញ្ចប់ស្បៀង និងគ្រាប់ពូជសង្គ្រោះបន្ទាន់",
    donate_camp_health: "ថាមពលពន្លឺព្រះអាទិត្យសម្រាប់មណ្ឌលសុខភាពជនបទ",
    donate_camp_women: "ជំនួយខ្នាតតូចសម្រាប់សិប្បករត្បាញ និងទឹកស្អាត",
    donate_camp_sanitation: "អគារអនាម័យបៃតងតាមសាលារៀន",
    donate_method_lbl: "ជ្រើសរើសវិធីសាស្ត្រទូទាត់ប្រាក់",
    donate_method_khqr: "KHQR (បាគង / ABA / ធនាគារទាំងអស់នៅកម្ពុជា)",
    donate_method_card: "កាតធនាគារ (Visa / MasterCard)",
    donate_method_bank: "ផ្ទេរប្រាក់តាមធនាគារដោយផ្ទាល់",
    donate_submit_btn: "បន្តទៅកាន់ការទូទាត់",
    khqr_modal_title: "ស្កេន KHQR ដើម្បីបរិច្ចាគ",
    khqr_modal_sub: "ស្កេនជាមួយ Bakong, ABA Mobile ឬកម្មវិធីធនាគារណាមួយនៅកម្ពុជា។",
    khqr_scan_confirm: "ខ្ញុំបានទូទាត់ប្រាក់រួចរាល់",
    thank_modal_title: "សូមអរគុណចំពោះទឹកចិត្តសប្បុរសធម៌របស់អ្នក!",
    thank_modal_sub: "ការបរិច្ចាគរបស់អ្នកបង្កើតផលប៉ះពាល់ជាវិជ្ជមានភ្លាមៗដល់សហគមន៍នៅកម្ពុជា។",
    thank_close_btn: "ត្រឡប់ទៅទំព័រដើម",
    print_receipt: "បោះពុម្ព / រក្សាទុកបង្កាន់ដៃ (PDF)",
    qr_save_btn: "ទាញយក / រក្សាទុក QR",
    qr_save_msg: "បានចម្លងព័ត៌មានទូទាត់ KHQR រួចរាល់!",
    close_modal_btn: "បិទ",
    card_info_h: "ព័ត៌មានលម្អិតអំពីកាតធនាគារ",
    card_num_lbl: "លេខកាតធនាគារ",
    card_num_ph: "1234 5678 9012 3456",
    card_exp_lbl: "ថ្ងៃផុតកំណត់ (ខែ/ឆ្នាំ)",
    card_exp_ph: "MM/YY",
    card_cvv_lbl: "CVV / CVC",
    card_cvv_ph: "123",
    card_name_lbl: "ឈ្មោះម្ចាស់កាត",
    card_name_ph: "ឈ្មោះពេញលើកាត",
    card_pay_now_btn: "បញ្ជាក់ និងទូទាត់ប្រាក់ដោយសុវត្ថិភាព",
    bank_info_h: "ព័ត៌មានលម្អិតអំពីការផ្ទេរប្រាក់តាមធនាគារនៅកម្ពុជា",
    bank_info_desc: "សូមផ្ទេរប្រាក់ទៅកាន់គណនីអង្គការផ្លូវការតាម ABA ឬ ACLEDA បន្ទាប់មកចុចបញ្ជាក់ខាងក្រោម។",
    bank_aba_usd_lbl: "ធនាគារ ABA ប្រាក់ដុល្លារ",
    bank_aba_khr_lbl: "ធនាគារ ABA ប្រាក់រៀល",
    bank_account_name: "HopeCambo Community Foundation",
    bank_swift_lbl: "SWIFT / BIC",
    copy_btn: "ចម្លង",
    copied_toast: "បានចម្លងទៅក្ដារតម្បៀតខ្ទាស់!",
    bank_confirm_btn: "ខ្ញុំបានផ្ញើប្រាក់រួចរាល់",

    // Footer
    footer_desc: "កសាងសហគមន៍រឹងមាំនៅកម្ពុជា តាមរយៈកម្មវិធីអភិវឌ្ឍន៍ប្រកបដោយតម្លាភាព និងនិរន្តរភាព។",
    footer_quick_links: "តំណភ្ជាប់រហ័ស",
    footer_contact_title: "ព័ត៌មានទំនាក់ទំនង",
    footer_email: "អ៊ីមែល: contact@hopecambo.org",
    footer_phone: "ទូរស័ព្ទ: +855 (0) 23 987 654",
    footer_address: "រាជធានីភ្នំពេញ និងខេត្តសៀមរាប ប្រទេសកម្ពុជា",
    footer_news_title: "ព្រឹត្តិបត្រព័ត៌មាន",
    footer_news_sub: "ទទួលបានរបាយការណ៍សកម្មភាព និងរឿងរ៉ាវពិតប្រចាំខែពីមូលដ្ឋាន។",
    footer_news_ph: "បញ្ចូលអ៊ីមែលរបស់អ្នក",
    footer_news_btn: "ចុះឈ្មោះ",
    footer_news_success: "សូមអរគុណចំពោះការចុះឈ្មោះរបស់អ្នក!",
    footer_rights: "© ២០២៦ អង្គការ HopeCambo។ រក្សាសិទ្ធិគ្រប់យ៉ាង។"
  }
};

// Current active language - persisted in localStorage
let currentLang = localStorage.getItem('hopecambo_lang') || 'en';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('hopecambo_lang', lang);

  const dict = translations[lang];

  // Update text elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update input placeholders with data-i18n-ph
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Toggle body class for Khmer font smoothing
  if (lang === 'km') {
    document.body.classList.add('lang-khmer');
  } else {
    document.body.classList.remove('lang-khmer');
  }

  // Update toggle button with flag icon & label
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    if (lang === 'en') {
      toggleBtn.innerHTML = `${flagKhmerSVG} <span>ខ្មែរ</span>`;
      toggleBtn.setAttribute('title', 'ប្តូរទៅភាសាខ្មែរ (Switch to Khmer)');
      toggleBtn.setAttribute('aria-label', 'Switch to Khmer');
    } else {
      toggleBtn.innerHTML = `${flagUKSVG} <span>English</span>`;
      toggleBtn.setAttribute('title', 'Switch to English');
      toggleBtn.setAttribute('aria-label', 'Switch to English');
    }
  }
}

// Toast helper
function showToast(message) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="material-icons" style="font-size:18px;color:#4ade80;">check_circle</span> <span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Animated Counter logic
function animateCounter(el, target, suffix) {
  let current = 0;
  const duration = 1600;
  const stepTime = 20;
  const steps = duration / stepTime;
  const increment = target / steps;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    const val = Math.floor(current);
    if (currentLang === 'km') {
      const khmerDigits = ['០','១','២','៣','៤','៥','៦','៧','៨','៩'];
      const khmerNum = val.toString().split('').map(d => khmerDigits[parseInt(d)] || d).join('');
      if (suffix === 'K+') el.textContent = khmerNum + 'ពាន់+';
      else if (suffix === '%') el.textContent = khmerNum + '%';
      else el.textContent = khmerNum + '+';
    } else {
      if (suffix === 'K+') el.textContent = val + 'K+';
      else if (suffix === '%') el.textContent = val + '%';
      else el.textContent = val + '+';
    }
  }, stepTime);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // 1. Language apply
  setLanguage(currentLang);

  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'km' : 'en';
      setLanguage(nextLang);
    });
  }

  // 2. Sticky Header shadow on scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // 3. Shared Mobile Navigation Toggle & Backdrop System
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  let navBackdrop = document.querySelector('.nav-backdrop');
  if (!navBackdrop) {
    navBackdrop = document.createElement('div');
    navBackdrop.className = 'nav-backdrop';
    document.body.appendChild(navBackdrop);
  }

  function closeMobileNav() {
    if (nav && nav.classList.contains('nav-open')) {
      nav.classList.remove('nav-open');
      if (navBackdrop) navBackdrop.classList.remove('active');
      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
        const icon = menuToggle.querySelector('.material-icons');
        if (icon) icon.textContent = 'menu';
      }
    }
  }

  if (menuToggle && nav) {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = nav.classList.toggle('nav-open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (navBackdrop) {
        navBackdrop.classList.toggle('active', isOpen);
      }
      const icon = menuToggle.querySelector('.material-icons');
      if (icon) {
        icon.textContent = isOpen ? 'close' : 'menu';
      }
    });

    if (navBackdrop) {
      navBackdrop.addEventListener('click', closeMobileNav);
    }

    document.addEventListener('click', (e) => {
      if (nav.classList.contains('nav-open') && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
        closeMobileNav();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileNav();
      }
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });
  }

  // 4. Newsletter Form Submission with user feedback
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      const feedback = document.getElementById('newsletterFeedback');
      if (emailInput && emailInput.value.trim()) {
        const msg = currentLang === 'km' ? translations.km.footer_news_success : translations.en.footer_news_success;
        feedback.textContent = msg;
        feedback.style.display = 'block';
        showToast(msg);
        emailInput.value = '';
        setTimeout(() => {
          feedback.style.display = 'none';
        }, 5000);
      }
    });
  }

  // 5. Scroll Reveal System
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // 5b. Smooth Animated Progress Bars
  const progressBars = document.querySelectorAll('.progress-bar');
  if (progressBars.length > 0 && 'IntersectionObserver' in window) {
    const progObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetWidth = bar.getAttribute('data-width') || bar.style.width;
          if (targetWidth) {
            bar.style.width = '0%';
            setTimeout(() => {
              bar.style.width = targetWidth;
            }, 80);
          }
          progObserver.unobserve(bar);
        }
      });
    }, { threshold: 0.15 });

    progressBars.forEach(b => {
      const w = b.style.width;
      if (w) b.setAttribute('data-width', w);
      progObserver.observe(b);
    });
  }

  // 6. Stat Counter Animation on Viewport Entry
  const statsSection = document.querySelector('.stats');
  if (statsSection && 'IntersectionObserver' in window) {
    let animated = false;
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          const statBoxes = statsSection.querySelectorAll('.stat-box');
          if (statBoxes[0]) animateCounter(statBoxes[0].querySelector('h2'), 120, 'K+');
          if (statBoxes[1]) animateCounter(statBoxes[1].querySelector('h2'), 45, '+');
          if (statBoxes[2]) animateCounter(statBoxes[2].querySelector('h2'), 98, '%');
          statObserver.unobserve(statsSection);
        }
      });
    }, { threshold: 0.3 });
    statObserver.observe(statsSection);
  }

  // 7. Back to Top Button
  if (!document.querySelector('.back-to-top')) {
    const backBtn = document.createElement('button');
    backBtn.className = 'back-to-top';
    backBtn.setAttribute('aria-label', 'Back to top');
    backBtn.innerHTML = '<span class="material-icons">keyboard_arrow_up</span>';
    document.body.appendChild(backBtn);

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backBtn.classList.add('visible');
      } else {
        backBtn.classList.remove('visible');
      }
    });

    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 8. Setup Quick Chat Floating Widget
  setupQuickChatWidget();

  // 9. Setup Social Share Buttons
  setupShareButtons();
});

// Floating Quick Chat Widget Builder
function setupQuickChatWidget() {
  if (document.getElementById('quickChatWidget')) return;

  const chatContainer = document.createElement('div');
  chatContainer.id = 'quickChatWidget';
  chatContainer.className = 'quick-chat-widget';
  chatContainer.innerHTML = `
    <div class="chat-popup" id="chatPopup" aria-hidden="true">
      <div class="chat-popup-header">
        <div>
          <h4 data-i18n="chat_box_title">${translations[currentLang].chat_box_title}</h4>
          <p data-i18n="chat_box_sub">${translations[currentLang].chat_box_sub}</p>
        </div>
        <button class="chat-close-btn" id="chatCloseBtn" aria-label="Close Chat">&times;</button>
      </div>
      <div class="chat-popup-body">
        <a href="https://t.me/hopecambo_support" target="_blank" rel="noopener" class="chat-channel-btn telegram-btn">
          <span class="channel-icon">✈</span>
          <div class="channel-info">
            <strong data-i18n="chat_telegram">${translations[currentLang].chat_telegram}</strong>
            <span data-i18n="chat_telegram_sub">${translations[currentLang].chat_telegram_sub}</span>
          </div>
        </a>
        <a href="https://wa.me/85523987654" target="_blank" rel="noopener" class="chat-channel-btn whatsapp-btn">
          <span class="channel-icon">💬</span>
          <div class="channel-info">
            <strong data-i18n="chat_whatsapp">${translations[currentLang].chat_whatsapp}</strong>
            <span data-i18n="chat_whatsapp_sub">${translations[currentLang].chat_whatsapp_sub}</span>
          </div>
        </a>
      </div>
    </div>
    <button class="chat-toggle-btn" id="chatToggleBtn" aria-label="Open Live Chat">
      <span class="material-icons chat-icon">question_answer</span>
      <span class="chat-label" data-i18n="chat_bubble_btn">${translations[currentLang].chat_bubble_btn}</span>
    </button>
  `;

  document.body.appendChild(chatContainer);

  const toggleBtn = document.getElementById('chatToggleBtn');
  const popup = document.getElementById('chatPopup');
  const closeBtn = document.getElementById('chatCloseBtn');

  if (toggleBtn && popup && closeBtn) {
    toggleBtn.addEventListener('click', () => {
      popup.classList.toggle('active');
    });
    closeBtn.addEventListener('click', () => {
      popup.classList.remove('active');
    });
  }
}

// Social Share handler with working URLs and Toast notifications
function setupShareButtons() {
  document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const network = btn.getAttribute('data-network');
      const card = btn.closest('.card');
      const title = card ? card.querySelector('h3').textContent : 'HopeCambo Community Initiative';
      const pageUrl = window.location.href;

      let shareUrl = '';
      if (network === 'facebook') {
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}&quote=${encodeURIComponent(title)}`;
      } else if (network === 'telegram') {
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(title + ' - Support HopeCambo in Cambodia')}`;
      } else if (network === 'linkedin') {
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
      } else if (network === 'copy') {
        navigator.clipboard.writeText(pageUrl).then(() => {
          const msg = currentLang === 'km' ? translations.km.share_copied : translations.en.share_copied;
          showToast(msg);
        }).catch(() => {
          showToast('Link copied!');
        });
        return;
      }

      if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=620,height=520,menubar=no,toolbar=no');
      }
    });
  });
}
