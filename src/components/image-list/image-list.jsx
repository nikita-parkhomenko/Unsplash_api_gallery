import React, { Component } from 'react';
import Axios from 'axios';

import ImageItem from '../image-item/image-item';

import './image-list.css';

class ImageList extends Component {

    state = {
        images: [],
        key: 'A9GHxBCtR7BOgKnQEY0AF2LA0zAQkhq9MaeWsZr6mBE'      
    }

    imageSelectedHandler = id => {
        this.props.history.push('/' + id)
    }

    componentDidMount() {
        Axios({
            method: 'get',
            url: 'https://api.unsplash.com/photos',
            params: {
                client_id: this.state.key,
                per_page: 20
            }
        })
        .then(resp => {
            console.log(resp)
            this.setState({ images: resp.data })
        })
    }

    render() {

        const { images } = this.state;
        let imgGallery = null;

        if (images.length) {
            imgGallery = images.map( img => (
                <ImageItem key={img.id} img={img} 
                    clicked={ () => this.imageSelectedHandler(img.id)}
                />
            ))
            console.log(imgGallery)
        }

        return( 
            <div className="image-list">
             {imgGallery}
            </div>
        )
    }
};

export default ImageList;