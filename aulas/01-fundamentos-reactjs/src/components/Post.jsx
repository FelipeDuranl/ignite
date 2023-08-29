import { useState } from 'react';

import { format, formatDistanceToNow, set } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Comment } from '../components/Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';

export function Post({author, publishedAt, content}) {
    const [comments, setComments] = useState([
        1,
        2,
    ])

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL yyyy 'às' HH:mm'h'", {locale: ptBR});

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, 
        {locale: ptBR,
        addSuffix: true
    })

    function handleCommentSubmit() {
        event.preventDefault();

        setComments([...comments, comments.length + 1])

        console.log(comments);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    
                    <Avatar 
                        src={author.avatarUrl}
                    />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>
            
            <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="Deixe seu comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment />
                })}
            </div>
        </article>
    )
}