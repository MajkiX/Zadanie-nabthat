import React from 'react';


const Main = (props) => {
    let text = props.textArray.map(item =>(
        <span key={item}>{`${item} `}</span>
    ))
    return (
        <div className='main'>
            <h1 className='main_h1'>
                Nagłówek H1
                <hr />
            </h1>
            
            <div className='radio_btns' onChange={props.onChange}>
                <h2 className='main_h2 radio_btns_h2'>BLOK PIERWSZY</h2>
                <div className='inputs'>
                    <input type="radio" name="radioOption" id='first' value="0"/>
                    <label for="first">Opcja pierwsza</label> <br />
                    <input type="radio" name="radioOption" id='second' value="1"/>
                    <label for="second">Opcja druga</label>  <br />
                    <input type="radio" name="radioOption" id='random' value="2"/>
                    <label for="random">Opcja losowa</label> <br />
                </div>
            </div>
            <div className='action_btns'>
                <h2 className='main_h2 action_btns_h2'>BLOK DRUGI</h2>
                <div className='action_btns_box'>
                    <button onClick={props.textReplace}>ZASTĄP</button>
                    <button onClick={props.textAdd}>DOKLEJ</button>
                </div>
            </div>
            <div className='text_box'>
                <h2 className='main_h2 text_box_h2'>BLOK Z DŁUGUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE</h2>
                <div className='text_container'>{text}</div>
            </div>
            <div className='menu'>
                <button onClick={props.clickRestart}>{"> ZRESETUJ USTAWIENIA"}</button>
                <button onClick={props.clickShowName}>{"> POKAŻ DANE OSOBOWE"}</button>
            </div>
        </div>
    );
};

export default Main;