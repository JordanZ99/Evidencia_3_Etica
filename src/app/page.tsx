"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { blogPosts } from "@/lib/data"
import { Scale, Heart, Shield, Globe, X, Calendar, Tag, Zap, User, Lightbulb } from "lucide-react"

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
              Ética Profesional y Ciudadanía<br></br><span className="text-gold">Evidencia 3</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Hecho por: Carolina Anaya Sánchez.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introducción a la Ética Section */}
      <section id="introduccion" className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-navy">Introducción a la <span className="text-gold">Ética</span></h2>
              <p className="text-lg text-muted mb-6">
                La ética es mucho más que un conjunto de reglas teóricas; es el compás que guía nuestras decisiones diarias. En la vida cotidiana, nos ayuda a convivir con respeto y empatía, construyendo comunidades más fuertes y justas.
              </p>
              <p className="text-lg text-muted">
                En el ámbito laboral, la ética es el pilar de la confianza. Actuar con integridad no solo mejora el ambiente de trabajo, sino que asegura que nuestras acciones profesionales contribuyan positivamente al bienestar de la sociedad y al éxito sostenible.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 bg-white rounded-2xl shadow-xl border border-border mt-8">
                <Lightbulb className="h-8 w-8 text-gold mb-4" />
                <h4 className="font-bold mb-2">Vida Cotidiana</h4>
                <p className="text-xs text-muted">Tomar decisiones conscientes basadas en el respeto y la convivencia armónica.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl shadow-xl border border-border mt-8">
                <Scale className="h-8 w-8 text-gold mb-4" />
                <h4 className="font-bold mb-2">Entorno Laboral</h4>
                <p className="text-xs text-muted">Actuar con integridad profesional y responsabilidad hacia el impacto social.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conceptos Clave Section */}
      <section id="conceptos" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-navy">Conceptos <span className="text-gold">Clave</span></h2>
          <p className="text-muted max-w-2xl mx-auto">
            Palabras clave en los 5 subtemas que elegí.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Dignidad Humana",
              icon: User,
              desc: "Es el valor de cada persona por el simple hecho de serlo, sin importar su nacionalidad o condición."
            },
            {
              title: "Interdependencia",
              icon: Globe,
              desc: "Es el reconocimiento de que nuestras vidas y acciones están conectadas con los demás. Por lo que nos necesitamos mutuamente para alcanzar un bien común."
            },
            {
              title: "Agenda Ciudadana",
              icon: Zap,
              desc: "Es la responsabilidad de cada individuo para actuar y generar cambios positivos en su comunidad mediante la empatía y el compromiso con la ética planetaria."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-accent rounded-2xl text-center border border-transparent hover:border-gold transition-all"
            >
              <item.icon className="h-10 w-10 text-gold mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
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

      {/* Referencias Section */}
      <section id="referencias" className="py-24 bg-accent/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-navy border-l-4 border-gold pl-6">Referencias <span className="text-gold">Bibliográficas</span> (APA)</h2>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-[11px] leading-relaxed text-muted">
            <li className="pl-6 -indent-6">
              United Nations. (s/f). <i>La Declaración Universal de los Derechos Humanos</i>. United Nations. Recuperado el 11 de mayo de 2026, de https://www.un.org/es/about-us/universal-declaration-of-human-rights
            </li>
            <li className="pl-6 -indent-6">
              (S/f). <i>Unric.org</i>. Recuperado el 11 de mayo de 2026, de https://unric.org/es/el-documento-mas-universal-en-el-mundo/
            </li>
            <li className="pl-6 -indent-6">
              Hammarskjöld, N. U. B. (2013, diciembre 30). <i>Documentación de la ONU : Derechos Humanos</i>. Naciones Unidas. Biblioteca Dag Hammarskjöld. https://research.un.org/es/docs/humanrights/undhr
            </li>
            <li className="pl-6 -indent-6">
              UNICEF. (2018). <i>UNICEF presenta análisis sobre la situación de la infancia en México, avances y retos para la garantía de sus derechos</i>. Recuperado de https://www.unicef.org/lac/comunicados-prensa/analisis-sobre-la-situacion-de-la-infancia-en-mexico
            </li>
            <li className="pl-6 -indent-6">
              Alba Vega, C. (2020). <i>La transnacionalización del mundo social. Espacios sociales más allá de las sociedades nacionales</i>. Foro internacional, 60(3), 1207–1221. https://doi.org/10.24201/fi.v60i3.2777
            </li>
            <li className="pl-6 -indent-6">
              (S/f-b). <i>Rae.es</i>. Recuperado el 12 de mayo de 2026, de https://www.rae.es/diccionario-estudiante/transnacional
            </li>
            <li className="pl-6 -indent-6">
              Coello Garcés, C. (2016). <i>Ciudadanía postnacional. Los derechos políticos de las minorías</i>. Universidad de Castilla-La Mancha.
            </li>
            <li className="pl-6 -indent-6">
              Vega, E. (2015). <i>“La agencia ciudadana”</i>. Recuperado de https://www.noroeste.com.mx/opinion/malecon-mazatlan/la-agencia-ciudadana-GNOP91282
            </li>
            <li className="pl-6 -indent-6">
              Interdependencia. (2021, junio 17). <i>Concepto</i>. https://concepto.de/interdependencia/
            </li>
            <li className="pl-6 -indent-6">
              Berrios, O. (2023, octubre 23). <i>La ética de la interdependencia</i>. Plena inclusión; Plena inclusión España. https://www.plenainclusion.org/noticias/la-etica-de-la-interdependencia/
            </li>
            <li className="pl-6 -indent-6">
              Griselda. (2020, junio 5). <i>Habermas y la ética discursiva</i>. Escuela de Ciencias Jurídicas. https://escuelacienciasjuridicas.com/etica-discursiva/
            </li>
            <li className="pl-6 -indent-6">
              Empatía: significado, importancia y características clave. (2025, noviembre 21). <i>Unobravo.com; Unobravo</i>. https://www.unobravo.com/es/blog/que-es-empatia
            </li>
            <li className="pl-6 -indent-6">
              ¿Qué es la empatía y cuál es su importancia? (s/f). <i>Porquequieroestarbien.com</i>. Recuperado el 12 de mayo de 2026, de https://porquequieroestarbien.com/bienestar-emocional/fortalecer-la-mente/que-es-la-empatia-y-cual-es-su-importancia
            </li>
            <li className="pl-6 -indent-6">
              Empatía, “pegamento social” que permite conectarnos con los demás. (2022, diciembre 8). <i>Gaceta UNAM</i>. https://www.gaceta.unam.mx/empatia-pegamento-social-que-permite-conectarnos-con-los-demas/
            </li>
            <li className="pl-6 -indent-6">
              La Carta de la Tierra: avanzando hacia una ética planetaria. (2012, agosto 23). <i>Fundación Melior</i>. https://fundacionmelior.org/archivado/la-carta-de-la-tierra-avanzando-hacia-una-etica-planetaria/
            </li>
            <li className="pl-6 -indent-6">
              (S/f-c). <i>Cartadelatierra.org</i>. Recuperado el 12 de mayo de 2026, de https://cartadelatierra.org/podcast-list/leonardo-boff/
            </li>
            <li className="pl-6 -indent-6">
              del Cerro Santamaría, P. G. (2018, octubre 24). <i>Ética planetaria</i>. Deia. https://www.deia.eus/opinion/2018/10/24/etica-planetaria-4827701.html
            </li>
            <li className="pl-6 -indent-6">
              Boff, L. (2013). <i>Ética planetaria: Desde el punto de vista de los pobres</i>. [Video]. YouTube. https://www.youtube.com/watch?v=TavrTbIib9I
            </li>
            <li className="pl-6 -indent-6">
              CuriosaMente. (2016). <i>Los Derechos Humanos: ¿De dónde vienen y qué son?</i>. [Video]. YouTube. https://www.youtube.com/watch?v=iSi_w2KslK8
            </li>
            <li className="pl-6 -indent-6">
              RSA. (2013). <i>Brené Brown sobre la empatía</i>. [Video]. YouTube. https://www.youtube.com/watch?v=1Evwgu369Jw
            </li>
            <li className="pl-6 -indent-6">
              UNESCO. (2015). <i>¿Qué es la educación para la ciudadanía mundial?</i>. [Video]. YouTube. https://www.youtube.com/watch?v=toL-U6qf7hg
            </li>
            <li className="pl-6 -indent-6">
              UNIR. (2016). <i>Ética del Diálogo: Martin Buber y Emmanuel Levinas</i>. [Video]. YouTube. https://www.youtube.com/watch?v=rNLOma4tZ_Y
            </li>
          </ul>
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
