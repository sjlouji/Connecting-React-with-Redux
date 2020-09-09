import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Counter extends Component {

    increment = () =>{
        this.props.dispatch({type: 'INC'})
    }

    decrement = () =>{
        this.props.dispatch({type: 'DEC'})
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <button style={{ height: '40px', width: '150px' }} onClick={this.increment}>Increment +</button>
                    <p>{this.props.val}</p>
                <button style={{ height: '40px', width: '150px' }} onClick={this.decrement}>Decrement -</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    val: state.val
})

export default connect(mapStateToProps)(Counter)