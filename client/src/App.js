import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props); 

        this.callApi = this.callApi.bind(this);
    }

    state = {
        response: 'loading....'
    };

    componentDidMount() {
        this.callApi().then((res) => {
                console.log('the res is ', res);
         
               var studentList = res.recordset.map((student, index) => (
                   <p>Hello, {student.FirstName} {student.LastName} from {student.City} in grade {student.Grade}</p>
                ));
               this.setState({response:studentList});
            }).catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        return body;
    };


    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            {this.state.response}
        </p>
      </div>
    );
  }
}

export default App;
