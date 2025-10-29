import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Heart, 
  Calendar, 
  Pill, 
  Smartphone, 
  FileText, 
  Shield,
  Clock,
  Users,
  CheckCircle,
  Plus,
  Eye,
  Search,
  DollarSign,
  Video,
  Quote
} from "lucide-react";
import patientHero from "@/assets/patient-hero.jpg";

const Pacientes = () => {
  const benefits = [
    {
      icon: FileText,
      title: "Historia Clínica Propia y de tu familia",
      description: "Tu historial médico completo, siempre disponible, independiente de tu obra social."
    },
    {
      icon: Shield,
      title: "Control de Privacidad y Seguridad Web3",
      description: "Protegé tu información médica con tecnología blockchain."
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image with gradient overlay */}
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${patientHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--fullsalud-teal))]/60 via-[hsl(var(--fullsalud-teal))]/40 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full backdrop-blur-sm hover:scale-110 transition-transform duration-300">
              <Heart className="w-12 h-12 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 leading-tight">
              Tu salud, más cerca que nunca.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-4 font-medium leading-relaxed max-w-3xl mx-auto">
              Controlá tus turnos, recetas y estudios desde una sola app.
            </p>
            <p className="text-sm md:text-base lg:text-lg mb-10 opacity-90 max-w-2xl mx-auto">
              Simple, gratuita y pensada para vos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="text-lg px-8 py-4 gap-2">
                <Plus className="w-5 h-5" />
                Registrarme Gratis
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-[hsl(var(--fullsalud-teal))] text-lg px-8 py-4 gap-2">
                <Eye className="w-5 h-5" />
                Ver Funciones
              </Button>
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
                <Card key={index} className="p-6 border-[hsl(var(--fullsalud-teal))]/20 hover:border-[hsl(var(--fullsalud-teal))]/50 hover:shadow-lg transition-all duration-300">
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

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 via-white to-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-foreground mb-6">
              Comunidad Full Salud
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Formá parte de nuestra comunidad y accedé a descuentos exclusivos en productos de salud.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[hsl(var(--fullsalud-teal))]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-[hsl(var(--fullsalud-teal))]" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Descuentos exclusivos</h3>
                <p className="text-sm text-muted-foreground">Ahorrá en productos de salud</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[hsl(var(--fullsalud-accent))]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-[hsl(var(--fullsalud-accent))]" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Beneficios especiales</h3>
                <p className="text-sm text-muted-foreground">Para toda tu familia</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[hsl(var(--fullsalud-green))]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-[hsl(var(--fullsalud-green))]" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Siempre protegido</h3>
                <p className="text-sm text-muted-foreground">Con la máxima seguridad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-2 border-[hsl(var(--fullsalud-teal))]/20 hover:border-[hsl(var(--fullsalud-teal))]/50 transition-all duration-300">
              <Quote className="w-10 h-10 text-[hsl(var(--fullsalud-teal))]/40 mb-6" />
              <p className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed italic">
                "Desde que uso Full Salud tengo todo en el celular: turnos, recetas y estudios. Me simplificó la vida."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[hsl(var(--fullsalud-teal))]/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[hsl(var(--fullsalud-teal))]" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg">Mariana</p>
                  <p className="text-sm text-muted-foreground">Paciente de Full Salud</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-white to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-foreground mb-6">
              Empezá a cuidar tu salud digital hoy.
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a miles de pacientes que ya disfrutan de una atención médica más accesible y eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="text-lg px-8 py-4">
                Crear mi cuenta
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pacientes;