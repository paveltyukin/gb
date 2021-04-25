export default function convertExchangeRates(numberOfRublesToConvert, costOfOneCurrencyInRubles) {
    return +(numberOfRublesToConvert / costOfOneCurrencyInRubles).toFixed(2);
}