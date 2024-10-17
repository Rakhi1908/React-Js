import React, { useRef, useState } from 'react';

export default function Form() {
    const nameRef = useRef();
    const commentRef = useRef();
    const [comments, setComments] = useState([]);

    const Submitbtn = (e) => {
        e.preventDefault();

        const newComment = {
            name: nameRef.current.value,
            comment: commentRef.current.value,
        };

        setComments([...comments, newComment]);

        nameRef.current.value = '';
        commentRef.current.value = '';
    };

    return (
        <div>
            <form onSubmit={Submitbtn}>
                <div>
                    <input type="text" placeholder="Your Name" ref={nameRef} />
                </div>
                <div>
                    <textarea placeholder="Your Comment" ref={commentRef}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>

            <div>
                {comments.length > 0 ? (
                    <ul>
                        {comments.map((c, i) => (
                            <li key={i}>
                                <strong>{c.name}</strong>: {c.comment}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No comments yet.</p>
                )}
            </div>
        </div>
    );
}