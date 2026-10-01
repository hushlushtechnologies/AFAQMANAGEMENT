import ContactForm from '@/components/sections/contact/ContactForm'
import ContactHero from '@/components/sections/contact/ContactHero'
import GetInTouch from '@/components/sections/contact/GetInTouch'
import Faq from '@/components/sections/shared/Faq'
import ClosingCta from '@/components/shared/ClosingCta'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Afaq Al Khaleej Management Consultants for business setup, investment advisory, PRO services, and company formation support across the UAE.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Afaq Al Khaleej Management Consultants",
    description:
      "Get in touch for business setup, investment advisory, PRO services, and company formation support across the UAE.",
    url: "/contact-us",
  },
};



export default function page() {
  return (
     <main>
      <ContactHero />
       <GetInTouch />
      <ContactForm />
       <Faq
        faqs={[
          {
            question: "How can I book a consultation with Afaq Al Khaleej Management?",
            answer:
              "You can book a consultation through our website enquiry form, contact our team directly, or reach us through WhatsApp. Share your requirements, and our team will guide you on the appropriate next step.",
          },
          {
            question: "What can I discuss during a consultation?",
            answer:
              "During a consultation, you can discuss your investment goals, business plans, PRO or government service needs, company formation requirements, or any opportunity you'd like our team to help evaluate.",
          },
          {
            question: "Can international investors contact Afaq?",
            answer:
              "Yes, international investors are welcome to contact Afaq. We support investors from outside the UAE in identifying, evaluating, and understanding opportunities across the market.",
          },
          {
            question: "Can I approach Afaq if I am looking for investors for my business?",
            answer:
              "Yes. If you're seeking investment for your business, you can share your details through our enquiry form and our team will explore potential investor connections aligned with your opportunity.",
          },
          {
            question: "Can Afaq help me evaluate an investment opportunity?",
            answer:
              "Yes, our team provides market, financial, and feasibility evaluation to help you assess the potential and risks of an investment opportunity before you commit.",
          },
          {
            question: "Do you provide company formation and PRO services across the UAE?",
            answer:
              "Yes, we provide end-to-end company formation and PRO services, including licensing, registration, visas, and government approvals across UAE mainland and free zones.",
          },
        ]}
      />
      <ClosingCta />
    </main>
  )
}
