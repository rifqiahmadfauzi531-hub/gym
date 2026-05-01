import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ChevronRight, Target, Activity, Zap, TrendingUp, ShieldCheck, ArrowRight, Brain, Clock, ShieldAlert, CheckCircle2, Play, Minus } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionHeading = ({ title, subtitle, dark = false }: { title: string, subtitle?: string, dark?: boolean }) => (
  <div className="mb-16 md:mb-24">
    {subtitle && (
      <FadeIn>
        <span className={`text-sm font-bold tracking-[0.2em] uppercase mb-4 block ${dark ? 'text-neon' : 'text-zinc-500'}`}>
          {subtitle}
        </span>
      </FadeIn>
    )}
    <FadeIn delay={0.1}>
      <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black uppercase ultra-tight leading-[0.9] ${dark ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
    </FadeIn>
  </div>
);

// 1. Get Attention
const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative min-h-screen bg-ink text-white overflow-hidden flex items-center pt-24 pb-32 clip-diagonal">
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-ink/70 z-10"></div>
        <motion.img 
          style={{ y: y1 }}
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
          alt="High performance athlete" 
          className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover grayscale opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent z-20 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-30">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-full px-4 py-2 mb-8 uppercase text-xs tracking-widest font-semibold text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse"></span>
              <span>Enrollment Open For Q3 Cohort</span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase ultra-tight leading-[0.85] mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Engineered<br className="hidden md:block"/> For The <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-white">Elite.</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-zinc-400 font-medium max-w-2xl mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Stop operating at 40% capacity. You've optimized your business—it's time to optimize your biology. The definitive performance protocol for high-achieving founders.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#offer" className="group relative inline-flex justify-center items-center px-8 py-5 text-lg font-bold text-ink bg-neon uppercase tracking-wider overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative flex items-center">Apply For Access <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
            </a>
            <a href="#solution" className="inline-flex justify-center items-center px-8 py-5 text-lg font-bold text-white border border-zinc-700 uppercase tracking-wider hover:bg-zinc-800 transition-colors">
              Explore Protocol
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-grid-pattern-dark opacity-20 pointer-events-none transform skew-y-12 translate-y-1/4"></div>
    </section>
  );
};

