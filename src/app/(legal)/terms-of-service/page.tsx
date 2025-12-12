export const metadata = {
  title: "Terms of Service — Indi-metrics",
  description: "Official Terms of Service for Indi-metrics.",
};

export default function TermsOfService() {
  return (
    <div className="flex flex-col mx-5">
      <div className="h-10">
        <h1 className="text-center font-extrabold text-2xl ">
          Terms of Service
        </h1>
      </div>

      <p className="text-sm text-muted-foreground">
        Last updated: January 2025
      </p>

      <div className="my-2">
        <h2 className="mb-2 font-bold">1. Introduction</h2>
        <p className="mb-1">
          Welcome to Indi-metrics. These Terms of Service (“Terms”) govern your
          access to and use of the Indi-metrics platform (“Platform”), which
          provides real-time data, verified information, misinformation
          detection, and educational insights sourced from trusted public data
          portals.
        </p>
        <p>
          By accessing or using Indi-metrics, you agree to these Terms. If you
          do not agree, do not use the Platform.
        </p>
      </div>

      <div className="my-2">
        <h2 className="mb-2 font-bold">2. Definitions</h2>
        <ul className="list-disc ml-6">
          <li>
            “Platform” refers to the Indi-metrics website, features, and
            services.
          </li>
          <li>
            “User” / “You” refers to anyone accessing or using the Platform.
          </li>
          <li>
            “Data Providers” refers to official portals including MyGov, Open
            Government Data (OGD), WHO, and other verified sources.
          </li>
          <li>
            “Content” refers to all data, articles, summaries, visualizations,
            text, and media shown on the Platform.
          </li>
        </ul>
      </div>

      <div className="my-2">
        <h2 className="mb-2 font-bold">3. Purpose of Indi-metrics</h2>
        <p>Indi-metrics is built to:</p>
        <ul className="list-disc ml-6">
          <li className="list-disc">Deliver verified, real-time public data</li>
          <li>Help users understand important national metrics</li>
          <li>Provide transparent information to counter misinformation</li>
          <li>Highlight government programs and initiatives</li>
          <li>Promote data-driven awareness</li>
        </ul>
        <p>
          This Platform is informational only and not a substitute for official
          government publications.
        </p>
      </div>

      <div className="my-2">
        <h2 className="mb-2 font-bold">
          4. Data Sources & Accuracy Disclaimer
        </h2>
        <p>
          Indi-metrics aggregates data from reputable public portals, however:
        </p>
        <ul className="list-disc ml-6">
          <li>We do not create the original data</li>
          <li>
            We do not guarantee complete accuracy, consistency, or timeliness
          </li>
          <li>Data may change or be temporarily unavailable</li>
          <li>
            Visualizations and summaries are interpretive and may simplify
            complex datasets
          </li>
        </ul>
        <p>
          Users should verify critical information directly on the original
          government portals.
        </p>
      </div>

      <div className="my-2">
        <h2 className="mb-2 font-bold">5. Acceptable Use</h2>
        <p>You agree NOT to:</p>
        <ul className="list-disc ml-6">
          <li>Misuse or disrupt the Platform</li>
          <li>Attempt to manipulate, alter, or inject false data</li>
          <li>Spread misinformation using content from the Platform</li>
          <li>Bypass security mechanisms</li>
          <li>Use automated tools (scrapers/bots) without permission</li>
          <li>Engage in unlawful, harmful, or malicious behavior</li>
        </ul>
      </div>

      <div className="my-2">
        <h2 className="mb-2 font-bold">6. Intellectual Property</h2>
        <ul className="list-disc ml-6">
          <li>
            The Platform’s design, UI components, visualizations, and codebase
            are owned by Indi-metrics.
          </li>
          <li>
            Official datasets remain the property of their respective government
            or international organizations.
          </li>
          <li>
            You may not copy, distribute, reproduce, or modify the Platform’s
            content without permission.
          </li>
        </ul>
      </div>

      <div className="my-2">
        <h2 className="mb-2 font-bold">7. No Professional Advice</h2>
        <p className="mb-1">
          The Platform does not provide legal, medical, financial, or
          governmental advice.
        </p>
        <p>All content is informational only.</p>
      </div>

      <div className="my-2">
        <h2 className="mb-2 font-bold">8. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law:</p>
        <ul className="list-disc ml-6">
          <li>
            Indi-metrics is not responsible for decisions you make based on the
            content displayed
          </li>
          <li>
            We are not liable for errors, outages, inaccuracies, delays, or
            missing data
          </li>
          <li>
            We provide the Platform “as is” without warranties of any kind
          </li>
        </ul>
        <p>Your use of the Platform is at your own risk.</p>
      </div>

      <div className="my-2">
        <h2 className="mb-2 font-bold">9. Privacy & Data Collection</h2>
        <p className="mb-1">
          Indi-metrics may collect limited, non-personal analytics data.
        </p>
        <p className="mb-1">
          We do not collect personal information unless you voluntarily provide
          it.
        </p>
        <p className="mb-1">
          A full Privacy Policy will be provided separately.
        </p>
      </div>

      <div className="my-2">
        <h2 className="mb-2 font-bold">10. Termination</h2>
        <p>
          We may suspend or terminate your access to the Platform at any time,
          especially if you violate these Terms or misuse the Platform.
        </p>
      </div>

      <div className="my-2">
        <h2 className="mb-2 font-bold">11. Changes to Terms</h2>
        <p className="mb-1">We may update these Terms occasionally.</p>
        <p className="mb-1">
          Updated versions will be posted with a revised “Last Updated” date.
        </p>
      </div>

      <div className="my-2">
        <h2 className="mb-2 font-bold">12. Contact</h2>
        <p>
          For questions, feedback, or concerns:{" "}
          <a
            href="mailto:contact@indimetrics.in"
            className="underline hover:text-blue-500"
          >
            contact@indimetrics.in
          </a>
        </p>
      </div>
    </div>
  );
}

