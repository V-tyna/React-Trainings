import React from 'react';
import './Quiz.css';
import ActiveQuiz from '../../Components/ActiveQuiz';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz: [
                {
                    question: 'What is the first capital of Ukraine?',
                    rightAnswerId: 112,
                    answers: [
                        {text: 'Lviv', id: 111},
                        {text: 'Kharkiv', id: 112},
                        {text: 'Kyiv', id: 113},
                        {text: 'Dnepr', id: 114}
                    ]
                }
            ]
        }
        this.onAnswerClickHandler = this.onAnswerClickHandler.bind(this);
    }

    onAnswerClickHandler(answerId) {
        console.log('Answer ID: ', answerId);
    }

    render() {
        return(
            <div className='Quiz'>
                <div className='QuizWrapper'>
                    <h1>Please answer all questions</h1>
                    <ActiveQuiz 
                    question={this.state.quiz[0].question}
                    answers={this.state.quiz[0].answers}
                    onAnswerClick={this.onAnswerClickHandler}/>
                </div>
            </div>
        )
    }
}

export default Quiz;