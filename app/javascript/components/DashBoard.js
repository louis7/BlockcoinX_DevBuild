import React from "react";
import PropTypes from "prop-types";
import MarketCap from './MarketCap';
import Cryptocurrencies from './Cryptocurrencies'
import TradeVolume from './TradeVolume'
import BtcDominance from './BtcDominance'
import axios from 'axios';




class DashBoard extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    error: null,
    isLoaded: false,
    items: [],
    curentMarketCap: null,
    totalCurrencies: null,
    Dominance:       null,
    tradingVolume:   null
  };
}

componentDidMount() {


  let url= 'https:pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest'
  let config = {
        headers:  {
                'X-CMC_PRO_API_KEY':'c8f0c798-3fe8-4a70-9b5a-5aa85d519997',

              }
            }
    axios.get(url, config)
      .then(res => {
        this.setState({
          isLoaded: true,
          items: res,
          curentMarketCap: res.data.data.quote.USD.total_market_cap,
          totalCurrencies: res.data.data.total_cryptocurrencies,
          Dominance:       res.data.data.btc_dominance,
          tradingVolume:   res.data.data.quote.USD.total_volume_24h
           });
      })
  }





//componentDidMount() {
//  fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,BSV,LTC,USDT,EOS&tsyms=USD&api_key=8bdf39f3712f726d76c9af792c462ab19b4d5b9ce53fbb349b076e70c7f44fb2')
//  .then(response => response.json())
//  .then(
//    data => console.log(data));

//}

//componentDidMount() {
  //fetch("https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest",{
  //  method: "GET",
    //headers:  {
    //  'X-CMC_PRO_API_KEY':'c8f0c798-3fe8-4a70-9b5a-5aa85d519997'
        //      }
  //  }
//)

    //.then(response => response.json())
  //  .then(
    //  (data) => {
    //    this.setState({
    //      isLoaded: true,
    //      items: data
  //      });
  //    },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
  //    (error) => {
  //      this.setState({
  //        isLoaded: true,
  //        error
  //      });
  //    }
//    )
//}


  render () {
    return(
      <div className="row">
          <MarketCap total={this.state.curentMarketCap}/>
          <Cryptocurrencies total ={this.state.totalCurrencies} />
          <BtcDominance percentage = {this.state.Dominance}/>
          <TradeVolume total = {this.state.tradingVolume}/>

          </div>
);

}


}
export default DashBoard;
