export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
          Privacy Policy
        </h1>
        <p className="text-xl text-purple-200">
          How we protect your privacy and handle your data
        </p>
        <p className="text-purple-300 mt-4">
          <strong>Last Updated:</strong> {currentDate}<br />
          <strong>Effective Date:</strong> {currentDate}
        </p>
      </div>

      <div className="space-y-8 animate-slide-up">
        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <i className="fas fa-info-circle text-blue-400 mr-3"></i>
            Information We Collect
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">
                Automatically Collected Information
              </h3>
              <p className="text-purple-200 leading-relaxed mb-4">
                When you visit our Random Number Generator website, we automatically collect certain 
                information about your device and usage patterns:
              </p>
              <ul className="list-disc list-inside space-y-2 text-purple-200 ml-4">
                <li><strong>Device Information:</strong> Browser type, operating system, screen resolution</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent, click patterns, generated number ranges</li>
                <li><strong>Technical Data:</strong> IP address, referral sources, session duration</li>
                <li><strong>Performance Metrics:</strong> Loading times, feature usage statistics</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">
                Information You Provide
              </h3>
              <p className="text-purple-200 leading-relaxed mb-4">
                We may collect information you voluntarily provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-purple-200 ml-4">
                <li><strong>Contact Information:</strong> When using our contact form (name, email)</li>
                <li><strong>Feedback:</strong> Comments, suggestions, or bug reports you submit</li>
                <li><strong>Preferences:</strong> Settings you choose for the number generator</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <i className="fas fa-cogs text-green-400 mr-3"></i>
            How We Use Your Information
          </h2>
          
          <p className="text-purple-200 leading-relaxed mb-4">
            We use collected information to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-purple-200 ml-4">
            <li><strong>Improve Service:</strong> Enhance website performance and user experience</li>
            <li><strong>Analytics:</strong> Understand usage patterns to optimize our tools</li>
            <li><strong>Communication:</strong> Respond to your inquiries and feedback</li>
            <li><strong>Security:</strong> Detect and prevent fraudulent or malicious activity</li>
            <li><strong>Legal Compliance:</strong> Meet regulatory requirements and protect rights</li>
          </ul>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <i className="fas fa-ad text-yellow-400 mr-3"></i>
            Google AdSense and Advertising
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">
                Third-Party Advertising
              </h3>
              <p className="text-purple-200 leading-relaxed mb-4">
                We use Google AdSense to display advertisements on our website. Google AdSense may:
              </p>
              <ul className="list-disc list-inside space-y-2 text-purple-200 ml-4">
                <li>Use cookies to serve ads based on your previous visits to our site or other websites</li>
                <li>Collect data about your browsing behavior to personalize advertisements</li>
                <li>Share information with advertising partners for targeted marketing</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">
                Your Advertising Choices
              </h3>
              <p className="text-purple-200 leading-relaxed mb-4">
                You can control personalized advertising by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-purple-200 ml-4">
                <li>Visiting Google's Ads Settings: <a href="https://adssettings.google.com" className="text-blue-400 hover:text-blue-300">https://adssettings.google.com</a></li>
                <li>Opting out of personalized ads while keeping general ads</li>
                <li>Using browser settings to block third-party cookies</li>
                <li>Installing ad-blocking software (though this may affect site functionality)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <i className="fas fa-share-alt text-purple-400 mr-3"></i>
            Data Sharing and Third Parties
          </h2>
          
          <p className="text-purple-200 leading-relaxed mb-4">
            We do not sell, trade, or rent your personal information. We may share data with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-purple-200 ml-4">
            <li><strong>Google AdSense:</strong> For advertising purposes as described above</li>
            <li><strong>Analytics Providers:</strong> To understand website usage (Google Analytics)</li>
            <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
            <li><strong>Service Providers:</strong> Technical vendors who help operate our website</li>
          </ul>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <i className="fas fa-shield-alt text-red-400 mr-3"></i>
            Data Security
          </h2>
          
          <p className="text-purple-200 leading-relaxed mb-4">
            We implement reasonable security measures to protect your information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-purple-200 ml-4">
            <li><strong>Encryption:</strong> Secure transmission of data using HTTPS</li>
            <li><strong>Access Controls:</strong> Limited access to personal information</li>
            <li><strong>Regular Updates:</strong> Keeping security systems current</li>
            <li><strong>Monitoring:</strong> Ongoing surveillance for potential breaches</li>
          </ul>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <i className="fas fa-user-check text-teal-400 mr-3"></i>
            Your Rights and Choices
          </h2>
          
          <p className="text-purple-200 leading-relaxed mb-4">
            Depending on your location, you may have certain rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-purple-200 ml-4">
            <li><strong>Access:</strong> Request copies of your personal data</li>
            <li><strong>Correction:</strong> Update inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request removal of your personal data</li>
            <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
            <li><strong>Objection:</strong> Opt-out of certain data processing activities</li>
          </ul>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <i className="fas fa-envelope text-pink-400 mr-3"></i>
            Contact Us
          </h2>
          
          <p className="text-purple-200 leading-relaxed mb-4">
            If you have questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-purple-200">
              <strong>Email:</strong> privacy@randogen.com<br />
              <strong>Response Time:</strong> We typically respond within 48 hours
            </p>
          </div>
          
          <p className="text-purple-300 text-sm mt-6">
            This Privacy Policy is designed to comply with GDPR, CCPA, and other applicable privacy regulations.
          </p>
        </section>
      </div>
    </div>
  );
}
