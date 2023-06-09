function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input.match(/[^a-z]/gi);
    result = result ? result.join("") : 1;
    if(!isNaN(result) && !isNaN(parseFloat(result))){
      return Number(result);
    }
    else if( (String(result).match(/\//g) || []).length === 1) {
      let newResult = result.split("/")
      return Number(newResult[0]) / Number(newResult[1])
    }
    else {
      return "invalid number";
    }
  };
  
  this.getUnit = function(input) {
    let units = ["mi", "km", "lbs", "kg", "gal", "l"]
    let result = input.match(/[a-z]/gi).join(""); 
    if(!result || !units.includes(result.toLowerCase())) {
      return "invalid unit";
    }
    else {
      return result ==="L" || result ==="l" ? "L" : result.toLowerCase();      
    }

  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch(initUnit.toLowerCase()) {
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "gal":
        result = "L";
        break;
      case "l":
        result = "gal";
        break;
      default:
        result = "invalid unit";
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch(unit.toLowerCase()) {
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "liters";
        break;
      default:
        result = "invalid unit";
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch(initUnit.toLowerCase()) {
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      default:
        result = "invalid unit";
    }
    
    return Number(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
