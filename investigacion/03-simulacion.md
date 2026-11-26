# Módulo 3 · Simulación

**Simulador interactivo:** https://claude.ai/artifact/NpKbi34nLb2uou2ggHMRhy (privado; se comparte desde su menú Share).
**Modelo:** [modelo.js](modelo.js). Se edita ahí y se regenera la página con `python3 construir.py`.

## Supuestos por escenario

| Parámetro | Base | Favorable | Desfavorable | Farmacia | Origen |
|---|---|---|---|---|---|
| Etiquetas por tienda | 10,000 | 10,000 | 10,000 | 3,000 | Supuesto |
| Precio etiqueta FOB (US$) | 6.0 | 4.5 | 9.0 | 6.0 | PDF p.3 (US$5–15 EEUU) |
| Flete + DAI + agente | 15% | 10% | 25% | 15% | Supuesto; DAI abierto |
| Red, gateways, rieles (US$/tienda) | 4,000 | 2,500 | 8,000 | 1,500 | Escalado del PDF p.3 |
| Instalación (US$/etiqueta) | 0.60 | 0.40 | 1.00 | 0.60 | Supuesto |
| Integración POS (US$/tienda) | 3,000 | 1,500 | 8,000 | 1,500 | Supuesto |
| Licencia + soporte (US$/etiqueta/año) | 0.60 | 0.40 | 1.00 | 0.60 | Supuesto (PDF p.3) |
| Cambios de precio por semana | 1,500 | 2,500 | 600 | 300 | **Supuesto clave** |
| Minutos por cambio | 2.0 | 2.5 | 1.5 | 2.0 | PDF p.3 |
| Costo por hora (US$) | 4.1 | 5.0 | 3.5 | 4.1 | Salario mínimo 2026 + prestaciones |
| Ventas anuales por tienda (US$) | 3.0 M | 4.0 M | 2.0 M | 0.7 M | Supuesto |
| Mejora de margen (% ventas) | 0.20% | 0.50% | 0.05% | 0.20% | Supuesto |

## Resultados (cliente, una tienda)

| Resultado | Base | Favorable | Desfavorable | Farmacia |
|---|---|---|---|---|
| Inversión | US$82,000 | US$57,500 | US$138,500 | US$25,500 |
| Costo por etiqueta instalada | US$8.20 | US$5.75 | US$13.85 | US$8.50 |
| Horas de cambio de precio al año | 2,600 | 5,417 | 780 | 520 |
| Beneficio anual | US$19,500 | US$58,583 | US$4,354 | US$4,500 |
| Costo anual | US$7,035 | US$4,495 | US$13,375 | US$2,111 |
| **Repago** | **6.6 años** | **1.1 años** | **no paga** | **10.7 años** |
| Repago solo con mano de obra | 13.7 años | 2.0 años | no paga | 52 años |
| Valor presente neto 5 años (12%) | −US$37,066 | +US$147,537 | −US$168,740 | −US$16,886 |
| Mejora de margen para pagar en 2 años | 1.15% | 0% | 3.96% | 1.68% |

## Resultados (integrador, 5 años)

| Resultado | Base | Favorable | Desfavorable | Farmacia |
|---|---|---|---|---|
| Tiendas instaladas | 53 | 179 | 14 | 199 |
| Caja acumulada año 5 | US$944 mil | US$3.3 M | −US$79 mil | US$1.17 M |
| Tiendas/año para cubrir fijos | 2.9 | 2.8 | 3.6 | 9.0 |

## Qué dicen los números

1. **El caso del cliente no paga en el escenario base.** 6.6 años contra los 18–24 meses que reportan Aperion e IGA. El argumento de EEUU (solo mano de obra) da 13.7 años en Guatemala.
2. **El integrador sí es rentable si las tiendas compran:** cubre fijos con unas 3 tiendas al año. El cuello de botella es la venta, no la operación. Los números del integrador en "base" y "farmacia" suponen ritmos de compra que el caso del cliente todavía no justifica.
3. **El escenario favorable apila todo a favor a la vez.** Es un techo, no una predicción. Sirve para ver qué combinación hace falta: muchos cambios por semana, hardware barato y algo de mejora de margen.
4. **Farmacia, tal como está supuesta, es peor que supermercado.** Menos cambios por tienda. Se rompe el supuesto si las farmacias cambian precios mucho más seguido o si se cobra por cadena (integración una vez para 200–400 sucursales).

## Qué información permitiría cuantificar mejor

| Dato | Variable que fija | Cómo obtenerlo |
|---|---|---|
| Cambios de precio por semana y por tienda | cambiosSemana | Exportación del POS de 1 cliente (4 semanas) |
| Tiempo real por cambio | minCambio | Cronometrar 30 cambios en tienda |
| Tasa de discrepancia góndola–caja | margenPct, multas | Auditoría de 300 SKU por tienda |
| Ventas por tienda y margen | ventasTienda | Cliente o estados financieros públicos |
| Cotización FOB y licencia de 2–3 marcas | hwEtiqueta, licencia | Solicitud formal a fabricantes |
| Partida arancelaria y DAI | internacion | Agente aduanal |
