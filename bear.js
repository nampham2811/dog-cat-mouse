function Beer() {
    this.stomach = [];
}

Beer.prototype.eat = function(cat) {
    this.stomach.push(cat);
    this.stomach.push(mouse);
}

module.exports = { Beer };
