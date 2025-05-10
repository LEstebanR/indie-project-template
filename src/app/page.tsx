"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import ButtonShowcase from "@/components/showcases/button-showcase";
export default function Home() {
  const searchParams = useSearchParams();
  const componentParam = searchParams.get("component");
  const [activeComponent, setActiveComponent] = useState(
    componentParam || "buttons"
  );

  useEffect(() => {
    if (componentParam) {
      setActiveComponent(componentParam);
    }
  }, [componentParam]);

  const renderComponent = () => {
    switch (activeComponent) {
      case "buttons":
        return <ButtonShowcase />;
      //   case "cards":
      //     return <CardShowcase />;
      //   case "forms":
      //     return <FormShowcase />;
      //   case "dialogs":
      //     return <DialogShowcase />;
      //   case "tables":
      //     return <TableShowcase />;
      //   case "accordions":
      //     return <AccordionShowcase />;
      //   case "avatars":
      //     return <AvatarShowcase />;
      //   case "badges":
      //     return <BadgeShowcase />;
      //   case "alerts":
      //     return <AlertShowcase />;
      default:
        return <ButtonShowcase />;
    }
  };

  const getComponentTitle = () => {
    switch (activeComponent) {
      case "buttons":
        return "Botones";
      case "cards":
        return "Tarjetas";
      case "forms":
        return "Formularios";
      case "dialogs":
        return "Diálogos";
      case "tables":
        return "Tablas";
      case "accordions":
        return "Acordeones";
      case "avatars":
        return "Avatares";
      case "badges":
        return "Badges";
      case "alerts":
        return "Alertas";
      default:
        return "Botones";
    }
  };
  return (
    <div className="max-w-5xl mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Catálogo de Componentes</h1>
        <p className="text-muted-foreground max-w-2xl">
          Una colección minimalista de componentes para tus side projects
          utilizando Next.js, Tailwind CSS y lucide-react.
        </p>
      </header>

      <div className="mb-6">
        <h2 className="text-2xl font-bold">{getComponentTitle()}</h2>
        <p className="text-muted-foreground">
          Explora las diferentes variantes y usos de este componente.
        </p>
      </div>

      <div className="p-6 border rounded-lg bg-card">{renderComponent()}</div>
    </div>
  );
}
