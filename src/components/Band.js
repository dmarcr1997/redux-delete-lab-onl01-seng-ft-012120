import React from 'react';

const Band = props => {
    return(
      <div>
        <li onLoad={console.log(props)}>
          {props.band.name}
        </li>
        <button onClick={() => props.deleteBand(props.band.id)}>DELETE</button>
      </div>
    );
}

export default Band;
