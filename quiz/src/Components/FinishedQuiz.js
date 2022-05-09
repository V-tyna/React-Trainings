import React from 'react';
import './FinishedQuiz.css';

const FinishedQuiz = (props) => {
    const successCount = Object.keys(props.results).reduce((acc, key) => {
        if(props.results[key] === 'success') {
            acc++; 
        }
        return acc;
    }, 0)
    return (
        <div className='FinishedQuiz'>
             <h1>Congrats! You've completed the quiz.</h1> 
             <h3>Answers: </h3>
             <ul>
                 {props.quiz.map((quizItem, i) => {
                    const classes = ['fa'];
                    props.results[quizItem.rightAnswerId] ? classes.push('fa-check', 'i-success') : classes.push('fa-times', 'i-failure');
            
                    return (
                        <li key={i}>
                            <strong>{i + 1}. &nbsp;</strong>
                            {quizItem.question} &nbsp;
                            <i className={classes.join(' ')} />
                        </li>
                    )
                 })}
             </ul>

             <h4>Right answers: {successCount} of {props.quiz.length}</h4>

             <button onClick={props.onRetry}>
                 Repeat quiz
             </button>
        </div>
    )
}

export default FinishedQuiz;
