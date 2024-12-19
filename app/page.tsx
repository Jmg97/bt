import { WaveBackground } from "@/components/wave-background"
import { MenuContent } from "@/components/menu-content"
import { PWARegister } from "@/components/pwa-register"

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <WaveBackground />
      <div className="container mx-auto px-4 py-6 relative h-screen flex flex-col">
        <header className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-serif text-blue-900 mb-1">BLUE TRUNK</h1>
          <p className="text-lg text-blue-700 font-light">COFFEE AND DRINK</p>
        </header>
        <MenuContent />
      </div>
      <PWARegister />
    </main>
  )
}

