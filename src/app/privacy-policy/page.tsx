import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | She Composites",
  description: "Learn how She Composites collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-white text-gray-900">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last Updated: August 14, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <p>
              She Composites ("we," "our," or "us"), a subsidiary of Shree Hanumant Enterprises, 
              is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, company name when you contact us or request a quote</li>
                {/* <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages</li>
                <li><strong>Cookies:</strong> We use cookies to enhance your experience on our website</li> */}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Responding to your inquiries and providing requested services</li>
                <li>Improving our website and services</li>
                <li>Sending periodic emails about our products/services (you can unsubscribe anytime)</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
              <p>We do not sell or trade your personal information. We may share information with:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Service providers assisting our business operations</li>
                <li>Shree Hanumant Enterprises (our parent company) for business purposes</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. 
                However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Access, update, or delete your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at <Link href="mailto:privacy@shecomposites.com" className="text-blue-600">privacy@shecomposites.com</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. We will notify you of significant changes 
                by posting the new policy on our website with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <address className="not-italic mt-2">
                She Composites (A Shree Hanumant Enterprises Company)<br />
                In front of Patna Old Museum, Patna-1 (Bihar)<br />
                Email: <Link href="mailto:privacy@shecomposites.com" className="text-blue-600">privacy@shecomposites.com</Link><br />
                Phone: +91 9471949455
              </address>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}