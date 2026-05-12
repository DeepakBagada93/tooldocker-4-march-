'use client';

import * as React from 'react';
import Link from 'next/link';
import { X, Wrench, Factory, ArrowRight, Sparkles } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from '@/components/ui/button';

const FEATURED_PILLS = ['Hand Tools', 'Power Machines', 'Workshop Gear'];

export function PromoPopup() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            type="button"
            aria-label="Close popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: 'spring', damping: 24, stiffness: 260 }}
            className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-1.5rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 max-h-[95vh] overflow-y-auto no-scrollbar rounded-[2rem] shadow-[0_40px_120px_-40px_rgba(15,23,42,0.45)]"
          >
            <div className="relative overflow-hidden border border-stone-200 bg-[linear-gradient(145deg,#fffaf2_0%,#fff_45%,#f5efe2_100%)]">
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/90 text-slate-500 shadow-sm transition hover:text-slate-900"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
                <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(214,48,49,0.22),transparent_38%),linear-gradient(160deg,#111827_0%,#1f2937_55%,#7c2d12_100%)] p-6 text-white sm:p-10">
                  <div className="absolute -right-12 top-10 h-36 w-36 rounded-full bg-white/10 blur-2xl" />
                  <div className="absolute bottom-0 left-0 h-24 w-full bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.08)_100%)]" />

                  <div className="relative z-10">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] sm:text-[11px] sm:tracking-[0.24em]">
                      <Sparkles className="h-3.5 w-3.5" />
                      Tooldocker Picks
                    </div>

                    <h2 className="max-w-sm text-2xl font-black uppercase leading-none tracking-[-0.06em] sm:text-4xl">
                      Best Tools & Machines
                    </h2>

                    <p className="mt-4 max-w-md text-xs leading-5 text-white/80 sm:text-base sm:leading-6">
                      Buy workshop-ready machines, trusted hand tools, and industrial equipment picked for Indian buyers.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {FEATURED_PILLS.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/15 bg-white/10 px-2 py-1 text-[10px] font-semibold tracking-[0.1em] text-white/90 sm:px-3 sm:text-xs sm:tracking-[0.16em]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative p-6 sm:p-10">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#efe4cf] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a4b08] sm:mb-5 sm:text-[11px] sm:tracking-[0.24em]">
                    Ready To Shop
                  </div>

                  <h3 className="max-w-md text-xl font-black leading-tight tracking-[-0.04em] text-slate-900 sm:text-3xl">
                    Discover top-rated machines for your shop floor.
                  </h3>

                  <p className="mt-3 max-w-md text-xs leading-5 text-stone-600 sm:text-sm sm:leading-6">
                    Explore grinders, cutting tools, drilling machines, welding gear, and more from Tooldocker&apos;s featured range.
                  </p>

                  <div className="mt-6 grid gap-2 sm:gap-3">
                    <div className="rounded-2xl border border-stone-200 bg-white/80 p-3 shadow-sm sm:p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f3ede4] text-slate-900 sm:h-11 sm:w-11 sm:rounded-2xl">
                          <Wrench className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900 sm:text-sm">Best-selling tools</p>
                          <p className="text-[9px] uppercase tracking-[0.15em] text-stone-500 sm:text-xs sm:tracking-[0.18em]">Daily workshop essentials</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-stone-200 bg-white/80 p-3 shadow-sm sm:p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f3ede4] text-slate-900 sm:h-11 sm:w-11 sm:rounded-2xl">
                          <Factory className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900 sm:text-sm">Industrial machines</p>
                          <p className="text-[9px] uppercase tracking-[0.15em] text-stone-500 sm:text-xs sm:tracking-[0.18em]">Reliable gear for growing businesses</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-2 sm:mt-7 sm:flex-row sm:gap-3">
                    <Button asChild className="h-10 flex-1 rounded-full px-6 text-[11px] font-bold uppercase tracking-[0.12em] sm:h-12 sm:text-sm" variant="industrial">
                      <Link href="/search" onClick={handleClose}>
                        Shop Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="h-10 rounded-full border-stone-300 px-6 text-[11px] font-bold uppercase tracking-[0.12em] sm:h-12 sm:text-sm"
                      onClick={handleClose}
                    >
                      Continue Browsing
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
