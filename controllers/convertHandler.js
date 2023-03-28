function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input.match(/[^a-z]/gi);
    result = result ? result.join("") : 1;
    if(!isNaN(result) && !isNaN(parseFloat(result))){
      return Number(result);
    }
    else if( String(result).includes("/") ) {
      // let split = result.split("/");
      // if( split.length > 2 ) {
      //   return "invalid number";
      // }
      // else if( split[0] == "" || split[1] == "" ) {
      //   return "invalid number";
      // }
      // else if( isNaN(split[0]) || isNaN(split[1]) ) {
      //   return "invalid number";
      // }
      // else if( isNaN(parseFloat(split[0])) || isNaN(parseFloat(split[1])) ) {
      //   return "invalid number";
      // }
      // else {
      //   return parseFloat(split[0]) / parseFloat(split[1]);
      // }
      return eval(String(result))

    }
    else {
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
        result = "L";
        break;
      case "L":
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
      case "L":
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
    switch(initUnit) {
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
      case "L":
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
