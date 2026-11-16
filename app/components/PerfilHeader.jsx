import styles from "./PerfilHeader.module.css";

export default function PerfilHeader() {
  return (
    <section className={styles.card}>
      {/* Banner simulando o editor de código da foto */}
      <div className={styles.banner}>
        <div className={styles.codigoFake}>
          <p><span className={styles.azul}>&gt; 📁 public</span></p>
          <p><span className={styles.azul}>v 📁 src</span></p>
          <p className={styles.indent}><span className={styles.rosa}>S</span> app.scss</p>
          <p className={styles.indent}><span className={styles.laranja}>S</span> App.svelte</p>
          <p className={styles.indent}><span className={styles.laranja}>S</span> Column.svelte</p>
          <p className={styles.indent}><span className={styles.amarelo}>JS</span> main.js</p>
          <p><span className={styles.cinza}>.gitignore</span></p>
        </div>
      </div>

      <div className={styles.conteudo}>
        <img
          src="https://unsplash.com"
          alt="Foto de perfil"
          className={styles.avatar}
        />

        <div className={styles.infoGrid}>
          <div className={styles.colunaEsquerda}>
            <h1 className={styles.nome}>Emanuellolvr</h1>
            <p className={styles.titulo}>
              Desenvolvedora | HTML | CSS | Typescript | Node
            </p>
            <p className={styles.hashtags}>
              Fala sobre #javascript, #frontend, #reactjs, e #backend
            </p>
            <p className={styles.local}>
              Cidade, estado e país • <span className={styles.link}>informações de contato</span>
            </p>
            <p className={styles.conexoes}>??? seguidores • ??? conexões</p>

            <div className={styles.botoes}>
              <button className={styles.btnPrimario}>Mensagem</button>
              <button className={styles.btnSecundario}>Mais</button>
            </div>
          </div>

          <div className={styles.colunaDireita}>
            <div className={styles.itemInstituicao}>
              <img
                src="https://unsplash.com"
                alt="Empresa"
                className={styles.logoPequena}
              />
              <span>Empresa</span>
            </div>
            <div className={styles.itemInstituicao}>
              <img
                src="https://unsplash.com"
                alt="Instituição"
                className={styles.logoPequena}
              />
              <span>Instituição de ensino</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
