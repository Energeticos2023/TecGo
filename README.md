# TecGo · ENERGÉTICOS

App móvil (PWA) de ENERGÉTICOS para Huaraz e Independencia. Lista para publicar en GitHub Pages e instalar en Android y iPhone.

## Novedades de esta versión

- Logo oficial de ENERGÉTICOS en la cabecera y como ícono de la app (Android y iPhone), con la marca TecGo visible como "Plataforma TecGo".
- Titular rotativo de ventas en la portada (5 mensajes que cambian solos).
- Contadores animados: +30 años, medición real 7.56 Ω, 24 horas.
- Vitrina "Termas solares en oferta" con botones Cotizar ahora que abren WhatsApp con el producto ya escrito.
- Galería deslizable con 8 trabajos reales (fotos propias).
- Tarjeta de confianza con la foto real del Ing. José Rafael Zeña Peche (CIP 85540).
- Instalación en el celular:
  - Android/Chrome: botón "Instalar" con ventana nativa del sistema.
  - iPhone/Safari: instrucciones paso a paso (Compartir → Añadir a pantalla de inicio).
  - Banner de instalación en la portada y opción en la vista Cuenta.
- Service worker v2: la app abre incluso con mala señal.

## Publicación en GitHub Pages

1. Crear un repositorio (por ejemplo `TecGo`) en la cuenta energeticos2023.
2. Subir TODOS estos archivos y carpetas a la rama principal (index.html, manifest.webmanifest, sw.js, icon.svg, icons/, assets/).
3. Settings → Pages → Deploy from a branch → rama `main`, carpeta `/root`.
4. Esperar 1-2 minutos y abrir la dirección que GitHub indique.
5. Desde el celular, abrir esa dirección y usar el botón "Instalar".

## Datos ya cargados

- WhatsApp de despacho: 942 899 919 (variable `companyPhone` en index.html).
- Dirección: Jr. Augusto B. Leguía 563, Independencia.
- Enlaces oficiales a ENERGÉTICOS, YACUSOL, mini-app de termas y Facebook.

## Pendientes recomendados antes de difundir masivamente

- Términos y condiciones y política de privacidad (Ley 29733).
- Confirmar precios de campaña de la vitrina de termas.
