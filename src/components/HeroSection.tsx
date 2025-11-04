"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Stethoscope, Heart, ShoppingCart } from "lucide-react";
import doctorHero from "@/assets/doctor-hero.jpg";
import patientHero from "@/assets/patient-hero.jpg";

export default function HeroSection() {
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
          <Link href="/proveedores">
            <Button variant="provider" size="sm" className="font-semibold px-2 md:px-4 lg:px-6 text-xs md:text-sm lg:text-base">
              Comenzá a vender
            </Button>
          </Link>
        </div>
      </div>

      {/* Doctor Section */}
      <Link href="/medicos" className="split-section hero-medical relative overflow-hidden block">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-35 blur-sm"
          style={{
            backgroundImage: `url(${doctorHero.src})`,
          }}
        />
        {/* Restore tinted teal overlay for Médico section */}
        <div className="absolute inset-0 z-[5]" style={{ backgroundColor: 'hsl(180 80% 12% / 0.85)' }} />

        <div className="relative z-10 text-center text-white max-w-2xl px-4 mx-auto flex flex-col items-center justify-center min-h-[60vh] lg:min-h-full">
          <div className="mb-4 md:mb-5 lg:mb-6 inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full backdrop-blur-sm">
            <Stethoscope className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold font-poppins mb-3 md:mb-4 lg:mb-6">
            Soy Médico
          </h1>
          <p className="text-sm md:text-lg lg:text-xl mb-2 md:mb-3 lg:mb-4 opacity-90 font-medium">
            Fortalecé tu imagen profesional y digital
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Button variant="medicalOutline" size="lg" className="font-semibold px-6 py-3 text-sm md:px-8 md:py-4 md:text-base lg:px-10 lg:py-5 lg:text-lg w-full sm:w-auto">
              Ver cómo funciona
            </Button>
          </div>
        </div>
      </Link>

      {/* Patient Section */}
      <Link href="/pacientes" className="split-section patient-theme patient-hero relative overflow-hidden block">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 blur-sm"
          style={{
            backgroundImage: `url(${patientHero.src})`,
          }}
        />
        <div className="absolute inset-0 z-[5]" style={{ backgroundColor: 'hsl(var(--patient-sky-dark) / 0.85)' }} />
        <div className="relative z-10 text-center text-white max-w-lg px-4 mx-auto flex flex-col items-center justify-center min-h-[60vh] lg:min-h-full">
          <div className="mb-4 md:mb-5 lg:mb-6 inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full backdrop-blur-sm">
            <Heart className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold font-poppins mb-3 md:mb-4 lg:mb-6">
            Soy Paciente
          </h1>
          <p className="text-sm md:text-lg lg:text-2xl mb-4 md:mb-6 lg:mb-8 opacity-90">
            Conocer mis beneficios
          </p>
          <Button variant="successOutline" size="sm" className="text-white border-white hover:bg-white hover:text-accent font-semibold px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg">
            Explorar Servicios
          </Button>
        </div>
      </Link>
    </div>
  );
}