/* import { Metadata } from "next";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Terms of Service — Indi-Metrics",
  description:
    "Terms governing the use of Indi-Metrics, an informational platform providing verified data sourced from trusted government and international portals.",
};

export default function TermsPage() {
  return (
    <main className="flex justify-center px-4 py-10">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last updated: February 2025
        </p>

        <ScrollArea className="border rounded-lg p-6 h-[75vh]">
          <section className="space-y-6 pr-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">1. Overview</h2>
              <p className="leading-relaxed">
                Indi-Metrics is an informational platform that aggregates
                publicly available, verified data from trusted sources such as
                MyGov, OGD, WHO, and other official portals. Our mission is to
                reduce misinformation, deliver real-time insights about India,
                and promote social awareness.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
              <p className="leading-relaxed">
                You may use Indi-Metrics only if you are at least 13 years old,
                legally capable of using online informational services in your
                region, and you agree to comply with these Terms.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-2">
                3. Use of the Platform
              </h2>
              <p className="leading-relaxed mb-4">
                You agree not to misuse the platform or engage in any activity
                that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Attempts to disrupt or overload the platform</li>
                <li>Scrapes data excessively or violates rate limits</li>
                <li>Intentionally spreads misinformation or manipulative content</li>
                <li>Misuses data for illegal or harmful activity</li>
              </ul>
              <p className="leading-relaxed mt-3">
                We reserve the right to limit or revoke access in case of
                violations.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-2">
                4. Accuracy of Information
              </h2>
              <p className="leading-relaxed">
                Indi-Metrics relies on official, verified, and publicly
                available data sources. However, data may occasionally be
                updated, delayed, or incomplete. All information is provided
                “as-is,” without warranties of accuracy, completeness, or
                real-time precision.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-2">
                5. Third-Party Sources & Links
              </h2>
              <p className="leading-relaxed">
                Our platform may reference or redirect to government portals,
                external APIs, or third-party websites. Indi-Metrics is not
                responsible for external content accuracy, privacy practices, or
                availability. Use of external links is at your discretion.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-2">
                6. Intellectual Property
              </h2>
              <p className="leading-relaxed">
                All branding, UI components, design, and content created by
                Indi-Metrics are owned exclusively by us. External data remains
                the property of their respective owners. You may not copy,
                distribute, or modify our platform materials without written
                permission.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-2">
                7. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                Indi-Metrics is not liable for any direct or indirect damages,
                losses, or consequences resulting from your use of the platform.
                This includes errors, delays, data inaccuracies, or decisions
                made based on the information provided.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-2">
                8. Changes to These Terms
              </h2>
              <p className="leading-relaxed">
                We may update or modify these Terms periodically. Significant
                updates will be reflected in the “Last Updated” date. Your
                continued use of the platform constitutes acceptance of the
                updated Terms.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
              <p className="leading-relaxed">
                For questions or concerns regarding these Terms, contact us at:{" "}
                <span className="font-medium">support@indimetrics.in</span>.
              </p>
            </div>
          </section>
        </ScrollArea>
      </div>
    </main>
  );
}
 */
