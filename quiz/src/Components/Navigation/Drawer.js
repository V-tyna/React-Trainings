import React from 'react';
import Backdrop from '../UI/Backdrop';
import './Drawer.css';

const links = [1, 2, 3]

class Drawer extends React.Component {

    renderLinks = () => {
        return links.map((link, i) => {
            return (
                <li key={i}>
                    <a href='/'>Link {link}</a>
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