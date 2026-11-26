# Bitácora — Etiquetas electrónicas (ESL) en Guatemala

Registro breve. Cada entrada nueva va arriba en su sección con fecha. Detalle en los módulos 01–04.

## Tema y pregunta central
- **Tema:** entrada al mercado guatemalteco de etiquetas electrónicas de precio (ESL).
- **Pregunta central (hipótesis de trabajo):** ¿conviene entrar como integrador local de una marca existente, con qué cliente, qué marca y qué modelo de cobro, si la mano de obra barata alarga el repago? (PDF p.1, p.6, p.6–7)

## Fuentes
| # | Fuente | Qué aporta | Confianza |
|---|--------|------------|-----------|
| F0 | PDF "Estudio ESL…" (24-nov-2026), 7 p., legible completo | Mercado, adopción en EEUU, cadena de valor, costos EEUU, riesgo regulatorio, retail GT, recomendación | Media: el propio PDF dice que abrió solo una página; cifras de costos de proveedores y blogs |
| F1 | README.md del repo | Tema y país | Alta, escueta |
| F2 | Vusion, Mexico Business News, Retail TouchPoints (mar-2026) | Walmart México: 1.7 M etiquetas, sin mención de GT | Alta |
| F3 | AGN, La Hora, USAC IIES | Salario mínimo 2026 no agrícola CE1 Q4,252.28 con bonificación | Alta |
| F4 | El Comercio, Banguat | Tipo de cambio ≈ Q7.62 (may-2026) | Media; confirmar del día |
| F5 | LatamList, Forbes Perú, Andina | Price Lab: US$360 mil pre-semilla; ESL en MX, PE, BO; 7 clientes en Perú (2024) | Media; datos de 2024 |
| F6 | sunmi.gt, rgis.gt, SYSCOM | Actores locales y marcas chinas de 2º nivel | Baja-media: vistas en resultados, no abiertas |
| F7 | Dialnet/Podium 2023 (datos MSPAS 2022); Living in Guatemala 2026 | Sucursales de cadenas de farmacia | Media; discrepan |
| F8 | Living in Guatemala, WIPO Lex, FAOLEX | Decreto 06-2003 Art. 18 (precio en moneda nacional); AG 777-2003 | Media; falta leer texto oficial |
| F9 | trade.gov, Stackry | DAI general 0–15%, IVA 12% sobre CIF+DAI | Baja para ESL específicamente |
| F10 | GMInsights, Fortune BI, Towards Packaging (sesión previa) | Mercado global y LatAm | Media |

## Hallazgos
- **H1** (2026-11-25): Ninguna cadena guatemalteca anuncia ESL; Walmart México sí (Vusion). **Respaldo** F0, F2.
- **H2**: El mercado global crece 13–21% anual; LatAm es chico. **Respaldo parcial** (F0, F10; no reverificado).
- **H3**: Cinco fabricantes dominan, pero hay marcas chinas de 2º nivel accesibles (ZKONG, SUNMI). **Matiza al PDF** (F6).
- **H4**: Con salarios de Guatemala (≈US$4.1/h con prestaciones) el ahorro de mano de obra solo da repago de 13.7 años en el caso base. **Modelo** (F3 + supuestos).
- **H5**: Ya hay actores locales: SUNMI vende ESL; RGIS anuncia instalación de ESL. **Por verificar** (F6).
- **H6**: Price Lab sí levantó capital (US$360 mil), opera pequeña. **Corrige al PDF** (F5).
- **H7**: Tres cadenas de farmacia con cientos de sucursales (Galeno, Cruz Verde–Meykos–Del Ahorro, Batres). **Respaldo**, cifras discrepan (F7).
- **H8**: El integrador cubre sus fijos con ~3 tiendas/año; el cuello de botella es que el cliente vea repago. **Modelo.**

## Supuestos (sin verificar)
- S1: Supermercado mediano GT ≈ 10,000 etiquetas y US$3 M de ventas por tienda.
- S2: 1,500 cambios de precio por semana por tienda (base).
- S3: Precio FOB US$6/etiqueta, internación 15%, licencia US$0.60/etiqueta/año.
- S4: Mejora de margen por exactitud y promociones = 0.2% de ventas (base).
- S5: Las horas liberadas se convierten en ahorro real de planilla.
- S6: La Diaco acepta un precio digital como exhibición válida.
- S7: Fabricantes aceptarían a un distribuidor nuevo con volumen de pocas tiendas al año.

## Preguntas abiertas
- Q1: Texto exacto del Decreto 06-2003 y sanciones por precio distinto al cobrado.
- Q2: ¿RGIS Guatemala instala ESL hoy? ¿Con qué marca y para quién?
- Q3: Términos de distribuidor de Hanshow, SOLUM, Pricer y una marca china (mínimos, margen, exclusividad, API).
- Q4: Partida arancelaria y DAI de las ESL.
- Q5: Cambios de precio por semana y discrepancias góndola–caja en una cadena real.
- Q6: Inflación y frecuencia de promociones en Guatemala 2025–2026.
- Q7: Número actual de sucursales por cadena de farmacia.

## Escenarios
Simulador: https://claude.ai/artifact/NpKbi34nLb2uou2ggHMRhy · modelo en `modelo.js`.
| Escenario (2026-11-25) | Repago cliente | VPN 5 años | Caja integrador año 5 |
|---|---|---|---|
| Base | 6.6 años | −US$37 mil | US$944 mil |
| Favorable | 1.1 años | +US$148 mil | US$3.3 M |
| Desfavorable | no paga | −US$169 mil | −US$79 mil |
| Farmacia | 10.7 años | −US$17 mil | US$1.17 M |

## Decisiones
- D1 (2026-11-25): Avanzar con hipótesis de trabajo mientras llegaba la propuesta completa.
- D2 (2026-11-25): Llegó el PDF; se adopta como fuente inicial F0. La pregunta central pasa a ser la viabilidad del modelo de integrador.
- D3 (2026-11-25): El simulador modela dos pisos (cliente y integrador) porque la venta depende del repago del cliente.
- D4 (2026-11-25): Prioridad de validación: auditoría de exactitud de precios, conector POS→papel, conversación con cadenas de farmacia (módulo 4).
