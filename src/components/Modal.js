import React from 'react';

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"}>
            <div className="modal-content">
                <div className="modal-body">
                    <div className="modal-img">
                        <div className="pic"> </div>
                    </div>
                    <div className="new-post">
                        <div className="your-name">
                            <input
                                type="text"
                                placeholder="Ваше имя"
                            />
                        </div>
                        <div className="your-comment">
                            <input
                                type="text"
                                placeholder="Ваш комментарий"
                            />
                        </div>
                        <div>
                            <button className="modal-btn">
                                Оставить комментарий
                            </button>
                        </div>
                    </div>
                </div>
                <div className="modal-comment">
                    <div className="comm">
                        Отлично
                    </div>
                </div>
                <div className="close" onClick={() => setActive(false)}>
                    ×
                </div>
            </div>
        </div>
    );
}

export default Modal;