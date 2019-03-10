import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class FormForAuthorization extends Component {
    state = {
        currentInputValue: "",
        currentPasswordValue: "",
    }

    handleInputChange = (e) => {
        const value = e.currentTarget.value;
        // if (value === 'Admin') {
        //     this.setState({
        //         disable: false,
        //     });
        // }
        // if (value !== 'Admin') {
        //     this.setState({
        //         disable: true,
        //     });
        // }
        this.setState({
            currentInputValue: value,
        })
    };

    handlePasswordInputChange = (e) => {
        const value = e.currentTarget.value;

        // if (value === '12345678') {
        //     this.setState({
        //         disable: false,
        //     });
        // }
        // if (value !== '12345678') {
        //     this.setState({
        //         disable: true,
        //     });
        // }
        this.setState({
            currentPasswordValue: value,
        })
    };

    handleSubmit = () => {
        const { currentInputValue, currentPasswordValue } = this.state;
        if (currentInputValue === 'Admin' && currentPasswordValue === '12345678') {
            const person = {
                name: currentInputValue,
                password: currentPasswordValue,
            }

            localStorage.setItem('person', JSON.stringify(person));
        }
        else {
            alert('Enter a valid username or password');
        }

        this.setState({
            currentInputValue: "",
            currentPasswordValue: "",
        });
    };

    render() {
        const { currentInputValue, currentPasswordValue, disable } = this.state;
        if (localStorage.getItem('person')) {
            return <Redirect from='/login' to='/profile' />
        }
        return (
            <form className="form" onSubmit={(e) => e.preventDefault()}>
                <h3>Username:</h3>
                <input type="text" id="name"
                    value={currentInputValue}
                    onChange={this.handleInputChange}>
                </input>
                <h3>Password:</h3>
                <input type="password" id="password"
                    value={currentPasswordValue}
                    onChange={this.handlePasswordInputChange}>
                </input>
                <button className="button" type="submit"
                    onClick={this.handleSubmit} disabled={disable}>
                    Sign in
                </button>
            </form>
        );
    }
}

export default FormForAuthorization;