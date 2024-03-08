import React from 'react'

const HeaderComponent = () => {
    return (
        <div className='headerComponent'>
            <h1>Testing Inc</h1>
            <ol>
                <li><a href="#">Home</a></li>
                <li><a href="#">Testing</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Join</a></li>
            </ol>
        </div>
    );
}

export default HeaderComponent;