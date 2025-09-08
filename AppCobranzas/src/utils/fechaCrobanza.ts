export const calcularFechaCobranza = (fechaContrato: string): string => {

  const fecha = new Date(fechaContrato + 'T00:00:00');

  
  fecha.setDate(fecha.getDate() + 30);

 
  const anio = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, '0');
  const dia = String(fecha.getDate()).padStart(2, '0');

  return `${anio}-${mes}-${dia}`;
};