export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
          About RandoGen
        </h1>
        <p className="text-xl text-purple-200 max-w-2xl mx-auto">
          The story behind the world's most advanced random number generator
        </p>
      </div>

      <div className="space-y-12 animate-slide-up">
        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <i className="fas fa-lightbulb text-yellow-400 mr-3"></i>
            Our Mission
          </h2>
          <p className="text-purple-200 text-lg leading-relaxed mb-4">
            At RandoGen, we believe that randomness is a fundamental force that shapes our world. 
            From quantum mechanics to daily decision-making, random numbers play a crucial role in 
            countless applications. Our mission is to provide the most reliable, beautiful, and 
            accessible random number generation tools on the internet.
          </p>
          <p className="text-purple-200 text-lg leading-relaxed">
            We've combined cutting-edge cryptographic algorithms with stunning visual design to 
            create an experience that's both functional and delightful. Whether you're a researcher, 
            gamer, educator, or someone who just needs to make a quick decision, RandoGen is here 
            to help with style.
          </p>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <i className="fas fa-shield-alt text-green-400 mr-3"></i>
            Technology & Security
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">
                Cryptographic Security
              </h3>
              <p className="text-purple-200 leading-relaxed">
                Our random number generation uses the Web Crypto API's cryptographically secure 
                pseudorandom number generator (CSPRNG). This is the same technology used in 
                encryption, digital signatures, and other security-critical applications.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">
                Performance Optimized
              </h3>
              <p className="text-purple-200 leading-relaxed">
                Built with modern web technologies including React, TypeScript, and advanced 
                animation libraries, RandoGen delivers lightning-fast performance while 
                maintaining beautiful visual effects.
              </p>
            </div>
          </div>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <i className="fas fa-users text-blue-400 mr-3"></i>
            Our Community
          </h2>
          <p className="text-purple-200 text-lg leading-relaxed mb-6">
            RandoGen is trusted by millions of users worldwide, including:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-graduation-cap text-white text-2xl"></i>
              </div>
              <h4 className="font-semibold text-purple-300">Educators</h4>
              <p className="text-sm text-purple-200">Teaching probability and statistics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-gamepad text-white text-2xl"></i>
              </div>
              <h4 className="font-semibold text-purple-300">Gamers</h4>
              <p className="text-sm text-purple-200">Dice rolls and random events</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-code text-white text-2xl"></i>
              </div>
              <h4 className="font-semibold text-purple-300">Developers</h4>
              <p className="text-sm text-purple-200">Testing and development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h4 className="font-semibold text-purple-300">Researchers</h4>
              <p className="text-sm text-purple-200">Statistical analysis and sampling</p>
            </div>
          </div>
        </section>

        <section className="glass-card p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <i className="fas fa-rocket text-purple-400 mr-3"></i>
            Future Plans
          </h2>
          <p className="text-purple-200 text-lg leading-relaxed mb-6">
            We're constantly working to improve RandoGen and add new features. Here's what's coming:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="feature-card bg-gradient-to-r from-purple-500/10 to-blue-500/10">
              <h4 className="font-semibold text-purple-300 mb-2">API Access</h4>
              <p className="text-purple-200 text-sm">
                Programmatic access to our random number generation for developers
              </p>
            </div>
            <div className="feature-card bg-gradient-to-r from-green-500/10 to-teal-500/10">
              <h4 className="font-semibold text-purple-300 mb-2">More Generators</h4>
              <p className="text-purple-200 text-sm">
                Random text, colors, dates, and other specialized generators
              </p>
            </div>
            <div className="feature-card bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
              <h4 className="font-semibold text-purple-300 mb-2">Custom Themes</h4>
              <p className="text-purple-200 text-sm">
                Personalized color schemes and animation styles
              </p>
            </div>
            <div className="feature-card bg-gradient-to-r from-pink-500/10 to-red-500/10">
              <h4 className="font-semibold text-purple-300 mb-2">Advanced Statistics</h4>
              <p className="text-purple-200 text-sm">
                Detailed analysis and visualization of generated numbers
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
