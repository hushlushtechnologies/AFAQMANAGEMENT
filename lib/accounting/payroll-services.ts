import type { FreezoneData } from "@/lib/freezones/types";

export const payrollServices: FreezoneData = {
  slug: "payroll-services",
  category: "Accounting & Tax",
  name: "Payroll Services in Dubai",
  shortName: "Payroll",
  hero: {
    eyebrow: "Payroll Outsourcing · Dubai",
    title: "Payroll Services in Dubai",
    highlight: "Accurate Pay, On Time, Every Month",
    subtitle: "We handle everything from employee records and leave to WPS salary files, payslips and end-of-service accruals.",
    intro:
      "Satisfied employees help you reach your goals, and that starts with a fair salary paid on time. Payroll covers much more than wages: leave, vacation pay, tickets, insurance and end-of-service benefits all add complexity. Afaq Al Khaleej runs your payroll to your criteria, so you can focus on growth instead of tracking labour rules.",
    chips: ["WPS salary files", "Leave management", "Final settlements", "Gratuity accruals"],
    image: "/images/services/digital-business-solutions/running-complex-operations.png",
  },
  stats: [
    { value: "8", label: "Service areas" },
    { value: "13", label: "Payroll deliverables" },
    { value: "WPS", label: "Salary file generation" },
    { value: "You approve", label: "Before any salary is paid" },
  ],

  about: {
    heading: "Why Outsource Your Payroll",
    body:
      "Payroll mistakes cost money and goodwill. Each month needs accurate attendance, leave balances, allowances, deductions and recoveries, all processed in line with UAE labour law and paid through the Wage Protection System (WPS). We take that work off your hands, and our strict confidentiality policy means your employees' information is never shared with third parties.",
    location: { name: "Records, visas & expiries tracked", area: "Passport and residency expiries flagged monthly", image: "/images/services/pro-government-services/visa-immigration.png" },
    features: [
      { icon: "multiple", title: "Employee Database", text: "Individual employee files kept accurate and up to date." },
      { icon: "online", title: "Leave Management", text: "Leave balances, applications and approval workflows handled." },
      { icon: "trading", title: "Payroll Processing", text: "Regular pay, vacation pay and final settlements, reconciled to last month." },
      { icon: "bank", title: "Salary Disbursal", text: "WPS files and payslips generated so staff are paid on time." },
      { icon: "licence", title: "Statutory Compliance", text: "Pension contributions and statutory reports handled after your approval." },
      { icon: "services", title: "Help Desk", text: "Employee queries on pay, insurance and benefits answered." },
    ],
  },

  structures: {
    heading: "Scope of Our Payroll Services",
    intro: "Every service area and the activities behind it, plus the reports you receive each pay period.",
    groups: [
      {
        title: "Payroll deliverables",
        items: [
          { title: "Employee master record", text: "A complete, current record for every employee." },
          { title: "Upcoming expiries", text: "Passport and residency expiries due in the coming month." },
          { title: "Pay sheet & payroll journal", text: "Based on the attendance, payable and recovery information you provide." },
          { title: "WPS file & payslips", text: "Salary file for your bank or exchange, plus a payslip for every employee." },
          { title: "Cost-centre distribution", text: "Payroll expenses split by cost centre." },
        ],
      },
      {
        title: "Supporting worksheets",
        items: [
          { title: "Vacation pay sheet", text: "Leave salary calculations for staff going on vacation." },
          { title: "Full & final settlement worksheet", text: "Gratuity, leave encashment and recoveries for leavers." },
          { title: "Accrual & provisioning register", text: "Gratuity, leave and ticket provisions." },
          { title: "Pension contribution worksheet", text: "Where pension or social insurance applies." },
          { title: "Period-closure checklist & help-desk report", text: "Each period closed properly, with employee queries logged." },
        ],
      },
    ],
    table: {
      title: "Service areas and activities",
      columns: ["Service", "Activities"],
      rows: [
        ["Employee Database Management", "Employee profile creation · Information updates"],
        ["Leave Management", "Accrual calculation · Leave balance summary · Leave applications (employee & supervisor) · Approval workflow"],
        ["Payroll Processing", "Pay-cycle management · Regular pay · Vacation pay · Full & final settlement · Reconciliation with previous month · Review & approval"],
        ["Salary Disbursal", "WPS file generation · Payslip generation"],
        ["Statutory Compliance Support", "Pension / social insurance where applicable · Reports for statutory authorities"],
        ["Help Desk", "Employee query handling"],
        ["Accruals & Provisioning", "Air tickets · Vacation pay · End-of-service benefits"],
        ["Period Close", "Period-closure checklist · Payroll journal"],
      ],
    },
    notes: [
      "Payroll is finalised only after you review and approve it.",
      "The UAE has no personal income tax on salaries. Where employees are subject to tax elsewhere, we can advise on what applies.",
    ],
  },

  process: {
    heading: "How Each Pay Cycle Runs",
    intro: "A predictable monthly routine, with your approval before any salary is released.",
    cautionTitle: "Your approval comes first",
    caution: "Salaries are released only after you approve the payroll. Pension filings and statutory submissions are made on your behalf after your authorisation.",
    steps: [
      { title: "Receive inputs", text: "You share attendance, overtime, new joiners, leavers, payables and recoveries for the month." },
      { title: "Process payroll", text: "We calculate regular pay, vacation pay, allowances, deductions and any final settlements." },
      { title: "Reconcile", text: "This month's payroll is reconciled with last month and every difference explained." },
      { title: "Review & approve", text: "You review the pay sheet and approve it." },
      { title: "Disburse & close", text: "The WPS file and payslips are generated, accruals updated and the period closed." },
    ],
  },

  documents: {
    heading: "Data We Need to Set Up Your Payroll",
    intro: "Our data migration checklist covers everything needed to move your payroll to us accurately.",
    groups: [
      { title: "Employee details", items: ["Employee number, name & designation", "Date of birth & nationality", "Date of joining & current service start", "Dependants (family status)", "Contract period", "Email & phone number", "Company assets held"] },
      { title: "IDs & insurance", items: ["Passport number & validity", "Visa number & validity", "Emirates ID / pension registration, where applicable", "Medical insurance card & validity"] },
      { title: "Bank details", items: ["Bank & branch", "Account number", "IBAN", "SWIFT code"] },
      { title: "Eligibility", items: ["Leave entitlement", "Vacation & family tickets", "Leave encashment", "End-of-service benefit terms"] },
      { title: "History & balances", items: ["Approved upcoming leave", "Date of last vacation & last ticket used", "Leave balances", "Loan & advance balances", "End-of-service, vacation pay & ticket provisions"] },
      { title: "Company policies", items: ["Leave & encashment policy", "Ticketing policy", "Working hours & overtime policy", "End-of-service benefit policy", "Loan policy", "Pension, medical insurance & family eligibility"] },
    ],
    note: "Employee data is shared through an agreed secure method and kept confidential under our engagement agreement.",
  },

  features: {
    eyebrow: "Benefits",
    heading: "What Outsourced Payroll Gives You",
    items: [
      { status: "yes", text: "Accurate salaries paid on time through WPS" },
      { status: "yes", text: "Less time spent tracking labour-law changes" },
      { status: "yes", text: "Lower cost than an in-house payroll team" },
      { status: "yes", text: "Correct leave, vacation pay and gratuity calculations" },
      { status: "yes", text: "Monthly reconciliation catches errors early" },
      { status: "yes", text: "Expiring passports and residencies flagged in advance" },
      { status: "yes", text: "Employee queries handled by our help desk" },
      { status: "yes", text: "Strict confidentiality for employee data" },
    ],
  },

  cost: {
    heading: "Payroll Services Cost",
    intro:
      "Fees usually depend on headcount and how complex your payroll is. Tell us your number of employees, pay frequency and policies, and we'll send a written quotation with clear inclusions.",
    notes: ["Number of employees", "Pay frequency", "Allowances & policies", "Settlements per month", "Reporting needs"],
  },

  tax: {
    eyebrow: "UAE Payroll Essentials",
    heading: "Rules Your Payroll Must Follow",
    paragraphs: ["We keep your payroll in line with UAE requirements, so you don't have to research them yourself."],
    cards: [
      { value: "WPS", title: "Wage Protection System", text: "Salaries for MOHRE-registered employees are paid through WPS." },
      { value: "Gratuity", title: "End-of-Service Benefits", text: "Calculated under UAE labour law and provisioned monthly." },
      { value: "Pension", title: "UAE & GCC Nationals", text: "Pension contributions managed where they apply." },
      { value: "0%", title: "No Personal Income Tax", text: "UAE salaries are not subject to personal income tax." },
    ],
    tags: ["Accounting services", "Bookkeeping services", "PRO services"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Run Your Payroll with",
    paragraph: "A specialised team, a firm confidentiality policy and a monthly routine built around your approval. Your staff get paid accurately and on time, every time.",
    cards: [
      { title: "Accurate Processing", text: "Every pay run reconciled with the previous month." },
      { title: "Strict Confidentiality", text: "Employee data never shared with third parties." },
      { title: "You Stay in Control", text: "No salary is released without your approval." },
    ],
    quoteTitle: "Request a payroll",
    quoteText: "Tell us your headcount, pay cycle and policies, and we'll send a written quote for managing your payroll.",
  },

  included: [
    "Employee master records",
    "Leave & accrual management",
    "Monthly payroll processing",
    "WPS file & payslips",
    "Final settlements",
    "Gratuity & ticket provisions",
  ],

  faqs: [
    { question: "What do your payroll services include?", answer: "Employee database management, leave management, payroll processing, WPS salary files and payslips, statutory compliance support, a help desk, accruals and provisioning, and period close." },
    { question: "What is WPS?", answer: "The Wage Protection System is the UAE's electronic salary transfer system. Employers registered with MOHRE pay salaries through approved banks or exchange houses using a WPS salary file." },
    { question: "Do I approve the payroll before salaries are paid?", answer: "Yes. Every payroll is reconciled and sent to you for review and approval before salaries are released." },
    { question: "Do you calculate end-of-service gratuity?", answer: "Yes. We calculate gratuity under UAE labour law, keep monthly provisions and prepare full and final settlement worksheets for leavers." },
    { question: "Is there income tax on salaries in the UAE?", answer: "No. The UAE doesn't levy personal income tax on salaries. Pension contributions apply to UAE and GCC nationals, and we manage these where relevant." },
    { question: "How do you keep employee data confidential?", answer: "Our confidentiality policy prohibits sharing employee information with any third party, and data is exchanged through an agreed secure method." },
    { question: "What information do you need to start?", answer: "Employee details, ID and visa validity, bank details, leave and ticket eligibility, current balances and your company policies. Our data migration checklist covers it all." },
    { question: "Can you handle employee queries?", answer: "Yes. Our help desk handles questions about salaries, deductions, insurance and benefits, and we report on queries each period." },
  ],
};
