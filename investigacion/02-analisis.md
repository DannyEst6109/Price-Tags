# Módulo 2 · Análisis

## Variables que más influyen

El negocio tiene dos pisos. El integrador solo vende si el cliente ve repago; por eso el piso de abajo (el caso del cliente) manda.

```
Repago del cliente = Inversión / (Beneficios anuales − Costos anuales)

Inversión     = etiquetas × precio FOB × (1 + internación) + red y rieles + instalación + integración POS
Beneficios    = mano de obra (cambios/semana × min/cambio × costo/hora)
              + papel + mejora de margen (% de ventas) + multas evitadas + otros
Costos anuales= licencia por etiqueta + reposición de hardware

Negocio del integrador = tiendas/año × (margen hw + margen servicios) + base instalada × parte de licencia − fijos
```

Orden de influencia sobre el repago, según la sensibilidad ±30% del simulador (escenario base, repago 6.6 años):

| Variable | Rango de repago | Cómo se valida |
|---|---|---|
| Cambios de precio por semana | 5.0 – 9.6 años | Entrevistas y registros del POS (P1) |
| Precio de la etiqueta | 4.8 – 8.4 | Cotización de 2–3 marcas (P4) |
| Minutos por cambio | 5.2 – 8.8 | Cronometrar en tienda |
| Costo por hora | 5.2 – 8.8 | Planilla real del cliente |
| Mejora de margen y ventas | 5.7 – 7.7 | Auditoría de precios (P2) |
| Licencia | 5.7 – 7.7 | Términos del fabricante (P4) |

Tres de las cuatro primeras son la misma cosa: **horas de trabajo que se liberan**. Si el cliente no recorta horas ni las reasigna a algo que venda, ese ahorro no existe en su estado de resultados.

## Relaciones y supuestos que pueden cambiar la conclusión

- **Frecuencia de cambios × inflación y promociones.** Con inflación baja, los cambios vienen sobre todo de promociones. Una cadena muy promocional puede duplicar la frecuencia supuesta. Dato pendiente: inflación de Guatemala 2025–2026 y calendario promocional típico.
- **Ahorro "en papel" vs ahorro real.** Si el personal que cambia precios también repone, el ahorro de horas no se traduce en menos planilla. El PDF lo da por hecho con cifras de EEUU.
- **Margen recuperado.** Para pagar en 2 años hace falta una mejora de 1.15% de las ventas (escenario base). Un supermercado típico tiene margen neto de pocos puntos, así que 1% es mucho. Ese número solo se defiende con datos de errores, rebajas de perecederos y ejecución de promociones.
- **Precio del hardware.** Pasar de US$6 a US$4.5 por etiqueta (marca china de 2º nivel) acorta el repago casi 2 años. Eso favorece a un distribuidor de marca china frente a uno de Vusion o Pricer, a cambio de más riesgo de calidad y soporte.
- **Licencia.** A US$0.60 por etiqueta al año se come un tercio del beneficio. Negociar esto con el fabricante importa tanto como el precio del hardware.

## Comparación de alternativas

Escala 1–5 (5 = mejor). "Costo" y "riesgo": 5 = bajo.

| Alternativa | Impacto | Costo | Esfuerzo | Tiempo a 1er ingreso | Riesgo | Total | Nota |
|---|---|---|---|---|---|---|---|
| A. Integrador autorizado de marca grande (Hanshow, SOLUM, Pricer) — recomendación del PDF | 4 | 2 | 2 | 2 | 3 | 13 | Necesita volumen mínimo; marcas grandes pueden preferir a RGIS |
| B. Distribuidor de marca china de 2º nivel + conector propio | 4 | 3 | 3 | 3 | 2 | 15 | Mejor economía para el cliente; calidad y soporte por probar |
| C. Software de integridad de precios sin hardware (conector POS → lote de etiquetas de papel ordenado por pasillo + auditoría) | 2 | 5 | 4 | 5 | 4 | 20 | Ingreso pronto y construye la pieza propia que el PDF recomienda; mercado menor |
| D. ESL como servicio (renta mensual por etiqueta) | 3 | 1 | 2 | 2 | 2 | 10 | Cambia capex por opex, pero no arregla la economía (ver módulo 3) y exige financiamiento |
| E. Aliarse con un actor local (RGIS, SUNMI) como especialista en integración POS | 3 | 4 | 4 | 3 | 3 | 17 | Rápido, pero se captura menos margen |

**Lectura:** la ruta del PDF (A) es la de mayor techo pero la más lenta y cara. C y E son buenas puertas de entrada: generan ingreso y datos reales con poco capital, y dejan la conversación de hardware (A o B) para cuando haya un cliente con caso cuantificado.
