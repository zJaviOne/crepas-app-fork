import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import IARecomendador from '@/components/IARecomendador' // 👈 IMPORTANTE

interface Ingredient {
  id: string
  name: string
  category: 'base' | 'topping' | 'extra'
  price: number
  available: boolean
}

export default async function MenuPage() {
  const supabase = await createClient()
  
  const { data: ingredients } = await supabase
    .from('ingredients')
    .select('*')
    .eq('available', true)
    .order('name')

  const bases = ingredients?.filter((i: Ingredient) => i.category === 'base') || []
  const toppings = ingredients?.filter((i: Ingredient) => i.category === 'topping') || []
  const extras = ingredients?.filter((i: Ingredient) => i.category === 'extra') || []

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
    }).format(price)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">

          {/* TÍTULO */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Nuestro Menú</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Descubre todos los ingredientes disponibles para crear tu crepa perfecta.
            </p>
          </div>

          {/* CTA */}
          <Card className="mb-12 bg-primary/5 border-primary/20">
            <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
              <div>
                <h2 className="text-xl font-semibold mb-1">
                  ¿Quieres crear tu propia crepa?
                </h2>
                <p className="text-muted-foreground">
                  Personaliza tu orden a tu gusto
                </p>
              </div>
              <Link href="/dashboard/crear">
                <Button size="lg">Crear Mi Crepa</Button>
              </Link>
            </CardContent>
          </Card>

          {/* BASES */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Bases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {bases.map((item: Ingredient) => (
                <Card key={item.id}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold">{item.name}</h3>
                    <Badge>{formatPrice(item.price)}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* TOPPINGS */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Toppings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {toppings.map((item: Ingredient) => (
                <Card key={item.id}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold">{item.name}</h3>
                    <Badge>+{formatPrice(item.price)}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* EXTRAS */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Extras</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {extras.map((item: Ingredient) => (
                <Card key={item.id}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold">{item.name}</h3>
                    <Badge>+{formatPrice(item.price)}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

        </div>

        {/* 💜 IA RECOMENDADOR (AQUÍ SE AGREGA) */}
        <section className="py-20 bg-pink-50">
          <div className="container mx-auto px-4">
            <IARecomendador />
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}