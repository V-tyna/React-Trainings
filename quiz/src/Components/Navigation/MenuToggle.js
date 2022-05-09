import React from 'react';
import './MenuToggle.css';

const MenuToggle = (props) => {
    const classes = ['MenuToggle', 'fa'];
    props.isOpen ? classes.push('fa-times', 'open') : classes.push('fa-bars');
    return (
            <i 
            onClick={props.onToggle}
            className={classes.join(' ')}/>
    )
}

export default MenuToggle;