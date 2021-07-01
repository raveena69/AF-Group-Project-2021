import React, { Component } from 'react';
import { login } from './editorFunction';

class EditorLogin extends Component{

    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        const editor ={
            email:this.state.email,
            password:this.state.password
        }

        login(editor).then(res=>{
            if(res){
                this.props.history.push(`/profile`)
            }
        })
    }

    render(){
        return(
            <div className="container">

                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h2 className="h4 mb-3 font-weight-normal">
                                <p align="center">Editor login</p>
                                <div className="form-group">
                                    <label htmlFor="email"><h4>Email</h4></label>
                                    <input type="email"
                                           className="form-control"
                                           name="email"
                                           placeholder="Enter email"
                                           value={this.state.email}
                                           onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password"><h4>Password</h4></label>
                                    <input type="password"
                                           className="form-control"
                                           name="password"
                                           placeholder="Enter password"
                                           value={this.state.password}
                                           onChange={this.onChange}
                                    />
                                </div>
                                <button className="btn btn-primary btn-lock small">Sign In</button>
                            </h2>
                        </form>
                    </div>

                </div>

            </div>
        );
    }
}

export default EditorLogin;