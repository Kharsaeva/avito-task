import React  from 'react';
import {useSelector} from "react-redux";
import Image from "./Image";
import {Route} from "react-router-dom";

function Images(props) {
    const images = useSelector(state => state.images.items);
    const loading = useSelector(state => state.images.loading);

    if (loading) {
        return (
            <p className="load-text">
                loading images...
            </p>
        )
    }

    return (
        <Route path="/:id?">
            <div className="images">
                {images.map(image => {
                    return <Image
                        key={image.id}
                        image={image}
                        setActive={props.setActive}
                    />
                })}
            </div>
        </Route>
    );
}

export default Images;
