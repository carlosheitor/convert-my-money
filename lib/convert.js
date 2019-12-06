const convert = (cotacao, quantidade) => cotacao * quantidade;
const toMoney = value => parseFloat(value).toFixed(2);

module.exports = {
    convert,
    toMoney
}