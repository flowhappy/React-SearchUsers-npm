import React, {Component} from 'react';
import axios from "axios";

class Index extends Component {
  search = () => {
    let {inputNode: {value: i_value}} = this;
    if (!i_value) return;
    this.props.onLoading();
    this.inputNode.value = '';
    //https://api.github.com/search/users?q=xxxxxx
    axios.get(
      `https://api.github.com/search/users?q=${i_value}`
    ).then(
      response => {
        this.props.getUser(response.data.items)
      },
      error => {
        this.props.getError(error.message);
        console.log(error);
      }
    )
  }

  render() {
    return (
      <div className="jumbotron" style={{marginBottom: '46px'}}>
        <h1>React-SearchUser</h1>
        <div className="navbar-form navbar-left" style={{marginBottom: '20px'}}>
          <div className="form-group">
            <input ref={c => this.inputNode = c} style={{width: '300px'}} type="text" className="form-control"
                   placeholder="Enter the name that you wanna search"/>
          </div>
          <button onClick={this.search} style={{marginLeft: '5px'}} className="btn btn-default">Submit
          </button>
        </div>
        <br/>
      </div>
    );
  }
}

export default Index;