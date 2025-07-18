import { defineCollection , z } from "astro:content";

const info = defineCollection({
    schema: z.object({
        centro: z.string(),
        img: z.string(),
        horario: z.string(),
        descripcion: z.string(),
        wsp: z.string(),
    }),
});

const profesionales = defineCollection({
    schema: z.object({
        nombre: z.string(),
        especialidad: z.string(),
        dias: z.array(z.enum(["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"])),
        clinicaId: z.array(z.string()), 
    }),
});

export const collections = {info , profesionales};