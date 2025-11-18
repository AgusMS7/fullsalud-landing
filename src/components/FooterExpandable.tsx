"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const fullsaludLogo = "/images/fullsalud-logo.png";

export default function FooterExpandable() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const isMedicosPage = pathname?.includes("/medicos");

  // Color configurations
  const colors = isMedicosPage ? {
    buttonBorder: "#097A9D",
    buttonText: "#024A58",
    buttonHoverBg: "#097A9D",
    expandBg: "#D4E6ED",
    dividerBorder: "#097A9D",
    linkHover: "#024A58",
    separatorColor: "#097A9D",
    iconColor: "#024A58",
  } : {
    buttonBorder: "#E0B63C",
    buttonText: "#8B5A0B",
    buttonHoverBg: "#E0B63C",
    expandBg: "#ECDDC0",
    dividerBorder: "#E0B63C",
    linkHover: "#8B5A0B",
    separatorColor: "#E0B63C",
    iconColor: "#8B5A0B",
  };

  const handleToggle = () => {
    if (!isExpanded) {
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <footer className="w-full bg-white">
      {/* Toggle Button */}
      <div className="flex justify-center">
        <button
          onClick={handleToggle}
          className="inline-flex items-center gap-2.5 px-7 py-4 border rounded-t-[15px] bg-white font-medium text-xl transition-colors font-inter"
          style={{
            borderColor: colors.buttonBorder,
            color: colors.buttonText,
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.buttonHoverBg + "15"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "white"}
          aria-expanded={isExpanded}
        >
          <span>Más información</span>
          {isExpanded ? (
            <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.9676 8.10664C12.7832 7.91599 12.5307 7.80648 12.2655 7.80199C12.0004 7.79751 11.7444 7.89865 11.5538 8.08301L5.80306 13.6447C5.70602 13.7353 5.62801 13.8444 5.57357 13.9655C5.51913 14.0866 5.48936 14.2173 5.48599 14.3501C5.48261 14.4828 5.50571 14.6149 5.55393 14.7386C5.60216 14.8624 5.67453 14.9752 5.76685 15.0707C5.85916 15.1661 5.96955 15.2422 6.09159 15.2946C6.21363 15.3469 6.34487 15.3744 6.47765 15.3755C6.61043 15.3765 6.74209 15.3511 6.86495 15.3008C6.98782 15.2504 7.09942 15.1761 7.19325 15.0821L12.2252 10.2155L17.0919 15.2475C17.2774 15.4327 17.5283 15.5377 17.7905 15.5398C18.0527 15.5419 18.3052 15.441 18.4937 15.2587C18.6822 15.0764 18.7915 14.8274 18.7982 14.5653C18.8048 14.3031 18.7083 14.0489 18.5293 13.8573L12.9676 8.10664Z" style={{ fill: colors.buttonText }}/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.9676 15.8934C12.7832 16.084 12.5307 16.1935 12.2655 16.198C12.0004 16.2024 11.7444 16.1013 11.5538 15.917L5.80306 10.3553C5.70602 10.2647 5.62801 10.1556 5.57357 10.0345C5.51913 9.91339 5.48936 9.78265 5.48599 9.64991C5.48261 9.51716 5.50571 9.38508 5.55393 9.26136C5.60216 9.13764 5.67453 9.02477 5.76685 8.92932C5.85916 8.83387 5.96955 8.75776 6.09159 8.70544C6.21363 8.65311 6.34487 8.62561 6.47765 8.62455C6.61043 8.62348 6.74209 8.64888 6.86495 8.69924C6.98782 8.7496 7.09942 8.82393 7.19325 8.91789L12.2252 13.7845L17.0919 8.75254C17.2774 8.56726 17.5283 8.46226 17.7905 8.46016C18.0527 8.45806 18.3052 8.55902 18.4937 8.74131C18.6822 8.9236 18.7915 9.17262 18.7982 9.43474C18.8048 9.69686 18.7083 9.95111 18.5293 10.1427L12.9676 15.8934Z" style={{ fill: colors.buttonText }}/>
            </svg>
          )}
        </button>
      </div>

      {/* Expandable Content - Only the middle sections */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-none md:max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-8" style={{ backgroundColor: colors.expandBg }}>
          {/* Footer Links Section */}
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Logo and Social */}
              <div className="flex flex-col items-center justify-center">
                <div className="mb-6 flex justify-center">
                  <Image
                    src={fullsaludLogo}
                    alt="Full Salud"
                    width={100}
                    height={98}
                    className="w-auto h-auto"
                  />
                </div>
                <p className="text-sm font-semibold text-fullsalud-charcoal mb-6">Redes sociales</p>
                <div className="flex gap-3 justify-center">
                  <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors" aria-label="Facebook">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: colors.iconColor }}>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill={colors.iconColor}/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors" aria-label="Instagram">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: colors.iconColor }}>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill={colors.iconColor}/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors" aria-label="WhatsApp">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: colors.iconColor }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill={colors.iconColor}/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Acerca de */}
              <div>
                <h3 className="font-semibold text-fullsalud-charcoal mb-4">Acerca de</h3>
                <ul className="space-y-2 text-sm text-fullsalud-charcoal">
                  <li><a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Full Salud</a></li>
                  <li><a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Especialistas que acepten tu obra social</a></li>
                  <li><a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Blog de Salud y Consejos.</a></li>
                  <li><a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Soy médico quiero sumarme.</a></li>
                </ul>
              </div>

              {/* Otros sitios */}
              <div>
                <h3 className="font-semibold text-fullsalud-charcoal mb-4">Otros sitios</h3>
                <ul className="space-y-2 text-sm text-fullsalud-charcoal">
                  <li><a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Full Shop</a></li>
                  <li><a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Full Farma</a></li>
                  <li><a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Mis Recetas.</a></li>
                  <li><a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Pastillero electrónico.</a></li>
                  <li><a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Mi historia clínica.</a></li>
                  <li><a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Mi Grupo Familiar.</a></li>
                  <li><a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Productos con pedido medico.</a></li>
                  <li><a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Nutrición y Bienestar Integral</a></li>
                  <li><a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>App Full Salud</a></li>
                </ul>
              </div>

              {/* Ayuda */}
              <div>
                <h3 className="font-semibold text-fullsalud-charcoal mb-4">Ayuda</h3>
                <ul className="space-y-2 text-sm text-fullsalud-charcoal">
                  <li><a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Cancelar o Reprogramar Turno</a></li>
                  <li><a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Guía para Primeras Consultas</a></li>
                  <li><a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Preguntas Frecuentes</a></li>
                  <li><a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Cómo Contactarnos</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t" style={{ borderColor: colors.dividerBorder + "99" }} />

      {/* Bottom Bar - Always Visible */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-fullsalud-charcoal max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Quiénes somos</a>
            <span style={{ color: colors.separatorColor }}>|</span>
            <a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Equipo médico y especialistas</a>
            <span style={{ color: colors.separatorColor }}>|</span>
            <a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Preguntas frecuentes</a>
            <span style={{ color: colors.separatorColor }}>|</span>
            <a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Enfermedades</a>
            <span style={{ color: colors.separatorColor }}>|</span>
            <a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Trabaja con nosotros</a>
            <span style={{ color: colors.separatorColor }}>|</span>
            <a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Medicamento</a>
            <span style={{ color: colors.separatorColor }}>|</span>
            <a href="#" className="transition-colors" style={{ _hover: { color: colors.linkHover } }} onMouseEnter={(e) => e.currentTarget.style.color = colors.linkHover} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Contacto y soporte</a>
          </div>
        </div>
        <div className="text-center mt-4 text-sm text-fullsalud-charcoal">
          <p>Copyright © 1999-2025 Full Salud S.R.L</p>
        </div>
      </div>
    </footer>
  );
}
