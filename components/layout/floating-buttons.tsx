'use client';

import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowUp, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export function FloatingButtons() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show scroll-to-top button when scrolled down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {/* Left Side: Support / WhatsApp */}
            <div className="fixed bottom-6 left-6 z-[90] flex flex-col gap-4">
                <motion.a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group relative"
                >
                    <MessageCircle className="w-6 h-6" />
                    <span className="absolute left-full ml-4 bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Chat on WhatsApp
                    </span>
                </motion.a>

                <motion.a
                    href="tel:+1234567890"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.7 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-slate-800 dark:bg-slate-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group relative"
                >
                    <Phone className="w-6 h-6" />
                    <span className="absolute left-full ml-4 bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Call Support
                    </span>
                </motion.a>
            </div>

            {/* Right Side: Scroll to Top */}
            <AnimatePresence>
                {isVisible && (
                    <div className="fixed bottom-6 right-6 z-[90]">
                        <motion.button
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={scrollToTop}
                            className="bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group relative"
                        >
                            <ArrowUp className="w-6 h-6" />
                            <span className="absolute right-full mr-4 bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                Scroll to Top
                            </span>
                        </motion.button>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
