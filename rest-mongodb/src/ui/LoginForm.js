import React, { Component } from 'react'

class LoginForm extends Component {


    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        
        this.state = {
            email: undefined,
            password: undefined
        }
    }

    static displayName = 'ui-LoginForm'

    handleSubmit(e){
        e.preventDefault()
        let dataToSend = {
            userData : {
                email: this.state.email,
                password: this.state.password
            }
        }

        console.log(JSON.stringify(dataToSend))

        fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type":"application/json"
            }
                        
        })
        .then(response => response.json())
        .then(responseJson => {
            if(responseJson.success){
                localStorage.setItem('DD101_TOKEN', responseJson.token)
            }
           
            
        })
        
    }

    handleEmailChange(e){
        this.setState({
            email:e.target.value
        })
    }

    handlePasswordChange(e){
        this.setState({
            password:e.target.value
        })
    }

    render() {
        return (
            <div className="container">
              

                {/* Begin Login Form */}
                <div className="row" style={{ paddingTop: '50px' }}>
                    <div className="col">
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: '20rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img className="card-img-top" src="https://www.elegantthemes.com/blog/wp-content/uploads/2017/04/password-protect-wordpress.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" onChange={this.handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" onChange={this.handlePasswordChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" />
                                            <span>Remember me</span>
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                                    <small id="emailHelp" className="form-text text-muted">If you are not registered. Plese <a href="#" data-toggle="modal" data-target="#signupModel" data-whatever="@mdo" >Signup</a></small>
                                    <br />
                                   
                                </form>


                            </div>
                        </div>

                    </div>
                    <div className="col">
                    </div>
                </div>
                {/* End Login Form */}
            </div>
        );
    }
}
export default LoginForm;