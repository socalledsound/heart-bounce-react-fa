import React, { Component } from 'react'
import { faHeart as HeartSolid} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './heart.css'

class Heart extends Component {

    state = {
        bounceState : false,
        likes : 0,
     }


    toggleBounce = () => {
        const { likes } = this.state;
        this.setState({bounceState : true, likes: likes + 1})
        setTimeout(()=> {
            this.setState({bounceState : false})
        }, 600)
    }

    render() {
        const { bounceState, likes } = this.state;
        return ( 
            <div className="centered box" onClick={this.toggleBounce}>
                <FontAwesomeIcon 
                    icon={HeartSolid}
                    className={`heart ${bounceState ? 'bounce' : ''}`}
                    
                />
                {
                    bounceState &&
                        <p className="plus1 rise">+1</p>
                }
                
                {
                    likes > 0 ? <p className="likes">{likes}</p> : null
                }
                
            </div>
         );
    }

}
 
export default Heart;