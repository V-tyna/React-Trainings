import React from 'react';
import './AnswerItem.css';

class AnswerItem extends React.Component {
    render() {
        return(
           <li className='AnswerItem'
               onClick={() => this.props.onAnswerClick(this.props.answer.id)}
               >
               {this.props.answer.text}
           </li>
        )
    }
}

export default AnswerItem;