import React from 'react';

function Home() {
return (
    < div 
        style={{
        position:'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        backgroundColor: 'black', 
        color: 'white',           
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}> 
        <h1>Welcome to Home Page!</h1>
    </div>
);
}
export default Home;