import React from 'react';

const Header = props => {
    const {branding} = props;
    return (
        <nav className="navbar mb-3 pt-3 pb-3 py-0  text-sm-center text-md-left">
            <div className="container">
            <a href="/" className="navbar-brand">
                {branding}
            </a>
            <ul className="navbar-nav mr-auto-right" alt="fireSpot">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <img src={"fclogo.svg"} width="145" alt="" />
                </li>
                </ul>
            </ul>
            </div>
        </nav>
    );
};

Header.defaultProps = {
    branding: "Estadisticas con React"
};

export default Header;