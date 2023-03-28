function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input.match(/[^a-z]/gi);
    result = result ? result.join("") : 1;
    if(!isNaN(result) && !isNaN(parseFloat(result))){
      return Number(result);
    }
    else if( (String(result).match(/\//g) || []).length === 1) {
      return eval(String(result))

    }
    else {
      return "invalid number";
    }
  };
  
  this.getUnit = function(input) {
    let units = ["mi", "km", "lbs", "kg", "gal", "l"]
    let result = input.match(/[a-z]/gi); 
    if(!result || !units.includes(result.join("").toLowerCase())) {
      return "invalid unit";
    }
    else {
      return result.join("") ==="L" || result.join("") ==="l" ? "L" : result.join("").toLowerCase();      
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
        result = Number((initNum * miToKm).toFixed(5));
        break;
      case "km":
        result = Number((initNum / miToKm).toFixed(5));
        break;
      case "lbs":
        result = Number((initNum * lbsToKg).toFixed(6));
        break;
      case "kg":
        result = Number((initNum / lbsToKg).toFixed(6));
        break;
      case "gal":
        result = Number((initNum * galToL).toFixed(5));
        break;
      case "l":
        result = Number((initNum / galToL).toFixed(5));
        break;
      default:
        result = "invalid unit";
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);

    
    return result;
  };
  
}

module.exports = ConvertHandler;
