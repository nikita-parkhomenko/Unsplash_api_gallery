import React, {Component} from 'react';
import Axios from 'axios';

import './full-size-image.css';


class FullSizeImage extends Component {
    state = {
        image: null,
        key: 'A9GHxBCtR7BOgKnQEY0AF2LA0zAQkhq9MaeWsZr6mBE'
    }

    componentDidMount() {
        this.getImage()
    }

    getImage = () => {
        console.log(this.props.match.params.id)
        const imageId = this.props.match.params.id;

        Axios({
            method: 'get',
            url: `https://api.unsplash.com/photos/${imageId}`,
            params: {
                client_id: this.state.key
            }
        })
        .then( resp => {
            console.log(resp)
            this.setState({ image: resp.data })
        })
    }

    render() {
        let fullImage = null;

        if(this.state.image) {
            fullImage = <img alt={this.state.image.alt_description} src={this.state.image.urls.regular} />
        }

        return(
            <div className="full-size-image">
               {fullImage}
            </div>
        )
    }
}

export default FullSizeImage;