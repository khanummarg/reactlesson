import React, { Component } from "react";

// function Price(props) {
//     return <p>{props.price}</p>
// }

class Price extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: props.price
        }

    }
    changeCurrency = () => {
        let { price } = this.state;
        let realPrice = parseFloat(price);

        price = price.includes('$') ? realPrice * 500 + " AMD" : realPrice / 500 + " $";

        this.setState(
            {
                price: price
            }
        );
    }
    render() {
        const { price } = this.state;
        return (
            <div>
                <p>{price}</p>
                <button onClick={this.changeCurrency}>Change the currency</button>
            </div>
        )
    }
}
export default Price;