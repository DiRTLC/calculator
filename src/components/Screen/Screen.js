import React from 'react';


class Screen extends React.Component{
    render(){
        return(
            <div id="display">{this.props.value}</div>
        )
    }
}

export default Screen;