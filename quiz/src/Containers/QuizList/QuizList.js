import React from 'react';
import { NavLink } from 'react-router-dom';
import './QuizList.css'

class QuizList extends React.Component {
    renderQuizes() {
        return [1, 2, 3].map((quiz, i) => {
            return (
                <li key={i}>
                    <NavLink to={'/quiz/' + quiz}>
                        Quiz {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    render() { 
        return ( 
            <div className='quiz-list'>
                <div>
                    <h1>Quiz list:</h1>
                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>       
            </div>
         );
    }
}
 
export default QuizList;