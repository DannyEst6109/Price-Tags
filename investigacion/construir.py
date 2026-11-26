# Genera simulador.html (autocontenido, el que se publica) a partir de simulador.src.html + modelo.js.
# Uso: python3 construir.py
from pathlib import Path
d = Path(__file__).parent
html = (d / "simulador.src.html").read_text()
modelo = (d / "modelo.js").read_text()
out = html.replace('<script src="modelo.js"></script>', "<script>\n" + modelo + "</script>")
(d / "simulador.html").write_text(out)
print("simulador.html generado")
