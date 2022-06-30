import React from 'react';
import './Header.css'



function Header(props) {
    const logo = <img src="https://store-images.s-microsoft.com/image/apps.30639.14333131082952141.cb2d9052-8c5a-4865-bd85-9c570f0ba734.d5868cd4-16c9-4685-80ad-383db4c422a5" alt="logo" />
    return (
        <div className='header'>
            <div className='logo'>{logo}</div>
            <h3 className='header__name'>Awesome</h3>
        </div>
    );
}

export default Header;