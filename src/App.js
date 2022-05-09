import React, {Component} from 'react';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from "./components/Header";
import UserBox from "./components/UserBox";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isError: false,
    onLoading: false,
    error: ''
  }

  onLoading = () => {
    this.setState({onLoading: true, isFirst: false, isError: false});
  }

  getUser = (users) => {
    this.setState({users: [...users], onLoading: false});
  }

  getError = (error) => {
    this.setState({onLoading: false, isError: true, error});
  }

  render() {
    const {users, isFirst, onLoading, isError, error} = this.state;
    return (<div className='container'>
      <Header getError={this.getError} getUser={this.getUser} onLoading={this.onLoading}/>
      <div className='row userList'>
        <div className='col-xs-2'/>
        <div className='col-xs-8'>
          <div className='container-fluid'>
            <h2 style={{display: isError ? 'inherit' : 'none', textAlign: 'center', lineHeight: '50px',color:'red'}}>
              {error}</h2>
            <h2 style={{display: onLoading ? 'inherit' : 'none', textAlign: 'center', lineHeight: '50px'}}>
              Loading...</h2>
            <h2 style={{display: isFirst ? 'inherit' : 'none', textAlign: 'center', lineHeight: '50px'}}>
              Welcome to use the Github user search tool <br/>
              Type the name in the input box above</h2>
            <div className="row" style={{display: onLoading ? 'none' : 'inherit'}}>
              {users.map(n => {
                return <UserBox key={n.id} users={n}/>
              })}
            </div>
          </div>
        </div>
        <div className='col-xs-2'/>
      </div>
    </div>);
  }
}

export default App;