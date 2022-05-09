import React, {Component} from 'react';

class Index extends Component {
  render() {
    const {html_url: keyId, avatar_url: img_src, login: username} = this.props.users;
    return (
      <div key={keyId} className="col-xs-6 col-md-3 userbox">
        <a href={keyId} target="_blank">
          <img src={img_src}/>
          <h4 style={{textAlign: 'center', margin: '15px 0'}}>{username}</h4>
        </a>
      </div>
    );
  }
}

export default Index;