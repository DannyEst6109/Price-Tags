// Modelo ESL Guatemala — lo usan simulador.html (navegador) y node (para la bitácora).
// Todas las cifras en US$. Cada parámetro tiene base / favorable / desfavorable.
(function (root) {
  // ---------- 1. Caso del cliente: una tienda ----------
  const CLIENTE = [
    // id, etiqueta, unidad, base, fav, desf, nota/fuente
    ["etiquetas", "Etiquetas por tienda", "u", 10000, 10000, 10000, "Supuesto: supermercado mediano GT. EEUU: 30–40 mil (PDF p.3)"],
    ["hwEtiqueta", "Precio etiqueta (FOB)", "US$/u", 6, 4.5, 9, "PDF p.3: US$5–15 en EEUU; marcas chinas de 2º nivel más baratas"],
    ["internacion", "Flete + DAI + agente", "%", 15, 10, 25, "Supuesto. DAI exacto por partida: abierto. IVA 12% acreditable, no se cuenta"],
    ["infraTienda", "Gateways, red y rieles", "US$/tienda", 4000, 2500, 8000, "PDF p.3: US$15–50 mil en EEUU; escalado a GT, por validar"],
    ["instalEtiqueta", "Instalación y depuración", "US$/etiqueta", 0.6, 0.4, 1.0, "Supuesto con mano de obra local"],
    ["integracion", "Integración POS/ERP", "US$/tienda", 3000, 1500, 8000, "Supuesto. La 1ª tienda de una cadena cuesta más"],
    ["licencia", "Licencia + soporte", "US$/etiqueta/año", 0.6, 0.4, 1.0, "PDF p.3: US$10–40 mil/tienda/año en EEUU"],
    ["reposicion", "Reposición anual (roturas)", "% del hardware", 1.5, 1, 3, "Supuesto"],
    ["cambiosSemana", "Cambios de precio por semana", "cambios", 1500, 2500, 600, "Supuesto. Dato clave a medir en entrevistas"],
    ["minCambio", "Minutos por cambio manual", "min", 2, 2.5, 1.5, "PDF p.3: 1–2 min en EEUU"],
    ["costoHora", "Costo por hora con prestaciones", "US$/h", 4.1, 5, 3.5, "Salario mín. CE1 2026 Q4,252 + ~42% prestaciones ÷190 h ÷ Q7.62"],
    ["papelCambio", "Papel e impresión por cambio", "US$", 0.03, 0.05, 0.02, "Supuesto"],
    ["ventasTienda", "Ventas anuales por tienda", "US$", 3000000, 4000000, 2000000, "Supuesto. Pedir dato real al cliente"],
    ["margenPct", "Mejora de margen (exactitud, rebajas, promos)", "% de ventas", 0.2, 0.5, 0.05, "Supuesto. Es la variable que más mueve el caso"],
    ["multas", "Multas y reclamos evitados", "US$/año", 500, 2000, 0, "Supuesto. Monto de sanciones Diaco: abierto"],
    ["otros", "Otros beneficios (pedidos en línea, etc.)", "US$/año", 0, 3000, 0, "Supuesto"],
    ["tasa", "Tasa de descuento", "%", 12, 10, 15, "Supuesto"],
  ];

  // ---------- 2. Negocio del integrador ----------
  const INTEGRADOR = [
    ["tiendasAnio1", "Tiendas instaladas año 1", "tiendas", 4, 8, 2, "Supuesto: piloto + 1 cadena"],
    ["crecimiento", "Crecimiento anual de tiendas", "%", 50, 80, 20, "Supuesto"],
    ["margenHw", "Margen sobre hardware", "%", 20, 25, 12, "Supuesto. Por confirmar con fabricantes"],
    ["margenServ", "Margen sobre instalación e integración", "%", 45, 55, 30, "Supuesto"],
    ["partLicencia", "Parte del integrador en la licencia", "%", 40, 50, 25, "Supuesto. Por confirmar con fabricantes"],
    ["fijos", "Costos fijos (equipo, oficina)", "US$/año", 60000, 50000, 80000, "Supuesto: 1 técnico, 1 dev, ventas a medio tiempo"],
    ["inversionInicial", "Inversión inicial (demo, inventario, conector)", "US$", 30000, 20000, 50000, "Supuesto"],
  ];

  const defaults = (tabla, col) => Object.fromEntries(tabla.map(r => [r[0], r[col]]));
  const ESCENARIOS = {
    base: { ...defaults(CLIENTE, 3), ...defaults(INTEGRADOR, 3) },
    favorable: { ...defaults(CLIENTE, 4), ...defaults(INTEGRADOR, 4) },
    desfavorable: { ...defaults(CLIENTE, 5), ...defaults(INTEGRADOR, 5) },
  };
  // Farmacia de cadena: base con menos etiquetas, menos cambios y menos ventas (todo supuesto).
  ESCENARIOS.farmacia = { ...ESCENARIOS.base, etiquetas: 3000, cambiosSemana: 300, ventasTienda: 700000,
    infraTienda: 1500, integracion: 1500, tiendasAnio1: 15 };

  function cliente(p) {
    const hw = p.etiquetas * p.hwEtiqueta * (1 + p.internacion / 100);
    const instal = p.etiquetas * p.instalEtiqueta;
    const capex = hw + p.infraTienda + instal + p.integracion;
    const cambiosAnio = p.cambiosSemana * 52;
    const horas = cambiosAnio * p.minCambio / 60;
    const ahorroMO = horas * p.costoHora;
    const ahorroPapel = cambiosAnio * p.papelCambio;
    const ahorroMargen = p.ventasTienda * p.margenPct / 100;
    const beneficios = ahorroMO + ahorroPapel + ahorroMargen + p.multas + p.otros;
    const opex = p.etiquetas * p.licencia + hw * p.reposicion / 100;
    const neto = beneficios - opex;
    const repagoAnios = neto > 0 ? capex / neto : Infinity;
    let van = -capex;
    for (let t = 1; t <= 5; t++) van += neto / Math.pow(1 + p.tasa / 100, t);
    const soloMO = ahorroMO + ahorroPapel - opex;
    return {
      hw, instal, capex, capexPorEtiqueta: capex / p.etiquetas, horas, ahorroMO, ahorroPapel,
      ahorroMargen, beneficios, opex, neto, repagoAnios, van5: van,
      repagoSoloMO: soloMO > 0 ? capex / soloMO : Infinity,
      // ¿Cuánta mejora de margen hace falta para pagar en 2 años?
      margenParaRepago2: Math.max(0, (capex / 2 + opex - ahorroMO - ahorroPapel - p.multas - p.otros) / p.ventasTienda * 100),
    };
  }

  function integrador(p) {
    const c = cliente(p);
    const anios = [];
    let tiendas = p.tiendasAnio1, base = 0, caja = -p.inversionInicial;
    for (let a = 1; a <= 5; a++) {
      const nuevas = Math.round(tiendas);
      const ventasHw = nuevas * (c.hw + p.infraTienda);
      const ventasServ = nuevas * (c.instal + p.integracion);
      base += nuevas;
      const ingresoRec = base * p.etiquetas * p.licencia;
      const margen = ventasHw * p.margenHw / 100 + ventasServ * p.margenServ / 100 + ingresoRec * p.partLicencia / 100;
      const ebitda = margen - p.fijos;
      caja += ebitda;
      anios.push({ anio: a, nuevas, base, ingresos: ventasHw + ventasServ + ingresoRec, margen, recurrente: ingresoRec * p.partLicencia / 100, ebitda, caja });
      tiendas *= 1 + p.crecimiento / 100;
    }
    const margenPorTienda = (c.hw + p.infraTienda) * p.margenHw / 100 + (c.instal + p.integracion) * p.margenServ / 100;
    const recPorTienda = p.etiquetas * p.licencia * p.partLicencia / 100;
    return { anios, margenPorTienda, recPorTienda, tiendasEquilibrio: p.fijos / (margenPorTienda + recPorTienda) };
  }

  // Sensibilidad: mueve cada parámetro ±30% y mide el repago del cliente.
  function sensibilidad(p, delta = 0.3) {
    const base = cliente(p).repagoAnios;
    return CLIENTE.filter(r => !["etiquetas", "tasa"].includes(r[0])).map(([id, nombre]) => {
      const lo = cliente({ ...p, [id]: p[id] * (1 - delta) }).repagoAnios;
      const hi = cliente({ ...p, [id]: p[id] * (1 + delta) }).repagoAnios;
      const cap = x => Math.min(x, 15);
      return { id, nombre, lo, hi, rango: Math.abs(cap(hi) - cap(lo)), base };
    }).sort((a, b) => b.rango - a.rango);
  }

  const api = { CLIENTE, INTEGRADOR, ESCENARIOS, cliente, integrador, sensibilidad };
  if (typeof module !== "undefined") module.exports = api; else root.ModeloESL = api;
})(this);
