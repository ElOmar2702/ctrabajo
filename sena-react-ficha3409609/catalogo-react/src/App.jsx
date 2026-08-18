import Producto from './components/producto';
import heroImg from './assets/hero.png';
import downloadImg from './components/download.jpg';
import './App.css';

const PRODUCTOS_CATALOGO = [
  {
    id: 1,
    nombre: "Café Especial de Origen",
    descripcion: "Café en grano 100% Arábica con notas a chocolate, caramelo y un tueste artesanal medio.",
    precio: 28000,
    categoria: "Cafetería",
    imagen: heroImg
  },
  {
    id: 2,
    nombre: "Set de Tazas Cerámicas",
    descripcion: "Juego de 2 tazas artesanales de cerámica con acabado mate, ideales para filtrados.",
    precio: 45000,
    categoria: "Accesorios",
    imagen: downloadImg
  },
  {
    id: 3,
    nombre: "Prensa Francesa 600ml",
    descripcion: "Cafetera de émbolo en vidrio borosilicato resistente al calor y filtro de acero inoxidable.",
    precio: 62000,
    categoria: "Métodos",
    imagen: heroImg
  },
  {
    id: 4,
    nombre: "Molinillo Manual de Café",
    descripcion: "Molinillo con muelas cerámicas ajustables para un molido uniforme desde espresso hasta prensa.",
    precio: 85000,
    categoria: "Molinillos",
    imagen: downloadImg
  },
  {
    id: 5,
    nombre: "Goteador V60 Cerámico",
    descripcion: "Dripper para extracción por goteo con diseño cónico acanalado para optimizar el flujo de agua.",
    precio: 38000,
    categoria: "Métodos",
    imagen: heroImg
  }
];

function App() {
  return (
    <div className="contenedor-principal">
      <header className="encabezado-app">
        <div className="hero-banner">
          <div className="hero-texto">
            <span className="badge-sena">SENA - Ficha 3409609</span>
            <h1>Catálogo de Productos</h1>
            <p>Explora nuestra selección exclusiva de accesorios y café especial.</p>
          </div>
          <img src={heroImg} alt="Hero Banner" className="hero-imagen" />
        </div>
      </header>

      <main className="seccion-catalogo">
        <div className="catalogo-header">
          <h2>Nuestros Productos ({PRODUCTOS_CATALOGO.length})</h2>
          <p>Componentes reutilizables renderizados dinámicamente con React y Vite.</p>
        </div>

        <div className="grid-productos">
          {PRODUCTOS_CATALOGO.map((producto) => (
            <Producto
              key={producto.id}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              categoria={producto.categoria}
              imagen={producto.imagen}
            />
          ))}
        </div>
      </main>

      <footer className="pie-pagina">
        <p>&copy; 2026 Catálogo React SENA | Desarrollado con Vite y React</p>
      </footer>
    </div>
  );
}

export default App;