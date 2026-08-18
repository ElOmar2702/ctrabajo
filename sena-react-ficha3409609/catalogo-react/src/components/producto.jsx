export default function Producto({ nombre, descripcion, precio, categoria, imagen }) {
  const precioFormateado = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(precio);

  return (
    <article className="tarjeta-producto">
      <div className="imagen-contenedor">
        <span className="categoria-tag">{categoria}</span>
        <img src={imagen} alt={nombre} className="imagen-producto" />
      </div>
      <div className="contenido-producto">
        <h3 className="titulo-producto">{nombre}</h3>
        <p className="descripcion-producto">{descripcion}</p>
        <div className="pie-tarjeta">
          <span className="precio-producto">{precioFormateado}</span>
          <button className="boton-comprar">Ver detalle</button>
        </div>
      </div>
    </article>
  );
}