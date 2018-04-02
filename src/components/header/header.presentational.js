import React from 'react';
import { headerContainerStyle, headerWrapperStyle, titleStyle, subtitleStyle, iconLinkStyle } from './header.style';

const HeaderPresentational = (props) => {
    const { title, subtitle, btns } = props; 
    return (
        <header style={headerContainerStyle}>
            <div style={headerWrapperStyle}>
                <a href="/">
                    <h1  style={titleStyle}>
                        { title }
                    </h1>
                </a>
                <div style={subtitleStyle}>
                    { subtitle }
                </div>
                <div>
                    {
                        btns.map( (btn, index) => {
                            return ( 
                                <a key={index} href={btn.link}>
                                    <i className={btn.icon} style={iconLinkStyle}> </i> 
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </header>
    )
}

export default HeaderPresentational;