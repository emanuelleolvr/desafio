
"use client";

import styles from "./principal.module.css";

const destaques = [
    {
        titulo: "Primeira publicação",
        imagem: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700"
    },
    {
        titulo: "Segunda publicação",
        imagem: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700"
    },
    {
        titulo: "Terceira publicação",
        imagem: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
    }
];

const atividades = [
    {
        titulo: "Desenvolvimento de projetos",
        texto: "Compartilhando experiências, aprendizados e novidades sobre tecnologia e desenvolvimento de sistemas.",
        imagem: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300"
    },
    {
        titulo: "Aprendizado e tecnologia",
        texto: "Estudar, desenvolver projetos e buscar novos conhecimentos são partes importantes da minha trajetória profissional.",
        imagem: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300"
    }
];

function Navbar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={styles.logo}>in</div>

                <input
                    className={styles.search}
                    placeholder="⌕  Pesquisar"
                />

                <nav className={styles.navLinks}>
                    <a href="#inicio">
                        <span>⌂</span>
                        Início
                    </a>

                    <a href="#rede">
                        <span>♧</span>
                        Minha rede
                    </a>

                    <a href="#experiencias">
                        <span>▣</span>
                        Vagas
                    </a>

                    <a href="#atividades">
                        <span>▤</span>
                        Mensagens
                    </a>

                    <a href="#destaques">
                        <span>♧</span>
                        Notificações
                    </a>

                    <a href="#sobre">
                        <span>▦</span>
                        Soluções
                    </a>
                </nav>
            </div>
        </header>
    );
}

