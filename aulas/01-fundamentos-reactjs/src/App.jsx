import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'



export function App() {


  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
          author="Felipe Duran" 
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste distinctio voluptas tempore earum laudantium iusto odit qui veniam expedita fuga dolore ratione architecto, adipisci soluta aperiam alias, officia ducimus. Laborum."
        />

        <Post 
          author="Julia Andrade" 
          content="Um novo post muito legal"
        />
        </main>
      </div>
    </div>
  )
}