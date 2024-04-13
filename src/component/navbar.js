
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="NewNavbar_nav_cont_dark__jxRzF head" style={{ display: "flex" }}>
            <nav className="NewNavbar_nav_block__Kt2BG">
                <div>
                    <a className="imgLink" href="/">
                        <img alt="logo" loading="lazy" width="80" height="70" decoding="async" data-nimg="1"
                            style={{ color: "transparent", marginTop: "8px", paddingTop: "2px" }}
                            srcSet="2Fnav_logo.e5fb945a.png"
                            src="2Fnav_logo.e5fb945a.png" />
                    </a>
                </div>
                <div className="nav__menu-bar" onClick={() => setIsOpen(!isOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="nav__menu-list">
                    <div>
                        <a className="nav__link" target="_blank" style={{ color: "black" }}
                            href="https://makemyweb.ai/">MakeMyWeb.</a>
                    </div>
                    <div>
                        <a className="nav__link active" style={{ color: "black" }} href="/">Home</a>
                    </div>
                    <div>
                        <a className="nav__link" style={{ color: "black" }} href="/about">Company</a>
                    </div>
                    <div>
                        <a className="nav__link" style={{ color: "black" }} href="/blogs">Blogs</a>
                    </div>
                    <button className="themeBtn" style={{ display: "flex" }}>
                        <span></span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
