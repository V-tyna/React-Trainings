import React from 'react';
import './Quiz.css';
import ActiveQuiz from '../../Components/ActiveQuiz';
import FinishedQuiz from '../../Components/FinishedQuiz';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz: [
                {
                    questionId: 1,
                    question: 'What is the first capital of Ukraine?',
                    rightAnswerId: 112,
                    answers: [
                        {text: 'Lviv', id: 111},
                        {text: 'Kharkiv', id: 112},
                        {text: 'Kyiv', id: 113},
                        {text: 'Dnepr', id: 114}
                    ]
                },
                {
                    questionId: 2,
                    question: 'What is the first president of Ukraine?',
                    rightAnswerId: 118,
                    answers: [
                        {text: 'Zelenskyy', id: 115},
                        {text: 'Kuchma', id: 116},
                        {text: 'Grushevskyy', id: 117},
                        {text: 'Kravchuk', id: 118}
                    ]
                },
                {
                    questionId: 3,
                    question: 'What are the colors of the Ukrainian flag?',
                    rightAnswerId: 120,
                    answers: [
                        {text: 'Yellow-blue', id: 119},
                        {text: 'Blue-yellow', id: 120},
                        {text: 'Rainbow', id: 121},
                        {text: 'Yellow-blue-bus', id: 122}
                    ]
                },
                {
                    questionId: 4,
                    question: 'Who is depicted on the 5 hryvnia banknote?',
                    rightAnswerId: 125,
                    answers: [
                        {text: 'V. Zelenskyy', id: 123},
                        {text: 'G. Skovoroda', id: 124},
                        {text: 'B. Khmelnytsky', id: 125},
                        {text: 'T. Shevchenko', id: 126}
                    ]
                }   
            ],
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        }
        this.onAnswerClickHandler = this.onAnswerClickHandler.bind(this);
        this.onRetryHandler = this.onRetryHandler.bind(this);
    }

    onAnswerClickHandler(answerId) {
        if(this.state.answerState && this.state.answerState[answerId] === 'success') {
            return;
        }
        const question = this.state.quiz[this.state.activeQuestion];
        const res = {...this.state.results};
       
        if(question.rightAnswerId === answerId) {
            if(!res[answerId]) {
                res[answerId] = 'success';
            }

            this.setState({
                answerState: {
                    [answerId] : 'success'
                },
                results: res
            }) 
            
        } else {
            res[answerId] = 'failure';
            this.setState({
                answerState: {
                    [answerId] : 'failure'
                },
                results: res
            })
        }

        const timeout = window.setTimeout(() => {
            if(this.isQuizFinished()) {
                this.setState(
                    {
                        isFinished: true
                    }
                )
            } else {
                this.setState({
                    activeQuestion: this.state.activeQuestion + 1
                })
            }
            window.clearTimeout(timeout);
        }, 1000)
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    onRetryHandler() {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    render() {
        return(
            <div className='Quiz'>
                {this.state.isFinished ? 
                    <FinishedQuiz 
                        results={this.state.results}
                        quiz={this.state.quiz}
                        onRetry={this.onRetryHandler}
                    /> 
                :
                    <div className='QuizWrapper'>
                        <h1>Please answer all questions</h1>
                        
                        <ActiveQuiz 
                        question={this.state.quiz[this.state.activeQuestion].question}
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        answerState={this.state.answerState}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default Quiz;