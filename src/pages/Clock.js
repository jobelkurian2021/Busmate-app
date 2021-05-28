import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.time = setInterval(() => {
            this.changeTime()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.time)
    }

    changeTime() {
        this.setState({ date: new Date() })
    }

    render() {
        return (
            <div>
                {/* <h1>Hello! This is a class component clock.</h1> */}
                <h2>{this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
export default Clock;
