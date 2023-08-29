import { Comment } from '../components/Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';

// author: { avatar_url: "", name: {""}, role: {""} , }
// puclishedAt: Date
// content: String

export function Post(props) {

    console.log(props);
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    
                    <Avatar 
                        src="https://avatars.githubusercontent.com/u/73973149?v=4" alt="" 
                    />

                    <div className={styles.authorInfo}>
                        <strong>Felipe Duran</strong>
                        <span>FrontEnd</span>
                    </div>
                </div>

                <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '} 
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>
            
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="Deixe seu comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}