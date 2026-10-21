export const ORG_INFO = {
  name: "LOK MADHYAM",
  tagline: "Empowering Marginalized Communities & Women in Bihar Since 2004",
  regAct: "Society Registration Act 21, 1860, Patna",
  regNo: "135",
  regDate: "14.05.2004",
  nitiAayogId: "BR/2017/21709",
  nitiAayogDate: "29 Oct 2017",
  pan: "AAATL3903F",
  tan: "PTNL00671G",
  urn12A: "AAATL3903FE20164",
  urn80G: "AAATL3903FF20212",
  urnValidity: "Valid AY 2022-23 to 2026-27",
  fcraNo: "031170439",
  fcraBank: "SBI New Delhi A/C: 40113343487 (IFSC: SBIN0000691)",
  secretary: "Pramila Kumari",
  phones: ["+91 9471090183", "+91 9472090184"],
  emails: ["lokmadhyam2004@gmail.com", "lm1452004@gmail.com"],
  twitter: "https://twitter.com/lok_madhyam",
  regOffice: "Village & Post Bhaiswan, Masaurhi, Patna (Bihar) - 804452",
  coordOffice: "Vill.+P.O. Barni, P.S- Dhanrua, Patna - 804451",
  auditor: "Raghu Nandan & Co., Post Office Building, Punaichak, Patna-23"
};

export const ACTIVITIES_DATA = [
  {
    id: "education",
    title: "Education & Adolescent Empowerment",
    description: "Creating awareness among minority and marginalized adolescent girls in Masaurhi Block, Patna District on quality education, leadership, life skills, and voting rights.",
    badge: "200 Girls Enrolled",
    location: "Masaurhi Block, Patna District",
    highlights: [
      "Selected 200 adolescent girls from marginalized and minority households for intensive leadership and life-skills mentorship.",
      "Re-enrolled 7 Scheduled Caste girls and 10 minority girls into formal schooling through family counselling.",
      "Supported 20 girls in passing their matriculation examinations and guided 10 girls in applying for Class 11.",
      "Conducted constitutional literacy and voting rights workshops for emerging young women voters."
    ]
  },
  {
    id: "health",
    title: "Health, Hygiene & Nutrition",
    description: "Conducting intensive training programs for adolescent girls and mothers on menstrual hygiene management, nutrition, sanitation, and accessing public health services.",
    badge: "443 Mothers Reached",
    location: "Masaurhi & Dhanrua Blocks, Patna",
    highlights: [
      "Organized 15 structured mother-engagement meetings reaching 443 community participants.",
      "Provided practical education on menstrual cycle hygiene, breaking taboos, and safe sanitation practices.",
      "Connected socially excluded women and children with local public health entitlements and nutrition programs.",
      "Advocated for prevention of early marriage and improved reproductive health awareness."
    ]
  },
  {
    id: "livelihood",
    title: "Livelihood & Community Campaigns",
    description: "Providing vocational sewing and stitching training to girls, alongside community campaigns on vermicomposting, domestic violence prevention, child labour, and road safety.",
    badge: "50 Girls Certified",
    location: "Patna & Jamui Districts",
    highlights: [
      "Trained 50 adolescent girls in vocational sewing and tailoring skills for sustainable self-employment.",
      "Promoted organic vermicomposting and eco-friendly agricultural practices among rural women.",
      "Led grassroots awareness drives against domestic violence, child marriage, and child labour.",
      "Strengthened Panchayat-level women's leadership and Gram Sabha participation in Masaurhi and Jhajha."
    ]
  }
];

export const STRATEGIES_LIST = [
  "Organize, promote, and empower people's organizations through participatory processes.",
  "Capacitate women to raise their voice and strengthen their existence in society.",
  "Build women's leadership, decision-making, and financial independence at the Panchayat level.",
  "Uplift marginalized sections of the community in respect to their fundamental rights.",
  "Create an enabling environment among neglected and deprived communities.",
  "Establish an educational environment among women, adolescent girls, neglected children, and child labourers.",
  "Build community awareness around health, nutrition, and sanitation."
];

export const COMMITTEE_MEMBERS = [
  { sl: 1, name: "Khodaija Khatun", role: "President", focus: "Community Leadership & Governance" },
  { sl: 2, name: "Pramila Kumari", role: "Secretary", focus: "Chief Functionary & Program Administration" },
  { sl: 3, name: "Savitri Devi", role: "Treasurer", focus: "Financial Oversight & Grant Compliance" },
  { sl: 4, name: "Veena Kumari", role: "Member", focus: "Adolescent Education & Counselling" },
  { sl: 5, name: "Manju Devi", role: "Member", focus: "Women's Self-Help & Livelihoods" },
  { sl: 6, name: "Punam Kumari", role: "Member", focus: "Health, Hygiene & Nutrition Outreach" },
  { sl: 7, name: "Saroj Kumari", role: "Member", focus: "Panchayat Advocacy & Child Rights" }
];

export const BANK_ACCOUNTS = [
  {
    type: "FCRA Bank Account (International Grants)",
    bank: "State Bank of India (SBI), New Delhi",
    accountNo: "40113343487",
    ifsc: "SBIN0000691",
    note: "FCRA Reg. No.: 031170439"
  },
  {
    type: "Primary Local Account (Domestic 80G)",
    bank: "Bank of India, Masaurhi Branch",
    accountNo: "44061010002434",
    ifsc: "BKID0004406",
    note: "80G URN: AAATL3903FF20212"
  },
  {
    type: "Project Account (PNB)",
    bank: "Punjab National Bank (PNB), Masaurhi",
    accountNo: "273400100141759",
    ifsc: "PUNB0273400",
    note: "Domestic Project Operations"
  },
  {
    type: "Project Account (Central Bank)",
    bank: "Central Bank of India, Masaurhi",
    accountNo: "3796535267",
    ifsc: "CBIN0280001",
    note: "Community Development Fund"
  }
];

export const FINANCIAL_CHART_DATA = [
  { name: "Opening Bal", amount: 30986.83, label: "₹ 30,986.83", color: "#1e3a8a" },
  { name: "Grant Received", amount: 650500.0, label: "₹ 6,50,500.00", color: "#16a34a" },
  { name: "Expenses", amount: 649365.0, label: "₹ 6,49,365.00", color: "#ea580c" },
  { name: "Closing Bal", amount: 38984.06, label: "₹ 38,984.06", color: "#2563eb" }
];

export const IMPACT_CHART_DATA = [
  { metric: "Mother Meetings Reach", count: 443, fill: "#1e3a8a" },
  { metric: "Adolescent Girls Selected", count: 200, fill: "#ea580c" },
  { metric: "Sewing & Stitching Trained", count: 50, fill: "#0d9488" },
  { metric: "Passed Matriculation", count: 20, fill: "#2563eb" },
  { metric: "Out-of-School Enrolled", count: 17, fill: "#7c3aed" },
  { metric: "Applied for Class 11", count: 10, fill: "#16a34a" }
];