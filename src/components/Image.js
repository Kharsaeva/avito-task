import React from 'react';
import {Link} from "react-router-dom";

function Image(props) {
    return (
        <Link to={`/${props.image.id}`}>
            <div className="image">
                <img
                    className="img"
                     src={props.image.url} alt=""
                     onClick={() => props.setActive(true)}
                />
            </div>
        </Link>
    );
}

export default Image;