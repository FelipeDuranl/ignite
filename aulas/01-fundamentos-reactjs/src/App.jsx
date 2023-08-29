import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

// author: { avatar_url: "", name: {""}, role: {""} , }
// puclishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatar_url: 'https://github.com/FelipeDuranl.png',
      name: 'Felipe Duran',
      role: 'FrontEnd @Microsoft',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
      {type: 'link', content: 'jane.design/doctorcare'},
                
    ],
    publishedAt: new Date('2023-08-11 08:13:00'),
  },

  {
    id: 2,
    author: {
      avatar_url: 'https://github.com/Igor-Gallo.png',
      name: 'Igor Gallo',
      role: 'Devops @Google',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
      {type: 'link', content: 'jane.design/doctorcare'},
                
    ],
    publishedAt: new Date('2023-08-15 10:13:00'),
  },
];

export function App() {


  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map(post => {
          return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
        </main>
      </div>
    </div>
  )
}