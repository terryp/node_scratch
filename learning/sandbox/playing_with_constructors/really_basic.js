
function Container(item) {
    function getColor() {
        if (item == 'apple') {
            return 'red';
        }
    }

    var item = item;
    this.color = getColor();

}

var myContainer = new Container('apple');
console.log(myContainer.color);
