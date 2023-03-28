const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

// convertHandler should correctly read a whole number input.
test('Whole number input', function(done) {
    let input = '32L';
    assert.equal(convertHandler.getNum(input), 32);
    done();
});

// convertHandler should correctly read a decimal number input.
test('Decimal number input', function(done) {
    let input = '3.2L';
    assert.equal(convertHandler.getNum(input), 3.2);
    done();
})

// convertHandler should correctly read a fractional input.
test('Fractional input', function(done) {
    let input = '3/2L';
    assert.equal(convertHandler.getNum(input), 3/2);
    done();
})

// convertHandler should correctly read a fractional input with a decimal.
test('Fractional input with decimal', function(done) {
    let input = '3.2/2L';
    assert.equal(convertHandler.getNum(input), 3.2/2);
    done();
})

// convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
test('Double fraction', function(done) {
    let input = '3/2/3L';
    assert.equal(convertHandler.getNum(input), 'invalid number');
    done();
})

// convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
test('No numerical input', function(done) {
    let input = 'L';
    assert.equal(convertHandler.getNum(input), 1);
    done();
})

// convertHandler should correctly read each valid input unit.
test('Valid input unit', function(done) {
    let input = 'gal';
    assert.equal(convertHandler.getUnit(input), 'gal');
    done();
})

// convertHandler should correctly return an error for an invalid input unit.
test('Invalid input unit', function(done) {
    let input = 'gall';
    assert.equal(convertHandler.getUnit(input), 'invalid unit');
    done();
})

// convertHandler should return the correct return unit for each valid input unit.
test('Correct return unit', function(done) {
    let input = 'gal';
    assert.equal(convertHandler.getReturnUnit(input), 'L');
    done();
})

// convertHandler should correctly return the spelled-out string unit for each valid input unit.
test('Spelled-out string unit', function(done) {
    let input = 'gal';
    assert.equal(convertHandler.spellOutUnit(input), 'gallons');
    done();
})

// convertHandler should correctly convert gal to L.
test('Convert gal to L', function(done) {
    let input = 'gal';
    assert.equal(convertHandler.convert(1, input), 3.78541);
    done();
})

// convertHandler should correctly convert L to gal.
test('Convert L to gal', function(done) {
    let input = 'L';
    assert.equal(convertHandler.convert(1, input), 0.26417);
    done();
})

// convertHandler should correctly convert mi to km.
test('Convert mi to km', function(done) {
    let input = 'mi';
    assert.equal(convertHandler.convert(1, input), 1.60934);
    done();
})

// convertHandler should correctly convert km to mi.
test('Convert km to mi', function(done) {
    let input = 'km';
    assert.equal(convertHandler.convert(1, input), 0.62137);
    done();
})

// convertHandler should correctly convert lbs to kg.
test('Convert lbs to kg', function(done) {
    let input = 'lbs';
    assert.equal(convertHandler.convert(1, input), 0.45359);
    done();
})

// convertHandler should correctly convert kg to lbs.
test('Convert kg to lbs', function(done) {
    let input = 'kg';
    assert.equal(convertHandler.convert(1, input), 2.20462);
    done();
})


});