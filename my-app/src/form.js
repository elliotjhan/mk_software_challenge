import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        let value = event.target.value; // this updates state as the user types in their input through onChange
        let name = event.target.name;
        this.setState({
          [name]: value
        });
    }

    handleSubmit() {
        
        if(this.state.name && this.state.email && this.state.message){
            fetch('https://r7agqspk8k.execute-api.us-west-2.amazonaws.com/production/message', {
            method: 'PUT',
            body: JSON.stringify({
                message: this.state.message,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
            })
            .catch(error => {
                console.error('Put Error: ', error);
            });
            this.setState({
                name: "",
                email: "",
                message: ""
            });
        } else {
            return;
        } 

    }

    render() {
        return(
            <div>
                <h1 className="contact-header">
                    Feel free to send me a message at elliotjhan@gmail.com
                </h1>
                <form id="form" autoComplete="off">
                    <TextField 
                        fullWidth
                        onChange={this.handleInput}
                        id="standard-name"
                        label="Name"
                        name="name"
                        style={{ margin: 8 }}
                        placeholder="name required"
                        value={this.state.name}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    ></TextField> 
                    <br/>
                    <TextField 
                        fullWidth
                        onChange={this.handleInput}
                        id="standard-email"
                        label="E-Mail"
                        name="email"
                        value={this.state.email}
                        style={{ margin: 8 }}
                        placeholder="e-mail required"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br/>
                    <TextField 
                        fullWidth
                        onChange={this.handleInput}
                        multiline
                        id="standard-message"
                        label="Message"
                        name="message"
                        value={this.state.message}
                        style={{ margin: 8 }}
                        placeholder="message required"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br/>
                    <Button variant="outlined" color="primary" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
    
}

export default Form;
