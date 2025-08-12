'use client'
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

import "./styles.css";

const navLinks = [
  { id: "#data-information", text: "Data/Information We May Collect From You" },
  { id: "#how-we-collect", text: "How We Collect Your Personal Information" },
  { id: "#how-we-use", text: "How We Use Your Personal Information" },
  { id: "#how-we-share", text: "How We Share Your Personal Information" },
  { id: "#grounds-of-processing", text: "Grounds Of Processing Personal Data" },
  { id: "#how-we-protect", text: "How We Protect Your Information" },
  { id: "#data-retention", text: "Data Retention" },
  { id: "#rights", text: "Rights" },
  { id: "#accuracy-of-information", text: "Accuracy Of Information" },
  { id: "#cookies", text: "Cookies" },
  { id: "#minor", text: "Minor" },
  {
    id: "#transfer-of-personal-information-to-foreign-country",
    text: "Transfer Of Personal Information To Foreign Country",
  },
  {
    id: "#changes-to-this-privacy-policy",
    text: "Changes To This Privacy Policy",
  },
  { id: "#policy-violation", text: "Policy Violation" },
  {
    id: "#contact-data-protection-officer-dpo",
    text: "Contact Data Protection Officer (DPO)",
  },
];

export default function Content() {
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const triggers = navLinks.map((item) => {
      const id = item.id.replace("#", "");

      return ScrollTrigger.create({
        trigger: `#${id}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveLink(item.id),
        onEnterBack: () => setActiveLink(item.id),
      });
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

//for handle onclick
  const handleOnclick = (id) => {
    gsap.to(window, {
      duration: 2,
      scrollTo: {
        y: id,
        offsetY: 50,
      },
      ease: "power3.inOut",
    });
  };


  return (
    <div className="w-full h-fit bg-[#fefefe] py-[14vw]  max-sm:py-[15vw] flex relative flex-row ">
      <div className="w-[25%] max-sm:hidden max-md:hidden flex flex-col gap-[.5vw] px-[2vw] capitalize sticky top-[20%] h-fit">
        {navLinks.map((item) => (
          <p
            key={item.id}
            onClick={() => {
              handleOnclick(item.id);
              setActiveLink(item.id);
            }}
            className={`nav-link w-fit ${
              activeLink === item.id ? "text-[#215CFF]" : "text-[#bbbbbb]"
            }`}
          >
            {item.text.length > 20
              ? item.text.split(" ").slice(0, 4).join(" ") + "..."
              : item.text}
          </p>
        ))}
      </div>
      <div className="w-[60%] h-fit  max-sm:px-[5vw] max-md:w-full max-sm:w-full  max-sm:gap-[10vw] max-md:gap-[6vw] max-md:px-[5vw]  gap-[5vw] flex flex-col ">
        <div className="space-y-[2vw]">
        <p>
        Montra Technology Solutions Limited is a private limited liability company (“Montra”, “Company”, “we”, “us” or “our”) licensed by the Central Bank of Nigeria to provide electronic payment systems services and registered office at 20 Layi Yusuf Crescent, Lekki Phase 1, Lagos State. Montra offers an online payment platform that allows customers to make seamless digital payments. The Montra Privacy Policy (“Privacy Policy”) describes how we treat your personal information as private and confidential, how we collect, use, store, share, and protect personal data from our website, merchants, customers and vendors who engage with our services. It also applies to our website, mobile applications and payment platforms ("Services") provided by Montra.
        </p>
        <p>Our Services are intended for and provided to businesses (Merchants). This Privacy Policy does not apply to services that are not owned or controlled by Montra, including third-party websites and the services of Montra Merchants. We process personal data at the direction of and on behalf of Merchants. We do not control these third-party websites and are not responsible for their privacy statements. Please consult such third parties&apos;privacy statements.</p>
        <p>We are committed to protecting your personal in accordance with this Privacy Policy and in compliance with the Nigeria Data Protection Regulation (NDPR) 2019. By using or accessing our Services, you agree to the collection, use, and disclosure of your personal data as described in this Privacy Policy.</p>
        <p>We may need to update, modify or amend our Privacy Policy as our technology evolves and as required by law. We reserve the right to post any revisions we make to our Privacy Policy on this page and such revised policy becomes effective as at the time it is posted. We will notify you when any changes to our privacy policy have been made. We also encourage you to check this page from time to time for updates to this policy.</p>
        </div>
        <div id="data-information" className="divWrapper">
          <h2>Data/Information We May Collect From You</h2>
          <p>
            The lawful basis of processing your Personal Information under the
            Nigeria Data Protection Act(NDPA) 2023 are:
          </p>
          <ul>
            <li>
              <span className="font-medium">Your Consent:</span> Where you have agreed for us to to process your
              personal data/information by using our Services.
            </li>
            <li>
            <span className="font-medium">Contractual Obligation:</span> Our services are only provided to you when
              there is a contractual obligation. Without your personal
              information we cannot provide the service to you.
            </li>
            <li>
            <span className="font-medium">Legal Obligation:</span> We are required to collect and store your
              personal information to prevent fraud and money laundering as well
              as to ensure that we are fully compliant with all applicable
              financial legislations. By Law, we are required to retain certain
              information of an account opened with us and the data of customers
              beyond the date when they cease to be our customers.
            </li>
          </ul>
          <p>
            We receive and store any information you enter on our website, app
            or you give us in any other way. When you create an account with us
            or log into an existing account; provide information in your
            account; visit our website or download our app; order
            products/content from us; use our payment services, access our
            platform or use our services; contact us for customer care.
          </p>

          <p>
            We may need to collect, use, process, store, or transfer information
            about you and your computer to allow you to use some of our
            services. The personal information may include but not limited to:
          </p>
          <ul>
            <li>
            <span className="font-medium">Identity data:</span> Information such as: First name, middle name, last
              name, email, marital status, title, date of birth and gender.
            </li>
            <li>
            <span className="font-medium"> Identification documents:</span> Your government-issued identity number,
              passport photograph and other registration information.
            </li>
            <li>
            <span className="font-medium"> Contact data:</span> contact and billing address email, telephone numbers
              and details of the device you use.
            </li>
            <li>
            <span className="font-medium">Financial and Payment data:</span> bank account, Bank Verification Number
              (BVN), Amount, financial account information, and other payment
              details.
            </li>
            <li>
            <span className="font-medium">Transaction data:</span> Payment information other details of products
              and Services you have subscribed to.
            </li>
            <li>
            <span className="font-medium"> Technical data:</span> your geo-location, internet protocol (IP) address,
              your login data, browser type and version, length of visit on
              certain pages, device identifier, log-in information, time zone
              setting and location, browser plug-in types and versions,
              operating system and platform and other technology on the devices
              you use to access this website.
            </li>
            <li>
            <span className="font-medium"> Profile data:</span> Information placed on your personal profile (e.g.,
              personal description or passport photograph). Your username and
              password, your interests, preferences, feedback and survey
              responses.
            </li>
            <li>
            <span className="font-medium"> Usage data: </span> Information about how you use our website, products
              and services.
            </li>
            <li>
            <span className="font-medium">  Marketing and communications data: </span> Records of your preferences in
              receiving marketing materials from us and our third parties.
              Communication details provided when you contact us.
            </li>
          </ul>
          <p>
            When you are asked to provide personal data, you may decline. And
            you may use web browser or operating system controls to prevent
            certain types of automatic data collection. But if you choose not to
            provide or allow information that is necessary for certain services
            or features, those services or features may not be available or
            fully functional.
          </p>
        </div>

        <div id="how-we-collect" className="divWrapper">
          <h2>How We Collect Your Personal Information</h2>
          <p>
            The Personal Information we have about you is directly made
            available to us when you:
          </p>
          <ul>
            <li>
            <span className="font-medium">Direct Engagement:</span> When you choose to use any of our services
              through our website, mobile app, sign-up for an account, upload
              any documentation, send any communication by email or phone call,
              fill-out any form, make an enquiry, or any other communication
              received directly or indirectly from you.
            </li>
            <li>
            <span className="font-medium"> Automatically: </span> As you browse our websites certain information
              relating to your browsing patterns and technical data about the
              equipment you are using to access the website is automatically
              collected using cookies, server logs and other similar
              technologies. Please see our Cookie preference for further
              information.
            </li>
            <li>
            <span className="font-medium">From third parties/public sources: </span> We utilise third-party service
              providers to secure information related to financial crime, fraud,
              sanctions and Politically Exposed Persons. Also technical data may
              be obtained from analytics providers, advertising networks, search
              information providers etc.
            </li>
          </ul>
        </div>
        <div id="how-we-use" className="divWrapper">
          <h2>How We Use Your Personal Information</h2>
          <p>
            We use the personal information we collect for the following
            purposes:
          </p>
          <ul>
            <li>Create and manage accounts you have with us.</li>
            <li>
              Verify your identity and administering our products and services.
            </li>
            <li>Managing our relationship with you.</li>
            <li>
              For pricing, designing and reviewing our products and services
            </li>
            <li>
              Process your payment transactions including authorization,
              clearing, chargebacks etc.
            </li>
            <li>
              Identify, detect, prevent and manage risk against fraud and
              illegal activities using various screening tools.
            </li>
            <li>
              Prevention of money laundering or terrorism financing activities.
            </li>
            <li>
              As required for compliance, regulatory and legal purposes such as
              Know Your Customers and Enhanced Due Diligence, judicial process,
              law enforcement or as required governmental agency.
            </li>
            <li>
              Resolve disputes that may arise, including investigations by law
              enforcement or regulatory bodies.
            </li>
            <li>
              For improvement of our website, products or services, and other
              user experiences.
            </li>
            <li>
              For marketing content, newsletters and service updates with your
              consent.
            </li>
            <li>For updating, enhancing Maintain up-to-date records.</li>
            <li>
              For any other purpose that we disclose to you in the course of
              providing services
            </li>
          </ul>
        </div>
        <div id="how-we-share" className="divWrapper">
          <h2>How We Share Your Personal Information</h2>
          <p>
            We may need to provide your information to third party service
            providers that maintain, administer or develop our website or mobile
            application. However, we do not sell, trade or rent personal data to
            anyone. In addition, we will not share or disclose your personal
            data with a third party without your consent except as necessary to
            provide the Services or as described in this Privacy Policy.
          </p>
          <p>
            We may share the information about you and your dealings with us, to
            the extent permitted by law, with the following:
          </p>
          <ul>
            <li>Affiliated Businesses.</li>
            <li>Strategic partners / Third-Party Service Providers.</li>
            <li>
              Financial institutions, Financial Services and Payment Processing.
            </li>
            <li>Agents, suppliers, subcontractors.</li>
            <li>Companies providing analytics services.</li>
            <li>External Auditors.</li>
            <li>Employees of Montra.</li>
            <li>
              Regulatory/Law enforcement bodies/Government Agencies or Court.
            </li>
          </ul>
          <p>
            We may provide aggregate statistics about our customers, sales,
            traffic patterns and related website information to reputable
            third-parties, but these statistics will include no personally
            identifiable information. We may also disclose information about you
            if we determine that disclosure is reasonably necessary to enforce
            our terms and conditions or protect our operations or users.
          </p>
          <p>
            Additionally, in the event of a reorganization, merger, or sale we
            may transfer any and all personal information we collect to the
            relevant third party. We will provide notice before personal
            information is transferred and becomes subject to a different
            privacy policy.
          </p>
        </div>
        <div id="grounds-of-processing" className="divWrapper">
          <h2>Grounds Of Processing Personal Data</h2>
          <p>
            We will only process your data to third parties if one or more of
            the following applies:
          </p>
          <ul>
            <li>
            <span className="font-medium"> We Have Your Consent:</span> In case you have expressly consented to your
              data being shared with specific third parties. The use of your
              Personal Information by an authorized third party is subject to
              the third party's privacy policy and we shall bear no liability
              for any breach which may arise from such authorization by you.
            </li>
            <li>
              The processing is necessary for the performance of a contract to
              which you are a party or in order to take steps at your request
              prior to entering into a contract.
            </li>
            <li>
              Processing is necessary for compliance with a legal obligation to
              which Montra is subject.
            </li>
            <li>
              Processing is necessary in order to protect your vital information
              or of another natural person. 
            </li>
            <li>
              Processing is necessary for the performance of a task carried out
              in the public interest or in exercise of official public mandate
              vested in Montra.
            </li>
          </ul>
        </div>
        <div id="how-we-protect" className="divWrapper">
          <h2>How We Protect Your Information</h2>
          <p>
            In line with International best practices, we are committed to
            managing and protecting your personal data using physical,
            technical, and administrative security measures to prevent the risks
            of loss, misuse, unauthorised access, modification, alteration or
            disclosure of information under our control.
          </p>
          <p>Your personal information retained with us are secured because:</p>
          <ul>
            <li>
              We use industry recommended security protocols to safeguard your
              personal data and we implement access control measures, security
              protocols and standards which include but are not limited to data
              encryption, firewalls technologies, and physical access controls
              technologies to ensure your card information is safe and secure in
              our servers. Our Security controls and processes are regularly
              updated to meet industry standards.
            </li>
            <li>
              We train our employees to respect the confidentiality of any
              personal information retain by us and only grant access to
              personal data to employees who require it to fulfil their job
              responsibilities. We also use Role-based access control (RBAC) as
              an internal security measure, permission to access customers&apos; data
              is given to certain roles within the organization.
            </li>
            <li>
              We only reveal the last four digits of your card number when
              confirming an order even though we transmit the entire card number
              to the relevant card company, when orders are processed.
            </li>
            <li>
              We have added the Two Factor Authentication (2FA) as an additional
              layer of security to your account. You will be required to enter a
              One Time Password (OTP) a code sent to you to verify directives.
              Please note that you may opt to disable this feature. In the event
              you opt out of this feature, we shall not be liable for any loss
              or damages incurred as a result of your decision.
            </li>
          </ul>
          <p>
            Where we have provided you (or where you have chosen) a password or
            security pin that grants you access to specific areas on our site,
            you are responsible for keeping this password confidential. We
            request that you do not share your password or security pin or other
            authentication details with anyone and also sure you sign off when
            using a shared computer. You may contact our Data Protection Officer
            (DPO) upon becoming aware of any breach of personal data or if your
            access credentials have been compromised, to enable us to take the
            necessary steps towards ensuring the security of your personal data
            or account.
          </p>
        </div>
        <div id="data-retention" className="divWrapper">
          <h2>Data Retention</h2>
          <p>
            In line with regulatory compliance, we will only retain personal
            information for the following periods on our servers:
          </p>
          <ul>
            <li>
              For as long as is reasonably necessary in providing Services to
              you.
            </li>
            <li>
              For the duration your account is active and we have your consent
            </li>
            <li>
              For the period needed to comply with our legal and statutory
              obligations
            </li>
          </ul>
          <p>
            Where you close your Account, your information is stored on our
            servers to the extent necessary to comply with regulatory
            obligations and for the purpose of fraud monitoring, detection and
            prevention. Where we retain your Personal Data, we do so in
            compliance with limitation periods under the applicable law. Storage
            of your data is also determined by legal, regulatory, administrative
            or operational requirements.
          </p>
          <p>
            When we determine that personal data can no longer be retained or
            where you request that we delete your data in accordance with your
            right to do so as contained in the Nigeria Data Protection Act (NDPA)
            2023, we ensure that this data is securely deleted or destroyed.
          </p>
        </div>
        <div id="rights" className="divWrapper">
          <h2>Rights</h2>
          <p>
            Individuals who have Personal Information retain by Us are entitled
            to reach out to exercise the following rights:
          </p>
          <ul>
            <li>Right to access your personal information retain by us.</li>
            <li>
              Right to correct or rectify any Personal Information. That is, the
              right to change inaccurate or incomplete information.
            </li>
            <li>Right to remove yourself from our mailing list.</li>
            <li>Right to object to direct marketing.</li>
            <li>Restrict or object to processing of your personal data.</li>
            <li>
              Request that your personal data be made available to you in a
              common electronic format and/or request that such data be sent to
              a third party.
            </li>
            <li>
              Request that your information be erased. We might continue to
              retain such data if there are valid legal, regulatory or
              operational reasons.
            </li>
            <li>Right to revoke consent.</li>
            <li>Right to objection or request for restriction.</li>
            <li>
              Right to object to automated decision making and processing.
            </li>
            <li>
              Right to be informed about appropriate safeguards in place where
              data is transferred abroad.
            </li>
            <li>
              Right to request rectification and modification of Personal
              Information retained by us.
            </li>
            <li>
              Right to request the movement of data to a third party; this is
              the right to the portability of data.
            </li>
          </ul>
          <p>If you would like to exercise any of the above rights, please:</p>
          <ul>
            <li>
              Put your request in writing and send it to us through your usual
              registered channel (e.g. registered e-mail).
            </li>
            <li>Specify the right you wish to exercise.</li>
          </ul>
          <p>
            Your request will be reviewed and answered by our Data Protection
            Officer within a 30-day period. And if any further extension is
            required, we will communicate same through existing consented
            channels. However, please note that you may continue to receive
            existing communications for a transitional period whilst we update
            your preferences.
          </p>
        </div>

        <div id="accuracy-of-information" className="divWrapper">
          <h2>Accuracy Of Information</h2>
          <p>
            Please keep Us informed if your personal data changes during your
            relationship with us. Keeping your account information accurate and
            up to date is very important. If you discover any inaccuracies in
            your personal information, please promptly update or notify us where
            applicable. Where necessary you may be required to provide
            documentary evidence.
          </p>
        </div>
        <div id="cookies" className="divWrapper">
          <h2>Cookies </h2>
          <p>
            Cookies have many uses, such as identifying you as a user and
            memorizing your preferences to tailor your experiences while on our
            site– or to help us analyze our website traffic. Cookies are small
            text files stored on your computer or mobile devices whenever you
            visit a website.
          </p>
          <p>
            We use cookies and similar technologies on our website to help
            collect information and operate the site. We use cookies to remember
            Users and make your user experience easier, customise our services,
            content and advertising, help you ensure that your account security
            is not compromised, mitigate risk and prevent fraud, and to promote
            trust and safety on our website.
          </p>
        </div>

        <div id="minor" className="divWrapper">
          <h2>Minor</h2>
          <p>
            We do not sell products for purchase by children. Montra websites
            and applications are not directed at persons under the age of
            eighteen (18) and we do not collect any Personal Information
            knowingly or directly from minors who fall within this category.
          </p>
        </div>

        <div
          id="transfer-of-personal-information-to-foreign-country"
          className="divWrapper"
        >
          <h2>Transfer Of Personal Information To Foreign Country</h2>
          <p>
            We operate a global business. Our affiliates and service providers
            are located all around the world. We will ensure adequate measures
            are in place for security of your personal information when your
            information is transferred to any other countries. These countries
            may have data protection rules that are different from your country.
            When transferring data across borders, we take measures to comply
            with applicable data protection laws related to such transfer. We
            will also confirm whether the country is on the National Information
            Technology Development Agency (“NITDA”) White List of Countries with
            adequate data protection laws and ensure it is in accordance with
            the provisions of the Nigeria Data Protection Regulation.
          </p>
        </div>

        <div id="changes-to-this-privacy-policy" className="divWrapper">
          <h2>Changes To This Privacy Policy</h2>
          <p>
            Changes in this privacy policy might occur periodically. We reserve
            the right to update, amend or modify this Privacy Policy at any time
            as our technology evolves and as required by law. Please review this
            Privacy Policy periodically, and especially before you provide any
            information. We will provide notice or obtain consent online or via
            email regarding material changes to the way we use or share your
            personal information as may be required by law. This Privacy Policy
            was made effective on the date indicated.
          </p>
        </div>

        <div id="policy-violation" className="divWrapper">
          <h2>Policy Violation</h2>
          <p>
            Any violation of this Privacy Policy should be brought to the
            attention of the Data Protection Officer for appropriate sanctioning
            and treatment.
          </p>
        </div>

        <div id="contact-data-protection-officer-dpo" className="divWrapper">
          <h2>Contact Data Protection Officer (DPO) </h2>
          <p>
            If you have any questions relating to this Privacy Policy or would
            like to find out more about exercising your data protection rights,
            please reach out to our DPO via email at{" "}
            <a
              className="text-[#215CFF] underline"
              href="mailto:dpo@montra.org"
            >
              dpo@montra.org
            </a>
          </p>
          <p>
            For any further queries, our Data Protection Officer, may be reached
            at the following address:{" "}
          </p>
          <div className="space-y-[0.5vw]">
          <p>20 Layi Yusuf Crescent,</p>
          <p>Off Admiralty Way, </p>
          <p>Lekki Phase 1, </p>
          <p>Lagos, Nigeria.</p>
          </div>
        </div>

        <div>
          <p>Last Updated Date: June 2025</p>
        </div>
      </div>
    </div>
  );
}
