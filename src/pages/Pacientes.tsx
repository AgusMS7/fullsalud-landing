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
  CheckCircle
} from "lucide-react";
import patientHero from "@/assets/patient-hero.jpg";

const Pacientes = () => {
  const benefits = [
    {
      icon: Calendar,
      title: "Turnos Online 24/7",
      description: "Agenda tus citas médicas desde casa, en cualquier momento. Recordatorios automáticos incluidos."
    },
    {
      icon: Smartphone,
      title: "Consultas Online",
      description: "Conecta con tus médicos de cabecera desde la comodidad de tu hogar mediante videollamada segura."
    },
    {
      icon: Pill,
      title: "Pastillero Electrónico",
      description: "Control inteligente de medicamentos con recordatorios y seguimiento de dosis."
    },
    {
      icon: FileText,
      title: "Historia Clínica Propia",
      description: "Tu historial médico completo, siempre disponible, independiente de tu obra social."
    },
    {
      icon: Shield,
      title: "Control de Privacidad",
      description: "Tú decides qué médicos pueden acceder a tu información médica y cuándo."
    },
    {
      icon: Users,
      title: "Cotizaciones Médicas",
      description: "Compara precios de estudios, tratamientos y medicamentos de diferentes proveedores."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-success py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-center bg-cover"
          style={{ backgroundImage: `url(${patientHero})` }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full backdrop-blur-sm">
              <Heart className="w-12 h-12" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold font-poppins mb-6">
              Tu salud, bajo control
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Toma el control de tu salud con Full Salud. Gestiona turnos, consultas online, 
              medicamentos y mucho más desde una sola plataforma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="success" size="lg" className="text-lg px-8 py-4">
                Registrarme Gratis
              </Button>
              <Button variant="successOutline" size="lg" className="text-white border-white hover:bg-white hover:text-accent text-lg px-8 py-4">
                Ver Funciones
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
              Beneficios diseñados para ti
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Full Salud pone la tecnología al servicio de tu bienestar, 
              simplificando el acceso a servicios de salud de calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="medical-card">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg">
                    <IconComponent className="w-8 h-8 text-accent" />
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

      {/* Features Highlight */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-gradient-success rounded-2xl p-8 text-white transform -rotate-3 shadow-[var(--shadow-success)]">
                  <div className="flex items-center gap-4 mb-6">
                    <Clock className="w-8 h-8" />
                    <div>
                      <h3 className="text-xl font-semibold">Sin esperas</h3>
                      <p className="opacity-90">Acceso inmediato a servicios</p>
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2">92%</div>
                  <p className="opacity-90">de satisfacción de pacientes</p>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold font-poppins text-foreground mb-6">
                  Tu salud, siempre accesible
                </h2>
                <div className="space-y-4">
                  {[
                    "Recetas online sin moverte de casa",
                    "Consultas con médicos de cabecera",
                    "Turnos y recordatorios automáticos",
                    "Historia clínica siempre disponible",
                    "Cotizaciones de pedidos médicos",
                    "Seguridad WEB3 para tus datos"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                      <span className="text-lg text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold font-poppins text-foreground mb-6">
              Tus datos, completamente seguros
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Utilizamos tecnología WEB3 de vanguardia para garantizar que tu información médica 
              esté protegida con los más altos estándares de seguridad y privacidad.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Encriptación Total</h3>
                <p className="text-sm text-muted-foreground">Datos protegidos end-to-end</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Control Total</h3>
                <p className="text-sm text-muted-foreground">Tú decides quién accede</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Historial Propio</h3>
                <p className="text-sm text-muted-foreground">Independiente de obra social</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-foreground mb-6">
              Comienza a cuidar tu salud hoy
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a miles de pacientes que ya disfrutan de una atención médica más accesible y eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="success" size="lg" className="text-lg px-8 py-4">
                Crear Cuenta Gratis
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Conocer Más
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pacientes;