import React, { Component } from 'react';

export default class DisplayComponent extends Component {
    render() {
        console.log(this);
        return (
            <>
                <ul>
                    {this.props.arr.map((elem, index) => (
                        <li key={index}>{elem}</li>
                    ))}
                </ul>
            </>
        );
    }
}
