import React from "react";
import PropTypes from "prop-types";


class TableApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=USD&e=Kraken")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,

          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      console.log(obj1 [, obj2, ..., objN]);
  }

  render() {

    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <h1> api calls</h1>
      );
    }
  }
}
export default TableApi;
