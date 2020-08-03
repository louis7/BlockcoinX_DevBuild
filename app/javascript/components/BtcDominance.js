import React from "react";
import PropTypes from "prop-types";



class BtcDominance extends React.Component {

  constructor(props) {
  super(props);

  }

render () {
  return (
    <div className="col-6 col-lg-3">

    <div className="box p-3 white">
        <div className="py-2 text-sm text-warn">
        62.6 <span className="text-muted">%</span>
        </div>
        <div className="d-flex">
            <span className="flex text-muted">Bitcoin Dominance</span>
        </div>
    </div>


    </div>
  );
}
};

export default BtcDominance;
