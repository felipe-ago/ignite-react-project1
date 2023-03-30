import { Trash } from "phosphor-react";
import { ThumbsUp } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/felipe-ago.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Felipe Oliveira</strong>
              <time title="23 de Março às 15:48h" dateTime="2023-03-23">
                Cerca de 1h atrás
              </time>
              <button title="Deletar Comentário">
                <Trash size={20} />
              </button>
            </div>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
