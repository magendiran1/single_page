import React, { Component } from 'react';
import Validation from './ValidateInput'
import Char from './Char';

class Userinput extends Component {

    state = {
        userInput: ''
    }

    inputChangedHandler = (event) => {
        this.setState({ userInput: event.target.value });
    }

    deleteItem = (index) => {
        debugger;
        const removeText = this.state.userInput.split('');
        removeText.splice(index, 1);
        console.log(removeText)
        const updateText = removeText.join('');
        this.setState({ userInput: updateText })

    }

    
    render() {
        //We are using map function isn array but here we are using map to string object
        // that why its will throw error  so we have use object make as arrow
        const charList = this.state.userInput.split('').map((char, index) => {
            return <Char character={char} key={index} clicked={() => this.deleteItem(index)} />
        })
        return (
            <div>
                <input
                    type="text"
                    onChange={this.inputChangedHandler}
                    value={this.state.userInput} />
                <p>{this.state.userInput}</p>
                <Validation ValidateInput={this.state.userInput.length} />
                {charList}
            </div>
        )
    }

}

export default Userinput;