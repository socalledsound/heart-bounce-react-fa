import React, { useState } from 'react'//npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
import { faHeart as HeartSolid} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './heart.css'

const Heart = ({centered}) => {
 
    const [bounceState, toggleBounceState ] = useState(false);
    const [likes, incrementLikes] = useState(0);

    const bounce = () => {
        // this.setState({bounceState : true, likes: this.state.likes + 1});
        toggleBounceState(true);
        incrementLikes(likes + 1);
        setTimeout(() => {
            toggleBounceState(false)
        }, 600
        );
    }

        return (
            <div className={`box ${centered ? 'centered' : ''}`} >
                <FontAwesomeIcon 
                    icon={HeartSolid} 
                    className={`heart ${bounceState ? 'bounce' : ''} `}  
                    onClick={bounce}
                />
                {bounceState && <p className={'plus1 rise'}>+1</p> }
                {likes > 0 && !bounceState ? <p className={'likes'}>{likes}</p> : null}
            </div>

        )
    }

export default Heart