import React from 'react';
import s from './Dialogs.module.css'
import { BrowserRouter, NavLink } from 'react-router-dom';

function DialogsItem(props) {
    return (
        <NavLink to={'/dialogs/' + props.id} activeClassName={s.activeLink}>{props.name}</NavLink>
    )
}

function Massage(props) {
 return (
     <div className={s.currentMassage}>{props.massage}</div>
 )
}

function Dialogs() {
    return (
        <BrowserRouter>
            <div className={s.dialogs}>
                
                <div className={s.allDialogs}>
                    <DialogsItem name='Mike' id='1' />
                    <DialogsItem name='Max' id='2' />
                    <DialogsItem name='Arthur' id='3' />
                    <DialogsItem name='Cole' id='4' />
                    <DialogsItem name='James' id='5' />
                    <DialogsItem name='Leonard' id='6' />
                </div>
                <div className={s.allMassage}>
                    <Massage massage='Hi'/>
                    <Massage massage='Row'/>
                </div>
            </div>
        </BrowserRouter>
    )
}
// 
export default Dialogs;