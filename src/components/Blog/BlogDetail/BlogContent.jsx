"use client";
import React from "react";
import styles from "./blog.module.css";
import Copy from "@/components/Copy";
import { Facebook, Instagram, Linkedin, Twitter } from "@/components/Buttons/icons";
import { useShare } from "@/lib/use-share";


const BlogContent = ({ url, title }) => {
  const { share, copyLink } = useShare({ url, title });

  return (
    <section
      data-theme="white"
      className="w-screen h-fit bg-white pt-[25%] mt-[-25%] text-black-1 max-sm:pt-[50%] max-sm:mt-[-50%]"
    >
      <div className="py-[10%] h-full w-full flex justify-between px-[5vw] max-sm:px-[5.5vw] max-md:flex-col max-sm:flex-col max-sm:gap-[15vw] max-md:gap-[10vw]">
        <div className="w-[20%] h-fit sticky top-[10%] max-md:static max-md:w-full">
          <div className="w-full flex flex-col gap-[3vw] max-sm:gap-[8vw]">
            <div className="flex flex-col gap-[0.7vw] max-sm:gap-[2vw] fadeupanim">
              <span className="text-[1.5vw] max-md:text-[3.5vw] max-sm:text-head-50 font-display font-medium">Posted On:</span>
              <p className="max-sm:text-[4vw] max-md:text-[3vw]">June 6 , 2024</p>
            </div>
            <div className="flex flex-col gap-[0.7vw] max-sm:gap-[2vw] fadeupanim">
              <span className="text-[1.5vw] max-md:text-nowrap max-md:text-[3.5vw] max-sm:text-head-50 font-display font-medium">Share Article:</span>
              <div className="w-full flex gap-[0.5vw] fadeup-navicon">
                {[
                  { Icon: Facebook,  platform: "facebook"  },
                  { Icon: Linkedin,  platform: "linkedin"  },
                  { Icon: Twitter,   platform: "twitter"   },
                ].map(({ Icon, platform }, i) => (
                  <div
                    key={i}
                    className="w-[3vw] h-[3vw] flex justify-center items-center rounded-full border border-black-1 group overflow-hidden transition-all duration-300 max-sm:w-[10vw] max-sm:h-[10vw] max-md:w-[6vw] max-md:h-[6vw] max-sm:gap-[12vw]"
                  >
                    <button
                      onClick={() => share(platform)}
                      aria-label={`Share on ${platform}`}
                      className="flex justify-center cursor-pointer items-center w-full h-full group-hover:bg-black-1 transition-all duration-300"
                    >
                      <Icon className="text-black-1 group-hover:text-white transition-all duration-300" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={`w-[65%] max-md:w-[100%] max-sm:w-full ${styles["blog-article"]}`}>
          <p className="fadeupanim">
            The internet is evolving — and with it, so is the way we engage with
            money, identity, and value. Welcome to Web3: a decentralized,
            user-owned digital economy that&apos;s redefining how financial services
            work at a global scale
          </p>
          <p className="fadeupanim">
            At its core, Web3 replaces centralized intermediaries with smart
            contracts, digital wallets, and blockchain-based protocols. It gives
            individuals true ownership of their assets and digital identities,
            while unlocking new forms of value exchange — from tokenized
            currencies to NFTs, DeFi, and beyond. <br />
            But while the promise of Web3 is vast, the path to participation
            isn&apos;t always simple.
          </p>
          <p className="fadeupanim">
            Most users still live in a hybrid world — where traditional banking
            meets emerging crypto experiences. That&apos;s why infrastructure matters
            more than ever.
          </p>
          <hr className="lineanim" />
          <Copy>
          <h2>What is Web3 and Why Does It Matter?</h2>
          </Copy>
          <p className="fadeupanim">
            Web3 replaces traditional intermediaries with smart contracts,
            blockchain protocols, and self-custody. Users can hold digital
            assets, verify identities, and access financial tools — all without
            a central authority. This shift promises greater transparency,
            control, and opportunity for individuals and institutions alike.
            <br />
            But participation isn&apos;t frictionless. Most users still straddle two
            worlds — conventional banking and emerging crypto platforms — and
            the infrastructure to connect them isn&apos;t always seamless
          </p>
          <hr className="lineanim" />
          <Copy>
          <h2>Bridging Traditional Finance and the Web3 Economy</h2>
          </Copy>
          <p className="fadeupanim">
            Moneylink is solving this challenge by providing the foundational
            tools banks and fintechs need to enable Web3 access:
          </p>
          <ul className="max-md:text-content-20 fadeupanim">
            <li >
              Smart Wallets: Create and manage digital wallets with
              multi-currency and crypto asset support
            </li>
            <li >
              Programmable Cards: Issue virtual debit, credit, or prepaid cards
              linked to fiat and blockchain balances
            </li>
            <li >
              Interoperable Transfers: Enable users to move funds between
              traditional bank accounts and blockchain networks
            </li>
            <li >
              Compliant Onboarding: Seamlessly verify users and meet KYC/AML
              requirements for Web3 readiness
            </li>
          </ul>
          
          <p className="fadeupanim">
            Whether you're a neobank or an established institution, our platform
            helps you embed secure, Web3-ready functionality directly into your
            apps.
          </p>
         
          <hr className="lineanim" />
          <Copy>
          <h2>Why Emerging Markets Are Poised to Lead</h2>
          </Copy>
          <p className="fadeupanim">
            Markets like Nigeria are already mobile-first and digitally driven.
            With over 100 million adults expected to be banked by 2030, and a
            sharp rise in digital wallets and virtual card issuance, the
            conditions are ideal for leapfrogging into decentralized finance.
            <br />
            Web3 provides a framework to bring financial inclusion, security,
            and ownership to millions — but only if the infrastructure is in
            place.
          </p>
          <hr className="lineanim" />
          <Copy>
          <h2>The Future Is Here — Let&apos;s Build It Together</h2>
          </Copy>
          <p className="fadeupanim">
            Moneylink is your partner in connecting today&apso;s financial ecosystem
            to tomorrow&apos;s decentralized world. With robust APIs, compliant
            infrastructure, and a single Super SDK, we make it easy to scale
            your services into the Web3 economy. Let&apso;s shape the future of
            finance — together.
          </p>
          <hr className="lineanim" />
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
