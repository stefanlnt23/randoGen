import { useState } from "react";
import RandomNumberGenerator from "@/components/RandomNumberGenerator";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-black mb-6 gradient-text leading-tight">
            Random Number<br />Generator
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-4 max-w-3xl mx-auto">
            Generate truly random numbers instantly with mesmerizing animations and advanced algorithms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-purple-300">
            <div className="flex items-center space-x-2">
              <i className="fas fa-shield-alt text-green-400"></i>
              <span className="text-sm md:text-base">Cryptographically Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-mobile-alt text-blue-400"></i>
              <span className="text-sm md:text-base">Mobile Optimized</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-bolt text-yellow-400"></i>
              <span className="text-sm md:text-base">Lightning Fast</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Generator Section */}
      <RandomNumberGenerator />

      {/* Features Section */}
      <section className="mb-20 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Why Choose Our Generator?
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Experience the most advanced and engaging random number generator on the web
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-card">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
              <i className="fas fa-magic text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Beautiful Animations</h3>
            <p className="text-purple-200">
              Satisfying visual effects that make number generation fun and engaging with smooth transitions.
            </p>
          </div>

          <div className="feature-card">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
              <i className="fas fa-shield-alt text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">True Randomness</h3>
            <p className="text-purple-200">
              Cryptographically secure algorithms ensure unbiased results for any application requiring true randomness.
            </p>
          </div>

          <div className="feature-card">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
              <i className="fas fa-mobile-alt text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Mobile Optimized</h3>
            <p className="text-purple-200">
              Perfect touch experience on all devices with responsive design and touch-friendly controls.
            </p>
          </div>

          <div className="feature-card">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
              <i className="fas fa-bolt text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-purple-200">
              Instant results with smooth performance, no waiting or loading delays ever.
            </p>
          </div>

          <div className="feature-card">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
              <i className="fas fa-cogs text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Highly Customizable</h3>
            <p className="text-purple-200">
              Multiple options and modes to fit your exact needs, from simple dice rolls to complex ranges.
            </p>
          </div>

          <div className="feature-card">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
              <i className="fas fa-heart text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Completely Free</h3>
            <p className="text-purple-200">
              No registration, no limits, no premium features - everything is free and always will be.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="mb-20 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-300 to-green-300 bg-clip-text text-transparent">
            Popular Use Cases
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Discover the many ways our random number generator can help you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="use-case-card bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <i className="fas fa-gamepad text-purple-400 mr-3"></i>
              Gaming & Entertainment
            </h3>
            <ul className="space-y-3 text-purple-200">
              <li className="flex items-center">
                <i className="fas fa-dice text-green-400 mr-3"></i>
                Dice rolls for board games and RPGs
              </li>
              <li className="flex items-center">
                <i className="fas fa-ticket-alt text-yellow-400 mr-3"></i>
                Lottery number selection
              </li>
              <li className="flex items-center">
                <i className="fas fa-users text-blue-400 mr-3"></i>
                Random team assignments
              </li>
              <li className="flex items-center">
                <i className="fas fa-trophy text-orange-400 mr-3"></i>
                Tournament brackets and matchups
              </li>
            </ul>
          </div>

          <div className="use-case-card bg-gradient-to-br from-green-500/10 to-teal-500/10 border-green-500/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <i className="fas fa-graduation-cap text-green-400 mr-3"></i>
              Education & Research
            </h3>
            <ul className="space-y-3 text-purple-200">
              <li className="flex items-center">
                <i className="fas fa-chart-bar text-purple-400 mr-3"></i>
                Statistics and probability lessons
              </li>
              <li className="flex items-center">
                <i className="fas fa-poll text-teal-400 mr-3"></i>
                Random sampling for surveys
              </li>
              <li className="flex items-center">
                <i className="fas fa-question-circle text-yellow-400 mr-3"></i>
                Quiz question ordering
              </li>
              <li className="flex items-center">
                <i className="fas fa-user-friends text-pink-400 mr-3"></i>
                Student group formation
              </li>
            </ul>
          </div>

          <div className="use-case-card bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <i className="fas fa-lightbulb text-yellow-400 mr-3"></i>
              Decision Making
            </h3>
            <ul className="space-y-3 text-purple-200">
              <li className="flex items-center">
                <i className="fas fa-crown text-yellow-400 mr-3"></i>
                Choosing contest winners
              </li>
              <li className="flex items-center">
                <i className="fas fa-tasks text-blue-400 mr-3"></i>
                Random task assignments
              </li>
              <li className="flex items-center">
                <i className="fas fa-balance-scale text-green-400 mr-3"></i>
                Breaking ties and deadlocks
              </li>
              <li className="flex items-center">
                <i className="fas fa-random text-purple-400 mr-3"></i>
                Daily decision assistance
              </li>
            </ul>
          </div>

          <div className="use-case-card bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-500/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <i className="fas fa-code text-blue-400 mr-3"></i>
              Development & Testing
            </h3>
            <ul className="space-y-3 text-purple-200">
              <li className="flex items-center">
                <i className="fas fa-key text-yellow-400 mr-3"></i>
                Password generation seeds
              </li>
              <li className="flex items-center">
                <i className="fas fa-database text-green-400 mr-3"></i>
                Database test data
              </li>
              <li className="flex items-center">
                <i className="fas fa-flask text-pink-400 mr-3"></i>
                A/B testing assignments
              </li>
              <li className="flex items-center">
                <i className="fas fa-user text-teal-400 mr-3"></i>
                Random user selections
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-20 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Everything you need to know about our random number generator
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              question: "How random are the numbers really?",
              answer: "We use cryptographically secure pseudorandom number generation (CSPRNG), the same technology used in secure applications like encryption and digital signatures. This ensures true statistical randomness that passes rigorous mathematical tests."
            },
            {
              question: "Can I generate lottery numbers?",
              answer: "Absolutely! Set your range to match your lottery requirements (like 1-49 for most lotteries) and generate the number of picks you need. Our generator is perfect for lottery number selection with truly random results."
            },
            {
              question: "Is there a limit to how many numbers I can generate?",
              answer: "You can generate up to 20 numbers at once, and use the tool unlimited times. There are no daily limits, no registration required, and it's completely free forever."
            },
            {
              question: "Do you store my generated numbers?",
              answer: "No, we prioritize your privacy. All numbers are generated locally in your browser and are not stored on our servers. Your history is only kept locally in your current session."
            }
          ].map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card overflow-hidden">
      <button
        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <i className={`fas fa-chevron-down text-purple-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      {isOpen && (
        <div className="px-8 pb-6 text-purple-200">
          {answer}
        </div>
      )}
    </div>
  );
}
