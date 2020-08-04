import React from "react";
import PropTypes from "prop-types";



class Cryptocurrencies extends React.Component {

  constructor(props) {
  super(props);

  }

render () {
  return (
    <div className="col-6 col-lg-3">

    <div className="box p-3 white">
        <div className="py-2 text-sm text-primary">
              {this.props.total} <span className="text-muted">coins</span>
        </div>
        <div className="d-flex">
            <span className="flex text-muted">Total Currencies</span>
        </div>
    </div>


    </div>
  );
}
};

export default Cryptocurrencies;
