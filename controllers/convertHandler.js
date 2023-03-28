function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input.match(/[^a-z]/gi).join("");
    if(!isNaN(result) && !isNaN(parseFloat(result))){
      return result;
    } else {
      return "invalid number";
    }
  };
  
  this.getUnit = function(input) {
    let result = input.match(/[a-z]/gi);    
    return result.join("");
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch(initUnit) {
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
        result = "l";
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
    switch(unit) {
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
    if(initUnit === "mi"){
      result = initNum * miToKm;
    }
    if(initUnit === "km"){
      result = initNum / miToKm;
    }
    if(initUnit === "lbs"){
      result = initNum * lbsToKg;
    }
    if(initUnit === "kg"){
      result = initNum / lbsToKg;
    }
    if(initUnit === "gal"){
      result = initNum * galToL;
    }
    if(initUnit === "l"){
      result = initNum / galToL;
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
