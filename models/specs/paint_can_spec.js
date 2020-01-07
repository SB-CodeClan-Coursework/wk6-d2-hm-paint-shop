const assert = require('assert')
const PaintCan = require('../paint_can.js')

describe('PaintCan', function(){

  let paintCan1;
  let paintCan2;

  beforeEach(function (){
    paintCan1 = new PaintCan();
    paintCan2 = new PaintCan();
  })

  it('has paint', function(){
      const expected = false;
      const actual = paintCan1.checkIfEmpty();
    assert.strictEqual(actual, expected);
  })

  it('should check if it is empty', function(){
    paintCan2.emptyPaintCan();
    const expected = true;
    const actual = paintCan2.checkIfEmpty();
    assert.strictEqual(actual, expected);
  })

  it('should be able to empty', function(){
    paintCan1.emptyPaintCan()
    const expected = 0
    const actual = paintCan1.litres;
    assert.strictEqual(actual, expected)
  })

});
