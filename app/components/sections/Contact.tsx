'use client';

import { type FC, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Modern, functional contact section with glassmorphism and TRON aesthetics.
 */
export const Contact: FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const contactMethods = [
    {
      name: 'WhatsApp',
      iconUrl: 'https://cdn.simpleicons.org/whatsapp/00B5DE',
      href: 'https://wa.me/584248110641',
      color: '#25D366',
      label: 'Envía un mensaje rápido'
    },
    {
      name: 'Email',
      iconUrl: 'https://cdn.simpleicons.org/gmail/00B5DE',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=lazaroleonelhernandez@gmail.com',
      color: '#EA4335',
      label: 'lazaroleonelhernandez@gmail.com'
    },
    {
      name: 'Telegram',
      iconUrl: 'https://cdn.simpleicons.org/telegram/00B5DE',
      href: 'https://t.me/Rodez07',
      color: '#0088cc',
      label: 'Chat en tiempo real'
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-24 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00B5DE]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4">Hablemos de tu <span className="text-[#00B5DE]">Próximo Proyecto</span></h2>

            <p className="text-gray-500 max-w-2xl">
              ¿Tienes una idea innovadora o necesitas ayuda con tu desarrollo frontend?
              Estoy listo para colaborar y llevar tus visiones al siguiente nivel gráfico.
            </p>
          </div>

          <div className="grid lg:grid-cols-[40%_60%] gap-12 items-start">

            {/* LEFT: Contact Cards & Buttons */}
            <div className="flex flex-col gap-6">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.name}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass-glow p-5 flex items-center gap-6 group hover:translate-x-2 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img src={method.iconUrl} alt={method.name} className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#00B5DE]">
                      {method.name}
                    </span>
                    <span className="text-gray-300 font-medium">{method.label}</span>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-[#00B5DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* RIGHT: Modern Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-glow p-8 md:p-10 rounded-[32px] border border-white/5 relative"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#00B5DE] ml-1">Nombre</label>
                    <input
                      type="text"
                      placeholder="Tu nombre aquí"
                      className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#00B5DE]/60 focus:ring-1 focus:ring-[#00B5DE]/30 transition-all text-white placeholder:text-gray-600"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#00B5DE] ml-1">Email</label>
                    <input
                      type="email"
                      placeholder="correo@ejemplo.com"
                      className="bg-white/10 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#00B5DE]/60 focus:ring-1 focus:ring-[#00B5DE]/30 transition-all text-white placeholder:text-gray-600"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#00B5DE] ml-1">Mensaje</label>
                  <textarea
                    rows={5}
                    placeholder="Cuéntame sobre tu idea..."
                    className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#00B5DE]/60 focus:ring-1 focus:ring-[#00B5DE]/30 transition-all text-white placeholder:text-gray-600"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button className="group relative w-full overflow-hidden bg-[#00B5DE] text-[#0a0a0f] font-bold py-5 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,181,222,0.4)] hover:scale-[1.01] active:scale-95">
                  <span className="relative z-10 uppercase tracking-[0.2em] flex items-center justify-center gap-3">
                    Enviar Mensaje
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 12h14" /></svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
