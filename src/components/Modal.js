import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewComment, loadPosts } from '../redux/actions';
import { NavLink, useParams } from 'react-router-dom';

const Modal = ({ active, setActive }) => {
  const dispatch = useDispatch();

  const params = useParams().id;

  const comments = useSelector((state) => state.posts.items.comments);
  const posts = useSelector((state) => state.posts.items);

  useEffect(() => {
    if (params !== undefined) {
      dispatch(loadPosts(params));
    }
  }, [dispatch, params]);

  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const addComment = (text) => {
    dispatch(addNewComment(text));

    setName('');
    setText('');
  };

  return (
    <div className={active ? 'modal active' : 'modal'}>
      <div className="modal-content">
        <div className="modal-body">
          <div className="modal-img">
            <div>
              <img className="pic" src={posts.url} alt="" />
            </div>
          </div>
          <div className="modal-comment">
            <div className="comment-text">
              {comments === undefined
                ? ''
                : comments.map((comment) => {
                    return (
                      <div>
                        <p className="date">
                          {new Date(comment.date)
                            .toLocaleTimeString()
                            .slice(0, -3)}
                        </p>
                        <span>{comment.text}</span>
                      </div>
                    );
                  })}
            </div>
          </div>
          <NavLink to="/">
            <div className="close" onClick={() => setActive(false)}>
              ×
            </div>
          </NavLink>
        </div>
        <div className="new-post">
          <div className="your-name">
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="your-comment">
            <input
              type="text"
              placeholder="Ваш комментарий"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div>
            <button className="modal-btn" onClick={(e) => addComment(e)}>
              Оставить комментарий
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
