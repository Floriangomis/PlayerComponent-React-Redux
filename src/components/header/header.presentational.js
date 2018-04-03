import React from 'react';

const HeaderPresentational = (props) => {
    const { title, subtitle, btns } = props; 
    return (
        <header className='header-container'>
            <div className='header-wrapper'>
                <a href="/">
                    <h1  className='title'>
                        { title }
                    </h1>
                </a>
                <div className='subtitle'>
                    { subtitle }
                </div>
                <div>
                    {
                        btns.map( (btn, index) => {
                            return ( 
                                <a key={index} href={btn.link}>
                                    <i className={btn.icon + ' icon'} > </i> 
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