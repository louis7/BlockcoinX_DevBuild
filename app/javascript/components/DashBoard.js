import React from "react";
import PropTypes from "prop-types";



class DashBoard extends React.Component {

  constructor(props) {
  super(props);

  }

render () {
  return (
    <div>

    <div className="box p-3 white">
        <div className="py-2 text-md text-success">
            300,042 <span className="text-muted">USD</span>
        </div>
        <div className="d-flex">
            <span className="flex text-muted">Louis Market</span>
        </div>
    </div>


    </div>
  );
}
};

export default DashBoard;
