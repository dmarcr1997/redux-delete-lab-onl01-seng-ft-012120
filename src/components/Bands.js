import React from 'react';
import { Component } from 'react';
import Band from '../components/Band';
class Bands extends Component{
    
    render(){    
        return(
            <div>
                {this.props.bands.map((band) => <Band key={band.id} band={band} deleteBand={this.props.deleteBand} />)}
            </div>
        )
    }
}
export default Bands;