
import React from "react";
import PropTypes from "prop-types";

class SmartTable extends React.Component {
  render () {
    return (
      <div>
      <div className="table-responsive">
          <table className="table table-hover b-t">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Change </th>
                      <th>Change in Percent</th>
                  </tr>
              </thead>
                 <tbody>

                  <tr>

                      <td>Bitcoin</td>
                      <td class="text-muted" 10 </td>


                  <tr>
                    <td >Ethereum</td>
                    <td class="text-muted" 1000 </td>


                  </tr>
              </tbody>
          </table>
      </div>

      </div>














        <h3>Wow! This is your first react component!</h3>
      </div>
    );
  }
};

export default SmartTable;
