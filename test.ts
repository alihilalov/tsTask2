// Part1;
interface IStock{
    symbol:string,
    price : number,
    sector :string
}
const stocks :IStock[] = [
    { symbol: "APL", price: 150, sector: "Technology" },
    { symbol: "GOOGL", price: 280, sector: "Technology" },
    { symbol: "AMZN", price: 330, sector: "OnlineShop" },
    { symbol: "TSLA", price: 185, sector: "Car" },
    { symbol: "MSFT", price: 300, sector: "Technology" },
    { symbol: "IBM", price: 150, sector: "Finance" },
  ];
  //Part 2
  
  const stockUpdatedPrice = () => {
    const randomStockIndex :number = Math.floor(Math.random() * stocks.length);
    const stock: IStock = stocks[randomStockIndex];
    const percentageChange :number  = (Math.random() * 10 - 5) / 100;
  
    stock.price  = stock.price * (1 + percentageChange);
    let changeSignDegree:string;
    if (percentageChange > 0) {
      changeSignDegree = `(+${(percentageChange * 100).toFixed(2)})`;
    } else {
      changeSignDegree = `(${(percentageChange * 100).toFixed(2)})`;
    }
  
    console.log(
      `${stock.symbol} price updated to $${stock.price.toFixed(
        2
      )} ${changeSignDegree}%`
    );
    clearInterval(intervalId);
  };
  const intervalId = setInterval(stockUpdatedPrice, 1000);

  //Part 3
  function filteredSector(sector:string) {
    const filteredStocks :IStock[] = stocks.filter((stock) => stock.sector === sector);
  
    console.log(`Stocks in the ${sector} sector:`);
    filteredStocks.forEach((stock:IStock) => {
      console.log(`${stock.symbol}: $${stock.price.toFixed(2)}`);
    });
  
    return filteredStocks;
  }
  console.log(filteredSector("Technology"));


  // Part 4
  function monitorStockPrices() {
    const alertPrice :number = 200;
  
    setTimeout(() => {
      stocks.forEach((stock:IStock) => {
        if (stock.price > alertPrice) {
          console.log(`Alert: ${stock.symbol} price is above $${alertPrice}: $${stock.price.toFixed(2)}`);
        } 
        else {
          console.log(`Alert: ${stock.symbol} price is below $${alertPrice}: $${stock.price.toFixed(2)}`);
        }});
    }, 5000);
  }
  monitorStockPrices();