import React from 'react'
import Test from "./Test";

class Student extends React.Component {

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentDidCatch(error, errorInfo) {
    }

    render() {
        return (<div>
            <h1>HELLO Class COMPONENT : {this.props.name}</h1>
            <Test/>
        </div>)
    }
}
export default Student