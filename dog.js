function Dog() {
    this.stomach = [];
}

Dog.prototype.eat = function(cat) {
    this.stomach.push(cat);
    this.stomach.push(mouse);
}

module.exports = {Dog};
