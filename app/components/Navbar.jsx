"use client";

import {
  FaSearch,
  FaHome,
  FaUserFriends,
  FaBriefcase,
  FaCommentDots,
  FaBell,
  FaTh,
} from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.esquerda}>
          <div className={styles.logo}>in</div>
          <div className={styles.caixaBusca}>
            <FaSearch className={styles.iconeBusca} />
            <input
              type="text"
              placeholder="Pesquisar"
              className={styles.busca}
            />
          </div>
        </div>

        <nav className={styles.menu}>
          <div className={`${styles.itemMenu} ${styles.ativo}`}>
            <FaHome size={18} />
            <span>Início</span>
          </div>
          <div className={styles.itemMenu}>
            <FaUserFriends size={18} />
            <span>Minha rede</span>
          </div>
          <div className={styles.itemMenu}>
            <FaBriefcase size={18} />
            <span>Vagas</span>
          </div>
          <div className={styles.itemMenu}>
            <FaCommentDots size={18} />
            <span>Mensagens</span>
          </div>
          <div className={styles.itemMenu}>
            <FaBell size={18} />
            <span>Notificações</span>
          </div>
          <div className={styles.divisor}></div>
          <div className={styles.itemMenu}>
            <FaTh size={18} />
            <span>Soluções</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
