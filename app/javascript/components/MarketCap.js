import React from "react";
import PropTypes from "prop-types";



class MarketCap extends React.Component {

  constructor(props) {
  super(props);

  }

render () {
  return (
    <div className="col-6 col-lg-3">

    <div className="box p-3 white">
        <div className="py-2 text-sm text-success">
            100,399,300,042 <span className="text-muted">USD</span>
        </div>
        <div className="d-flex">
            <span className="flex text-muted">Total Market Cap</span>
        </div>
    </div>


    </div>
  );
}
};

export default MarketCap;
