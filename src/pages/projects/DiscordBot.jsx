import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Lock,
  Cpu,
  Database,
  Cloud,
  ShieldCheck,
  Clock,
  Terminal,
  Activity,
  FileCode2,
  Server,
  Layers,
  Zap,
  ArrowUpRight
} from 'lucide-react';

const techStack = [
  { name: 'Node.js', category: 'Event Runtime', icon: Server },
  { name: 'Discord.js v14', category: 'Gateway & REST API', icon: Terminal },
  { name: 'MongoDB (Mongoose)', category: 'Document Store', icon: Database },
  { name: 'Google Cloud Storage', category: 'Private Cloud Storage', icon: Cloud },
  { name: 'Firebase Admin', category: 'Service Auth & Buckets', icon: ShieldCheck },
  { name: 'Node-Cron', category: 'Scheduled Daemons', icon: Clock }
];

const DiscordBot = () => {
  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to About</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100 p-8 sm:p-12 lg:p-16 shadow-2xl mb-12">
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 mb-6">
              <svg
                viewBox="0 0 127.14 96.36"
                fill="currentColor"
                aria-hidden="true"
                className="w-3.5 h-3.5 shrink-0"
              >
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
              <span>Internal Discord Node · Case Study</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 leading-tight">
              Custom Bot Architecture &amp; Telemetry Engine
            </h1>

            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-3xl mb-8">
              A bespoke, multi-server operations and analytics platform built for a competitive gaming organization.
            </p>

            {/* Telemetry Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-800/80">
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                  War Polling Cycle
                </span>
                <span className="text-xl sm:text-2xl font-bold text-teal-400 font-mono">
                  5m Interval
                </span>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Write-Through Lock
                </span>
                <span className="text-xl sm:text-2xl font-bold text-indigo-400 font-mono">
                  2.5s Debounce
                </span>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Leaderboard Sync
                </span>
                <span className="text-xl sm:text-2xl font-bold text-sky-400 font-mono">
                  15m Cron
                </span>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Transcript Target
                </span>
                <span className="text-xl sm:text-2xl font-bold text-zinc-100 font-mono">
                  Private Cloud
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Strip */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400">
              01 // CORE INFRASTRUCTURE STACK
            </span>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              Production Runtime
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {techStack.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/70 shadow-sm hover:border-teal-500/40 dark:hover:border-teal-500/40 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-teal-600 dark:text-teal-400">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
                      {tech.name}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                      {tech.category}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bento Grid - Core Features */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 block mb-2">
              02 // SYSTEM ARCHITECTURE &amp; SUBSYSTEMS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Engineering Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Algorithmic Analytics (Spans 2 columns on lg) */}
            <div className="lg:col-span-2 bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/60 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-teal-600 dark:text-teal-400">
                    <Activity className="w-4 h-4" />
                    Algorithmic Analytics
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-600 dark:text-teal-300 border border-teal-500/20">
                    5-Minute Polling Engine
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                  Real-Time War Telemetry &amp; Weighted Impact Scoring
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                  An autonomous 5-minute war polling engine ingests live competitive match states across registered organization rosters, deduplicating attack events and computing deterministic player performance ratings to evaluate offensive efficiency and participation reliability.
                </p>
              </div>

              <div className="rounded-xl bg-zinc-950 text-zinc-100 p-4 sm:p-5 border border-zinc-800 font-mono text-xs sm:text-sm overflow-x-auto">
                <div className="text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5">
                  Composite Evaluation Formula
                </div>
                <code className="text-teal-300 font-semibold">
                  Impact = StarScore + (0.2 × Destruction) - (25 × MissedAttacks)
                </code>
              </div>
            </div>

            {/* Card 2: Memory-Safe Scaling */}
            <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/60 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    <Zap className="w-4 h-4" />
                    Memory-Safe Scaling
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20">
                    Rate-Limit Shield
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                  Write-Through Caching &amp; Debounce Locks
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                  Prevents Discord REST API 429 rate-limiting during high-concurrency state mutations using in-memory write-through caching paired with <span className="font-medium text-zinc-900 dark:text-zinc-100">2.5s debounce locks</span> and automated garbage collection sweepers that prune stale message, user, and thread references.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200/70 dark:border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span>GC SWEEPERS: ACTIVE</span>
                <span>DEBOUNCE: 2500ms</span>
              </div>
            </div>

            {/* Card 3: Automated Telemetry */}
            <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/60 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400">
                    <Clock className="w-4 h-4" />
                    Automated Telemetry
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-300 border border-sky-500/20">
                    Node-Cron Daemons
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                  15-Minute Leaderboard Sync &amp; Daily Resets
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                  Orchestrates scheduled <span className="font-medium text-zinc-900 dark:text-zinc-100">15-minute cron-driven Leaderboard synchronization</span> across live Discord embed panels alongside automated daily reset cron jobs that snapshot seasonal metrics and roll over operational counters without downtime.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200/70 dark:border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span>SYNC: */15 * * * *</span>
                <span>ROLLOVER: DAILY UTC</span>
              </div>
            </div>

            {/* Card 4: Cloud Archiving Workflow */}
            <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/60 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    <FileCode2 className="w-4 h-4" />
                    Cloud Archiving Workflow
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20">
                    Private Cloud Storage
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                  Hydrated HTML Transcript Pipeline
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                  Multi-tiered onboarding and moderation tickets are serialized upon closure, converted into self-contained, hydrated HTML buffers in memory, and streamed directly to a <span className="font-medium text-zinc-900 dark:text-zinc-100">Private Cloud Storage</span> bucket via Firebase Admin for tamper-evident audit logging.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200/70 dark:border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span>FORMAT: HYDRATED HTML</span>
                <span>TARGET: GCS BUCKET</span>
              </div>
            </div>

            {/* Card 5: Stateless Metadata */}
            <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/60 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    <Layers className="w-4 h-4" />
                    Stateless Metadata
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/20">
                    Zero-DB Lookup
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                  Permission Overwrite Bitflag Hijacking
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                  Implements a <span className="font-medium text-zinc-900 dark:text-zinc-100">Permission Overwrite Bitflag Hijacking</span> technique on dynamic ticket channels—encoding ownership and state metadata directly into benign channel permission bitflags to resolve primary users instantaneously without database round-trips.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200/70 dark:border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span>STATE: CHANNEL BITFLAGS</span>
                <span>LATENCY: O(1) LOCAL</span>
              </div>
            </div>
          </div>
        </section>

        {/* Private Repo CTA */}
        <section className="rounded-2xl bg-white dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/70 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              <Cpu className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Source Code &amp; Security Policy</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Proprietary Internal Discord Node
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
              To protect organizational security boundaries, role hierarchies, and anti-abuse heuristics, the production repository is restricted. Architectural walkthroughs are available upon request.
            </p>
          </div>

          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 font-semibold text-sm shadow-sm hover:bg-zinc-800 dark:hover:bg-white transition-all duration-300 shrink-0"
          >
            <Lock className="w-4 h-4 text-teal-400 dark:text-teal-600 transition-transform duration-300 group-hover:scale-110" />
            <div className="flex flex-col text-left">
              <span className="leading-tight">Private Repository</span>
              <span className="text-[11px] font-mono font-normal text-zinc-400 dark:text-zinc-600 group-hover:text-teal-300 dark:group-hover:text-teal-700 transition-colors">
                Contact for source access
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 transition-all" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default DiscordBot;
