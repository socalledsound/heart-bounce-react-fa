import React from 'react'
import Heart from './Heart'

const containerStyle = {
    display : 'flex',
    flexWrap : 'wrap',
    flexDirection: 'row',
    padding: '50px',
}

const hearts = Array.from({length : 9})

const App = () => {
    return ( 
        // <div style={containerStyle}>
        //     {hearts.map( heart => <Heart />)}
        // </div>
        <Heart centered={true}/>
     );
}
 
export default App;
