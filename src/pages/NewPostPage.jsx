import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../components/NewPost.module.css";

export default function NewPostPage() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            title,
            author,
            content,
            likes: 0,
            createdAt: new Date().toISOString()
        };

        fetch("http://localhost:8080/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
            .then((response) => response.json())
            .then(() => {
                navigate("/");
            });
    };

    return (
        <div className={styles.new_post_wrapper}>
            <h2>Post your contents 🐠</h2>
            <form className={styles.new_post_form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Post</button>
            </form>
        </div>
    );
}
