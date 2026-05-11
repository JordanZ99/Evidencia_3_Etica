import { Scale } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12 mt-20" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center gap-4 mb-8">
          <Scale className="h-10 w-10 text-gold" />
          <h3 className="text-2xl font-bold tracking-tight">Blog de Ética Profesional</h3>
          <p className="text-muted text-sm max-w-sm">
            Un proyecto académico enfocado en la aplicación de valores éticos en el mundo jurídico y global.
          </p>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Tarea de Ética. Desarrollado para fines académicos.
        </div>
      </div>
    </footer>
  )
}
