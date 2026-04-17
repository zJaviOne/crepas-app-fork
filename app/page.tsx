import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import IARecomendador from "@/components/IARecomendador";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Crea tu crepa perfecta
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
                Deliciosas crepas artesanales personalizadas a tu gusto. 
                Elige tu base, toppings y extras favoritos para una experiencia única.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/menu">
                  <Button size="lg" className="text-lg px-8 h-14 w-full sm:w-auto">
                    Ver Menú
                  </Button>
                </Link>
                <Link href="/dashboard/crear">
                  <Button size="lg" variant="outline" className="text-lg px-8 h-14 w-full sm:w-auto">
                    Crear Mi Crepa
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
        </section>

        {/* Features Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <Card className="border-2 border-primary/10 shadow-sm">
                <CardContent className="pt-8 text-center">
                  <h3 className="text-xl font-semibold mb-3">Personaliza tu crepa</h3>
                  <p className="text-muted-foreground">
                    Elige entre múltiples ingredientes
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10 shadow-sm">
                <CardContent className="pt-8 text-center">
                  <h3 className="text-xl font-semibold mb-3">Seguimiento en tiempo real</h3>
                  <p className="text-muted-foreground">
                    Sigue tu pedido en tiempo real
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10 shadow-sm">
                <CardContent className="pt-8 text-center">
                  <h3 className="text-xl font-semibold mb-3">Ingredientes frescos</h3>
                  <p className="text-muted-foreground">
                    Usamos ingredientes de calidad
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary/5 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para ordenar?</h2>
          <Link href="/auth/sign-up">
            <Button size="lg">Crear cuenta</Button>
          </Link>
        </section>

        {/* 🔥 IA RECOMENDADOR 🔥 */}
        <section className="py-10 bg-gray-100">
          <div className="container mx-auto text-center">
            <IARecomendador />
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}