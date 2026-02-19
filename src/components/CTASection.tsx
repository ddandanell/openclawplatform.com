"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function CTASection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    }
  };

  if (status === "success") {
    return (
      <section id="deploy" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2B]/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF6B2B]/10 blur-3xl rounded-full pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] text-center"
          >
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <h2 className="text-3xl font-black text-white mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-[#6B6B7A] mb-6">
              Thank you for your inquiry! We'll be in touch within 24 hours.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="px-6 py-3 bg-[#FF6B2B] hover:bg-[#E5521A] text-white font-bold rounded-xl transition-all hover:scale-[1.02] glow-orange"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

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
          
          {status === "error" && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <p className="text-red-400 text-sm">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-[#6B6B7A] mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  placeholder="John"
                  required
                  className={`w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border ${
                    errors.firstName ? "border-red-500" : "border-[#2A2A30]"
                  } text-[#E8E8F0] placeholder-[#6B6B7A] focus:outline-none focus:border-[#FF6B2B] transition-colors text-sm`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm text-[#6B6B7A] mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("lastName")}
                  type="text"
                  placeholder="Smith"
                  required
                  className={`w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border ${
                    errors.lastName ? "border-red-500" : "border-[#2A2A30]"
                  } text-[#E8E8F0] placeholder-[#6B6B7A] focus:outline-none focus:border-[#FF6B2B] transition-colors text-sm`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-[#6B6B7A] mb-2">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="john@company.com"
                  required
                  className={`w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border ${
                    errors.email ? "border-red-500" : "border-[#2A2A30]"
                  } text-[#E8E8F0] placeholder-[#6B6B7A] focus:outline-none focus:border-[#FF6B2B] transition-colors text-sm`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm text-[#6B6B7A] mb-2">
                  Company Size <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("companySize")}
                  required
                  className={`w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border ${
                    errors.companySize ? "border-red-500" : "border-[#2A2A30]"
                  } text-[#E8E8F0] focus:outline-none focus:border-[#FF6B2B] transition-colors text-sm`}
                >
                  <option value="">Select size...</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
                {errors.companySize && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.companySize.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm text-[#6B6B7A] mb-2">
                What workflow do you want to automate first?{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("workflow")}
                rows={3}
                placeholder="e.g., We want to automate email triage for our support team and integrate with our Zendesk..."
                required
                className={`w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border ${
                  errors.workflow ? "border-red-500" : "border-[#2A2A30]"
                } text-[#E8E8F0] placeholder-[#6B6B7A] focus:outline-none focus:border-[#FF6B2B] transition-colors text-sm resize-none`}
              />
              {errors.workflow && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.workflow.message}
                </p>
              )}
            </div>
            <motion.button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-4 bg-[#FF6B2B] hover:bg-[#E5521A] text-white font-bold text-lg rounded-xl transition-all glow-orange disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={status !== "submitting" ? { scale: 1.02 } : {}}
              whileTap={status !== "submitting" ? { scale: 0.98 } : {}}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                "Book My Free Discovery Call →"
              )}
            </motion.button>
            <p className="text-xs text-[#6B6B7A] text-center mt-3">
              No commitment required. 30-minute call. We&apos;ll tell you exactly what&apos;s possible.
            </p>
          </form>
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
