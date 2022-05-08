import React from 'react';
import AnswerItem from './AnswerItem';
import './AnswersList.css';

class AnswersList extends React.Component {
    render() {
        return(
           <ul className='AnswersList'>
              {this.props.answers.map((answ, index) => {
                    return (
                        <AnswerItem 
                        key={index}
                        answer={answ} 
                        onAnswerClick={this.props.onAnswerClick}
                        />
                    )
              })}
           </ul>
        )
    }
}

export default AnswersList;