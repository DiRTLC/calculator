import React from 'react';


class Key extends React.Component{
    judge = (event) => {
        if(event.target.className === 'num'){
            this.props.display(event.target.innerHTML);
        }else if(event.target.className){
            this.props.operation(event.target.innerHTML);
            console.log(1213213213213);
        }
    };
    render(){
        return(
            <ul onClick={this.judge} id="key">
                <li className="num">1</li>
                <li className="num">2</li>
                <li className="num">3</li>
                <li className="operation">+</li>
                <li className="num">4</li>
                <li className="num">5</li>
                <li className="num">6</li>
                <li className="operation">-</li>
                <li className="num">7</li>
                <li className="num">8</li>
                <li className="num">9</li>
                <li className="operation">*</li>
                <li className="num">0</li>
                <li className="operation">C</li>
                <li className="operation">=</li>
                <li className="operation">/</li>
            </ul>
        )
    }
}

export default Key;