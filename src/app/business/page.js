import BankingSection from "@/components/Business/BankingSection";;
import MobileBanking from "@/components/Business/MobileBanking";
import FAQs from "@/components/Homepage/FAQs";
import Hero from "@/components/Business/Hero";
import SectionBreak from "@/components/Common/SectionBreak";
import { FAQJSONLD, WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from '@/lib/util'
import { getPageMetadata } from "@/lib/seo.config";

export const metadata = getPageMetadata({
  title: "Montra Business Account: Smarter Finance & Growth Tools for Merchants",
  description: "Empower your business with Montra's digital solutions: open a business account to accept payments via QR, Tap & Pay, POS, gateways; manage inventory, invoices, cash flow & access credit—all-in-one platform.",
  url:"business",
  date_published: "2025-06-20T00:00",
  date_modified: "2025-06-20T00:00",
  alternates: {
    canonical: "/business",
    languages: {
      "x-default": "/business",
    },
  },
  openGraph: {
    url: "business",
    images: [
      {
        url: `${homepage}/assets/images/seo/business.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});

export default function Business() {
  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
    <FAQJSONLD faqs={faqContent}/>
      <Hero />
      <div className="max-sm:h-fit max-md:min-h-screen">
       <MobileBanking /> 
        <BankingSection />
      </div>
      <SectionBreak content={"Take control with Montra for Business—get paid, track cash flow, access credit, and scale with ease."} width={"w-[85%]"} />
      <FAQs content={faqContent} />
    </>
  );
}

const faqContent = [
  {
    question: "Who can Open a Montra Business Account?",
    answer: "<p><span class='font-semibold'>Any registered user with KYC Level 2 status on Montra App can choose to open a Montra Business Account, if:</span></p><ul class='pl-[2vw] space-y-[0.5vw] max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>1. You have an existing business or a new business that requires acceptance of payments for products or services you offer.</li><li>2. You have a Physical Store / Shop or an Office</li><li>3. You have an existing Website or Mobile App to sell your products / services.</li><li>4. You neither have a Physical Store / Shop / Office nor you have an existing Website / Mobile App. You can simply set-up a Montra Store on Montra App to sell your Products / Services virtually</li></ul>"
  },
  {
    question: "How do I access various Montra Business Accounts I have set-up on Montra App?",
    answer: "<ul class='space-y-[0.5vw] max-sm:pl-[5vw] max-sm:space-y-[1vw] list-disc '><li><span class='font-semibold'>Step 1:</span> Click the top section (dropdown icon) on your Business Home Screen to view all accounts for your current country.</li><li><span class='font-semibold'>Step 2:</span> Select any of the account to view its details and features.</li><li><span class='font-semibold'>Step 3:</span> To switch countries, click the country flag at the top right and choose the country you want.</li><li><span class='font-semibold'>Step 4:</span> Once switched, follow the same steps to access and manage your Business Accounts in that country.</li></ul>"
  },
  {
    question: "What are the various methods available for acceptance of payments in Montra Business Account for a Physical Store / Shop/ Office merchant?",
    answer: "<p>Merchants with business registered on Montra as a Physical Store, Shop, Office, or Branch can accept payments directly into their Montra Business Account through these methods:</p><ol class='pl-[2vw] space-y-[0.5vw] list-decimal max-sm:pl-[5vw] max-sm:space-y-[1vw] max-md:pl-[3vw]'><li><span class='font-semibold'>QR Scan:</span> Buyers using the Montra App or any mobile banking app can scan the merchant’s Montra-issued QR code — displayed in-store or on the merchant’s Montra App — and complete the payment, which is instantly settled in the merchant’s account.</li><li><span class='font-semibold'>Tap & Pay:</span> Buyers tap their debit or credit cards on the merchant’s NFC-enabled phone running the Montra App. The transaction is processed just like on a POS — after the buyer enters their credit PIN, Montra routes the request for issuer approval and instantly settles funds upon approval.</li><li><span class='font-semibold'>POS Terminal:</span> Merchants can request and purchase POS terminals from Montra, enabling them to accept card payments through a traditional POS setup.</li><li><span class='font-semibold'>Bank Transfer:</span> Buyers can transfer funds directly to the merchant’s Montra Business Account using their mobile banking apps.</li></ol>"
  },
  {
    question: "Can I set up multiple businesses on Montra App in the same country?",
    answer: "<p>Yes! You can set up separate Montra Business Accounts for all your businesses in the same country.</p><p> Simply click <span class='font-semibold'>“Register Another Business”</span> at the bottom of your Business Home Screen and follow the same steps you used to register your first business.</p>"
  },
  {
    question: "How do I access account statement for my Montra Business Account?",
    answer: "<p><span class='font-semibold'>Step 1:</span> Click <span class='font-semibold'>Account Statement</span> on the Business Home Screen to view your account summary and balance.</p><p><span class='font-semibold'>Step 2:</span> Review two key sections:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'></ul><li><span class='font-semibold'>Transaction & Settlement History</span> - shows payments settled, service charges, fund transfers, and your net balance.</li><li><span class='font-semibold'>Payments Collected</span> - shows pending payments under HOLD until funds are received.</li><p><span class='font-semibold'>Step 3:</span> Use filters to sort by payment method (QR, Tap & Pay, POS, Bank Transfer) or by team (Till Manager/Sub-merchant).</p><p><span class='font-semibold'>Step 4:</span> Refresh or scroll to see recent or past transactions, check the mini-statement for the last 7 days, or email yourself a statement for any custom date range.</p>"
  }
]



