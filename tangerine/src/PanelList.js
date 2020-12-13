import {React, Component} from 'react';
import * as api from './api';

class PanelList extends Component {
  state = {
    links: []
  }

  async componentDidMount() {
    const response = await api.get_links()
    this.setState({
      links: response.data
    });
  }
  
  render() {
    const { links } = this.state;
    return (      
      <div className="Panel-list">
      {links.map((item, idx) => (
        <a href={item.uri} key={idx} className="click" id={item.id}>
          <div className="Panel">
              <h3>{item.name}</h3>
          </div>
        </a>
      ))}
      </div>
    )
  }
}

export default PanelList;