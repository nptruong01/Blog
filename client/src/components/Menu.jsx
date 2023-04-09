import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Menu = ({ cat }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/?cat=${cat}`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [cat]);

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }

    return (
        <div className="menu">
            <h1>Có thể bạn sẽ quan tâm</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <img src={`../upload/${post?.img}`} alt="" />
                    <Link className="link" to={`/post/${post.id}`}>
                        <h2>{getText(post.title)}</h2>
                    </Link>

                    {/* <button>Read More</button> */}
                </div>
            ))}
        </div>
    )
}

export default Menu