function PerfilHeader() {
    return (
        <section className={styles.profileCard} id="inicio">

            <div className={styles.cover}>
                <div className={styles.coverOverlay}></div>
            </div>

            <div className={styles.profileContent}>

                <img
                    className={styles.profilePhoto}
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300"
                    alt="Foto de perfil"
                />

                <div className={styles.profileInfo}>
                    <div>
                        <h1>Nome Sobrenome</h1>

                        <h3>
                            Desenvolvedora | HTML | CSS | JavaScript | React
                        </h3>

                        <p>
                            Fala sobre desenvolvimento de sistemas,
                            tecnologia, programação e inovação.
                        </p>

                        <p className={styles.location}>
                            Cidade, estado e país ·
                            <a href="#contato"> informações de contato</a>
                        </p>

                        <a href="#rede" className={styles.followers}>
                            500 seguidores · 300 conexões
                        </a>

                        <div className={styles.profileButtons}>
                            <button>Mensagem</button>
                            <button>Mais</button>
                        </div>
                    </div>

                    <div className={styles.profileOrganizations}>
                        <div>
                            <div className={styles.organizationIcon}>E</div>
                            <strong>Empresa</strong>
                        </div>

                        <div>
                            <div className={styles.organizationIcon}>S</div>
                            <strong>Instituição de ensino</strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Destaques() {
    return (
        <section className={styles.sectionCard} id="destaques">
            <h2>Destaques</h2>

            <div className={styles.highlights}>
                {destaques.map((item, index) => (
                    <article className={styles.highlight} key={index}>
                        <div className={styles.highlightText}>
                            <span>Publicação</span>
                            <p>{item.titulo}</p>
                        </div>

                        <img src={item.imagem} alt={item.titulo} />

                        <div className={styles.highlightFooter}>
                            <span>🔵 🟢 🟠 124</span>
                            <span>5 comentários</span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

function Atividades() {
    return (
        <section className={styles.sectionCard} id="atividades">
            <h2>Atividades</h2>

            <a className={styles.followers} href="#rede">
                500 seguidores
            </a>

            {atividades.map((item, index) => (
                <article className={styles.activity} key={index}>
                    <p className={styles.activityAuthor}>
                        Emanuelle Olvr publicou isso · 1 sem
                    </p>

                    <div className={styles.activityContent}>
                        <img src={item.imagem} alt="" />

                        <p>
                            <strong>{item.titulo}</strong>
                            <br />
                            {item.texto}
                        </p>
                    </div>

                    <div className={styles.activityFooter}>
                        <span>🔵 🟢 🟠 124</span>
                        <span>5 comentários</span>
                    </div>
                </article>
            ))}

            <button className={styles.showMore}>
                Exibir todas as atividades
            </button>
        </section>
    );
}

function Sobre() {
    return (
        <section className={styles.sectionCard} id="sobre">
            <h2>Sobre</h2>

            <p>
                Sou uma profissional interessada em tecnologia,
                desenvolvimento de sistemas e inovação. Busco
                constantemente aprender novas ferramentas,
                desenvolver minhas habilidades e participar
                de projetos que proporcionem crescimento
                pessoal e profissional.
            </p>
        </section>
    );
}

function Experiencias() {
    return (
        <section className={styles.sectionCard} id="experiencias">
            <h2>Experiências</h2>

            <div className={styles.experience}>
                <div className={styles.experienceIcon}>E</div>

                <div>
                    <strong>Empresa</strong>
                    <p>1 ano e 7 meses</p>

                    <div className={styles.timeline}>
                        <div>
                            <strong>Desenvolvedora Fullstack</strong>
                            <p>Tempo integral</p>
                            <small>Janeiro de 2025 - atualmente</small>
                            <small>Cidade, estado e país</small>
                        </div>

                        <div>
                            <strong>Desenvolvedora Front-end</strong>
                            <p>Tempo integral</p>
                            <small>Junho de 2024 - Janeiro de 2025</small>
                            <small>Cidade, estado e país</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Formacao() {
    return (
        <>
            <section className={styles.sectionCard}>
                <h2>Formação acadêmica</h2>

                <div className={styles.education}>
                    <div className={styles.organizationIcon}>S</div>

                    <div>
                        <strong>Instituição de ensino</strong>
                        <p>Desenvolvimento de Sistemas</p>
                        <small>2024 - 2026</small>
                    </div>
                </div>
            </section>

            <section className={styles.sectionCard}>
                <h2>Idiomas</h2>

                <div className={styles.language}>
                    <strong>Português</strong>
                    <p>Fluente ou nativo</p>
                </div>

                <div className={styles.language}>
                    <strong>Inglês</strong>
                    <p>Intermediário</p>
                </div>
            </section>
        </>
    );
}

function Sidebar() {
    const pessoas = [
        "Mariana Oliveira",
        "Lucas Santos",
        "Ana Carolina",
        "Gabriel Costa",
        "Julia Martins"
    ];

    return (
        <aside className={styles.sidebar}>
            <section className={styles.sideCard}>
                <h3>As pessoas também viram</h3>

                {pessoas.map((nome, index) => (
                    <div className={styles.person} key={index}>
                        <div className={styles.personPhoto}>
                            {nome.charAt(0)}
                        </div>

                        <div>
                            <strong>{nome}</strong>
                            <p>Desenvolvimento e tecnologia</p>
                            <button>Enviar mensagem</button>
                        </div>
                    </div>
                ))}
            </section>

            <section className={styles.sideCard} id="rede">
                <h3>Pessoas que talvez você conheça</h3>

                {pessoas.slice().reverse().map((nome, index) => (
                    <div className={styles.person} key={index}>
                        <div className={styles.personPhoto}>
                            {nome.charAt(0)}
                        </div>

                        <div>
                            <strong>{nome}</strong>
                            <p>Profissional de tecnologia</p>
                            <button>Conectar</button>
                        </div>
                    </div>
                ))}
            </section>
        </aside>
    );
}

export default function Principal() {
    return (
        <main className={styles.page}>
            <Navbar />

            <div className={styles.layout}>
                <div className={styles.mainColumn}>
                    <PerfilHeader />
                    <Destaques />
                    <Atividades />
                    <Sobre />
                    <Experiencias />
                    <Formacao />
                </div>

                <Sidebar />
            </div>
        </main>
    );
}
