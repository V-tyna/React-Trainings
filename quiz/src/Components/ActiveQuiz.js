import React from 'react';
import AnswersList from './AnswersList';
import './ActiveQuiz.css';

class ActiveQuiz extends React.Component {

    render() {
        return(
            <div className='ActiveQuiz'>
                <p className='Question'>
                    <span>
                        <strong>{this.props.answerNumber}.</strong>
                        &nbsp; {this.props.question}
                    </span>
                    <small>{this.props.answerNumber} of {this.props.quizLength}</small>
                </p>

               <AnswersList 
                    answers={this.props.answers}
                    onAnswerClick={this.props.onAnswerClick}
                    answerState={this.props.answerState}
               />
            </div>
        )
    }
}

export default ActiveQuiz;