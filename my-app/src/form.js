import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: null,
            email: null,
            message: null
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        let value = event.target.value; // this updates state as the user types in their input through onChange
        let name = event.target.name;
        this.setState({
          [name]: value
        });
    }

    render() {
        return(
            
            <form>
                <TextField 
                    onChange={this.handleInput}
                    id="standard-name"
                    label="Name"
                    name="name"
                /> 
                <br/>
                <TextField 
                    onChange={this.handleInput}
                    id="standard-email"
                    label="E-Mail"
                    name="email"
                />
                <br/>
                <TextField 
                    onChange={this.handleInput}
                    id="standard-message"
                    label="Message"
                    name="message"
                />
                <br/>
                <Button>Submit</Button>
            </form>
        )
    }
    
}

export default Form;
