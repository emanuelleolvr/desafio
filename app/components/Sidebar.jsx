import styles from "./Sidebar.module.css";

export default function Sidebar({ titulo, textoBotao }) {
  const fotos = [
    "https://unsplash.com",
    "https://unsplash.com",
    "https://unsplash.com",
    "https://unsplash.com",
    "https://unsplash.com",
  ];

  return (
    <aside className={styles.card}>
      <h2 className={styles.titulo}>{titulo}</h2>
      {fotos.map((foto, index) => (
        <div key={index} className={styles.item}>
          <img src={foto} alt="Avatar" className={styles.foto} />
          <div className={styles.info}>
            <p className={styles.nome}>Nome e sobrenome</p>
            <p className={styles.cargo}>
              Título, cargo e tecnologias. Lorem Ipsum Dolor sit Amet
            </p>
            <button className={styles.botao}>{textoBotao}</button>
          </div>
        </div>
      ))}
    </aside>
  );
}
