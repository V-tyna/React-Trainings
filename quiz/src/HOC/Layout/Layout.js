import React from 'react';
import './Layout.css';
import MenuToggle from '../../Components/Navigation/MenuToggle';
import Drawer from '../../Components/Navigation/Drawer';

class Layout extends React.Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuOnCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        return (
            <div className={'Layout'}>

                <Drawer 
                isOpen={this.state.menu}
                onCloseDrawer={this.menuOnCloseHandler}
                />

                <MenuToggle
                onToggle={this.toggleMenuHandler}
                isOpen={this.state.menu}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;