"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ShoppingCart,
  TrendingUp,
  Globe,
  Users,
  BarChart3,
  Shield,
  Zap,
  Target,
  CheckCircle
} from "lucide-react";
import providerHero from "@/assets/provider-hero.jpg";

export default function ProveedoresContent() {
  const benefits = [
    {
      icon: Globe,
      title: "Marketplace Nacional",
      description: "Accede a miles de compradores en todo el país. Expande tu negocio sin límites geográficos."
    },
    {
      icon: TrendingUp,
      title: "Ventas Automatizadas",
      description: "Sistema de ventas 24/7 con procesamiento automático de pedidos y pagos seguros."
    },
    {
      icon: Users,
      title: "Red de Profesionales",
      description: "Conecta directamente con médicos y pacientes que necesitan tus productos."
    },
    {
      icon: BarChart3,
      title: "Analytics Avanzados",
      description: "Reportes detallados de ventas, tendencias de mercado y comportamiento de compradores."
    },
    {
      icon: Shield,
      title: "Pagos Seguros",
      description: "Transacciones protegidas con tecnología WEB3 y garantía de cobro."
    },
    {
      icon: Zap,
      title: "Logística Integrada",
      description: "Sistema de envíos optimizado con seguimiento en tiempo real para tus productos."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-provider py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-center bg-cover"
          style={{ backgroundImage: `url(${providerHero.src})` }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full backdrop-blur-sm">
              <ShoppingCart className="w-12 h-12" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold font-poppins mb-6">
              Potencia tu negocio médico
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Únete al marketplace médico más grande del país. Vende insumos médicos,
              equipamiento y productos de cuidado personal a miles de profesionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="provider" size="lg" className="text-lg px-8 py-4">
                Comenzar a Vender
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-medical-orange text-lg px-8 py-4">
                Solicitar Info
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-foreground mb-6">
              Ventajas exclusivas para proveedores
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Full Shop te conecta con el ecosistema médico más grande del país,
              maximizando tus oportunidades de venta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="medical-card">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-medical-orange/10 rounded-lg">
                    <IconComponent className="w-8 h-8 text-medical-orange" />
                  </div>
                  <h3 className="text-xl font-semibold font-poppins mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold font-poppins text-foreground mb-6">
                  Números que hablan por sí solos
                </h2>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-medical-orange mb-2">15K+</div>
                    <p className="text-muted-foreground">Profesionales activos</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-medical-orange mb-2">2M+</div>
                    <p className="text-muted-foreground">Transacciones mensuales</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-medical-orange mb-2">95%</div>
                    <p className="text-muted-foreground">Satisfacción del cliente</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-medical-orange mb-2">24h</div>
                    <p className="text-muted-foreground">Tiempo promedio de venta</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    "Comisiones competitivas del mercado",
                    "Pagos garantizados y puntuales",
                    "Soporte técnico especializado 24/7",
                    "Herramientas de marketing incluidas"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-medical-orange flex-shrink-0" />
                      <span className="text-lg text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-provider rounded-2xl p-8 text-white transform rotate-3 shadow-[var(--shadow-elegant)]">
                  <div className="flex items-center gap-4 mb-6">
                    <Target className="w-8 h-8" />
                    <div>
                      <h3 className="text-xl font-semibold">ROI Promedio</h3>
                      <p className="opacity-90">En los primeros 6 meses</p>
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2">340%</div>
                  <p className="opacity-90">de retorno de inversión</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins text-foreground mb-6">
              Comenzar es súper fácil
            </h2>
            <p className="text-xl text-muted-foreground">
              En solo 3 pasos estarás vendiendo en el marketplace médico más grande del país.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Registra tu negocio",
                description: "Completa el formulario con los datos de tu empresa y productos.",
                icon: Users
              },
              {
                step: "02",
                title: "Configura tu tienda",
                description: "Sube fotos, describe tus productos y establece precios competitivos.",
                icon: ShoppingCart
              },
              {
                step: "03",
                title: "¡Comienza a vender!",
                description: "Recibe pedidos automáticamente y gestiona todo desde tu panel.",
                icon: TrendingUp
              }
            ].map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={index} className="text-center relative">
                  <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-gradient-provider rounded-full text-white text-2xl font-bold">
                    {process.step}
                  </div>
                  <IconComponent className="w-12 h-12 text-medical-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold font-poppins mb-3 text-foreground">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {process.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Registration Form Section */}
      <section className="py-20 bg-medical-orange/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-poppins text-foreground mb-6">
                Registra tus productos y recibe solicitudes de presupuesto
              </h2>
              <p className="text-xl text-muted-foreground">
                Completa el formulario con los tipos de productos que ofreces y te conectaremos
                con médicos y pacientes que necesitan exactamente lo que vendes.
              </p>
            </div>

            <Card className="medical-card p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nombre de la Empresa *
                    </label>
                    <input
                      type="text"
                      placeholder="Tu empresa médica"
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-medical-orange/20 focus:border-medical-orange"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email de Contacto *
                    </label>
                    <input
                      type="email"
                      placeholder="contacto@empresa.com"
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-medical-orange/20 focus:border-medical-orange"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Categorías de Productos (selecciona todas las que apliquen)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Equipamiento médico",
                      "Insumos desechables",
                      "Medicamentos",
                      "Instrumental quirúrgico",
                      "Productos de rehabilitación",
                      "Tecnología médica",
                      "Suministros de laboratorio",
                      "Mobiliario médico",
                      "Productos de higiene",
                      "Otros"
                    ].map((category) => (
                      <label key={category} className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="text-medical-orange focus:ring-medical-orange" />
                        <span className="text-sm text-foreground">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Descripción de Productos y Servicios *
                  </label>
                  <textarea
                    placeholder="Describe detalladamente los productos que ofreces, marcas que manejas, capacidad de suministro, etc."
                    rows={4}
                    className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-medical-orange/20 focus:border-medical-orange"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Zona de Cobertura
                    </label>
                    <input
                      type="text"
                      placeholder="Ciudad, Provincia o Nacional"
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-medical-orange/20 focus:border-medical-orange"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Teléfono de Contacto
                    </label>
                    <input
                      type="tel"
                      placeholder="+54 9 11 1234-5678"
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-medical-orange/20 focus:border-medical-orange"
                    />
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button variant="provider" size="lg" className="text-lg px-12 py-4">
                    Registrar Productos
                  </Button>
                  <p className="text-sm text-muted-foreground mt-3">
                    * Te contactaremos en 24-48 horas para validar tu registro
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-foreground mb-6">
              ¿Listo para multiplicar tus ventas?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a cientos de proveedores que ya están creciendo con Full Shop.
              ¡Tu próximo gran cliente te está esperando!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="provider" size="lg" className="text-lg px-8 py-4">
                Comenzá a Vender Hoy
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Hablar con un Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
