export default function CTASection() {
  return (
    <section id="deploy" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2B]/10 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF6B2B]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 text-[#FF6B2B] text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[#FF6B2B] animate-pulse" />
          Limited Slots Available — 3 Remaining This Month
        </div>

        <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
          Ready to Deploy Your{" "}
          <span className="gradient-text">First AI Agent?</span>
        </h2>

        <p className="text-xl text-[#6B6B7A] mb-10 max-w-2xl mx-auto">
          Stop experimenting. Start automating. Book your free discovery call
          today and we&apos;ll show you exactly which workflows to automate first
          for maximum ROI.
        </p>

        {/* Contact form */}
        <div className="p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] text-left mb-8">
          <h3 className="text-xl font-black text-white mb-6 text-center">
            Book Your Free Discovery Call
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-[#6B6B7A] mb-2">First Name</label>
              <input
                type="text"
                placeholder="John"
                className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-[#2A2A30] text-[#E8E8F0] placeholder-[#6B6B7A] focus:outline-none focus:border-[#FF6B2B] transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-[#6B6B7A] mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Smith"
                className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-[#2A2A30] text-[#E8E8F0] placeholder-[#6B6B7A] focus:outline-none focus:border-[#FF6B2B] transition-colors text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-[#6B6B7A] mb-2">Work Email</label>
              <input
                type="email"
                placeholder="john@company.com"
                className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-[#2A2A30] text-[#E8E8F0] placeholder-[#6B6B7A] focus:outline-none focus:border-[#FF6B2B] transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-[#6B6B7A] mb-2">Company Size</label>
              <select className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-[#2A2A30] text-[#E8E8F0] focus:outline-none focus:border-[#FF6B2B] transition-colors text-sm">
                <option value="">Select size...</option>
                <option>1-10 employees</option>
                <option>11-50 employees</option>
                <option>51-200 employees</option>
                <option>201-1000 employees</option>
                <option>1000+ employees</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm text-[#6B6B7A] mb-2">
              What workflow do you want to automate first?
            </label>
            <textarea
              rows={3}
              placeholder="e.g., We want to automate email triage for our support team and integrate with our Zendesk..."
              className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-[#2A2A30] text-[#E8E8F0] placeholder-[#6B6B7A] focus:outline-none focus:border-[#FF6B2B] transition-colors text-sm resize-none"
            />
          </div>
          <button className="w-full py-4 bg-[#FF6B2B] hover:bg-[#E5521A] text-white font-bold text-lg rounded-xl transition-all hover:scale-[1.02] glow-orange">
            Book My Free Discovery Call →
          </button>
          <p className="text-xs text-[#6B6B7A] text-center mt-3">
            No commitment required. 30-minute call. We&apos;ll tell you exactly what&apos;s possible.
          </p>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#6B6B7A]">
          {[
            "🔒 No data shared",
            "⚡ Response within 2 hours",
            "🎯 Free workflow audit",
            "✅ No lock-in contracts",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
