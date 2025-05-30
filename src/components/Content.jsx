import React, { useState, useEffect } from 'react';
import '../css/main/Content.css';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import banner4 from '../assets/banner4.jpg';
import banner5 from '../assets/banner5.jpg';
import banner6 from '../assets/banner6.jpg';

function Content() {
  const images = [
    { src: banner1, alt: 'Space Gaming' },
    { src: banner2, alt: 'TS Comunity Brawl' },
    { src: banner3, alt: 'Brawl Stars Kingdom' },
    { src: banner4, alt: 'Design4U' },
    { src: banner5, alt: 'Raiden Comunity' },
    { src: banner6, alt: 'Evoke / Nuketown' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: '',
    tipo: '',
    oferta: '',
    descripcion: '',
  });

  const [repos, setRepos] = useState([]);
  const [repoIndex, setRepoIndex] = useState(0);

  useEffect(() => {
    fetch('https://api.github.com/users/Zer0Dev-exe/repos?per_page=100')
      .then((res) => res.json())
      .then((data) => setRepos(data.filter(repo => !repo.fork)))
      .catch((err) => console.error('Error al obtener repos:', err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias por contactarnos, ${formData.nombre}. Responderemos a ${formData.correo}.`);
    setFormData({
      nombre: '',
      correo: '',
      asunto: '',
      mensaje: '',
      tipo: '',
      oferta: '',
      descripcion: '',
    });
  };

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prevRepo = () => setRepoIndex((prev) => (prev === 0 ? repos.length - 1 : prev - 1));
  const nextRepo = () => setRepoIndex((prev) => (prev === repos.length - 1 ? 0 : prev + 1));

  return (
    <section className="content">
      <article id="habilidades" className="block block-blue">
        <h2>🧠 Habilidades</h2>
        <p>
          🛡️ Moderador experimentado con años de experiencia en gestión de comunidades<br />
          🧑‍💼 Staff Manager liderando equipos organizados y eficientes<br />
          📢 Community Manager especializado en Discord y redes sociales, incluyendo eventos y dinámicas<br />
          🤖 Desarrollador de bots: rápidos, estéticos y bien optimizados<br />
          💻 Lenguajes: <strong>JavaScript</strong>, <strong>Java</strong>, <strong>Python</strong>, <strong>HTML</strong>, <strong>CSS</strong><br />
          🗃️ Bases de datos: <strong>MongoDB</strong>, <strong>MySQL</strong><br />
          🧠 Frameworks y tecnologías: <strong>FastAPI</strong>, <strong>Django</strong>, <strong>Express</strong><br />
          🌐 Desarrollo web: <strong>Next.js</strong>, <strong>React</strong>
        </p>
      </article>

      <article id="trabajos" className="block block-purple">
        <h2>📂 Trabajos Hechos</h2>
        <p>
          🏗️ He creado y reworkeado múltiples comunidades...<br />
        </p>
        <div className="carrusel-container">
          <button className="arrow left" onClick={prevSlide}>‹</button>
          <div className="carrusel-slide">
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
          </div>
          <button className="arrow right" onClick={nextSlide}>›</button>
        </div>
        <div className="carrusel-thumbnails">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className={index === currentIndex ? 'thumbnail active' : 'thumbnail'}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </article>

      <article id="custom" className="block block-teal">
        <h2>🛠️ Proyectos GitHub</h2>
        {repos.length > 0 ? (
          <>
            <div className="carrusel-container">
              <button className="arrow left" onClick={prevRepo}>‹</button>
              <div className="carrusel-slide github-slide">
                <h3>{repos[repoIndex].name}</h3>
                <p>{repos[repoIndex].description || 'Sin descripción'}</p>
                <a href={repos[repoIndex].html_url} target="_blank" rel="noopener noreferrer">
                  🔗 Ver en GitHub
                </a>
              </div>
              <button className="arrow right" onClick={nextRepo}>›</button>
            </div>
            <div className="carrusel-thumbnails">
              {repos.slice(0, 6).map((repo, index) => (
                <button
                  key={repo.id}
                  className={index === repoIndex ? 'thumbnail active' : 'thumbnail'}
                  onClick={() => setRepoIndex(index)}
                >
                  {repo.name}
                </button>
              ))}
            </div>
          </>
        ) : (
          <p>Cargando proyectos desde GitHub...</p>
        )}
      </article>

      <article id="crear-pedido" className="block block-red">
        <h2>📝 Crear Pedido (bot o servidor)</h2>
        <p>
          ✨ Desarrollo de bots o servidores personalizados...<br />
        </p>
        <form className="soporte-form" onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />

          <label htmlFor="correo">Correo electrónico:</label>
          <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} required />

          <label htmlFor="tipo" className="form-label destacado">¿Qué deseas pedir?</label>
          <select id="tipo" name="tipo" value={formData.tipo} onChange={handleChange} className="form-select" required>
            <option value="">Selecciona una opción</option>
            <option value="Bot Discord">🤖 Bot de Discord</option>
            <option value="Servidor Discord">🌐 Servidor de Discord</option>
          </select>

          <label htmlFor="oferta">Oferta (€):</label>
          <input type="number" id="oferta" name="oferta" value={formData.oferta} onChange={handleChange} required />

          <label htmlFor="descripcion">📝 Descripción del proyecto:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
            rows="4"
          ></textarea>

          <button type="submit">Enviar Pedido</button>
        </form>
      </article>

      <article id="soporte" className="block block-gray">
        <h2>💡 Soporte</h2>
        <p>🧰 Asistencia técnica para bots y servidores...</p>
        <form className="soporte-form" onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />

          <label htmlFor="correo">Correo electrónico:</label>
          <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} required />

          <label htmlFor="asunto">Asunto:</label>
          <input type="text" id="asunto" name="asunto" value={formData.asunto} onChange={handleChange} required />

          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            rows="4"
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </article>
    </section>
  );
}

export default Content;
