const PaintCan = function(){
  this.litres = 2
};

PaintCan.prototype.checkIfEmpty = function () {
  if (this.litres === 0){
    return true
  } else {
    return false
  }
};

PaintCan.prototype.emptyPaintCan = function () {
  this.litres = 0
};

module.exports = PaintCan;
