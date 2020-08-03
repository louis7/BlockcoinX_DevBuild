import React from "react";
import PropTypes from "prop-types";



class TradeVolume extends React.Component {

  constructor(props) {
  super(props);

  }

render () {
  return (
    <div className="col-6 col-lg-3">

    <div className="box p-3 white">
        <div className="py-2 text-sm text-warning">
            $110,300,042 <span className="text-muted">24hr</span>
        </div>
        <div className="d-flex">
            <span className="flex text-muted">Trade Volume</span>
        </div>
    </div>


    </div>
  );
}
};

export default TradeVolume;
