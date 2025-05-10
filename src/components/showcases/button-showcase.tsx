import { Button } from "@/components/ui/button";
import { Download, Send, Trash, Plus, ArrowRight } from "lucide-react";
import { ShowcaseSection } from "@/components/showcases/showcase-section";
export default function ButtonShowcase() {
  return (
    <div className="space-y-8">
      <ShowcaseSection
        title="Variantes de Botones"
        description="Diferentes estilos de botones disponibles"
      >
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Tamaños de Botones"
        description="Diferentes tamaños disponibles"
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Botones con Iconos"
        description="Combinación de iconos y texto"
      >
        <div className="flex flex-wrap gap-4">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Nuevo
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Descargar
          </Button>
          <Button variant="secondary">
            <Send className="mr-2 h-4 w-4" /> Enviar
          </Button>
          <Button variant="destructive">
            <Trash className="mr-2 h-4 w-4" /> Eliminar
          </Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Estados de Botones"
        description="Diferentes estados de los botones"
      >
        <div className="flex flex-wrap gap-4">
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
          <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600">
            Gradient <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </ShowcaseSection>
    </div>
  );
}
