'use client';

import { type FC } from 'react';
import { motion } from 'framer-motion';

const CONTACTS = [
    { slug: 'whatsapp', color: '#25D366', href: 'https://wa.me/584248110641' },
    { slug: 'github', color: '#ffffff', href: 'https://github.com/rodez0707' },
    { slug: 'gmail', color: '#EA4335', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=lazaroleonelhernandez@gmail.com' }
];

export const ContactLinks: FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-4 mt-8"
        >
            {CONTACTS.map((icon) => (
                <motion.a
                    key={icon.slug}
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, translateY: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full glass-glow border border-white/10 flex items-center justify-center transition-all duration-300"
                    style={{
                        boxShadow: `0 0 15px ${icon.color}44`,
                    }}
                >
                    <img
                        src={`https://cdn.simpleicons.org/${icon.slug}/${icon.color.replace('#', '')}`}
                        alt={icon.slug}
                        className="w-6 h-6"
                    />
                </motion.a>
            ))}
        </motion.div>
    );
};
