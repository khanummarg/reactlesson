import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div>
                <Name name={this.props.name} />
                <Price price={this.props.price} />
                <Description description={this.props.description} />
            </div>
        );
    }
}

const Name = (props) => {
    return <p>{props.name}</p>;
};

function Price(props) {
    return <p>{props.price}</p>
}

class Description extends Component {
    render() {
        return <p>{this.props.description}</p>
    }
}

export default Product;