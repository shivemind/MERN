// GIVEN
console.log(example);
var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

console.log(hello);                                   
var hello = 'world';   
//var hello;
// console.log('hello');
// hello = 'world';

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// var needle;
// needle = 'haystack';
// test();
// function test(){
//     var needle;
//     console.log(needle);
//     needle = 'haystack';
// }

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan;
// brendan = "super cool";
// function print(){
//     console.log(brendan);
//     brendan = 'only okay'
// }
// console.log(brendan);

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food;
// food = 'chicken';
// eat();
// function eat(){
//     var food;
//     food = 'half chicken';
//     food = 'gone';
//     console.log(food);

// }

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// mean();
// console.log(food);
// var mean = function(){
//     var food;
//     food = "fish";
//     food = 'chicken';
//     console.log(food);
// }
// console.log(food);

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre;
// genre = 'disco';
// rewind();
// function rewind(){
//     var genre;
//     genre = 'rock';
//     genre = 'r&b';
//     console.log(genre);
// }
// console.log('genre')

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// dojo = 'san jose';
// console.log(dojo);
// learn();
// function learn(){
//     var dojo;
//     dojo = seattle;
//     dojo = 'burbank';
//     console.log(dojo);
// }
// console.log(dojo);