// 2. Identify the Problem
const Problem = () => {
  return (
    <section className="py-32 bg-zinc-900 text-white relative z-10 -mt-10">
      <div className="container mx-auto px-6">
        <SectionHeading dark subtitle="01 // The Reality Check" title="The Invisible Ceiling" />
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn delay={0.2} className="order-2 md:order-1">
            <h3 className="text-3xl font-bold mb-6 text-zinc-300 leading-tight">You are dragging a biological anchor while trying to sprint.</h3>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              You push through brute force. Brain fog at 2 PM. Relying on caffeine to function. Poor sleep architecture. Your drive has gotten you this far, but your hardware is failing to keep up with the software.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Chronic Fatigue", desc: "Waking up exhausted regardless of hours slept." },
                { title: "Cognitive Decline", desc: "Inability to maintain deep focus for extended periods." },
                { title: "Physical Stagnation", desc: "Training hard but seeing zero changes in body composition." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                    <Minus className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-zinc-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4} className="order-1 md:order-2">
            <div className="relative aspect-square">
              <div className="absolute inset-0 border border-zinc-800 transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop" 
                alt="Stressed executive" 
                className="absolute inset-0 w-full h-full object-cover grayscale transform -rotate-3 hover:rotate-0 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 border border-red-500/30 mix-blend-overlay"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// 3. Provide the Solution
const Solution = () => {
  return (
    <section id="solution" className="py-32 bg-paper text-ink relative clip-diagonal-both z-20 -mt-10">
      <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <SectionHeading subtitle="02 // The Intervention" title="The Apex Protocol" />
          <FadeIn delay={0.2}>
            <p className="text-2xl font-medium text-zinc-600 mb-16 leading-relaxed">
              A ruthlessly efficient, science-backed biometric optimization program. We strip away the guesswork with data-driven nutrition, progressive overload, and neural recovery tactics.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Activity className="w-8 h-8" />,
              title: "Metabolic Conditioning",
              desc: "Hyper-efficient training protocols designed to build lean tissue and maximize VO2 max in under 3 hours per week."
            },
            {
              icon: <Brain className="w-8 h-8" />,
              title: "Neural Recovery",
              desc: "Sleep architecture optimization and stress modulation techniques to ensure complete central nervous system reset."
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: "Executive Nutrition",
              desc: "Precision fueling strategies based on your unique biomarker profile to eliminate brain fog and sustain output."
            }
          ].map((feature, i) => (
            <FadeIn key={i} delay={0.3 + (i * 0.1)}>
              <div className="bg-white p-10 border border-zinc-200 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-zinc-100 flex items-center justify-center mb-8 text-ink">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{feature.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{feature.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. Present Credentials
const Credentials = () => {
  return (
    <section className="py-32 bg-zinc-100 text-ink">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <SectionHeading subtitle="03 // The Authority" title="Not Theories. Data." />
          <FadeIn delay={0.2}>
             <p className="text-lg font-medium text-zinc-500 max-w-sm mb-6 md:mb-0">
               Engineered by former Tier-1 operators and performance physiologists. We don't guess, we measure.
             </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-zinc-300 pt-16">
          {[
            { value: "10+", label: "Years Clinical R&D" },
            { value: "500+", label: "Executives Optimized" },
            { value: "4.2hr", label: "Avg. Weekly Time Reclaimed" },
            { value: "98%", label: "Completion Success Rate" }
          ].map((stat, i) => (
            <FadeIn key={i} delay={0.1 * i}>
              <div>
                <div className="text-5xl md:text-7xl font-black tracking-tighter mb-2">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-widest text-zinc-500">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. Show the Benefits
const Benefits = () => {
  return (
    <section className="py-32 bg-ink text-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon opacity-5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <SectionHeading dark subtitle="04 // The Outcomes" title="The Unfair Advantage" />
        
        <div className="grid md:grid-cols-12 gap-6">
          {/* Bento Box 1 - Large */}
          <FadeIn delay={0.1} className="md:col-span-8 bg-zinc-800/50 backdrop-blur-md border border-zinc-700/50 p-10 overflow-hidden relative group">
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 group-hover:opacity-40 transition-opacity duration-500">
               <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover grayscale mix-blend-luminosity" alt="Focus" />
               <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent"></div>
            </div>
            <div className="relative z-10 w-full md:w-2/3">
              <Zap className="w-10 h-10 text-neon mb-6" />
              <h3 className="text-3xl md:text-5xl font-bold uppercase ultra-tight leading-none mb-4">Limitless Energy</h3>
              <p className="text-zinc-400 text-lg">Eradicate the afternoon crash entirely. Maintain high-output state from the moment you wake up until your head hits the pillow through precision metabolic conditioning.</p>
            </div>
          </FadeIn>

          {/* Bento Box 2 - Small */}
          <FadeIn delay={0.2} className="md:col-span-4 bg-zinc-800/50 backdrop-blur-md border border-zinc-700/50 p-10 group hover:border-zinc-500 transition-colors">
            <TrendingUp className="w-10 h-10 text-white mb-6" />
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-neon transition-colors">Untouchable Focus</h3>
            <p className="text-zinc-400">Clear the brain fog. Enter deep work faster and sustain it longer by optimizing your neurochemistry.</p>
          </FadeIn>

           {/* Bento Box 3 - Small */}
           <FadeIn delay={0.3} className="md:col-span-4 bg-zinc-800/50 backdrop-blur-md border border-zinc-700/50 p-10 group hover:border-zinc-500 transition-colors">
            <ShieldCheck className="w-10 h-10 text-white mb-6" />
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-neon transition-colors">Hormonal Balance</h3>
            <p className="text-zinc-400">Naturally elevate testosterone, modulate cortisol, and restore biological rhythm to peak evolutionary states.</p>
          </FadeIn>

          {/* Bento Box 4 - Medium */}
          <FadeIn delay={0.4} className="md:col-span-8 bg-neon p-10 text-ink relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold uppercase ultra-tight leading-none mb-4">Prime Body Composition</h3>
              <p className="text-zinc-800 text-lg font-medium max-w-lg">Shed the corporate weight. Build functional, athletic muscle and drive body fat into single digits without living in the gym.</p>
            </div>
            {/* Geometric Overlay */}
            <svg className="absolute right-0 bottom-0 opacity-10 h-full transform translate-x-1/2 translate-y-1/4" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,100 100,0 100,100" fill="currentColor"/>
            </svg>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// 6. Give Social Proof
const SocialProof = () => {
  const testimonials = [
    { text: "It's like someone upgraded my biological operating system. I'm doing 50% more work with 50% less stress.", author: "James T.", role: "Founder & CEO" },
    { text: "I lost 15lbs of fat, but more importantly, my mental clarity is sharper at 4 PM than it used to be at 9 AM.", author: "Marcus R.", role: "Managing Partner" },
    { text: "The biomarker approach takes all the guesswork out. It's an unfair advantage in the boardroom.", author: "David L.", role: "VP of Engineering" }
  ];

  return (
    <section className="py-32 bg-paper text-ink overflow-hidden border-b border-zinc-200">
      <div className="container mx-auto px-6 mb-16">
        <SectionHeading subtitle="05 // The Evidence" title="Proven by the best" />
      </div>

      <div className="flex overflow-x-hidden relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-paper to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-paper to-transparent z-10"></div>
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap gap-8 px-4"
        >
          {/* Double array to create seamless loop */}
          {[...testimonials, ...testimonials].map((item, i) => (
            <div key={i} className="inline-block w-[400px] md:w-[600px] bg-white p-10 border border-zinc-200 shadow-sm flex-shrink-0 whitespace-normal whitespace-pre-wrap">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => <div key={star} className="w-2 h-2 rounded-full bg-ink"></div>)}
              </div>
              <p className="text-xl md:text-2xl font-medium leading-tight mb-8">"{item.text}"</p>
              <div>
                <p className="font-bold uppercase tracking-tight">{item.author}</p>
                <p className="text-sm text-zinc-500 font-medium">{item.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// 7. Make Your Offer & 8. Inject Scarcity
const Offer = () => {
  return (
    <section id="offer" className="py-32 bg-zinc-50 text-ink">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <FadeIn>
             <SectionHeading subtitle="06 // The Protocol" title="The 8-Week Immersion" />
             <p className="text-xl text-zinc-600 mb-8 max-w-md">
               A comprehensive, done-for-you performance overhaul. We handle the science, you execute the protocol.
             </p>
             <div className="space-y-4 mb-12">
               {[
                 "Comprehensive Biomarker & Blood Analysis",
                 "1-on-1 Performance Coaching Calls",
                 "Personalized Biomechanical Training Program",
                 "Executive Nutrition & Nootropic Stack Protocol",
                 "24/7 Access to the Performance Team"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4 bg-white p-4 border border-zinc-200">
                    <CheckCircle2 className="w-6 h-6 text-ink flex-shrink-0" />
                    <span className="font-bold">{item}</span>
                 </div>
               ))}
             </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative">
             <div className="bg-ink text-white p-12 shadow-2xl relative z-10">
                <div className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest mb-8 animate-pulse">
                  Extremely Limited Capacity
                </div>
                <h3 className="text-4xl font-bold uppercase ultra-tight mb-2">Q3 Cohort Intake</h3>
                <p className="text-zinc-400 mb-8">To ensure elite level coaching and attention, we strictly limit capacity.</p>
                
                <div className="bg-zinc-800 p-6 mb-8 border border-zinc-700">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">Spots Remaining</span>
                    <span className="text-3xl font-black text-neon">5 / 20</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-900 overflow-hidden">
                    <div className="h-full bg-neon w-[75%]"></div>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <span className="text-zinc-500 uppercase tracking-widest text-sm font-bold block mb-2">Investment</span>
                  <span className="text-5xl font-black">$4,500</span>
                </div>

                <a href="#cta" className="block w-full py-6 text-center text-xl font-bold text-ink bg-neon uppercase tracking-wider hover:bg-white transition-colors duration-300">
                  Secure Your Spot
                </a>
             </div>
             {/* Offset backdrop shadow effect brutalist style */}
             <div className="absolute inset-0 bg-zinc-300 translate-x-4 translate-y-4 -z-10 border border-zinc-400"></div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// 9. Give a Guarantee
const Guarantee = () => {
  return (
    <section className="py-24 bg-neon text-ink">
      <div className="container mx-auto px-6 text-center">
        <FadeIn>
          <div className="inline-flex justify-center items-center w-20 h-20 bg-ink text-neon rounded-full mb-8">
             <ShieldAlert className="w-10 h-10" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase ultra-tight leading-[0.9] mb-6">
            The 100% ROI Promise
          </h2>
          <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            If your biometric markers don't improve and you don't feel a massive, undeniable surge in daily cognitive and physical performance within 30 days, we refund every cent. No questions asked.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

// 10. Call to action & 11. Warning
const CTASection = () => {
  return (
    <section id="cta" className="py-32 bg-ink text-white relative flex items-center justify-center min-h-[80vh]">
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-6xl md:text-[8rem] font-black uppercase ultra-tight leading-[0.8] mb-12">
            Claim Your<br />Advantage
          </h2>
          
          <button className="group relative inline-flex justify-center items-center px-12 py-6 text-2xl font-bold text-ink bg-white uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 mb-16">
            <span className="absolute inset-0 bg-neon translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            <span className="relative flex items-center">Apply Now <ChevronRight className="ml-2 w-8 h-8 group-hover:translate-x-2 transition-transform" /></span>
          </button>

          <div className="max-w-2xl mx-auto border-t border-zinc-800 pt-16">
            <h4 className="text-red-500 font-bold uppercase tracking-widest mb-4">The Cost of Inaction</h4>
            <p className="text-zinc-500 text-lg">
              Time is compounding against you. Every day you delay is another day of suboptimal performance, lost focus, and biological decay. The systems that got you here won't get you to the next level.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// 12. Close with a reminder (Footer)
const Footer = () => {
  return (
    <footer className="bg-black text-zinc-500 py-12 border-t border-zinc-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <span className="text-white font-black uppercase tracking-tighter text-2xl">APEX PROTOCOL</span>
          <p className="text-xs uppercase tracking-widest mt-2">The next level is waiting.</p>
        </div>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans selection:bg-neon selection:text-ink">
      <Hero />
      <Problem />
      <Solution />
      <Credentials />
      <Benefits />
      <SocialProof />
      <Offer />
      <Guarantee />
      <CTASection />
      <Footer />
    </div>
  );
}

