import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Stethoscope, Calendar, FileText, Bell, MessageSquare, UserCheck, Activity, Zap, CheckCircle, Clock, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import MedicosContent from "@/components/pages/MedicosContent";

export const metadata = {
  title: "Para Médicos - Full Salud",
  description: "Herramientas digitales para potenciar tu consulta médica. Más pacientes, más visibilidad, cero costos.",
};

export default function MedicosPage() {
  return <MedicosContent />;
}
