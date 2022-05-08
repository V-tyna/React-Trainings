import React from 'react';
import AnswersList from './AnswersList';
import './ActiveQuiz.css';

class ActiveQuiz extends React.Component {

    render() {
        console.log('Active', this.props);
        return(
            <div className='ActiveQuiz'>
                <p className='Question'>
                    <span>
                        <strong>2.</strong>
                        &nbsp; {this.props.question}
                    </span>
                    <small>4 of 12</small>
                </p>

               <AnswersList 
                    answers={this.props.answers}
                    onAnswerClick={this.props.onAnswerClick}
               />
            </div>
        )
    }
}

export default ActiveQuiz;