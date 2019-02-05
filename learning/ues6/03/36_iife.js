
let person = function(name) {
    return {
        getName: function() {
            return name;
        }
    };
}("Terry");

console.log(person.getName());
