import type { Task } from "@repo/task-manager-types";

export const TaskExamples: Task[] = [
  {
    title: "Revisar Banners",
    description: "Ajustar tamaños y textos de los banners promocionales.",
    createdAt: new Date("2026-06-12T09:15:00Z"),
    priority: "CRITIC",
  },
  {
    title: "Actualizar Dependencias",
    description: "Verificar y actualizar librerías de frontend en el proyecto.",
    createdAt: new Date("2026-06-14T14:30:00Z"),
    priority: "HIGH",
  },
  {
    title: "Redactar Informe",
    description: "Preparar el informe semanal de avance para el equipo.",
    createdAt: new Date("2026-06-15T10:00:00Z"),
    priority: "MEDIUM",
  },
  {
    title: "Probar Formulario",
    description:
      "Revisar validaciones y flujo de envío del formulario de contacto.",
    createdAt: new Date("2026-06-16T11:45:00Z"),
    priority: "LOW",
  },
  // {
  //   title: "Optimizar Imágenes",
  //   description: "Comprimir y reemplazar archivos de imagen grandes en la web.",
  //   createdAt: new Date("2026-06-17T08:20:00Z"),
  //   priority: "MEDIUM",
  // },
];
