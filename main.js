const axios = require('axios');

const getExchangeRate = async(fromCurrency, toCurrency) => {
   try {
     const response = await axios.get('https://api.exchangerateapi.com/v4/latest/' + fromCurrency);
     const rate = response.data.rates[toCurrency];
     return rate;
   } catch (error) {
     throw new Error(`Failed to get exchange rate for ${fromCurrency} and ${toCurrency}`);
   }
};

getExchangeRate('USD', 'RUB').then(rate => console.log(rate));
