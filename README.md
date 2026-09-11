# Belvancy — Fase 1

Web construida con [Astro](https://astro.build) (genera HTML estático, rápido y bueno para SEO).

## Qué incluye ya

- Home con hero + calculadora de finiquito funcional
- 6 páginas de categoría (Despidos, Finiquitos, Nóminas, Contratos, Seguridad Social, ERTE y paro) con las próximas guías listadas
- Páginas obligatorias: Sobre mí, Contacto, Aviso legal, Política de privacidad, Cookies (plantillas — revísalas y rellena los placeholders `[...]`)
- `robots.txt`, `sitemap` automático y `ads.txt` (con placeholder de tu Publisher ID)
- Diseño propio (no plantilla genérica): paleta "papel administrativo", tipografía Source Serif 4 + IBM Plex Sans

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera /dist (lo que se despliega)
npm run preview   # sirve /dist localmente para comprobarlo
```

## Desplegar en belvancy.com (recomendado: Vercel)

1. Sube esta carpeta a un repositorio de GitHub (crea uno nuevo, sube estos archivos).
2. En [vercel.com](https://vercel.com), "Add New Project" → importa el repo. Vercel detecta Astro automáticamente (build command `astro build`, output `dist`).
3. Deploy. Te dará una URL tipo `belvancy.vercel.app`.
4. En Vercel → Settings → Domains, añade `belvancy.com` y `www.belvancy.com`.
5. En el panel DNS de donde compraste el dominio, añade los registros que Vercel te indique (normalmente un `A` a `76.76.21.21` y un `CNAME` de `www` a `cname.vercel-dns.com` — Vercel te da los valores exactos en su panel).
6. Espera la propagación (minutos a horas) y verifica que `https://belvancy.com` carga.

Alternativa: Netlify funciona igual de bien (build command `astro build`, publish directory `dist`).

## Antes de pedir la aprobación de AdSense

- [ ] Sustituir los placeholders `[NOMBRE COMPLETO]`, `[NIF]`, etc. en Aviso legal y Privacidad
- [ ] Publicar al menos 20 artículos reales en las categorías (ver plan de contenido)
- [ ] Activar Google Search Console y Google Analytics
- [ ] Cuando AdSense te dé tu Publisher ID: actualizarlo en `public/ads.txt` y descomentar el script en `src/layouts/Layout.astro`
- [ ] Añadir un banner de consentimiento de cookies real antes de servir anuncios en la UE
