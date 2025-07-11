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

export const collections = {info};