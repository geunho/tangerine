import React from 'react';
import links from './links';
 
const PanelList = () => (
    <div className="Panel-list">
        {links.map((item, idx) => (
          <a href={item.uri} key={idx}>
            <div className="Panel">
                <h3>{item.name}</h3>
            </div>
          </a>
        ))}
    </div>
);
 
export default PanelList;