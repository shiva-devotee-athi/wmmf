"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  Copyright,
  FileText,
  BadgeCheck,
  CheckCircle2,
  ExternalLink,
  AlertTriangle,
  RefreshCcw,
  Mail,
} from "lucide-react";
import LegalSection from "./LegalSection";

export default function PrivacyPolicy() {
  return (
    <section className="py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)]">
      <div className="mx-auto w-full max-w-[820px] px-4 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 font-body text-[12px] font-semibold uppercase tracking-wide text-primary-700">
            Effective Date: July 1, 2026
          </span>
          <h1 className="mt-4 font-heading text-[26px] font-bold text-secondary-900 sm:text-[30px]">
            Privacy Policy, Copyright &amp; Intellectual Property Notice
          </h1>
        </motion.div>

        <div>
          <LegalSection icon={ShieldCheck} title="Privacy Policy">
            <p>
              The World Mini Mini Football (WMMF) respects your privacy and is
              committed to protecting any personal information collected through
              this website. Information collected may include your name, email
              address, telephone number, country, organization, and any other
              information voluntarily submitted through contact forms,
              affiliation applications, registrations, or event participation.
            </p>
            <p>This information is used solely for the purposes of:</p>
            <ul>
              <li>Responding to enquiries.</li>
              <li>Processing affiliation and membership applications.</li>
              <li>
                Registering participants for WMMF events, seminars, and
                competitions.
              </li>
              <li>Providing official communications.</li>
              <li>Improving our services and website.</li>
            </ul>
            <p>
              WMMF does not sell, rent, or disclose your personal information to
              third parties except where required by law or where necessary for
              the administration of WMMF activities. By using this website, you
              consent to the collection and use of your information in
              accordance with this Privacy Policy.
            </p>
          </LegalSection>

          <LegalSection
            icon={Copyright}
            title="Copyright & Intellectual Property"
          >
            <p>
              <strong>
                © World Mini Mini Football (WMMF). All Rights Reserved.
              </strong>
            </p>
            <p>
              Unless otherwise stated, all content published on this website is
              the exclusive property of World Mini Mini Football (WMMF). This
              includes, but is not limited to:
            </p>
            <ul>
              <li>The WMMF name</li>
              <li>WMMF logos and branding</li>
              <li>Competition Rules and Official Laws of the Game</li>
              <li>Statutes and Constitution</li>
              <li>Regulations and Policies</li>
              <li>Coaching and Referee Manuals</li>
              <li>Educational Materials</li>
              <li>Event Management Materials</li>
              <li>Competition Formats</li>
              <li>Graphics, Illustrations and Diagrams</li>
              <li>Photographs and Videos</li>
              <li>Website Design</li>
              <li>Publications</li>
              <li>Articles</li>
              <li>Documents</li>
              <li>Digital Content</li>
            </ul>
            <p>
              No part of this website may be copied, reproduced, translated,
              modified, adapted, republished, distributed, stored, transmitted,
              displayed, sold, licensed, or used for commercial or
              organizational purposes without the prior written permission of
              World Mini Mini Football (WMMF).
            </p>
          </LegalSection>

          <LegalSection icon={FileText} title="Official Rules and Regulations">
            <p>
              The Official Competition Rules &amp; Regulations, Statutes,
              Regulations, Manuals, Guidelines, Circulars, and all official WMMF
              publications are developed exclusively by World Mini Mini Football
              (WMMF).
            </p>
            <p>
              No individual, organization, federation, club, company,
              institution, or association may reproduce, publish, modify,
              distribute, translate, create derivative works from, or claim
              ownership of any WMMF official documents without prior written
              authorization from WMMF.
            </p>
            <p>
              The unauthorized use of WMMF&apos;s official documents for the
              creation or promotion of another sport, organization, competition,
              federation, or commercial activity is strictly prohibited.
            </p>
            <p>
              Any unauthorized reproduction, adaptation, or distribution may
              result in legal action under applicable intellectual property,
              copyright, trademark, and unfair competition laws.
            </p>
          </LegalSection>

          <LegalSection icon={BadgeCheck} title="Trademarks">
            <p>
              &quot;World Mini Mini Football,&quot; &quot;WMMF,&quot; &quot;Feel
              the Rush,&quot; &quot;Dare to Play,&quot; together with the WMMF
              logos, emblems, graphics, and associated branding, are valuable
              intellectual property of World Mini Mini Football (WMMF). They may
              not be used without prior written authorization.
            </p>
          </LegalSection>

          <LegalSection icon={CheckCircle2} title="Permitted Use">
            <p>
              Visitors may access and download publicly available information
              solely for personal, educational, or non-commercial reference,
              provided that:
            </p>
            <ul>
              <li>the material remains unaltered;</li>
              <li>all copyright and ownership notices remain intact; and</li>
              <li>
                proper acknowledgment is given to World Mini Mini Football
                (WMMF).
              </li>
            </ul>
            <p>Any other use requires prior written permission from WMMF.</p>
          </LegalSection>

          <LegalSection icon={ExternalLink} title="External Links">
            <p>
              This website may contain links to third-party websites. WMMF is
              not responsible for the content, privacy practices, or
              availability of external websites.
            </p>
          </LegalSection>

          <LegalSection icon={AlertTriangle} title="Limitation of Liability">
            <p>
              WMMF makes every effort to ensure that the information published
              on this website is accurate and up to date. However, WMMF accepts
              no liability for any loss or damage arising from the use of
              information contained on this website.
            </p>
          </LegalSection>

          <LegalSection icon={RefreshCcw} title="Changes to this Policy">
            <p>
              World Mini Mini Football (WMMF) reserves the right to modify or
              update this Privacy Policy, Copyright Notice, and Intellectual
              Property Policy at any time without prior notice. Any changes
              become effective upon publication on this website.
            </p>
          </LegalSection>

          <LegalSection icon={Mail} title="Contact">
            <p>
              For copyright permissions, licensing requests, or enquiries
              regarding the use of WMMF intellectual property, please contact
              World Mini Mini Football (WMMF) through the official contact
              details published on this website.
            </p>
          </LegalSection>
        </div>
      </div>
    </section>
  );
}
