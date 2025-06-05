export default function FloatingBackground() {
  return (
    <>
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-teal-500/10 rounded-full blur-xl animate-float-delayed-2"></div>
      </div>

      {/* Floating Numbers Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/6 text-6xl font-bold text-purple-300 animate-float">7</div>
        <div className="absolute top-3/4 right-1/6 text-4xl font-bold text-blue-300 animate-float-delayed">42</div>
        <div className="absolute top-1/2 left-3/4 text-5xl font-bold text-teal-300 animate-float-delayed-2">13</div>
        <div className="absolute top-1/6 right-1/3 text-3xl font-bold text-green-300 animate-float-delayed">99</div>
      </div>
    </>
  );
}
