import React from 'react';

const Footer = (props) => {
    return (
        <div className='footerBox'>
            <div className='css_is_awesome'>
                <div className='css_is_awesome_box'></div>
                <div className="css_is_awesome_text">
                    CSS <br />
                    IS <br />
                    AWESOME
                </div>
            </div>
            <div className='show_box'>
                <button onClick={props.clickShowMenu} className='show_box_btn'>POKAŻ  {props.menuVisibility ? "ᐯ" : "ᐱ"}</button>
            </div>
            
        </div>
    );
};

export default Footer;