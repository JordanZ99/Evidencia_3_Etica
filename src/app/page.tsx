"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { blogPosts } from "@/lib/data"
import { Scale, Heart, Shield, Globe, X, Calendar, Tag } from "lucide-react"

export default function Home() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Hero Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ética Profesional y Ciudadana<br></br><span className="text-gold">Evidencia 3</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Hecho por: Carolina Anaya Sánchez.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Misión Section (Diálogo e Interdependencia) */}
      <section id="mision" className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-navy">Ética del Diálogo e <span className="text-gold">Interdependencia</span></h2>
              <p className="text-lg text-muted mb-6">
                La ética no es un código rígido, sino que se encuentra en el encuentro genuino con el otro. La verdad surge del diálogo auténtico y la escucha profunda.
              </p>
              <p className="text-lg text-muted">
                Nuestra práctica se basa en el reconocimiento de que la conciencia personal es la guía, pero siempre equilibrada con el bien común para evitar el subjetivismo.
              </p>
            </motion.div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/rNLOma4tZ_Y"
                title="Ética del Diálogo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Empatía Section */}
      <section id="servicios" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-navy">Excelencia a través de la <span className="text-gold">Empatía</span></h2>
          <p className="text-muted max-w-2xl mx-auto">
            La capacidad de estar en los zapatos del otro es esencial para una resolución de conflictos efectiva y una comunicación auténtica.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Escucha Activa", icon: Heart, desc: "Conexión genuina para entender la raíz de cada necesidad legal." },
            { title: "Mediación", icon: Scale, desc: "Búsqueda de acuerdos que beneficien a todas las partes involucradas." },
            { title: "Responsabilidad", icon: Shield, desc: "Compromiso ético inquebrantable en cada caso que representamos." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-accent rounded-2xl text-center border border-transparent hover:border-gold transition-all"
            >
              <item.icon className="h-10 w-10 text-gold mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Section (Directly here) */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4 text-center md:text-left">5 subtemas que considero <span className="text-gold">esenciales</span></h2>
            <p className="text-white/60 text-center md:text-left">Un resumen ejecutivo de los pilares de la ética profesional y ciudadana para mi evidencia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.slug}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedPost(post)}
                className="bg-white p-6 rounded-xl border border-border/10 hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-accent rounded-lg text-gold group-hover:scale-110 transition-transform">
                    <post.icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-muted">{post.date}</span>
                </div>

                <p className="text-xs font-bold text-gold mb-2 uppercase tracking-tight">{post.category}</p>
                <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-gold transition-colors text-navy">
                  {post.title}
                </h3>
                <p className="text-sm text-muted mb-6 line-clamp-3">
                  {post.summary}
                </p>

                <span className="inline-flex items-center text-sm font-bold text-navy group-hover:text-gold transition-colors">
                  Leer artículo completo
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planetary Ethics Banner (Conclusión) */}
      <section className="py-20 bg-gold text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tras el análisis de los contenidos del Módulo 3, concluyo que la formación ética no es un complemento a mi carrera, sino una parte fundamental. La relación entre estos cinco temas revela una hoja de ruta para el actuar ciudadano:</h2>
          </div>
        </div>
        <div className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4">
          <Globe className="h-96 w-96" />
        </div>
      </section>

      {/* Reflexión Final Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-navy">Reflexión <span className="text-gold">Final</span></h2>
            <div className="space-y-6 text-lg text-muted text-left leading-relaxed">
              <p>
                Esta asignatura ha marcado un punto de inflexión en mi perspectiva profesional. Al comprender que los derechos humanos y la ciudadanía global no son solo marcos legales, sino compromisos éticos diarios, me siento preparada para ejercer con una responsabilidad mucho más profunda.
              </p>
              <p>
                En mi entorno laboral, la práctica de la escucha empática y el diálogo genuino me permitirán no solo resolver conflictos, sino construir puentes de confianza. Entiendo ahora que mi actuar ético contribuye directamente a una cultura organizacional más humana y justa.
              </p>
              <p>
                A nivel personal, la ética planetaria me invita a vivir de forma más consciente. Cada decisión, por pequeña que sea, tiene un impacto en nuestra interdependencia global. Esta asignatura no termina aquí; se convierte en la brújula que guiará mi conducta como ciudadana comprometida con la dignidad humana y el cuidado de nuestra casa común.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 p-2 bg-accent rounded-full hover:bg-gold hover:text-white transition-all z-10"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent rounded-lg text-gold">
                    <selectedPost.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-bold text-gold uppercase tracking-widest">{selectedPost.category}</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                  {selectedPost.title}
                </h2>

                <div className="flex flex-wrap gap-6 mb-12 py-6 border-y border-border">
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Calendar className="h-4 w-4" />
                    {selectedPost.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Tag className="h-4 w-4" />
                    Tarea de Ética
                  </div>
                </div>

                <div
                  className="prose prose-lg max-w-none 
                  prose-headings:text-navy 
                  prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                  prose-p:text-muted prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-gold prose-blockquote:border-gold prose-blockquote:bg-accent/5 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:italic"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />

                <div className="mt-12 pt-8 border-t border-border">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-8 py-3 bg-navy text-white rounded-xl font-bold hover:scale-105 transition-transform"
                  >
                    Cerrar Lectura
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
