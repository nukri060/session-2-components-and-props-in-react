function Post({ title, paragraph, author }) {
    return (
        <article className="post">
            <h3>{title}</h3>
            <p> {paragraph}
            </p>
            <p>
                <strong>Author:</strong> {author}
            </p>
        </article>
    )
}

export default Post;