import React, { Component } from 'react';
import Number from "./Number"
import { Form, Input } from "./Input";

interface IState {
  counter: number;
  name: string;
}

// you need to tell component <'props', 'state'>
class App extends Component<{}, IState> {
  state = {
    counter: 0,
    name: ""
  }

  add = ():void => {
    this.setState(prev => {
      return {
        counter: prev.counter + 1
      };
    });
  }

  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target);
  }

  onFormSubmmit = (event: React.FormEvent) => {
    event.preventDefault()
  }

  render() {
    const { counter, name } = this.state 
    return (
      <div>
        <Number count={ counter }/>
        <button onClick={ this.add }>Add</button>
        <Form onFormSubmit={ this.onFormSubmmit } >
          <Input value={ name } onChange={ this.onChange } />
        </Form>
      </div>
    )
  }
  
}

export default App;
