import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Stethoscope, Heart, ShoppingCart } from "lucide-react";
import doctorHero from "@/assets/doctor-hero.jpg";
import patientHero from "@/assets/patient-hero.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="split-hero relative">
      {/* Floating Provider CTA - Top for mobile/tablet, bottom for desktop */}
      <div className="absolute top-4 md:top-6 lg:top-auto lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20 px-4">
        <div className="bg-white rounded-full shadow-[var(--shadow-elegant)] p-2 md:p-3 lg:p-6 flex items-center gap-1 md:gap-2 lg:gap-4 max-w-xs md:max-w-sm lg:max-w-md mx-auto">
          <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
            <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-medical-orange" />
            <span className="font-semibold text-foreground font-poppins text-xs md:text-sm lg:text-base">
              Quiero ser proveedor
            </span>
          </div>
          <Button 
            variant="provider" 
            size="sm"
            onClick={() => navigate('/proveedores')}
            className="font-semibold px-2 md:px-4 lg:px-6 text-xs md:text-sm lg:text-base"
          >
            Comenzá a vender
          </Button>
        </div>
      </div>

      {/* Doctor Section */}
      <div 
        className="split-section hero-medical relative overflow-hidden"
        onClick={() => navigate('/medicos')}
      >
        <div 
          className="absolute inset-0 opacity-60 bg-center bg-cover"
          style={{ backgroundImage: `url(${doctorHero})` }}
        />
        <div className="relative z-10 text-center text-white max-w-2xl pt-16 md:pt-20 lg:pt-0 px-4">
          <div className="mb-4 md:mb-5 lg:mb-6 inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full backdrop-blur-sm">
            <Stethoscope className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold font-poppins mb-3 md:mb-4 lg:mb-6">
            Soy Médico
          </h1>
          <p className="text-sm md:text-lg lg:text-xl mb-2 md:mb-3 lg:mb-4 opacity-90 font-medium">
            Fortalecé tu imagen profesional y digital
          </p>
          <p className="text-xs md:text-sm lg:text-base mb-6 md:mb-8 lg:mb-10 opacity-80">
            Más del 96% de los médicos aumentaron sus consultas con Full Salud
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Button 
              variant="successOutline" 
              size="lg"
              className="font-semibold px-6 py-3 text-sm md:px-8 md:py-4 md:text-base lg:px-10 lg:py-5 lg:text-lg w-full sm:w-auto"
            >
              🟢 Reservar cupo gratuito
            </Button>
            <Button 
              variant="medicalOutline" 
              size="lg"
              className="font-semibold px-6 py-3 text-sm md:px-8 md:py-4 md:text-base lg:px-10 lg:py-5 lg:text-lg w-full sm:w-auto"
            >
              Ver cómo funciona
            </Button>
          </div>
        </div>
      </div>

      {/* Patient Section */}
      <div 
        className="split-section hero-success relative overflow-hidden"
        onClick={() => navigate('/pacientes')}
      >
        <div 
          className="absolute inset-0 opacity-20 bg-center bg-cover"
          style={{ backgroundImage: `url(${patientHero})` }}
        />
        <div className="relative z-10 text-center text-white max-w-lg">
          <div className="mb-4 md:mb-5 lg:mb-6 inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full backdrop-blur-sm">
            <Heart className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold font-poppins mb-3 md:mb-4 lg:mb-6">
            Soy Paciente
          </h1>
          <p className="text-sm md:text-lg lg:text-2xl mb-4 md:mb-6 lg:mb-8 opacity-90">
            Conocer mis beneficios
          </p>
          <Button 
            variant="successOutline" 
            size="sm"
            className="text-white border-white hover:bg-white hover:text-accent font-semibold px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg"
          >
            Explorar Servicios
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;