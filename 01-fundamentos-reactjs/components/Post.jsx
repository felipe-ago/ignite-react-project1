import { Comment } from "./Comment";
import styles from "./Post.module.css";


export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/felipe-ago.png"
          />
          <div className={styles.authorInfo}>
            <strong>Felipe Oliveira</strong>
            <span>Front-End Developer</span>
          </div>
        </div>

        <time title="23 de Março às 15:48h" dateTime="2023-03-23">
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto </a>
          <a href="">#nlw </a>
          <a href="">#rocketseat </a>
        </p>
      </div>

      <form className={styles.comentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea placeholder="Deixe um comentário..." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.coometList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  );
}
