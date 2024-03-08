import React from 'react'

const FooterComponent = () => {
    return (
        <div className='footerComponent'>
            <p>&#169; Testing Inc. {new Date().getFullYear()}</p>
        </div>
    )
}

export default FooterComponent;