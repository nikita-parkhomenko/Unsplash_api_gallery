import React from 'react';

import './image-item.css';

const ImageItem = ({ img, clicked }) => (
    <div className="image-item" onClick={clicked} >
        <img alt={img.alt_description} src={img.urls.thumb} />
        <span> Author: {img.user.name} </span>
    </div>
);

export default ImageItem;