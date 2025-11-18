"use client";

import { Button } from "@/components/ui/button";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
  Heart,
  Calendar,
  Pill,
  FileText,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Search,
  DollarSign,
  Video,
  Quote,
  ChevronLeft,
  ChevronRight,
  Zap
} from "lucide-react";
import FooterExpandable from "@/components/FooterExpandable";

const patientHero = "/images/patient-hero.jpg";
const fullsaludIsotipo = "/images/fullsalud-isotipo.png";


export default function PacientesContent() {
  const testimonials = [
    {
      quote: "Desde que uso Full Salud tengo todo en el celular: turnos, recetas y estudios. Me simplificó la vida.",
      author: "Mariana",
      role: "Paciente de Full Salud"
    },
    {
      quote: "El pastillero electrónico es increíble. Nunca más me olvido de tomar mis medicamentos.",
      author: "Roberto",
      role: "Paciente crónico"
    },
    {
      quote: "Poder hacer consultas online me ahorra muchísimo tiempo. Ya no necesito faltar al trabajo.",
      author: "Carolina",
      role: "Madre de familia"
    },
    {
      quote: "Tener mi historia clínica digital me da tranquilidad. La puedo compartir con cualquier médico al instante.",
      author: "Jorge",
      role: "Paciente Full Salud"
    },
    {
      quote: "Las cotizaciones médicas me ayudaron a ahorrar más de un 30% en mis estudios.",
      author: "Patricia",
      role: "Usuaria frecuente"
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
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

  const benefits = [
    {
      icon: FileText,
      title: "Historia Clínica Propia y de tu familia",
      description: "Tu historial médico completo, siempre disponible, independiente de tu obra social."
    },
    {
      icon: Shield,
      title: "Control de Privacidad y Seguridad",
      description: "Protegé tu información médica con tecnología de máxima seguridad."
    },
    {
      icon: Search,
      title: "Búsqueda por Obra Social",
      description: "Encontrá médicos y servicios que acepten tu cobertura."
    },
    {
      icon: Calendar,
      title: "Turnos Online 24/7",
      description: "Agenda tus citas desde casa, con recordatorios automáticos."
    },
    {
      icon: DollarSign,
      title: "Cotizaciones Médicas",
      description: "Compará precios de estudios, tratamientos y medicamentos."
    },
    {
      icon: FileText,
      title: "Recetas Electrónicas",
      description: "Evitá errores y olvidos, todo digital y seguro."
    },
    {
      icon: Pill,
      title: "Pastillero Electrónico",
      description: "Recordatorios y seguimiento inteligente de medicación."
    },
    {
      icon: Video,
      title: "Consultas Online",
      description: "Videollamadas seguras con tus médicos de confianza."
    }
  ];

  return (
    <div className="min-h-screen bg-background patient-theme">
      {/* Hero Section with Image Background */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center patient-hero">
        {/* Background Image with heavy blur */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url(${patientHero})`
          }}
        />
        {/* Tinted yellow overlay to darken while preserving warm hue */}
        <div className="absolute inset-0 z-[5]" style={{ backgroundColor: 'hsl(var(--patient-sky-dark) / 0.15)' }} />

        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center text-white">
            {/* Isotipo arriba - agrandado */}
            <div className="mb-8">
              <Image src={fullsaludIsotipo} alt="Full Salud" width={200} height={200} priority className="h-28 md:h-36 lg:h-44 w-auto mx-auto drop-shadow-2xl" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 leading-tight">
              Tu salud, más cerca que nunca.
              <span className="block text-[#f04646]">Simple y gratuita.</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl mb-4 font-medium leading-relaxed max-w-3xl mx-auto">
              Controlá tus turnos, recetas y estudios desde una sola app.<br />
              Todo digital, todo en tu celular.
            </p>

            {/* Microcopy de refuerzo */}
            <p className="text-sm md:text-base lg:text-lg mb-10 opacity-90 max-w-2xl mx-auto">
              Más de 50,000 pacientes ya cuidan su salud con Full Salud.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              {/* Botón primario - Verde destacado */}
              <Button size="lg" variant="default" className="text-xl md:text-2xl px-12 md:px-16 py-7 md:py-9 font-bold shadow-xl transition-all hover:scale-105">
                Registrarme Gratis
              </Button>
            </div>

            {/* Destacado informativo */}
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full px-8 py-4 shadow-2xl">
                <p className="text-sm md:text-base font-semibold inline-flex flex-wrap items-center justify-center gap-2 text-white">
                  <Heart className="w-5 h-5 flex-shrink-0" />
                  Sin costos. Sin complicaciones. <span className="font-bold">100% gratuito</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-foreground mb-6">
              Diseñados para vos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Full Salud pone la tecnología al servicio de tu bienestar,
              simplificando el acceso a servicios de salud de calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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

      {/* How it Works */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 via-white to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-foreground mb-6">
              Cómo funciona
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              En solo 3 pasos, comenzá a gestionar tu salud de forma digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-8 bg-white border border-[hsl(var(--fullsalud-teal))]/20 hover:border-[hsl(var(--fullsalud-teal))]/50 transition-all duration-300 hover:shadow-lg">
              <div className="mb-6">
                <span className="text-6xl font-bold text-[hsl(var(--fullsalud-teal))]">1</span>
              </div>
              <h3 className="text-2xl font-semibold font-poppins mb-4 text-foreground">
                Creá tu perfil
              </h3>
              <p className="text-muted-foreground">
                Registrate gratis y agregá tu información médica y la de tu familia.
              </p>
            </Card>

            <Card className="text-center p-8 bg-white border border-[hsl(var(--fullsalud-accent))]/20 hover:border-[hsl(var(--fullsalud-accent))]/50 transition-all duration-300 hover:shadow-lg">
              <div className="mb-6">
                <span className="text-6xl font-bold text-[hsl(var(--fullsalud-accent))]">2</span>
              </div>
              <h3 className="text-2xl font-semibold font-poppins mb-4 text-foreground">
                Gestioná tu salud
              </h3>
              <p className="text-muted-foreground">
                Pedí turnos, recibí recetas digitales y accedé a tu historia clínica.
              </p>
            </Card>

            <Card className="text-center p-8 bg-white border border-[hsl(var(--fullsalud-green))]/20 hover:border-[hsl(var(--fullsalud-green))]/50 transition-all duration-300 hover:shadow-lg">
              <div className="mb-6">
                <span className="text-6xl font-bold text-[hsl(var(--fullsalud-green))]">3</span>
              </div>
              <h3 className="text-2xl font-semibold font-poppins mb-4 text-foreground">
                Cuidá tu salud siempre
              </h3>
              <p className="text-muted-foreground">
                Accedé a tus datos desde cualquier lugar, en cualquier momento.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-foreground mb-6">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Miles de personas ya están cuidando su salud de forma digital con Full Salud.
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
                        <div className="w-12 h-12 bg-[hsl(var(--fullsalud-teal))]/10 rounded-full flex items-center justify-center">
                          <Heart className="w-6 h-6 text-[hsl(var(--fullsalud-teal))]" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-lg">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedIndex % testimonials.length
                      ? 'bg-[hsl(var(--fullsalud-teal))] w-8'
                      : 'bg-[hsl(var(--fullsalud-teal))]/30 hover:bg-[hsl(var(--fullsalud-teal))]/50'
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Stats Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/10 via-white to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 text-[hsl(var(--fullsalud-accent))] mx-auto mb-6" />
            <h2 className="text-4xl lg:text-6xl font-bold font-poppins text-foreground mb-6 leading-tight">
              Acceso a salud simplificado
            </h2>
            <p className="text-2xl text-foreground mb-8 max-w-3xl mx-auto font-medium">
              Sin burocracia, sin demoras, sin complicaciones
            </p>
            <div className="mb-8">
              <p className="text-xl font-bold text-[hsl(var(--fullsalud-teal))]">Conecta con profesionales de confianza</p>
              <div className="h-1 w-48 mx-auto mt-4 bg-gradient-to-r from-transparent via-[hsl(var(--fullsalud-teal))] to-transparent"></div>
            </div>
            <Button size="lg" variant="default" className="text-xl px-14 py-8 font-bold shadow-xl transition-all hover:scale-105">
              Explorar Servicios
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-foreground mb-6 leading-tight">
              Empezá hoy, es gratis
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Unite a miles de pacientes que ya disfrutan de una atención médica más accesible y eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="text-lg px-12 py-7 font-bold">
                Crear mi cuenta
              </Button>
              <Button variant="secondary" size="lg" className="text-lg px-10 py-7 font-semibold">
                Conocer más
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FooterExpandable />
    </div>
  );
}
