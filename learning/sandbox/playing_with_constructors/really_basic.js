
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

// >> red

function AnotherContainer(item) {
    this.item = item;

    function getColor() {
        if (this.item == 'apple') {
            return 'red';
        }
    }
}

var newContainer = new AnotherContainer('apple');
console.log(newContainer.getColor());

// >> /really_basic.js:30
// >> console.log(newContainer.getColor());
// >>                          ^
// >> TypeError: Object #<AnotherContainer> has no method 'getColor'
// >>     at Object.<anonymous> (/really_basic.js:30:26)
// >>     at Module._compile (module.js:456:26)
// >>     at Object.Module._extensions..js (module.js:474:10)
// >>     at Module.load (module.js:356:32)
// >>     at Function.Module._load (module.js:312:12)
// >>     at Function.Module.runMain (module.js:497:10)
// >>     at startup (node.js:119:16)
// >>     at node.js:902:3
