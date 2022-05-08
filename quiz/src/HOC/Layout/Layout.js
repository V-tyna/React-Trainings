import React from 'react';
import './Layout.css';
import Quiz from '../../Containers/Quiz/Quiz';

class Layout extends React.Component {

    render() {
        return (
            <Quiz className={'Layout'}>
                <main>
                    {this.props.children}
                </main>
            </Quiz>
        )
    }
}

export default Layout;