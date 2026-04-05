"use client";

import { useEffect, useState } from "react";

function Counter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    const el = document.getElementById(`counter-${end}`);
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  useEffect(() => {
    if (!visible) return;
    const duration = 1200;
    const steps = 40;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [visible, end]);

  return (
    <span id={`counter-${end}`} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const metrics = [
  { value: 10, suffix: " days", label: "Onboarding time (from 100+)", prefix: "<" },
  { value: 6000, suffix: "+", label: "Hours saved annually", prefix: "" },
  { value: 9, suffix: "", label: "Engineers across 2 sub-teams", prefix: "" },
  { value: 8, suffix: "", label: "Product launches in 2025", prefix: "" },
];

const achievements = [
  {
    group: "Team Transformation",
    items: [
      "Took ownership during instability and attrition risk; rebuilt into a high-performing team",
      "Grew team from 5 to 9 engineers, absorbing a departing manager's scope",
      "Led technical evolution from Salesforce into GoLang microservices, LLM integrations, and full-stack client-facing products",
    ],
  },
  {
    group: "Product Strategy & Delivery",
    items: [
      "Identified recurring institutional client complaints around email-to-case communication. Led roadmap to build a logged-in support portal within the Coinbase product: backend messaging channel, extensible in-app notification system, directly integrated with ops case management workflows. Solved the authentication/trust layer for clients investing millions on the platform.",
      "Extended the support channel to Telegram via a gRPC backend integration. Full message parity with the web portal. Same trust layer, different surface, meeting clients where they communicate.",
      "8 product launches across futures, derivatives, and international expansion",
    ],
  },
  {
    group: "Agentic AI & Automation",
    items: [
      "Built an agentic AI pipeline that scans production exceptions, categorizes errors, creates tickets, and routes to on-call engineers. Patterns adopted across the company.",
      "Team integrated LLM assistant into customer service: 31% reduction in resolution time, 80% AI-generated case summaries",
      "Automations saving 6,000+ hours/year across operations",
    ],
  },
  {
    group: "Crisis Leadership",
    items: [
      "Personally designed and deployed enterprise case routing during a critical Sev1 within 2 weeks, securing 2M+ records",
      "Team resolved 440+ post-migration bugs, driving 80% decrease in incoming bug volume",
    ],
  },
];

const projects = [
  {
    name: "Daily Briefing",
    description: "AI-powered morning intelligence system. Multi-source data aggregation, dual-agent analysis pipeline, live dashboard.",
    tech: "Python, Claude API, n8n, Tailwind",
    url: "https://github.com/paretoimproved/daily-briefing",
  },
  {
    name: "ZeroToShip",
    description: "Automated SaaS opportunity engine. Scrapes pain points from the web, clusters and scores them, generates ranked startup briefs.",
    tech: "TypeScript, Next.js, Supabase, Claude API",
    url: "https://github.com/paretoimproved/ZeroToShip",
  },
  {
    name: "Local Roots",
    description: "Full-stack CSA marketplace. Go backend, Next.js frontend, Stripe Connect payments, e2e testing.",
    tech: "Go, TypeScript, Next.js, Stripe, PostgreSQL",
    url: "https://github.com/paretoimproved/local-roots",
  },
];

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Hero */}
      <section className="mb-20 animate-fade-in-up">
        <p className="text-indigo-400 text-sm font-medium tracking-wider uppercase mb-4">
          Engineering Leader
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Brandon Queener
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
          I lead teams that build systems transforming how organizations operate.
          Engineering Manager at Coinbase, managing 9 engineers across two sub-teams
          delivering agentic AI systems, client-facing products, and enterprise platforms.
          From identifying a broken institutional support experience to shipping a
          logged-in portal and messaging system that serves clients investing millions
          on our platform.
        </p>
        <div className="flex gap-4 mt-8">
          <a href="https://github.com/paretoimproved" target="_blank"
            className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm px-5 py-2.5 rounded-lg transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/brandonqueener" target="_blank"
            className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm px-5 py-2.5 rounded-lg transition-colors">
            LinkedIn
          </a>
          <a href="mailto:brandonq812@gmail.com"
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-5 py-2.5 rounded-lg transition-colors">
            Contact
          </a>
        </div>
      </section>

      {/* How I Operate */}
      <section className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
        <h2 className="text-zinc-500 text-xs uppercase tracking-wider font-semibold mb-6">
          How I Operate
        </h2>
        <div className="bg-gradient-to-br from-indigo-950/30 to-zinc-900 border border-indigo-900/40 rounded-xl p-6">
          <p className="text-zinc-200 text-sm leading-relaxed mb-4">
            <span className="text-indigo-400 font-medium">AI-first agile.</span>{" "}
            Identify the hardest problems first. Plan architecture thoughtfully.
            Build fast with AI tools. Refine with real feedback. Increment.
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            My path from business analysis to system administration to software engineering
            to engineering management means I understand the customer, the process, the platform,
            the code, and the people. I didn't inherit an engineering team. I built the
            technical credibility first.
          </p>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="mb-20">
        <h2 className="text-zinc-500 text-xs uppercase tracking-wider font-semibold mb-6">
          Impact at Coinbase
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center animate-fade-in-up"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                <Counter end={m.value} suffix={m.suffix} prefix={m.prefix} />
              </div>
              <div className="text-zinc-500 text-xs">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Achievements */}
      <section className="mb-20">
        <h2 className="text-zinc-500 text-xs uppercase tracking-wider font-semibold mb-6">
          What My Team Has Built
        </h2>
        <div className="space-y-6">
          {achievements.map((group, gi) => (
            <div
              key={gi}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + gi * 0.15}s` }}
            >
              <h3 className="text-indigo-400 text-xs uppercase tracking-wider font-semibold mb-3">
                {group.group}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item, ii) => (
                  <li key={ii} className="text-zinc-300 text-sm leading-relaxed flex gap-2">
                    <span className="text-indigo-500 mt-1 flex-shrink-0">&#8594;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-20">
        <h2 className="text-zinc-500 text-xs uppercase tracking-wider font-semibold mb-6">
          Side Projects
        </h2>
        <div className="grid gap-4">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              className="block bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-indigo-800/50 transition-colors animate-fade-in-up"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-zinc-100 font-medium">{p.name}</h3>
                <span className="text-zinc-600 text-xs">&#8594;</span>
              </div>
              <p className="text-zinc-400 text-sm mb-2">{p.description}</p>
              <p className="text-zinc-600 text-xs">{p.tech}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-zinc-800">
        <p className="text-zinc-600 text-xs">
          Eugene, Oregon ·{" "}
          <a href="mailto:brandonq812@gmail.com" className="text-indigo-600 hover:text-indigo-400 transition-colors">
            brandonq812@gmail.com
          </a>
        </p>
      </footer>
    </main>
  );
}
