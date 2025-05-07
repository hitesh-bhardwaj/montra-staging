import Hero from '@/components/Common/Hero'
import Overview from '@/components/Common/Overview'
import SectionBreak from '@/components/Common/SectionBreak'
import Header from '@/components/Header'
import FAQs from '@/components/Homepage/FAQs'
import BorrowSteps from '@/components/PersonalFinance/BorrowSteps'
import GetInsured from '@/components/PersonalFinance/GetInsured'
import InsuranceOffers from '@/components/PersonalFinance/InsuranceOffers'
import InsurancePlans from '@/components/PersonalFinance/InsurancePlans'
import Investors from '@/components/PersonalFinance/Investors'
import LoanOffers from '@/components/PersonalFinance/LoanOffers'
import React from 'react'

const personalFinance = () => {
  return (
   <>
   <Header/>
   <Hero primaryHeading={"Montra Personal Account:"} heading={"Take Charge of Your Financial Future"} content={"Managing your finances shouldn’t be complicated. With Montra, you get powerful yet simple tools to save, borrow, insure, and invest—right from your phone."}/>
   <Overview content={overviewContent}/>
  <LoanOffers/>
  <BorrowSteps/>
  <InsuranceOffers/>
  <InsurancePlans/>
  <Investors/>
  <GetInsured/>
   <SectionBreak content={"Whether you're borrowing, insuring, or investing, our app brings everything together in one seamless experience."}/>
   <FAQs content={faqContent}/>
   </>
  )
}

export default personalFinance

const faqContent = [
    {
      question: 'What is the scheduled payments feature?',
      answer:
        "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
    },
    {
      question: 'How sending a bank transfer?',
      answer:
        "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
    },
    {
      question: 'How can I reactivate a terminated card?',
      answer:
        "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
    },
    {
      question: 'How can add money to my account?',
      answer:
        "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM. Choosing between different options such as online banking.",
    },
    {
      question: 'How can add money to my account?',
      answer:
        "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
    },
    {
      question: 'How can add money to my account?',
      answer:
        "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
    },
  ];
const overviewContent = {
  icon1:"/assets/images/personal-banking/overview-icon-1.svg",
  icon2:"/assets/images/personal-banking/overview-icon-2.svg",
  mainImg:"/assets/images/personal-banking/overview-phone.png",
  bgImg:"/assets/images/personal-payments/overview-bg-icon.svg",
  title:"Finance That Fits Your Life",
  content:[
    "Montra makes personal finance easy, accessible, and stress-free. Whether you're saving for something big, need quick credit, or want to protect your future with insurance, it’s all right here—in one powerful app. ",
    "No banks, no paperwork, no complicated steps. Just the tools you need to build, manage, and grow your money—with full control and total confidence."
  ],
  subcontent1:"Save with Purpose",
  subcontent2:"Access Credit Instantly",
  cards:[
    {
        color:"bg-[#7A78FF]",
        icon:"/assets/images/personal-finance/loans.svg",
        text:"Loans"
    },
    {
        color:"bg-[#FF8100]",
        icon:"/assets/images/personal-finance/insurance.svg",
        text:"Insurance"
    },
    {
        color:"bg-[#35C771]",
        icon:"/assets/images/personal-finance/investments.svg",
        text:"Investments"
    }
  ]
}