"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Stethoscope, Calendar, FileText, Bell, MessageSquare, UserCheck, Activity, Zap, CheckCircle, Clock, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import FooterExpandable from "@/components/FooterExpandable";

const doctorHero = "/images/doctor-hero.jpg";
const fullsaludIsotipo = "/images/fullsalud-isotipo.png";


export default function MedicosContent() {
  const benefits = [
    {
      icon: Bell,
      title: "Confirmaciones automáticas de turnos",
      description: "Reduce el ausentismo con recordatorios inteligentes a tus pacientes."
    },
    {
      icon: FileText,
      title: "Recetas digitales",
      description: "Sin errores, sin confusiones. Prescripción electrónica simple y segura."
    },
    {
      icon: MessageSquare,
      title: "Comunicación directa con pacientes",
      description: "Consultas, seguimiento y notificaciones en un solo lugar."
    },
    {
      icon: Calendar,
      title: "Turnos cancelados que se reactivan solos",
      description: "No pierdas tiempo. El sistema libera y reasigna turnos automáticamente."
    },
    {
      icon: UserCheck,
      title: "Acceso para asistentes o secretarías",
      description: "Delega tareas administrativas sin perder el control de tu agenda."
    },
    {
      icon: Activity,
      title: "Gestión inteligente postconsulta",
      description: "Automatizá el seguimiento y retené a tus pacientes en tu cartera, sin importar dónde los atendiste."
    }
  ];

  const testimonials = [
    {
      quote: "Me ahorra horas por semana.",
      author: "Dr. Carlos Martínez",
      specialty: "Cardiólogo"
    },
    {
      quote: "Mis pacientes perciben una atención más profesional.",
      author: "Dra. Ana L��pez",
      specialty: "Clínica Médica"
    },
    {
      quote: "Automatizar turnos y recetas fue un antes y un después.",
      author: "Dr. Juan Pérez",
      specialty: "Traumatólogo"
    }
  ];

  const features = ["Agenda digital sincronizada", "Prescripciones electrónicas validadas", "Historial clínico completo y seguro", "Teleconsultas HD integradas", "Reportes y análisis automáticos", "Facturación y pagos digitales"];

  const landingFeatures = ["Diseño profesional y responsive", "Integración con sistema de turnos", "SEO optimizado para búsquedas locales", "Testimonios y reseñas de pacientes", "Información de especialidades y servicios"];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start'
    },
    [Autoplay({
      delay: 5000,
      stopOnInteraction: false
    })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Image Background */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-[#022c32]">
        {/* Background Image with heavy blur */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url(${doctorHero})`
          }}
        />
        {/* Match home hero overlay: darker teal tint with higher coverage */}
        <div className="absolute inset-0 z-[5]" style={{ backgroundColor: 'hsl(180 80% 12% / 0.15)' }} />

        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center text-white">
            {/* Isotipo arriba - agrandado */}
            <div className="mb-8">
              <Image src={fullsaludIsotipo} alt="Full Salud" width={200} height={200} priority className="h-28 md:h-36 lg:h-44 w-auto mx-auto drop-shadow-2xl" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 leading-tight">
              Más pacientes. Más visibilidad.
              <span className="block text-[#b5a1ff]">Cero costos.</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl mb-4 font-medium leading-relaxed max-w-3xl mx-auto">
              Potenciá tu consulta con herramientas digitales inteligentes.<br />
              Automatizá tareas, mejorá tu comunicación y hacé crecer tu cartera de pacientes.
            </p>

            {/* Microcopy de refuerzo */}
            <p className="text-sm md:text-base lg:text-lg mb-10 opacity-90 max-w-2xl mx-auto">
              Más de 150 médicos ya están aumentando sus consultas con Full Salud.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              {/* Botón primario - Verde destacado */}
              <Button size="lg" variant="default" className="text-xl md:text-2xl px-12 md:px-16 py-7 md:py-9 font-bold shadow-xl transition-all hover:scale-105">
                Bloqueá tu cupo gratuito ahora
              </Button>
            </div>

            {/* Oferta limitada destacada */}
            <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full px-8 py-4 inline-block shadow-2xl">
              <p className="text-sm md:text-base font-semibold flex items-center gap-2 text-white">
                <Clock className="w-5 h-5" />
                Apertura de cupos hasta el <span className="font-bold">15 de noviembre</span> o <span className="font-bold">350 médicos</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-foreground mb-6">
              Herramientas que transforman tu práctica
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Automatización inteligente para que te enfoques en lo que más importa: tus pacientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-6 bg-white border border-[hsl(var(--fullsalud-teal))]/20 hover:border-[hsl(var(--fullsalud-teal))]/50 hover:shadow-lg transition-all duration-300">
                  <IconComponent className="w-10 h-10 text-[hsl(var(--fullsalud-accent))] mb-4" />
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

      {/* Real Use Cases - Carousel */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 via-white to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-foreground mb-6">
              Casos reales de éxito
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubrí cómo Full Salud está transformando la práctica médica de profesionales como vos.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4">
                    <Card className="h-full p-8 bg-white border-2 border-[hsl(var(--fullsalud-teal))]/20 hover:border-[hsl(var(--fullsalud-teal))]/50 hover:shadow-[var(--shadow-medical)] transition-all duration-300">
                      <Quote className="w-10 h-10 text-[hsl(var(--fullsalud-teal))]/40 mb-4" />
                      <p className="text-foreground mb-6 leading-relaxed text-lg">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center gap-3 mt-auto">
                        <Stethoscope className="w-10 h-10 text-[hsl(var(--fullsalud-teal))]" />
                        <div>
                          <p className="font-semibold text-foreground text-lg">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.specialty}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-[hsl(var(--fullsalud-teal))] text-white rounded-full flex items-center justify-center hover:bg-[hsl(var(--fullsalud-teal-dark))] transition-all shadow-lg hover:scale-110 z-10"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-[hsl(var(--fullsalud-teal))] text-white rounded-full flex items-center justify-center hover:bg-[hsl(var(--fullsalud-teal-dark))] transition-all shadow-lg hover:scale-110 z-10"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === selectedIndex % testimonials.length ? 'bg-[hsl(var(--fullsalud-teal))] w-8' : 'bg-[hsl(var(--fullsalud-teal))]/30 hover:bg-[hsl(var(--fullsalud-teal))]/50'}`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-foreground mb-6">
              Cómo funciona
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              En solo 3 pasos, comenzá a potenciar tu práctica médica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-8 bg-white border border-[hsl(var(--fullsalud-teal))]/20 hover:border-[hsl(var(--fullsalud-teal))]/50 transition-all duration-300 hover:shadow-lg">
              <div className="mb-6">
                <span className="text-6xl font-bold text-[hsl(var(--fullsalud-teal))]">1</span>
              </div>
              <h3 className="text-2xl font-semibold font-poppins mb-4 text-foreground">
                Creá tu perfil profesional
              </h3>
              <p className="text-muted-foreground">
                Completá tu información y especialidades en minutos.
              </p>
            </Card>

            <Card className="text-center p-8 bg-white border border-[hsl(var(--fullsalud-accent))]/20 hover:border-[hsl(var(--fullsalud-accent))]/50 transition-all duration-300 hover:shadow-lg">
              <div className="mb-6">
                <span className="text-6xl font-bold text-[hsl(var(--fullsalud-accent))]">2</span>
              </div>
              <h3 className="text-2xl font-semibold font-poppins mb-4 text-foreground">
                Activá tus herramientas digitales
              </h3>
              <p className="text-muted-foreground">
                Configurá turnos, recetas digitales y comunicación automatizada.
              </p>
            </Card>

            <Card className="text-center p-8 bg-white border border-[hsl(var(--fullsalud-green))]/20 hover:border-[hsl(var(--fullsalud-green))]/50 transition-all duration-300 hover:shadow-lg">
              <div className="mb-6">
                <span className="text-6xl font-bold text-[hsl(var(--fullsalud-green))]">3</span>
              </div>
              <h3 className="text-2xl font-semibold font-poppins mb-4 text-foreground">
                Crecé con visibilidad y automatización
              </h3>
              <p className="text-muted-foreground">
                Atendé más pacientes mientras el sistema trabaja por vos.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Limited Offer */}
      <section className="py-24 bg-gradient-to-br from-secondary/10 via-white to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Zap className="w-16 h-16 text-[hsl(var(--fullsalud-accent))] mx-auto mb-6" />
            <h2 className="text-4xl lg:text-6xl font-bold font-poppins text-foreground mb-6 leading-tight">
              Tu landing profesional gratis
            </h2>
            <p className="text-2xl text-foreground mb-8 max-w-3xl mx-auto font-medium">
              Aumentá tu visibilidad y captá más pacientes con tu propio sitio web
            </p>
            <div className="mb-8">
              <p className="text-xl font-bold text-[hsl(var(--fullsalud-teal))]">Obtenga acceso sin costo de forma ilimitada al asegurar su cupo</p>
              <div className="h-1 w-48 mx-auto mt-4 bg-gradient-to-r from-transparent via-[hsl(var(--fullsalud-teal))] to-transparent"></div>
            </div>
            <Button size="lg" variant="default" className="text-xl px-14 py-8 font-bold shadow-xl transition-all hover:scale-105">
              Reservá tu cupo ahora
            </Button>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold font-poppins text-foreground mb-6">
                  Todo lo que necesitas en una plataforma
                </h2>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[hsl(var(--fullsalud-teal))] flex-shrink-0" />
                      <span className="text-lg text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-[hsl(var(--fullsalud-teal))] rounded-2xl p-8 text-white transform rotate-2 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <Clock className="w-8 h-8" />
                    <div>
                      <h3 className="text-xl font-semibold">Ahorra 3+ horas diarias</h3>
                      <p className="opacity-90">Automatización inteligente</p>
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2">85%</div>
                  <p className="opacity-90">de los médicos reportan mayor eficiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landing Pages Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 via-white to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold font-poppins text-foreground mb-6">
                  Potencia tu presencia online con tu página personalizada
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Creamos landing pages profesionales diseñadas específicamente para médicos.
                  Atrae más pacientes y construye tu reputación digital con un sitio web que refleje tu excelencia médica.
                </p>
                <div className="space-y-4 mb-8">
                  {landingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[hsl(var(--fullsalud-green))] flex-shrink-0" />
                      <span className="text-lg text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-4 font-semibold">
                    Solicitar mi Landing Page
                  </Button>
                  <Button variant="medicalOutline" size="lg" className="text-lg px-8 py-4 font-semibold">
                    Ver Ejemplos
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-hero rounded-2xl p-8 text-white transform -rotate-2 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">15 horas/semana</div>
                    <p className="opacity-90 mb-4">Ahorro en tareas administrativas</p>
                    <div className="text-lg opacity-80">
                      "Ahora tengo más tiempo para mis pacientes y mi familia. La automatización de turnos y recordatorios cambió completamente mi rutina diaria"
                    </div>
                    <p className="text-sm opacity-70 mt-2">- Dr. Roberto Fernández, Traumatólogo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-foreground mb-6 leading-tight">
              Empezá a crecer hoy
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Unite a los profesionales que ya están optimizando su práctica y atrayendo más pacientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="text-lg px-12 py-7 font-bold">
                Agendar demo
              </Button>
              <Button variant="secondary" size="lg" className="text-lg px-10 py-7 font-semibold">
                Registrarme gratis
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FooterExpandable />
    </div>
  );
}
