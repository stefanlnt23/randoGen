export default function TermsOfService() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
          Terms of Service
        </h1>
        <p className="text-xl text-purple-200">
          The rules and guidelines for using RandoGen
        </p>
        <p className="text-purple-300 mt-4">
          <strong>Last Updated:</strong> {currentDate}<br />
          <strong>Effective Date:</strong> {currentDate}
        </p>
      </div>

      <div className="space-y-8 animate-slide-up">
        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <i className="fas fa-handshake text-blue-400 mr-3"></i>
            Acceptance of Terms
          </h2>
          
          <p className="text-purple-200 leading-relaxed">
            By accessing and using our Random Number Generator website ("Service"), you accept and 
            agree to be bound by these Terms of Service ("Terms"). If you do not agree to these 
            Terms, please do not use our Service. These Terms apply to all visitors, users, and 
            others who access or use the Service.
          </p>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <i className="fas fa-info-circle text-green-400 mr-3"></i>
            Description of Service
          </h2>
          
          <p className="text-purple-200 leading-relaxed mb-4">
            Our website provides a free random number generation tool with the following features:
          </p>
          <ul className="list-disc list-inside space-y-2 text-purple-200 ml-4">
            <li><strong>Random Number Generation:</strong> Create random numbers within specified ranges</li>
            <li><strong>Multiple Options:</strong> Various generation modes including dice, ranges, and quantities</li>
            <li><strong>Educational Content:</strong> Information about randomness and number generation</li>
            <li><strong>User-Friendly Interface:</strong> Easy-to-use tools with engaging animations</li>
          </ul>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <i className="fas fa-check-circle text-yellow-400 mr-3"></i>
            Acceptable Use
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">
                Permitted Uses
              </h3>
              <p className="text-purple-200 leading-relaxed mb-4">
                You may use our Service for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-purple-200 ml-4">
                <li>Personal number generation needs</li>
                <li>Educational and research purposes</li>
                <li>Gaming and entertainment activities</li>
                <li>Decision-making assistance</li>
                <li>Development and testing projects</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">
                Prohibited Uses
              </h3>
              <p className="text-purple-200 leading-relaxed mb-4">
                You may NOT use our Service for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-purple-200 ml-4">
                <li><strong>Illegal Activities:</strong> Any unlawful purposes or activities</li>
                <li><strong>Harmful Content:</strong> Generating content that promotes violence, discrimination, or hate</li>
                <li><strong>System Interference:</strong> Attempting to hack, disrupt, or damage our website</li>
                <li><strong>Automated Abuse:</strong> Using bots or scripts to overload our servers</li>
                <li><strong>Commercial Spam:</strong> Mass generation for unsolicited marketing</li>
                <li><strong>Gambling Violations:</strong> Using in jurisdictions where online tools for gambling are prohibited</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <i className="fas fa-copyright text-purple-400 mr-3"></i>
            Intellectual Property Rights
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">
                Our Content
              </h3>
              <p className="text-purple-200 leading-relaxed">
                All content on this website, including text, graphics, logos, and software, is owned 
                by us or our licensors and protected by copyright and other intellectual property laws.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">
                Your Usage Rights
              </h3>
              <p className="text-purple-200 leading-relaxed mb-4">
                We grant you a limited, non-exclusive, non-transferable license to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-purple-200 ml-4">
                <li>Access and use the Service for personal purposes</li>
                <li>Generate random numbers for your legitimate needs</li>
                <li>Share results from our generator with proper attribution</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">
                Restrictions
              </h3>
              <p className="text-purple-200 leading-relaxed mb-4">
                You may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-purple-200 ml-4">
                <li>Copy, modify, or distribute our website code</li>
                <li>Remove copyright notices or branding</li>
                <li>Create derivative works based on our Service</li>
                <li>Use our content for commercial purposes without permission</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <i className="fas fa-shield-alt text-red-400 mr-3"></i>
            Disclaimers and Limitation of Liability
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">
                Service Disclaimer
              </h3>
              <p className="text-purple-200 leading-relaxed">
                The Service is provided "as is" and "as available" without any warranties of any kind, 
                either express or implied. We do not warrant that the Service will be uninterrupted, 
                secure, or error-free.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">
                Limitation of Liability
              </h3>
              <p className="text-purple-200 leading-relaxed">
                To the fullest extent permitted by applicable law, we shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including without 
                limitation, loss of profits, data, use, goodwill, or other intangible losses resulting 
                from your use of the Service.
              </p>
            </div>
          </div>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <i className="fas fa-edit text-teal-400 mr-3"></i>
            Changes to Terms
          </h2>
          
          <p className="text-purple-200 leading-relaxed">
            We reserve the right to modify or replace these Terms at any time. If a revision is 
            material, we will provide at least 30 days notice prior to any new terms taking effect. 
            What constitutes a material change will be determined at our sole discretion. By continuing 
            to access or use our Service after any revisions become effective, you agree to be bound 
            by the revised terms.
          </p>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <i className="fas fa-envelope text-pink-400 mr-3"></i>
            Contact Information
          </h2>
          
          <p className="text-purple-200 leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-purple-200">
              <strong>Email:</strong> legal@randogen.com<br />
              <strong>Response Time:</strong> We typically respond within 48 hours<br />
              <strong>Subject Line:</strong> Please include "Terms of Service" in your subject line
            </p>
          </div>
          
          <p className="text-purple-300 text-sm mt-6">
            These terms constitute the entire agreement between you and RandoGen regarding 
            the use of the Service.
          </p>
        </section>
      </div>
    </div>
  );
}
