class UberPriceCalculator {
    constructor(baseFare, costPerKm, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerKm = costPerKm;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice(distanceInKm, timeInMinutes) {
      const fareFromDistance = distanceInKm * this.costPerKm;
      const fareFromTime = timeInMinutes * this.costPerMinute;
      const totalFare = this.baseFare + fareFromDistance + fareFromTime;
      return totalFare;
    }
  }
  const calculator = new UberPriceCalculator(5, 1.5, 0.2); 
  const distance = 10; 
  const time = 20;
  const price = calculator.calculatePrice(distance, time);
  console.log(`The price for the ride is $${price}`);
  