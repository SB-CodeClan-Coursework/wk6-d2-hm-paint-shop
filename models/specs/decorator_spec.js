const assert = require('assert')
const PaintCan = require('../paint_can.js')
const Room = require('../room.js')
const Decorator = require('../decorator.js')


describe('Decorator', function(){

  let decorator;
  let paint1;

  beforeEach(function(){
    decorator = new Decorator()
    paintCan1 = new PaintCan(5)
    paintCan2 = new PaintCan(3)
  })

  it('should start with no paint cans', function(){
    actual = decorator.paintStock.length;
    assert.strictEqual(actual, 0);
  })

  it('should be able to add a paint can to stock', function(){
    decorator.addPaintCan(paintCan1);
    actual = decorator.paintStock.length;
    assert.strictEqual(actual, 1);
  })

  it('should be able to calculate litres in stock', function(){
    decorator.addPaintCan(paintCan1);
    decorator.addPaintCan(paintCan2);
    actual = decorator.checkStockLitres();
    assert.strictEqual(actual, 8);
  })

  it('should be able to calculate if they have enough paint for a room')

  it('should be able to paint the room with enough paint')

  it('should not be able to paint with not enough paint')
})
