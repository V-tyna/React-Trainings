import React from 'react';
import './QuizCreator.css';
import Button from '../../Components/UI/Button';
import { createControl, validate, validateForm } from '../../Form/formFram';
import Input from '../../Components/UI/Input/Input';
import Select from '../../Components/UI/Select/Select';

const createOptionControl = (num) => {
    return createControl({
        label: `Answer option ${num}`,
        errorMessage: 'Empty option is not acceptable',
        id: num
    },
    {
        required: true
    })
}

const createFormControls = () => {
   return {
        question: createControl({
            label: 'Enter question:',
            errorMessage: 'Empty question is not acceptable'
        },
        {
            required: true
        }),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

class QuizCreator extends React.Component {
    state = {
        quiz: [],
        formControls: createFormControls(),
        isFormValid: false,
        rightAnswerId: 1
    }

    handlerSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        e.target[6].disabled = true;
    }

    handlerAddQuestion = (e) => {
        const quizClone = this.state.quiz.concat();
        const index = quizClone.length + 1;

        const {question, option1, option2, option3, option4} = this.state.formControls;

        const questionItem = {
            question: question.value,
            id: index,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                {text: option1.value, id: option1.id},
                {text: option2.value, id: option2.id},
                {text: option3.value, id: option3.id},
                {text: option4.value, id: option4.id}
            ]
        }

        quizClone.push(questionItem);

        this.setState({quiz: quizClone});
        this.setState({formControls: createFormControls()});
    }

    handlerQuizCreate = (e) => {
        console.log(this.state.quiz);
        e.target.disabled = true;
    }

    handlerChange = (val, name) => {
        const formControl = {...this.state.formControls};
        const control = { ...formControl[name] };

        control.touched = true;
        control.value = val;
        control.valid = validate(control.value, control.validation);

        formControl[name] = control;

        this.setState({ formControls: formControl });
        this.setState({isFormValid: validateForm(formControl)});
    }

    handlerSelectChange = (e) => {
        console.log('Select: ', e.target.value);
        this.setState({rightAnswerId: +e.target.value})
    }

    renderInputs = () => {
        return Object.keys(this.state.formControls).map((controlName, i) => {
            const control = this.state.formControls[controlName];
            return (
                <React.Fragment key={controlName + i}>
                <Input
                    label={control.label}
                    value={control.value}
                    valid={control.valid}
                    shouldValidate={control.validation}
                    touched={control.touched}
                    errorMessage={control.errorMessage}
                    onChange={e => this.handlerChange(e.target.value, controlName)}
                />
                { i === 0 ? <hr/> : null }
                </React.Fragment>     
            )
        })
    }

    render() { 
        const select = <Select
            label='Choose right answer'
            value={this.state.rightAnswerId}
            onChange={this.handlerSelectChange}
            options={[
                {text: 1, value: 1},
                {text: 2, value: 2},
                {text: 3, value: 3},
                {text: 4, value: 4}
            ]}
        />
        return ( 
            <div className='quiz-creator'>
                <div>
                    <h1>Create quiz:</h1>
                    <form onSubmit={this.handlerSubmit}>

                       {this.renderInputs()}

                       { select }

                        <Button
                            type='primary'
                            onClick={this.handlerAddQuestion}
                            disabled={!this.state.isFormValid}
                        >Add quastion</Button>
                        <Button
                            type='success'
                            onClick={this.handlerQuizCreate}
                            disabled={this.state.quiz.length === 0}
                        >Finish creation</Button>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default QuizCreator;