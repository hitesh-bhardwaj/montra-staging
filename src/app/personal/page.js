"use client";
import { fadeUpAnim } from "@/components/gsapAnimations";
import FAQs from "@/components/Homepage/FAQs";
import Control from "@/components/Personal/Control";
import ControlMobile from "@/components/Personal/ControlMobile";
import Hero from "@/components/Personal/Hero";
import SectionBreak from "@/components/Personal/SectionBreak";
import { useEffect, useState } from "react";

export default function Personal() {
  const [mobileWidth, setMobileWidth] = useState(false);

  useEffect(() => {
    if (globalThis.innerWidth > 1024) {
      setMobileWidth(false);
    } else {
      setMobileWidth(true);
    }
  }, []);

  fadeUpAnim();

  return (
    <>
      <Hero />
      <div className="max-sm:h-[180vh] max-md:min-h-[190vh]">
        {!mobileWidth ? <Control /> : <ControlMobile />}
      </div>
      <SectionBreak />
      <FAQs content={faqContent} />
    </>
  );
}

const faqContent = [
  {
    question: 'How do I open a Montra Personal Account?',
    answer:
      "<p>You can open a Montra Personal Account in 4 easy steps:</p><ol class='pl-[2vw] list-decimal space-y-[0.5vw] max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>Download the Montra App from Google Play or the Apple App Store.</li><li>Sign up with your phone number, date of birth, and set a password.</li><li>Verify your identity using your BVN or NIN, complete face capture, and confirm your email.</li><li>Set your Montra PIN and accept the terms — your account is ready to go!</li></ol>",
  },
  {
    question: 'How do I access & use Montra Debit Card?',
    answer:
      "<ol class='pl-[2vw] list-decimal space-y-[0.5vw] max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>Open the Montra App and tap the <span class='font-semibold'>Instacard Digital Wallet</span> icon.</li><li><span class='font-semibold'>Select your Montra Debit Card</span> (or any other linked card).</li><li><span class='font-semibold'>Enter your Card PIN</span> to unlock and view card details.</li><li><span class='font-semibold'>Use your Montra Debit Card</span> for online or contactless payments.</li><li><span class='font-semibold'>Adjust Card Controls </span>to set transaction limits, temporarily block, or permanently delete the card.</li><li><span class='font-semibold'>Link your Virtual Montra Debit Card</span> to your Universal (Physical) Card to enable international use at any POS or ATM.</li></ol>",
  },
  {
    question: 'What is KYC Level?',
    answer:
      "<p>KYC (Know Your Customer) levels refer to the stages of identity verification you complete on Montra.</p><ul class='list-disc pl-[2vw] space-y-[0.5vw] max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li><span class='font-semibold'>Level 1:</span> Basic sign-up with limited access and lower transaction limits.</li><li><span class='font-semibold'>Level 2:</span> Verified with BVN, unlocking higher limits and more features.</li><li><span class='font-semibold'>Level 3:</span> Fully verified with address and identity checks, providing maximum limits and full access to Montra’s services.</li></ul>",
  },
  {
    question: 'How do I find my KYC Level for this Account?',
    answer:
      "<p>You can easily find the <span class='font-semibold'>KYC Level indicator</span> in the middle of the top menu bar.</p><p>Click it to view details about your current KYC status, daily transaction limits, and maximum account balance allowed under your KYC level, as set by CBN policy.</p>",
  },
  {
    question: "What are transfer limits for various KYC Levels?",
    answer: "<p>In-line with KYC policy from CBN, <span class='font-semibold'>Transfer Limit</span> is based on the KYC level type for the account. There are 3 level types:</p><ul class='list-disc pl-[2vw] space-y-[0.5vw] max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li><span class='font-semibold'>Level 1</span>:<ul class='list-disc pl-[2vw] space-y-[0.5vw] max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>Daily transaction limit of <span class='font-semibold'>₦50,000</span></li><li>Maximum Balance limit on account of <span class='font-semibold'>₦200,000</span></li></ul></li><li><span class='font-semibold'>Level 2</span>:<ul class='list-disc pl-[2vw] space-y-[0.5vw] max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>Daily transaction limit of <span class='font-semibold'>₦200,000</span></li><li>Maximum Balance limit on account of <span class='font-semibold'>₦500,000</span></li></ul></li><li><span class='font-semibold'>Level 3</span>:<ul class='list-disc pl-[2vw] space-y-[0.5vw] max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>Daily transaction limit of <span class='font-semibold'>₦1,000,000</span></li><li>Maximum Balance limit on account of <span class='font-semibold'>Unlimited</span></li></ul></li></ul>"
  },
  {
    question: "How do I upgrade the KYC Level?",
    answer: "<p>Click the <span class='font-semibold'>KYC Level indicator</span> in the middle of the top menu bar and select <span class='font-semibold'>\"Upgrade KYC Level for Higher Limits\"</span> to get started.</p><p>Follow the on-screen instructions to submit any required documents or information for the next KYC level.</p>"
  },
  {
    question: "What are the various options available for making Digital Payments & Fund Transfer on Montra App?",
    answer: "<p>You can use the Montra App to send money or make payments using:</p><ul class='list-disc pl-[2vw] space-y-[0.5vw] max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li><span class='font-semibold'>Send money</span> to other Montra users via mobile or contacts</li><li><span class='font-semibold'>Transfer to bank accounts directly</span></li><li><span class='font-semibold'>Scan & Pay</span> using QR codes at Montra merchants</li></ul><p>You can pay using your <span class='font-semibold'>Montra Account</span>, <span class='font-semibold'>linked bank accounts</span>, <span class='font-semibold'>linked cards</span>, or <span class='font-semibold'>instalments</span> — all secured with your <span class='font-semibold'>Montra PIN</span> and <span class='font-semibold'>Soft Token</span>.</p>"
  },
  {
    question: "How can I fund my Montra Personal Account?",
    answer: "<ul class='list-disc pl-[2vw] space-y-[0.5vw] max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li><span class='font-semibold'>Linked Bank Accounts</span> — Add money directly from your connected bank accounts.</li><li><span class='font-semibold'>Linked Debit/Credit Cards</span> — Fund your account using your saved cards.</li><li><span class='font-semibold'>Bank Transfer</span> — Transfer funds directly from any other bank account to your Montra Personal Account.</li></ul>"
  },
  {
    question: "How to access Account Statement of my Montra Personal Account?",
    answer: "<p>You can click <span class='font-semibold'>Account Statement</span> on the Personal Home Screen to access the following information:</p><p><span class='font-semibold'>How to View Your Montra Personal Account Statement</span>:</p><ul class='list-disc pl-[2vw] space-y-[0.5vw] max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li><span class='font-semibold'>Click ‘Account Statement’</span> on the Personal Home Screen to view:<ul class='list-disc pl-[2vw] space-y-[0.5vw]'><li>Current balance in your Montra Personal Account</li><li>Recent transactions from the last 7 days, showing inflows and outflows</li></ul></li><li><span class='font-semibold'>Click ‘Refresh’</span> to update with the most recent transactions.</li><li><span class='font-semibold'>Scroll down</span> to load older transactions in 7-day increments.</li><li><span class='font-semibold'>Click ‘Mini-Statement’</span> to view your last 30 days’ activity.</li><li><span class='font-semibold'>Request an email statement</span> for a selected or custom date range.</li></ul>"
  }
]
