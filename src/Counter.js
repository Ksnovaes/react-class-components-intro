import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
        this.clicked = this.clicked.bind(this)
    }
    
    clicked(){
        // Wrong way
        // this.setState({count: this.state.count + 1})
        this.setState((state) => {
            return {count: state.count + 1}
        }, () => {
            console.log(this.state)
            localStorage.setItem("state", JSON.stringify(this.state))
        })
    }

    componentDidMount() {
        this.setState(JSON.parse(localStorage.getItem('state')))
    }
    
    render() {
        return (
            <div className="counter">
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.clicked}>Click</button>
            </div>
        )
    }
}

export default Counter;