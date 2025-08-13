import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | She Composites",
  description: "Terms governing your use of She Composites website and services.",
};

export default function TermsOfService() {
  return (
    <main className="bg-white text-gray-900">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last Updated: August 14, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <p>
              These Terms of Service (&quot;Terms,&quot;) govern your access to and use of the She Composites website 
              and services. She Composites is a subsidiary of Shree Hanumant Enterprises.
            </p>
            <p className="mt-4 font-medium">
              By accessing or using our website, you agree to be bound by these Terms.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Use of Website</h2>
              <p>You may use our website for lawful purposes only. You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Use the website in any way that violates laws or regulations</li>
                <li>Engage in any fraudulent or harmful activities</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use any automated means to access the website without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property 
                of She Composites or Shree Hanumant Enterprises and is protected by intellectual property laws.
              </p>
              <p className="mt-4">
                You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Product Information</h2>
              <p>
                We strive for accuracy in product descriptions and specifications but do not warrant that all 
                information is complete, current, or error-free. Actual products may vary slightly from website images.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
              <p>
                She Composites and Shree Hanumant Enterprises shall not be liable for any indirect, incidental, 
                special, or consequential damages resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Use or inability to use the website</li>
                <li>Unauthorized access to your data</li>
                <li>Any errors or omissions in website content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless She Composites, Shree Hanumant Enterprises, and their 
                affiliates from any claims arising from your violation of these Terms or misuse of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes 
                shall be subject to the exclusive jurisdiction of the courts in Patna, Bihar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Your continued use of the website after 
                changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
              <p>
                For questions about these Terms, please contact:
              </p>
              <address className="not-italic mt-2">
                She Composites (A Shree Hanumant Enterprises Company)<br />
                In front of Patna Old Museum, Patna-1 (Bihar)<br />
                Email: <Link href="mailto:legal@shecomposites.com" className="text-blue-600">legal@shecomposites.com</Link><br />
                Phone: +91 9471949455
              </address>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}