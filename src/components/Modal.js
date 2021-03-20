import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadPosts} from "../redux/actions";
import {useParams} from "react-router-dom";

const Modal = ({active, setActive}) => {
    const dispatch = useDispatch();
    const params = useParams();

    const posts = useSelector(state => state.posts.items);
    const post = posts.map((post, id) => {
        return post === id;
    });

    useEffect(() => {
        dispatch(loadPosts(params.id));
    }, [params]);

    const [comm, setComm] = useState([]);

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    const handleChange1 = (e) => {
        setText1(e.target.value);
    }

    const handleChange2 = (e) => {
        setText2(e.target.value);
    }

    const handleClick = () => {
        setComm([{
            text: text2,
        }, ...comm])

        setText1("");
        setText2("");
    }

    return (
        <div className={active ? "modal active" : "modal"}>
            <div className="modal-content">
                <div className="modal-body">
                    <div className="modal-img">
                        <div className="pic">
                            <img src={post.url} alt=""/>
                        </div>
                    </div>
                    <div className="modal-comment">
                        <div className="comm">
                            <span className="date">20.03.2021</span>
                            <p className="text">post.comments.text}</p>
                        </div>
                    </div>
                    <div className="close" onClick={() => setActive(false)}>
                        ×
                    </div>
                </div>
                <div className="new-post">
                    <div className="your-name">
                        <input
                            type="text"
                            value={text1}
                            onChange={handleChange1}
                            placeholder="Ваше имя"
                        />
                    </div>
                    <div className="your-comment">
                        <input
                            type="text"
                            value={text2}
                            onChange={handleChange2}
                            placeholder="Ваш комментарий"
                        />
                    </div>
                    <div>
                        <button className="modal-btn" onClick={handleClick}>
                            Оставить комментарий
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;