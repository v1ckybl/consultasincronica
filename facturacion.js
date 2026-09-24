// facturacion.js

function hora() {
  return new Date().toLocaleTimeString("es-AR");
}

// Espera bloqueante: frena el hilo, no hay nada en paralelo
function esperar(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function consulta(nombre, segundos) {
  console.log(`[${hora()}] ▶ Comienza: ${nombre}`);
  esperar(segundos * 1000);
  console.log(`[${hora()}] ✔ Termina:  ${nombre} (${segundos}s)`);
}

function main() {
  const inicio = Date.now();
  console.log("=== Sistema de facturación de tickets ===\n");

  consulta("Datos", 3);
  consulta("Facturación", 2);
  consulta("Tickets", 4);

  const total = ((Date.now() - inicio) / 1000).toFixed(1);
  console.log(`\nProceso completo en ${total}s`);
}

main();
