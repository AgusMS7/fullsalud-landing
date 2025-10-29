import type { Metadata } from "next";
import { Providers } from "./providers";
import "@/index.css";

export const metadata: Metadata = {
  title: "Full Salud - Plataforma Integral de Salud Digital",
  description:
    "Full Salud: Sistema integral de salud digital para médicos, pacientes y proveedores. Turnos online, recetas electrónicas, historia clínica y ecommerce médico.",
  authors: [{ name: "Full Salud" }],
  openGraph: {
    title: "Full Salud - Plataforma Integral de Salud Digital",
    description:
      "Sistema integral de salud digital para médicos, pacientes y proveedores. Turnos online, recetas electrónicas y ecommerce médico.",
    type: "website",
    images: [
      {
        url: "https://lovable.dev/opengraph-image-p98pqg.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@lovable_dev",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
