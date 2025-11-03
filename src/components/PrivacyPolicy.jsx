import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">Privacy Policy</h1>
        
        <div className="prose max-w-none text-gray-700">
          <p className="text-sm text-gray-500 mb-8">Last Updated: November 3, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              Welcome to DevSaathi. We respect your privacy and are committed to protecting your personal 
              data. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you use our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-2">2.1 Information You Provide</h3>
            <p className="leading-relaxed mb-4">We collect information you provide directly to us:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Account Information:</strong> Name, email address, password, profile picture</li>
              <li><strong>Profile Information:</strong> Skills, bio, age, gender, professional details</li>
              <li><strong>Communications:</strong> Messages sent through our chat system</li>
              <li><strong>Connection Data:</strong> Information about connection requests and connections</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">2.2 Automatically Collected Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Usage Data:</strong> How you interact with the Platform</li>
              <li><strong>Device Information:</strong> Browser type, operating system, IP address</li>
              <li><strong>Cookies:</strong> We use cookies to maintain your session and improve user experience</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, maintain, and improve the Platform</li>
              <li>Create and manage your account</li>
              <li>Connect you with other developers based on shared skills</li>
              <li>Send you weekly email summaries of pending connection requests</li>
              <li>Enable real-time chat between connected users</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Send you technical notices, updates, and security alerts</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Detect, prevent, and address technical issues and fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
            
            <h3 className="text-xl font-semibold mb-2">4.1 With Other Users</h3>
            <p className="leading-relaxed mb-4">
              Your profile information (name, skills, bio, profile picture) is visible to other users of 
              the Platform to facilitate connections.
            </p>

            <h3 className="text-xl font-semibold mb-2">4.2 We Do NOT Sell Your Data</h3>
            <p className="leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties.
            </p>

            <h3 className="text-xl font-semibold mb-2">4.3 Legal Requirements</h3>
            <p className="leading-relaxed">
              We may disclose your information if required by law or in response to valid requests by 
              public authorities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="leading-relaxed mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Password encryption using industry-standard bcrypt hashing</li>
              <li>Secure HTTPS connections for all data transmission</li>
              <li>JWT-based authentication with httpOnly cookies</li>
              <li>Regular security audits and updates</li>
              <li>Secure database storage with MongoDB Atlas</li>
            </ul>
            <p className="leading-relaxed mt-4">
              However, no method of transmission over the Internet is 100% secure. While we strive to 
              protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
            <p className="leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Access:</strong> Request access to your personal data</li>
              <li><strong>Correction:</strong> Update or correct your information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and data</li>
              <li><strong>Opt-out:</strong> Unsubscribe from promotional emails (not transactional emails)</li>
              <li><strong>Data Portability:</strong> Request a copy of your data</li>
            </ul>
            <p className="leading-relaxed mt-4">
              To exercise these rights, please contact us at devsaathi.team@gmail.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking</h2>
            <p className="leading-relaxed mb-4">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Maintain your login session</li>
              <li>Remember your preferences</li>
              <li>Analyze Platform usage</li>
              <li>Improve user experience</li>
            </ul>
            <p className="leading-relaxed mt-4">
              You can configure your browser to refuse cookies, but this may limit Platform functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Email Communications</h2>
            <p className="leading-relaxed">
              We send emails for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li><strong>Transactional:</strong> Account verification, password resets, connection notifications</li>
              <li><strong>Weekly Summaries:</strong> Automated emails about pending connection requests (every Sunday)</li>
              <li><strong>Service Updates:</strong> Important changes to the Platform or policies</li>
            </ul>
            <p className="leading-relaxed mt-4">
              You cannot opt-out of transactional emails, but you can request to stop receiving weekly summaries.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your personal information for as long as your account is active or as needed to 
              provide you services. If you request account deletion, we will delete your data within 30 
              days, except where we are required to retain it for legal purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
            <p className="leading-relaxed">
              DevSaathi is not intended for users under 18 years of age. We do not knowingly collect 
              personal information from children under 18. If you become aware that a child has provided 
              us with personal information, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. International Data Transfers</h2>
            <p className="leading-relaxed">
              Your information may be transferred to and maintained on servers located outside of your 
              country. By using DevSaathi, you consent to the transfer of information to countries outside 
              your country of residence, which may have different data protection rules.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Changes to Privacy Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material 
              changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. 
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-primary/10 rounded-lg">
              <p className="font-semibold">Email: devsaathi.team@gmail.com</p>
              <p className="font-semibold">Location: India</p>
            </div>
          </section>

          <div className="mt-12 p-4 bg-primary/10 rounded-lg">
            <p className="text-sm text-center">
              By using DevSaathi, you acknowledge that you have read and understood this Privacy Policy 
              and agree to its terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;