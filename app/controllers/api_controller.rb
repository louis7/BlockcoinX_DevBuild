require 'require_all'
require 'pry';


class ApiController < ApplicationController




   def search
     @results = HTTParty.get('https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest', :headers => {
  'X-CMC_PRO_API_KEY' => 'c8f0c798-3fe8-4a70-9b5a-5aa85d519997',
  "Content-Type" => "application/json",

})



      #  if @resp.success?
        #    @crypto = Cryptocurrency.new(@body)

      #    else
      #     @error = @body["meta"]["errorDetail"]
      #  end

      # rescue Faraday::ConnectionFailed
    #     @error = "There was a timeout. Please try again."



     render json: @results.to_json
   end
end
