 var fruits = ["Orange", "Cherry", "Apple", "Grapes", "Pear"]
 // console.log(fruits);
 console.log(fruits[1]);

 var a = ["a", "b", "c", "d", "e"]
a.push("z")
/console.log(a);

 a.pop()
 console.log(a);

 a.shift()
 console.log(a);

 a.unshift("y")
 console.log(a);

var b = a.slice(0, 2)
 console.log(b);

 a.splice(3, 1)
 console.log(a);

 a.splice(3, 1, "h", "i", "j")
 console.log(a);

 a.splice(3, 0, "p", "o")
 console.log(a);

 var b = a.length
 console.log(b);

var i = a.indexOf("d")
console.log(i);

 var i = a.indexOf("e")
console.log(a[i]);

for (var a = 0; a < 10; a++){
    console.log("abc" +a);
}

for (var a = 0; a < 10; a++){
    console.log("3 X " + (a + 1) + " = " + 3 * (a + 1));
}
    



