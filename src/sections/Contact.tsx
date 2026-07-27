import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, CheckCircle, AlertCircle, Send, Loader2 } from 'lucide-react';
import SocialLinks from '../components/SocialLinks';
import { usePortfolio } from '../context/PortfolioContext';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { data } = usePortfolio();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    mode: 'onTouched',
  });

  const onSubmit = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form Submitted successfully:', formData);
    setIsSubmitting(false);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-20 px-6 bg-neutral-950/80 relative">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        <p className="text-neutral-400 mb-8 text-sm md:text-base">
          Feel free to reach out to <span className="text-blue-400 font-semibold">{data.personalInfo.name}</span> for collaborations, engineering opportunities, or projects.
        </p>

        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          <SocialLinks />
          <motion.a
            href={`mailto:${data.personalInfo.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20"
          >
            <Mail className="w-5 h-5" />
            Gmail ({data.personalInfo.email})
          </motion.a>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -15 }}
              className="p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-300 flex flex-col items-center gap-4 shadow-xl backdrop-blur-md"
            >
              <div className="p-3 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <p className="text-xl font-bold text-white mb-1">Message Sent Successfully!</p>
                <p className="text-sm text-neutral-300 max-w-md mx-auto">
                  Thank you for reaching out. Your message has been received and I will respond to you shortly.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-black font-bold rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-5 text-left bg-neutral-900/70 p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl"
            >
              {/* Name Field */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-mono text-neutral-400 mb-1.5 font-medium">
                  Your Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex Smith"
                  {...register('name', {
                    required: 'Name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters',
                    },
                  })}
                  className={`w-full p-4 bg-neutral-950/80 border rounded-xl text-white placeholder-neutral-500 focus:outline-none transition-all duration-200 ${
                    errors.name
                      ? 'border-red-500/80 focus:border-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                      : 'border-white/10 focus:border-blue-500 shadow-inner'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.name.message}</span>
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-mono text-neutral-400 mb-1.5 font-medium">
                  Your Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="e.g. alex@example.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                  className={`w-full p-4 bg-neutral-950/80 border rounded-xl text-white placeholder-neutral-500 focus:outline-none transition-all duration-200 ${
                    errors.email
                      ? 'border-red-500/80 focus:border-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                      : 'border-white/10 focus:border-blue-500 shadow-inner'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email.message}</span>
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-mono text-neutral-400 mb-1.5 font-medium">
                  Your Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  placeholder="Write your message or inquiry here..."
                  rows={4}
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters long',
                    },
                  })}
                  className={`w-full p-4 bg-neutral-950/80 border rounded-xl text-white placeholder-neutral-500 focus:outline-none transition-all duration-200 ${
                    errors.message
                      ? 'border-red-500/80 focus:border-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                      : 'border-white/10 focus:border-blue-500 shadow-inner'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.message.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 rounded-xl font-bold text-white transition-all duration-200 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-white" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}


