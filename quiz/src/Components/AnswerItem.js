import React from 'react';
import './AnswerItem.css';

class AnswerItem extends React.Component {
    render() {
        const classes = ['AnswerItem'];
        if(this.props.answerState) {
            classes.push(this.props.answerState);
        }
        return(
           <li className={classes.join(' ')}
               onClick={() => this.props.onAnswerClick(this.props.answer.id)}
               >
               {this.props.answer.text}
           </li>
        )
    }
}

export default AnswerItem;