import React, { useState } from 'react';
import { Button, Input, Menu } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { createUseStyles } from 'react-jss';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function NavBar(props) {
    const dispatch = useDispatch();
    const [activeMenu, setActiveMenu] = useState('home');
    const handleMenuClick = (e, { name }) => {
        setActiveMenu(name);
    }
    const useStyles = createUseStyles({
        ui: {
            '&.menu': {
                '& .item': {
                    '&.header-icon:first-child': {
                        padding: '0px 0.2em',
                        fontSize: 30,
                        color: '#deb887'
                    }
                }
            }
        }
    });
    const classes = useStyles();
    const redirectToLogin = () => {
        dispatch({ type: 'LOGIN' });
    }
    const { login } = props;
    if (login.trim().length) {
        window.location.href = login;
    }
    return (
        <Menu size='small' className={classes.ui}>
            <Menu.Item className='header-icon'>
                <FontAwesomeIcon icon={faQuestionCircle} />
            </Menu.Item>
            <Menu.Item
                name='home'
                active={activeMenu === 'home'}
                onClick={handleMenuClick}
            />
            <Menu.Item
                name='messages'
                active={activeMenu === 'messages'}
                onClick={handleMenuClick}
            />
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item>
                    <Button primary onClick={redirectToLogin}>Sign Up</Button>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}
const mapStateToProps = (state) => {
    return {
        login: state.login
    };
}
export default withRouter(connect(mapStateToProps, null)(NavBar))