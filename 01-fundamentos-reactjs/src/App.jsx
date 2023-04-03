import { Header } from "../components/Header";
import { Post } from "../components/Post";
import { Sidebar } from "../components/Sidebar";

import styles from "./App.module.css";

import "./Global.css";

/* Elementos necessários para o projeto
author: {avatar_url:"", name: "", role:""}
publishedAt: Date
content: String
*/

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/felipe-ago.png",
      name: "Felipe Oliveira",
      role: "Desenvolvedor Front-End",
    },
  },
];
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Felipe Oliveira"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          <Post author="Roney Oliveira" content="Um Novo Post!" />
        </main>
      </div>
    </div>
  );
}

export default App;
