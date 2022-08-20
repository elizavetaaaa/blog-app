import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="header__tab"><Link className="header__link" to={'/'}>Posts</Link></div>
            <div className="header__tab"><Link className="header__link" to={'/new-post'}>New Post</Link></div>
        </div>
    );
};

export default Header;
