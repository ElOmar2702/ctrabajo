import Producto from './components/producto';
import heroImg from './components/A1.jpg';
import downloadImg from './components/download.jpg';
import './App.css';

const PRODUCTOS_CATALOGO = [
  {
    id: 1,
    nombre: "Café",
    descripcion: "Café en grano",
    precio: 28000,
    categoria: "Cafetería",
    imagen: heroImg
  },
  {
    id: 2,
    nombre: "Pastel",
    descripcion: "Pastel Delicioso",
    precio: 45000,
    categoria: "Accesorios",
    imagen: downloadImg
  },
  {
    id: 3,
    nombre: "Otro Cafe",
    descripcion: "Café super delicioso y natural",
    precio: 62000,
    categoria: "Métodos",
    imagen: heroImg
  },
  {
    id: 4,
    nombre: "Otro pastel",
    descripcion: "Un pastel muy delicioso",
    precio: 85000,
    categoria: "Molinillos",
    imagen: downloadImg
  },
  {
    id: 5,
    nombre: "Café pero mejor",
    descripcion: "es otro café que es mas rico",
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
            <h1>Catálogo de Productos</h1>
            <p>Explora el café y pasteles que tenemos para ofrecerte.</p>
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