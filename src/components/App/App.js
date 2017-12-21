import React from 'react';
import Screen from '../Screen/Screen';
import Key from '../Key/Key';


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            value:'',
            num1:'',
            num2:'',
            operation:''
        }
    }
    display = (num) => {
        let {value} = this.state;
        let {operation} = this.state;
        if(!operation){

            console.log(value);
            let {num1} = this.state;
            num1 +=num;
            value = num1;
            this.setState({value,num1})
        }else{
            this.setState({value:''});
            let {num2} = this.state;
            console.log(value);
            num2 += num;
            value = num2;
            this.setState({value,num2})
        }


    };
    operation = (ope) => {
        let {operation} = this.state;
        console.log(ope);
        if(ope === '+' || ope === '-' || ope === '*' || ope === '/' ){
            console.log('panduan');

            operation = ope;
            this.setState({operation});
        }else if(ope === 'C'){
            this.clear();
        }else if(ope === '='){
            this.result();
        }
    };

    clear = () => {
        this.setState({
            value:'',
            num1:'',
            num2:'',
            operation:''
        })
    };
    result = () => {
        let {num1,num2,operation} = this.state;
        num1 = Number(num1);
        num2 = Number(num2);
        console.log(num1,num2);
        let value = '';
        switch (operation) {
            case '+':
                value = num1 + num2;
                break;
            case '-':
                value = num1 - num2;
                break;
            case '*':
                value = num1 * num2;
                break;
            case '/':
                value = num1 / num2;
                break;
        }
        this.setState({
            value,
            num1:value,
            num2:''
        });


    };

    render(){
        console.log(this.state);
        return(
            <div id="wrap">
                <Screen value={this.state.value} />
                <Key display={this.display} operation={this.operation} />
            </div>
        )
    }
}

export default App;