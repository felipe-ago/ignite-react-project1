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

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/felipe-ago.png",
      name: "Felipe Oliveira",
      role: "Desenvolvedor Front-End",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-04-03 09:26:23"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Roney Oliveira",
      role: "Supervisor de TI",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-02-04 17:26:23"),
  },
];
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
