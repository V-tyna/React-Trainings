import React from 'react';
import { NavLink } from 'react-router-dom';
import Backdrop from '../UI/Backdrop';
import './Drawer.css';

const links = [
    {to: '/', label: 'Quiz list'},
    {to: '/auth', label: 'Auth'},
    {to: '/create-quiz', label: 'Create quiz'},
]

class Drawer extends React.Component {

    clickHandler = () => {
        this.props.onCloseDrawer();
    }

    renderLinks = () => {
        return links.map((link, i) => {
            return (
                <li key={i}>
                    <NavLink
                    to={link.to}
                    onClick={this.clickHandler}
                    > 
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const classes=['Drawer'];
        if(!this.props.isOpen) {
            classes.push('close');
        }  
        return (
            <React.Fragment>
                 <nav className={classes.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
               {this.props.isOpen ? <Backdrop onClick={this.props.onCloseDrawer}/> : null} 
            </React.Fragment>         
        )
    }
}

export default Drawer;