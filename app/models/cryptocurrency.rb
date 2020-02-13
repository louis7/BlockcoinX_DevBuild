class Cryptocurrency < ActiveRecord::Base
  # this object filter the response hash into 3 core attribute: price, 24 hour change in USD and in Percent.
  def initialize (resp)
    @api_hash = resp
  end
# FUTURE Refarctor: the model should not be in charge of changing the UI. need to implement this on the front end


def bitcoin
      @bitcoin_data = {
                           price: @api_hash["RAW"]["BTC"]["USD"]["PRICE"],
                           change_usd: @api_hash["RAW"]["BTC"]["USD"]["CHANGE24HOUR"].round(2),
                           change_percent: @api_hash["RAW"]["BTC"]["USD"]["CHANGEPCT24HOUR"].round(2)
                      }
end

def ethereum
      @ethereum_data = {
                          price: @api_hash["RAW"]["ETH"]["USD"]["PRICE"],
                          change_usd: @api_hash["RAW"]["ETH"]["USD"]["CHANGE24HOUR"].round(2),
                          change_percent: @api_hash["RAW"]["ETH"]["USD"]["CHANGEPCT24HOUR"].round(2)
                        }
end

def xrp
      @XRP_data = {
                          price: @api_hash["RAW"]["XRP"]["USD"]["PRICE"],
                          change_usd: @api_hash["RAW"]["XRP"]["USD"]["CHANGE24HOUR"].round(2),
                          change_percent: @api_hash["RAW"]["XRP"]["USD"]["CHANGEPCT24HOUR"].round(2)
                  }
end

def  bitcoin_cash
      @cash_data = {
                          price: @api_hash["RAW"]["BCH"]["USD"]["PRICE"],
                          change_usd: @api_hash["RAW"]["BCH"]["USD"]["CHANGE24HOUR"].round(2),
                          change_percent: @api_hash["RAW"]["BCH"]["USD"]["CHANGEPCT24HOUR"].round(2)
                          }
end

def bitcoin_sv
      @bitcoin_sv_data = {
                            price: @api_hash["RAW"]["BSV"]["USD"]["PRICE"],
                            change_usd: @api_hash["RAW"]["BSV"]["USD"]["CHANGE24HOUR"].round(2),
                            change_Percent: @api_hash["RAW"]["BSV"]["USD"]["CHANGEPCT24HOUR"].round(2)
                         }
end

def litecoin
    @litecoin_data = {
                            price: @api_hash["RAW"]["LTC"]["USD"]["PRICE"],
                            change_usd: @api_hash["RAW"]["LTC"]["USD"]["CHANGE24HOUR"].round(2),
                            change_percent: @api_hash["RAW"]["LTC"]["USD"]["CHANGEPCT24HOUR"].round(2)
                     }
end


def tether
    @tether_data = {
                            price: @api_hash["RAW"]["USDT"]["USD"]["PRICE"],
                            change_usd: @api_hash["RAW"]["USDT"]["USD"]["CHANGE24HOUR"].round(2),
                            change_percent: @api_hash["RAW"]["USDT"]["USD"]["CHANGEPCT24HOUR"].round(2)
                }
end






def eos
      @eos_data = {
                            price: @api_hash["RAW"]["EOS"]["USD"]["PRICE"],
                            change_usd: @api_hash["RAW"]["EOS"]["USD"]["CHANGE24HOUR"].round(2),
                            change_percent: @api_hash["RAW"]["EOS"]["USD"]["CHANGEPCT24HOUR"].round(2)
             }
end

def color(change)
  if change > 0.00
        @color = "text-success"
  else
        @color = "text-danger"
end
@color
end
end
