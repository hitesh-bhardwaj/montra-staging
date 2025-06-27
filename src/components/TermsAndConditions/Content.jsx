'use client'

import React, { useState, useEffect } from "react";
import "./styles.css";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
import Link from "next/link";

export default function Content() {
  const navLinks = [
     {
        id: "#use-of-montra-platform",
        text: "Use of the Montra Platform / Montra Services",
      },
      { id: "#acceptance", text: "Acceptance" },
      { id: "#eligibility", text: "Eligibility" },
      { id: "#other-terms-and-conditions", text: "Other Terms and Conditions" },
      { id: "#ssoid-services", text: "SSOID Service, Participating Platforms" },
      { id: "#communication-property", text: "Communication Policy" },
      { id: "#montra-platform", text: "Use of Montra Platform" },
      { id: "#prohibited-conduct", text: "Prohibited Conduct" },
      {
        id: "#termination-agreement-violations",
        text: "Termination; Agreement Violations",
      },
      {
        id: "#limitation-of-liability-and-damages",
        text: "Limitation of Liability and Damages",
      },
      { id: "#indemnification", text: "Indemnification" },
      { id: "#disclaimer-no-warranties", text: "Disclaimer; No Warranties" },
      {
        id: "#ownership-proprietary-rights",
        text: "Ownership; Proprietary Rights",
      },
      {
        id: "#modification-of-this-agreement",
        text: "Modification of This Agreement",
      },
      { id: "#notice", text: "Notice" },
      { id: "#waiver", text: "Waiver" },
      { id: "#dispute-resolution", text: "Dispute Resolution" },
      {
        id: "#governing-law-and-forum-for-disputes",
        text: "Governing Law and Forum for Disputes",
      },
      { id: "#severability", text: "Severability" },
      { id: "#survival", text: "Survival" },
      { id: "#headings", text: "Headings" },
      { id: "#entire-agreement", text: "Entire Agreement" },
      {
        id: "#bill-payments-and-digital-products-terms-conditions",
        text: "Bill Payments and Digital Products Terms & Conditions",
      },
      { id: "#montra-recharges", text: "Montra Recharges" },
      { id: "#refund-policy", text: "Refund Policy" },
      { id: "#bill-payments", text: "Bill Payments" },
]

  const [isActive, setIsActive] = useState(null);

  const handleScroll = (id) => {
    setIsActive(id);
    gsap.to(window, {
      duration: 2,
      scrollTo: {
        y: id,
        offsetY: 50,
      },
      ease: "power3.inOut",
    });
  };

  useEffect(() => {
     const triggers = navLinks.map((item) => {
          const id = item.id.replace("#", "");
      
          return ScrollTrigger.create({
            trigger:`#${id}`,
            start: "top center",
            end: "bottom center",
            onEnter: () => setIsActive(item.id),
            onEnterBack: () => setIsActive(item.id),
          });
        });
    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full h-fit relative bg-white flex flex-row dark">
      <div className="w-[25%] flex flex-col gap-[.5vw] px-[2vw] capitalize py-[8vw] sticky top-[-6%] h-fit max-md:hidden">
        {navLinks.map((item) => (
          <p
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className={`nav-link w-fit cursor-pointer duration-300 ease-in ${
              isActive == item.id ? "text-primary" : "text-[#BBBBBB]"
            }`}
          >
            {item.text.length > 20
              ? item.text.split(" ").slice(0, 3).join(" ") + "..."
              : item.text}
          </p>
        ))}
      </div>
      <div
        className="w-[60%] h-fit py-[8vw] gap-[7vw] flex flex-col bg-white max-md:pl-[5vw] max-md:pr-[10vw] max-md:w-full"
        
      >
        <div className="divWrapper" id="use-of-montra-platform">

        
        <h2 className="">
          <span className="">Use of the Montra Platform</span>
          <span className="">/Montra Services</span>
        </h2>
        <p>
          Please read the following terms and conditions carefully before
          registering on, accessing, browsing, downloading or using the Montra
          website located at <Link href='/' className='text-primary'>Montra.org</Link>, and all associated sites linked to  <Link href='/' className='text-primary'>Montra.org</Link>
          , or the Montra mobile application or any similar platform
          (hereinafter collectively referred to as , the Montra Platform) run by
          Montra Technology Solutions Limited(formerly ArthaFintech Limited),
          having its registered office at Plot 20 The Quad, Layi Yusuf Crescent,
          Off Admiralty Way, Lagos, Nigeria (hereinafter referred to as “ MONTRA
          ”,) on any device and/or before availing any services offered by
          Montra on the Montra Platform which may include services such as funds
          transfer, cash transactions, recharge or bill payment, digital
          products, semi-closed wallet service, and marketplace service or any
          other service that may be offered by Montra on the Montra Platform
          (hereinafter individually, and collectively, referred to as theMontra
          Services). For the avoidance of doubt, it is clarified that these
          terms and conditions shall apply to all Montra Services, whether
          offered by Montra MONTRATechnology Solutions Limited (formerly Artha
          Fintech Limited)or its affiliates.
        </p>
        </div>
        <div className="divWrapper" id="acceptance">
          <h2 className="">Acceptance</h2>

          <ul className="">
            <li>
              {" "}
              By registering on, accessing, browsing, downloading or using the
              Montra Platform for any general purpose or for the specific
              purpose of availing any Montra Service, you agree to be bound by
              the sSingle-sSign-oOn ID (hereinafter referred to as SSOID) terms
              and conditions set forth below as well as by the service-specific
              terms and conditions applicable to each Montra Service
              (hereinafter collectively, referred to as the T&Cs).{" "}
            </li>

            <li>
              {" "}
              These T&Cs shall also include any additional or modified terms and
              conditions in relation to the SSOID or any additional or modified
              service-specific terms and conditions in relation to any Montra
              Service or any future service that may be offered by Montra on the
              Montra Platform.
            </li>

            <li>
              By registering on, accessing, browsing, downloading or using (as
              applicable) the Montra Platform or availing any Montra Service or
              the SSOID, You automatically and immediately agree to all the
              T&Cs. If at any time You do not accept or agree with any of the
              T&Cs or do not wish to be bound by the T&Cs, Youmay not access,
              browse or use the Montra Platform and immediately terminate yYour
              availing the Montra Services.
            </li>

            <li>
              {" "}
              Accepting or agreeing to the T&Cs will constitute a legal contract
              (hereinafter referred to as Agreement) between You and Montra. You
              agree that you are , being at least 18 years of age, of sound mind
              and with the requisite capacity to enter into this contract by
              using Montra Services. Alternatively, where you (the user) is not
              an individual, your agree that you are a corporate personality
              duly registered in compliance with the relevant laws of Nigeria.
              and an individual user of the Montra Platform or a customer or
              beneficiary of the Montra Services, and Montra.{" "}
            </li>

            <li>
              All services are rendered by Montra through the Montra Platform
              under the brand name “Montra” (or any derivatives or variations
              thereof). Consequently, all the rights, benefits, liabilities and
              obligations under the T&Cs shall, as the case may be, accrue to
              the benefit of, or incurred by,Montra, regarding Your use of
              Montra’s digital services (which includes but may not be limited
              to funds transfer, cash transactions prepaid recharge, bill
              payment, booking movie tickets, bus tickets, hotel rooms or flight
              tickets), the semi closed wallet service, the marketplace service
              or any such other services which may be added on the Montra
              Platform and which will henceforth be construed as a Montra
              Service, from time to time.
            </li>

            <li>
              The Montra Services shall be used by You subject to Your adherence
              with the T&Cs. By using the Montra Platform, you accept wholly,
              these T&Cs. IfYou accept and comply with these T&Cs, Montra grants
              You a personal, non-exclusive, non-transferable, limited, and
              revocable privilege to enter and use the Montra Platform and/or
              avail the Montra Services.
            </li>
          </ul>
        </div>

        <div className="divWrapper" id="eligibility">
          <h2 className="">Eligibility</h2>

          <ul className="">
            <li>
              The Montra Services are not available to persons under the age of
              18, persons of unsound mind, or to anyone previously suspended or
              removed by Montra from availing the Montra Services or accessing
              the Montra Platform{" "}
            </li>

            <li>
              {" "}
              By accepting the T&Cs or by otherwise using the Montra Services on
              the Montra Platform, You represent that You are at least 18 years
              of age, of sound mind, and have not been previously suspended or
              removed by Montra, or disqualified for any other reason, from
              availing the Montra Services or using the Montra Platform. In
              addition, You represent and warrant that You have the right,
              authority and capacity to enter into this Agreement and to abide
              by all the T&Cs as part of this Agreement.
            </li>

            <li>
              Furthermore,Finally,Youshall not impersonate any person or entity,
              or falsely state or otherwise misrepresent Your identity, age or
              affiliation with any person or entity. Also, eligibility to use
              Montra Services or the Montra Platform means implies that you
              shall not utilise the services for fraud or other illegal
              purposes. Any fraud or illegal conduct perpetrated on the Montra
              Platform or using Montra Services is done without the consent of
              Montra and shall void any eligibility to use the platform or
              services.{" "}
            </li>

            <li>
              {" "}
              Finally, in the event of any violation of the T&Cs, Montra
              reserves the right to suspend or permanently prevent You from
              availing Montra Services or using the Montra Platform.{" "}
            </li>
          </ul>
        </div>

        <div
          className="divWrapper"
          id="other-terms-and-conditions"
        >
          <h2 className="">Other Terms and Conditions</h2>

          <ul className="">
            <li>
              Additional terms and conditions may apply in order for You to
              avail specific Montra Services and to specific portions or
              features of the Montra Platform, including contests, promotions or
              other similar features, all of which terms are made a part of
              these T&Cs by this reference.{" "}
            </li>

            <li>
              {" "}
              You agree to abide by such other terms and conditions, including
              where applicable representing that You are of sufficient legal age
              to use or participate in such service or feature. If there is a
              conflict between these T&Cs and the terms posted for or applicable
              to a specific portion of the Montra Platform or for any Montra
              Service offered on or through the Montra Platform, the latter
              terms shall control with respect to Your use of that portion of
              the Montra Platform or the specific Montra Service.{" "}
            </li>

            <li>
              Montra may make changes to any Montra Services offered on the
              Montra Platform, or to the applicable terms for any such Montra
              Services, at any time, without notice. The materials on the Montra
              Platform with respect to the Montra Services may be out of date,
              and Montra makes no commitment to update the materials on the
              Montra Platform with respect to such Montra Services.{" "}
            </li>

            <li>
              {" "}
              The following terms also govern and apply to Your use of the
              Montra Platform, and they are incorporated herein by this
              reference.{" "}
            </li>
          </ul>
        </div>

        <div className="divWrapper" id="ssoid-services">
          <h2 className="">SSOID Service, Participating Platforms</h2>

          <ul className="">
            <li>
              {" "}
              Montra’s SSOID service offers You the convenience, after a
              one-time registration on any Montra Platform, to sign on (log in)
              to all web pages and online platforms operated by Montra or its
              affiliates (hereinafter referred to as the Participating
              Platforms) with single log-in access / data, without going through
              a separate registration process every time.
            </li>

            <li>
              {" "}
              After successfully registering for the SSOID Service, the user can
              log-in via each Participating Platform with thiertheirhis SSOID
              access credentials. Moreover, if already logged in to one of the
              Participating Platforms, the user can immediately use all other
              Participating Platforms without additional log-in procedures
              (subject to the respective Participating Platform requiring
              further declarations).{" "}
            </li>

            <li>
              {" "}
              The Participating Platforms that offer the SSOID as a login
              feature, are visible on registration and in the user account. The
              number of Participating Platforms may also vary in the course of
              time. With regard to the contractual relationships of the users
              with the respective Participating Platforms, for the purposes of
              which Montra’s SSOID service is or can be used in accordance with
              these T&Cs, these can alternatively have their own commercial and
              user terms and conditions. These business or user terms and
              conditions are available on the respective Participating
              Platforms. For the respective contents of the Participating
              Platforms, the respective affiliate of Montra is solely
              responsible only for those content that it actually operates.{" "}
            </li>

            <li>
              {" "}
              For the SSOID service, these T&Cs apply exclusively, whereas for
              the use of the Participating Platforms, their business and user
              terms and conditions apply along with these T&Cs.{" "}
            </li>

            <li>
              The SSOID shall be owned and operated by Montra for use on all
              Participating Platforms.
            </li>

            <li>
              For the use of Montra’s SSOID service, the user must register.
              Registration as a user is only allowed if the user meets the
              eligibility criteria as set out in these T&Cs. Each user can set
              up only one user account. The user is obliged to provide correct
              and complete information during the registration and use of the
              SSOID service. The login data is intended solely for personal use
              by the user and therefore always to be kept secret and safe. The
              user is not entitled to share{" "}
              {/* <span className="text-primary"> */}
                (and is discouraged from sharing)
              {" "}
              his login details with third parties to use the SSOID service or
              to disclose them otherwise. The user is obliged to inform Montra
              immediately on becoming aware of and/or suspecting a case of any
              unauthorized use, disclosure and/or misuse of their access data or
              of their user account. Furthermore, the user is obliged not to use
              the user account of another person. Submission of the duly
              completed registration form by the user simply provides invitation
              to us to make an offer to enter into the agreement on the use of
              our SSOID service (hereinafter referred to as the SSOID
              Agreement).
            </li>

            <li>
              Our offer for the conclusion of the SSOID Agreement is then
              effected by the fact that Montra sends the user a confirmation by
              e-mail, in which a confirmation link is included next to the user
              name and the password for the SSOID Service. By the user clicking
              on this confirmation link, the user accepts Montra’s offer, so
              that in this way the SSOID Agreement enters into force.
            </li>

            <li>
              Conclusion of the SSOID Agreement may, also be effected through
              other communication modes and following such processes which help
              achieve the same purpose as the aforementioned e-mail confirmation
              process.
            </li>

            <li>
              Montra is entitled to reject individual users without giving
              reasons.
            </li>

            <li>
              The user guarantees that the data submitted for their user account
              (and any other information that is otherwise left for Montra) are
              in all respects complete, true, accurate and not misleading. Any
              changes to the user’s data should be promptly updated correctly in
              its account.
            </li>

            <li>
              If the mobile phone number or e-mail address provided by You to
              Montra Platform for the SSOID service is
              transferred/surrendered/deactivated due to any reason, it shall be
              your responsibility to contact Montra and have the number/email
              address duly updated in Montra records before it is
              transferred/surrendered/deactivated. In case the eventof any
              failure to have the updatingpromptly request a data update or to
              follow up on such update duly raised with Montra, Montra shall not
              be liable for any misuse of Your account.
            </li>
          </ul>
        </div>

        <div className="divWrapper" id="communication-property">
          <h2 className="">Communication Policy</h2>

          <p>By accepting the T&Cs, You accept the following:</p>

          <ul className="">
            <li>
              Montra may send alerts to the mobile phone number provided by You
              (while registering with the Montra Platform for the SSOID service
              or on any updated mobile number subsequently provided by You on
              the Montra Platform), or via e-mail or push notifications. The
              alerts will be received in case of SMS, only if the mobile phone
              is in ‘On’ mode to receive the SMS, in case of e-mail, only if the
              e-mail servers and e-mail ids are functional, and in case of push
              notifications, if the user has enabled the receipt of such
              notifications. If the mobile phone is in ‘Off’ mode or if the
              e-mail servers or IiDds are not functional or if the
              push-notifications feature has been turned off, then You may not
              get the alert at all or get delayed messages.{" "}
            </li>

            <li>
              {" "}
              Montra will make best efforts to provide alerts via
              SMS/e-mail/push notifications and it shall be deemed that You
              mustshall have received the information sent from Montra as an
              alert on the mobile phone number or e-mail IDid provided during
              the course of, or in relation to, using the Montra Platform or
              availing any Montra Services. Montra shall not be under any
              obligation to confirm the authenticity of the person(s) receiving
              the alert. You cannot hold Montra liable for non-availability of
              the SMS/email alert/push notifications service in any manner
              whatsoever.{" "}
            </li>

            <li>
              {" "}
              You authorize Montra to contact You and communicate with You for
              any Montra Service or Offer(s). Montra may use third party service
              providers to send alerts or communicate with You. You authorize
              Montra and Montra Entities to override the DND settings to reach
              out to You over calls, SMS, emails and any other mode of
              communication.{" "}
            </li>

            <li>
              {" "}
              The SMS/e-mail alert/push notification service provided by Montra
              is an additional facility provided for Your convenience and that
              it may be susceptible to error, omission and/or inaccuracy. In the
              event that You observe any error in the information provided in
              the alert, Montra shall be immediately informed about the same by
              You and Montra will make best possible efforts to rectify the
              error as early as possible. You shall not hold Montra liable for
              any loss, damages, claim, expense including legal cost that may be
              incurred/suffered by You on account of the SMS/e-mail alert/push
              notification facility.{" "}
            </li>

            <li>
              The clarity, readability, accuracy and promptness of providing the
              SMS/e-mail alert/push notification service depend on many factors
              including the infrastructure and connectivity of the service
              provider. Montra shall not be responsible for any non-delivery,
              delayed delivery or distortion of the alert in any way whatsoever.
            </li>

            <li>
              You will indemnify and hold harmless Montra and the SMS/e-mail
              service provider including its officials from any damages, claims,
              demands, proceedings, losses, costs, charges and expenses
              whatsoever including legal charges and attorney’s fees which
              Montra or the SMS/e-mail service provider may at any time incur,
              sustain, suffer or be subjected to as a consequence of, or arising
              out of, any of the following:
              <ol className="ol-roman">
                <li>
                  Mmisuse by You or improper or fraudulent information provided
                  by You;
                </li>

                <li>
                  incorrect phone number or a phone number that belongs to an
                  unrelated third party provided by You; and/or
                </li>
                <li>
                  the customer receiving any message relating to the reservation
                  number, travel itinerary information, booking confirmation,
                  modification to a ticket, cancellation of ticket, change in
                  bus schedule, delay, and/or rescheduling from Montra and/or
                  the SMS/e-mail service provider.
                </li>
              </ol>
            </li>
          </ul>
        </div>

        <div className="divWrapper" id="montra-platform">
          <h2 className="">Use of Montra Platform</h2>
          <p>
            You understand that except for information, products or services
            clearly indicated as being supplied by Montra, we do not operate,
            control, or endorse any information, products or services on the
            Internet in anyway. You also understand that Montra cannot and does
            not guarantee or warrant that files available for download through
            the Montra Platform will be free of viruses, worms or other code
            that may be damaging. You are responsible for implementing
            procedures to satisfy Your particular requirements of Internet
            security and for accuracy of data input and output.
          </p>
        </div>

        <div className="divWrapper" id="prohibited-conduct">
          <h2 className="">Prohibited Conduct</h2>

          <p>
            By accessing or using the Montra Platform or by availing Montra
            Services, You agree not to:
          </p>

          <ul className="">
            <li>vViolate the T&Cs; </li>

            <li>
              {" "}
              impersonate any person or entity;, falsely claim or otherwise
              misrepresent Your affiliation with any person or entity;, or
              access the accounts of others without permission;, forge another
              person’s digital signature;, misrepresent the source,, identity,
              or content of information transmitted via the Montra Services;,
              perform any other similar fraudulent activity or otherwise avail
              Montra Services with what we reasonably believe to be potentially
              fraudulent funds;{" "}
            </li>

            <li>
              {" "}
              infringe our or any third party’s intellectual property rights,
              rights of publicity or privacy;{" "}
            </li>

            <li>
              {" "}
              The following terms also govern and apply to Your use of the
              Montra Platform, and they are incorporated herein by this
              reference.{" "}
            </li>

            <li>
              {" "}
              use the Montra Services if You are under the age of 18 years
              without a parental sponsor or, in any event, use the Montra
              Services if You are under the age of 13 years old even with a
              parental sponsor and in accordance contravention of with
              applicable law;
            </li>

            <li>
              post or transmit any message, data, image or program which is
              pornographic, vulgar or offensive in nature;
            </li>

            <li>
              refuse to cooperate in an investigation or provide confirmation of
              Your identity or any other information provide by You to Montra;
            </li>

            <li>
              remove, circumvent, disable, damage or otherwise interfere with
              security-related features of the Montra Services and the Montra
              Platform or features that enforce limitations on the use of the
              Montra Services or the Montra Platform;
            </li>

            <li>
              reverse engineer, decompile, disassemble or otherwise attempt to
              discover the source code of as regards Montra Services or
              theMontra Platform or any part thereof, except and only to the
              extent this is expressly permissible by applicable law;
            </li>

            <li>
              use the Montra Services or the Montra Platform in any manner that
              could damage, disable, overburden, or impair it, including,
              without limitation, using the Montra Services or the Montra
              Platform in an automated manner;
            </li>

            <li>
              modify, adapt, translate or create derivative works based upon the
              Montra Services and the Montra Platform or any part thereof,
              except and only to the extent that that this is permissible by
              applicable law;
            </li>

            <li>
              Intentionally interfere with or damage operation of the Montra
              Services or the Montra Platform or any other user’s enjoyment of
              it, by any means, including uploading or otherwise disseminating
              viruses, adware, spyware, worms, or other malicious code or file
              with contaminating or destructive features;
            </li>
            <li>
              Use any robot, spider, other automatic device, or manual process
              to monitor or copy the Montra Platform without prior written
              permission;
            </li>
            <li>
              Interfere or disrupt the Montra Platform, or networks connected to
              the Montra Platform;
            </li>
            <li>
              Take any action that imposes an unreasonably or disproportionately
              large load on Montra’s infrastructure/network;
            </li>
            <li>
              Use any device, software or routine to bypass the Montra
              Platform’s robot exclusion headers, or interfere or attempt to
              interfere, with the Montra Services;
            </li>
            <li>
              Forge headers or manipulate identifiers or other data in order to
              disguise the origin of any content transmitted through the Montra
              Platform or to manipulate Your presence on the Montra Platform;
            </li>
            <li>
              Sell the Montra Services, information, or software associated with
              or derived from it;
            </li>
            <li>
              Use the facilities and capabilities of the Montra Platform to
              conduct any activity or solicit the performance of any illegal
              activity or other activity which infringes the rights of others;
            </li>
            <li>
              Breach this Agreement, the SSOID Agreement or any other agreement
              or policy as may be applicable pursuant to the T&amp;Cs;
            </li>
            <li>Provide false, inaccurate or misleading information;</li>
            <li>
              Use the Montra Platform to collect or obtain personal information,
              including without limitation, financial information, about other
              users of the Montra Platform, except and only as expressly
              provided in the T&amp;Cs;
            </li>
            <li>
              Avail Montra Services with what Montra reasonably believes to be
              potentially fraudulent funds, or pay for any services on Montra
              Platform with funds obtained from illegal transactions;
            </li>
            <li>
              Knowingly use the Montra Services in a manner that results in or
              may result in complaints, disputes, reversals, chargebacks, fees,
              fines, penalties and other liability to Montra, a third party or
              You;
            </li>
            <li>
              Use the Montra Services in a manner that Montra or any payment
              card network reasonably believe to be an abuse of the payment card
              system or a violation of payment card network rules;
            </li>
            <li>
              Take any action that may cause Montra to lose any of the Montra
              Services from its service providers or lose any of its recharge
              partners or business partners, including mobile operators or
              telecom companies, payment processors or other suppliers;
            </li>
            <li>
              Send automated request of any kind to the Montra Platform without
              express permission in advance from Montra.
            </li>
          </ul>
        </div>

        <div
          className="divWrapper"
          id="termination-agreement-violations"
        >
          <h2 className="">Termination; Agreement Violations</h2>

          <p>
            You agree that Montra, in its sole discretion, for any or no reason,
            and without penalty, may suspend or terminate Your account (or any
            part thereof) or Your use of the Montra Services/Montra Platform and
            remove and discard on the Montra Platform all or any part of Your
            account, Your user profile, or Your recipient profile, including
            Your SSOID, at any time. Montra may also in its sole discretion and
            at any time discontinue providing access to the Montra Services, or
            any part thereof, with or without notice. You agree that any
            termination of Your access to the Montra Services/Montra Platform or
            any account You may have or portion thereof may be effected without
            prior notice, and You agree that Montra will not be liable to You or
            any third party for any such termination or interruption. Any
            suspected fraudulent, abusive or illegal activity may be referred to
            appropriate law enforcement authorities. These remedies are in
            addition to any other remedies Montra may have at law or in equity.
            Upon termination for any reason, You agree to immediately stop using
            the Montra Services/Montra Platform.
          </p>
        </div>

        <div
          className="divWrapper"
          id="limitation-of-liability-and-damages"
        >
          <h2 className="">Limitation of Liability and Damages</h2>

          <div>
            In no event, will Montra or its directors, employees, contractors,
            agents, licensors, partners or suppliers will be liable to You for
            any special, indirect, incidental, consequential, punitive,
            reliance, or exemplary damages (including without limitationtofor
            lost business opportunities, lost revenues, or loss of anticipated
            profits or any other pecuniary or non-pecuniary loss or damage of
            any nature whatsoever) arising out of or relating to:
            <ol className="ol-roman pb-[1.5vw]">
              <li>this Agreement;</li>

              <li>the SSOID Agreement;</li>
              <li>
                the Montra Services, the Montra Platform or any reference
                site/app/platform/service; or
              </li>
              <li>
                Your use or inability to use the Montra services, the Montra
                Platform (including any and all materials) or any reference
                sites/app/platform/service; or
              </li>

              <li>
                any other interactions with Montra, however caused and whether
                arising in contract, tort including negligence, warranty or
                otherwise, beyond or in excess of the amount paid by You, if
                any, for using the portion of the Montra Service or the Montra
                Platform giving rise to the cause of action, or beyond, .even if
                Montra or a Montra authorized representative has been advised of
                the possibility of such damages.
              </li>
            </ol>
            <ul className="">
              <li>
                You acknowledge and agree that Montra has offered its products
                and services, set its prices, and entered into this Agreement in
                reliance upon the warranty disclaimers and the limitations of
                liability set forth herein;, that the warranty disclaimers and
                the limitations of liability set forth herein reflect a
                reasonable and fair allocation of risk between You and Montra,
                and that the warranty disclaimers and the limitations of
                liability set forth herein form an essential basis of the
                bargain between You and Montra. Montra would not be able to
                provide the services to You on an economically reasonable basis
                without these limitations. Applicable law may not completely
                allow the limitation or exclusion of liability or incidental or
                consequential damages, so the above limitations or exclusions
                will apply to You subject to applicable law. In such cases,
                Montra’s liability will be limited to the fullest extent by what
                is permitted by underapplicable law. This paragraph shall
                survive the termination of this Agreement.
              </li>
            </ul>
          </div>
        </div>

        <div className="divWrapper" id="indemnification">
          <h2 className="">Indemnification</h2>

          <p>
            You agree to indemnify, save, and hold Montra / Artha Fintech, its
            affiliates, employees, officers, directors and partners harmless
            from any and all claims, losses, damages, and liabilities, costs and
            expenses, including without limitation legal fees and expenses,
            arising out of or related to:
          </p>

          <ol className="ol-roman">
            <li>
              Your use or misuse of the Montra Services or of the Montra
              Platform;
            </li>

            <li>
              any violation by You of this Agreement or the SSOID Agreement; or
            </li>

            <li>
              any breach of the representations, warranties, and covenants made
              by You herein. Montra reserves the right, at Your expense, to
              assume the exclusive defense and control of any matter for which
              You are required to indemnify Montra, including rights to settle,
              and You agree to cooperate with Montra’s defense and settlement of
              these claims. Montra will use reasonable efforts to notify You of
              any claim, action, or proceeding brought by a third party that is
              subject to the foregoing indemnification upon becoming aware of
              it. This paragraph shall survive termination of this Agreement.
            </li>
          </ol>
        </div>

        <div className="divWrapper" id="disclaimer-no-warranties">
          <h2 className="">Disclaimer; No Warranties</h2>

          <p>
            To the fullest extent permissible pursuant to applicable law, Montra
            and its third-party partners disclaim all warranties or guarantees –
            whether statutory, express or implied – including, but not limited
            to, implied warranties of merchantability, fitness for a particular
            purpose, and non-infringement of proprietary rights. No advice or
            information, whether oral or written, obtained by You from Montra or
            through the Montra Services or the Montra Platform will create any
            warranty or guarantee other than those expressly stated herein. For
            the purposes of this Disclaimer, You expressly acknowledge that as
            used in this section, the term “Montra” includes Montra’s officers,
            directors, employees and duly authorised agents. You acknowledge
            that Montra is a reseller of mobile recharges and is not liable for
            any third party (telecom companies, mobile operators or suppliers)
            obligations due to rates, quality and all other instances, whether
            to any such telecom companies’ subscribers or otherwise. You
            expressly agree that use of the Montra Services on the Montra
            Platform is at Your sole risk. It is Your responsibility to evaluate
            the accuracy, completeness and usefulness of all opinions, advice,
            services, merchandise and other information provided through the
            site or on the Internet generally. Montra does not warrant that the
            Montra Services will be uninterrupted or error-free or that defects
            in the site will be corrected. The Montra Services and the Montra
            Platform and any data, information, third party software, reference
            sites, services, or software made available in conjunction with or
            through the services and the site are provided on an “as is” and “as
            available,” “with all faults” basis and without warranties or
            representations of any kind either express or implied. Montra, and
            its partners do not warrant that the data, Montra software,
            functions, or any other information offered on or through the Montra
            Services/Montra Platform or any reference
            sites/platforms/apps/services will be uninterrupted, or free of
            errors, viruses or other harmful components and do not warrant that
            any of the foregoing will be corrected. Montra and its licensors,
            and partners do not warrant or make any representations regarding
            the use or the results of the use of the Montra Services/Montra
            Platform or any reference sites/platforms/apps/services in terms of
            correctness, accuracy, reliability, or otherwise. You understand and
            agree that You use, access, download, or otherwise obtain
            information, materials, or data through the Montra Services/Montra
            Platform or any reference sites/platforms/apps/services at Your own
            discretion and risk and that You will be solely responsible for any
            damage to Your property (including Your computer system and mobile
            device or any other equipment) or loss of data that results from the
            download or use of such material or data. We do not authorize anyone
            to make any warranty on our behalf and You should not rely on any
            such statement. This paragraph shall survive termination of this
            Agreement. In no event will Montra be liable for any incidental,
            consequential, or indirect damages (including, but not limited to,
            damages for loss of profits, business interruption, loss of programs
            or information, and the like) arising out of the use of or inability
            to use the Montra Platform.
          </p>
        </div>

        <div
          className="divWrapper"
          id="ownership-proprietary-rights"
        >
          <h2 className="">Ownership; Propritary Rights</h2>

          <p>
            The Montra Services and the Montra Platform are owned and operated
            by Montra. The visual interfaces, graphics, design, compilation,
            information, computer code (including source code and object code),
            products, software, services, and all other elements of the Montra
            Services and the Montra Platform provided by Montra (hereafter
            Materials) are protected by Indian Nigeriancopyright, trade dress,
            patent, and trademark laws, international conventions, and all other
            relevant intellectual property and proprietary rights, and
            applicable laws. As between You and Montra, all Materials,
            trademarks, service marks, and trade names contained on the Montra
            Platform are the property of Montra. You agree not to remove,
            obscure, or alter Montra or any third party’s copyright, patent,
            trademark, or other proprietary rights notices affixed to or
            contained within or accessed in conjunction with or through the
            Montra Services/Montra Platform. Except as expressly authorized by
            Montra, You agree not to sell, license, distribute, copy, modify,
            publicly perform or display, transmit, publish, edit, adapt, create
            derivative works from, or otherwise make unauthorized use of the
            Materials. Montra reserves all rights not expressly granted in this
            Agreement. If You have comments regarding the Montra Services and/or
            the Montra Platform or ideas on how to improve it, please contact
            customer service. Please note that by doing so, You hereby
            irrevocably assign to Montra, and shall assign to Montra, all
            rights, title and interests in and to all ideas and suggestions and
            any and all worldwide intellectual property rights associated
            therewith. You agree to perform such acts and execute such documents
            as may be reasonably necessary to perfect the foregoing rights.
          </p>
        </div>

        <div
          className="divWrapper"
          id="modification-of-this-agreement"
        >
          <h2 className="">Modification of this Agreement</h2>

          <p>
            Montra reserves the right to change, modify, add, or remove portions
            of this Agreement (each, a change and collectively, changes) at any
            time by posting notification on the Montra Platform or otherwise
            communicating the notification to You. The changes will become
            effective, and shall be deemed accepted by You, 24 hours after the
            initial posting and shall apply immediately on a going-forward basis
            with respect to Your use of the Montra Platform, availing the Montra
            Services or for payment transactions initiated after the posting
            date. If You do not agree with any such change, Your sole and
            exclusive remedy is to terminate Your use of the Montra
            Services/Montra Platform. For certain changes, Montra may be
            required under applicable law to give You advance notice, and Montra
            will comply with such requirements.Your continued use of the Montra
            Platform following the posting of changes will mean that You accept
            and agree to the changes.
          </p>
        </div>

        <div className="divWrapper" id="notice">
          <h2 className="">Notice</h2>

          <p>
            Montra may provide You with notices and communications by e-mail,
            SMS, push notifications, regular mail or postings on the Montra
            Platform or by any other reasonable means. Except as otherwise set
            forth herein, notice to Montra must be sent by courier or registered
            mail to Montra Technology Solutions Ltd(formerly Artha
            FintechLimited), Unit 6, First Floor, 20 The Quad, Admiralty Road,
            Lekki Phase 1, Lagos, Nigeria.
          </p>
        </div>

        <div className="divWrapper" id="waiver">
          <h2 className="">Waiver</h2>

          <p>
            The failure of Montra to exercise or enforce any right or provision
            of this Agreement will not constitute a waiver of such right or
            provision. Any waiver of any provision of this Agreement will be
            effective only if in writing and signed by Montra.
          </p>
        </div>

        <div className="divWrapper" id="dispute-resolution">
          <h2 className=""> Dispute Resolution</h2>

          <p>
            If any dispute, controversy or claim arises under this Agreement or
            in relation to any Montra Service or the Montra Platform, including
            any question regarding the existence, validity or termination of
            this Agreement or T&Cs (hereinafter referred to as Dispute), the
            parties shall use all reasonable endeavours to resolve such Dispute
            amicably. If the parties are unable to resolve the Dispute amicably
            within 30 days of the notice of such Dispute, Montra may elect to
            resolve any Dispute by a binding arbitration in accordance with the
            provisions of theNigerian Arbitration and Mediation Act 2023 (the
            “New Act”). Either You or Montra may seek any interim or preliminary
            relief from a court of competent jurisdiction inLagos, Nigeria
            necessary to protect the rights or the property belonging to You or
            Montra (or any of our agents, suppliers, and subcontractors),
            pending the completion of arbitration. The seat of any such
            arbitration shall be Lagos, Nigeria. Any arbitration shall be
            confidential, and neither You nor Montra may disclose the existence,
            content or results of any arbitration, except as may be required by
            law or for purposes of enforcing the arbitration award. All
            administrative fees and expenses of arbitration will be divided
            equally between You and Montra. In all arbitrations, each party will
            bear the expense of its own lawyers and preparation. This paragraph
            shall survive termination of this Agreement.
          </p>
        </div>

        <div
          className="divWrapper"
          id="governing-law-and-forum-for-disputes"
        >
          <h2 className=""> Governing Law and Forum for Disputes</h2>

          <p>
            Subject to the Dispute Resolution section above, You agree that any
            claim or disputerecourseYou may have against Montra must be resolved
            by a court having jurisdiction in Lagos, Nigeria. You agree to
            submit to the personal jurisdiction of the courts located within
            Lagos, for the purpose of litigating all such claims or disputes.
            This Agreement shall be governed by Nigerian law. This paragraph
            shall survive termination of this Agreement.
          </p>
        </div>

        <div className="divWrapper" id="severability">
          <h2 className=""> Severability </h2>
          <p>
            If any provision of this Agreement is held to be unlawful, void,
            invalid or otherwise unenforceable, then that provision will be
            limited or eliminated from this Agreement to the minimum extent
            required, and the remaining provisions will remain valid and
            enforceable.
          </p>
        </div>

        <div className="divWrapper" id="survival">
          <h2 className=""> Survival</h2>
          <p>
            Upon termination of this Agreement, any provision which, by its
            nature or express terms should survive, will survive such
            termination or expiration as applied to transfers and relationship
            prior to such termination or expiration.
          </p>
        </div>

        <div className="divWrapper" id="headings">
          <h2 className=""> Headings</h2>
          <p>
            The heading references herein are for convenience purposes only and
            they do not constitute a part of these T&Cs and will not be deemed
            to limit or affect any of the provisions hereof.
          </p>
        </div>

        <div className="divWrapper" id="entire-agreement">
          <h2 className=""> Entire Agreement</h2>
          <p>
            This Agreement is the entire agreement between You and Montra
            relating to the subject matter hereof and this Agreement will not be
            modified except by a change to this Agreement made by Montra in
            accordance with the terms of this Agreement.
          </p>
        </div>

        <div
          className="divWrapper"
          id="bill-payments-and-digital-products-terms-conditions"
        >
          <h2 className="">
            {" "}
            Bill Payments and Digital Products Terms & Conditions
          </h2>
          <p>
            Please read the following terms and conditions carefully before
            registering on, accessing, browsing, downloading or using the Montra
            website located at <Link href='/' className='text-primary'>Montra.org</Link>, and all associated sites linked to org <Link href='/' className='text-primary'>Montra.org</Link>
            , or the Montra mobile application or any similar platform
            (hereinafter collectively, the Montra Platform) run by Montra
            Technology Solutions Ltd (Formerly Artha Fintech Limited), having
            its registered office at Unit 6, First Floor, 20 The Quad, Admiralty
            Road, Lekki Phase 1, Lagos, Nigeria (hereinafter collectively, Artha
            Fintechor Montra) on any device and/or before availing any travel,
            recharge or bill payment or digital products related services
            offered by Montra on the Montra Platform (hereinafter, individually
            Montra Digital Service and collectively, the Montra Digital
            Services).
          </p>
        </div>

        <div className="divWrapper" id="montra-recharges">
          <h2 className=""> Digital Services</h2>
          <p>
            Montra offers on the Montra Platform certain digital products such
            as purchase of movie tickets, bus tickets, hotel reservations,
            flight tickets, tickets to amusement or theme parks, coupon
            redemption services etc. Further, Montra may facilitate on its
            Platform, services from its related entities such as the purchase of
            prepaid recharges for mobile,toll and data card etc.
          </p>

          <p>
            Montra offers on the Montra Platform certain digital products such
            as purchase of movie tickets, bus tickets, hotel reservations,
            flight tickets, tickets to amusement or theme parks, coupon
            redemption services etc. Further, Montra may facilitate on its
            Platform, services from its related entities such as the purchase of
            prepaid recharges for mobile,toll and data card etc.
          </p>

          <p>
            The terms ‘Agreement’ or ‘T&Cs’ mentioned herein below includes the
            terms and conditions in relation to digital products set out below,
            bill payments, the SSOID terms and conditions as well as other
            service-specific terms and conditions in relation to Montra Services
            or Montra Platform.
          </p>

          <p>
            For various facilities and technology features made available on
            Montra Platform, please note that Montra will be entitled to charge
            convenience fee from you. For e.g. for adding money using the Montra
            Platform to the wallet offered by MontraTechnology Solutions Ltd.
          </p>
        </div>

        <div className="flex gap-[2vw] flex-col" id="refund-policy">
          <h2 className=""> Montra Recharges </h2>
          <p>
            Montra is only a reseller of digital products. Montra or its related
            entities do not provide mobile operator services and is only a
            reseller of prepaid mobile recharge services which are ultimately
            provided by telecommunications service providers (hereafter referred
            to as Telco or Telcos) or by other distributors or aggregators of
            such Telcos. Montra or its related entities is not a warrantor,
            insurer, or guarantor of the services to be provided by the Telcos.
            Prepaid mobile recharge sold to You by Montra or its related
            entities, is sold without recourse against Montra or its related
            entities for any breach of contract by the Telcos. Any disputes
            regarding the quality, minutes provided, cost, expiration, or other
            terms of the mobile prepaid recharge purchased must be handled
            directly between You (or the recipient of the recharge) and the
            Telco. The terms and conditions set out in this section are
            applicable, mutatis mutandis, to other prepaid recharge products
            available on the Montra Platform including prepaid recharges in
            relation to bills payment, data card and toll tags as well as to
            other prepaid recharge products that may be offered on the Montra
            Platform. Montra or its related entities will not be responsible for
            any failure on the part of any of its recharge partners in effecting
            a recharge.
          </p>
        </div>

        <div className="divWrapper" id="bill-payments">
          <h2 className=""> Refund Policy</h2>
          <p>
            All sales of prepaid recharge on the Montra Platform are final with
            no refund or exchange permitted. You are responsible for the mobile
            number or bills payment account number for which You purchase the
            prepaid recharge and all charges that result from those purchases.
            You are also responsible for the information relating to data card
            and toll-tag recharge and all charges that result from those
            purchases. Montra is not responsible for any purchase of prepaid
            recharge for an incorrect mobile number or bills payment account
            number or incorrect toll or data card information. However, if in a
            transaction performed by You on the Montra Platform, money has been
            charged to Your card or bank account and a recharge is not delivered
            within 24 hours of the completion of the transaction, then You shall
            inform us by sending an e mail to our customer services e-mail
            address mentioned on the ‘Contact Us’ page on the Montra Platform.
            Please include in the e-mail the following details – the mobile
            number (or bills payment account number or data card or toll-tag
            information), operator name, recharge value, transaction date and
            order number. Montra will investigate the incident and, if it is
            found that money was indeed charged to Your card or bank account
            without delivery of the recharge, then You will be refunded the
            money within 21 working days from the date of receipt of Your
            e-mail. All refunds will be credited to Your Montra wallet. You can
            trigger a request in Your Montra wallet to transfer the money from
            Your Montra wallet back to source. It will take 3-21 working days
            for the money to show in Your bank account depending on Your bank’s
            policy.
          </p>
        </div>

        <div className="divWrapper">
          <h2 className=""> Bill Payements</h2>
          <p>
            In order to use the bill payments service or any other Montra
            Service, You will need to obtain access to the World Wide Web or the
            Internet, either on a computer or on any other device that can
            access web-based content, and You will also need to pay any service
            fees associated with such access. In addition, You must have all
            equipment necessary to make such connection to the World Wide Web or
            the Internet, including a computer and a modem or any other set of
            access devices. Montra and/or the Montra business partner (including
            Montra’s bill payment partners) reserve the right to charge and
            recover from You, such fees for availing the service as the case may
            be. These charges shall be effective from the time when they are
            posted on the Montra Platform or on the Montra business partner’s
            channel/portal/website through which You are availing the specific
            service. You are bound by such revisions and should therefore visit
            the Montra Platform or check with the Montra business partner’s
            channel/portal/website through which You are availing the specific
            service in order to review the applicable fees which may vary from
            time to time. In the event that You stop or seek a reversal of the
            payment instructions as may have been submitted, Montra shall be
            entitled to charge and recover from You and You shall be liable to
            pay such charges to the bill payment service provider as may be
            decided by Montra. These charges shall be charged on to Your
            designated payment account or in any other manner as may be decided
            by Montra. Montra offers a convenient and secure way to make
            payments towards identified biller(s) using a valid payment account.
            Depending upon the Montra business partner through whom the specific
            service is availed by You
          </p>

          <ol className="ol-roman">
            <li>the specific features of the service may differ;</li>

            <li>
              the number of billers available over the service may differ;
            </li>

            <li>
              the type and range of payment accounts that can be used to issue a
              payment instructions may differ;
            </li>

            <li>
              the modes/devices over which the service can be accessed may
              differ; and
            </li>

            <li>
              the charges, fees for availing the service or any aspect of the
              service may differ. Specific details related to these aspects
              would be available with the Montra business partner on their
              channel/portal/website over which the service is being availed.
              From time to time, Montra, at its sole discretion, can add to or
              delete from such list of billers or types of payment accounts that
              can be used in respect of making payments to a biller. The type
              and range of payment accounts that can be used for making payments
              may differ for each biller depending on biller specifications.
              There may be additional fees/charge when using certain types of
              payment accounts in respect of a biller. The terms upon which a
              payment can be made to a biller can differ depending on whether a
              card or a bank account is used to issue the payment instruction.
              Further, depending on the specific facilities allowed by a Montra
              business partner, payments to a biller can be made either
              <ol className="ol-alpha">
                <li>
                  by issuing a payment instruction for an online debit/charge to
                  a payment account or
                </li>

                <li>
                  by scheduling an automated debit to a payment account. In
                  using the bill payment service, You agree to:
                </li>
              </ol>
            </li>
          </ol>
          <ul>
            <li>
              provide true, accurate, current and complete information about
              Yourself (“RegistrationData”), Your payment account details
              (“PaymentData”), Your biller details (“BillerData”); and
            </li>

            <li>
              maintain and promptly update the Registration Data, Payment Data
              and Biller Data to keep it true, accurate, current and complete at
              all times. If You provide any information that is untrue,
              inaccurate, not current or incomplete, or Montra has reasonable
              grounds to suspect that such information is untrue, inaccurate,
              not current or incomplete, Montra has the right to suspend or
              terminate Your account and refuse any and all current or future
              use of the Montra Services/Montra Platform (or any portion
              thereof). The term biller includes telecom operators.
            </li>
          </ul>

          <p>
            Montra assumes no responsibility and shall incur no liability if it
            is unable to eaffect any payment instruction(s) on the payment date
            owing to any one or more of the following circumstances:
          </p>

          <ul>
            <li>
              If the payment instruction(s) issued by You is/are incomplete,
              inaccurate, invalid and delayed;
            </li>

            <li>
              If the payment account has insufficient funds/limits to cover for
              the amount as mentioned in the payment instruction(s);
            </li>
            <li>
              If the funds available in the payment account are under any
              encumbrance or charge;
            </li>
            <li>
              If Your bank or the National Clearing Centre refuses or delays
              honouring the payment instruction(s);
            </li>

            <li>If payment is not processed by biller upon receipt;</li>

            <li>
              Circumstances beyond the control of Montra (including, but not
              limited to, fire, flood, natural disasters, bank strikes, power
              failure, systems failure like computer or telephone lines
              breakdown due to an unforeseeable cause or interference from an
              outside force).
            </li>
          </ul>
          <p>
            In case the bill payment is not effected for any reason, You will be
            intimated about the failed payment by an e-mail.
          </p>
        </div>
      </div>
    </div>
  );
}
