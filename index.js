var x = 12;

if (x % 2 === 0) {
    console.log ("is even")
}

else {
    console.log ("is odd");
}

//(init; condition; post-loop)
for(var i = 0; i < 100; i++) {
    var y = i * 2;
    if(y < 101) {
    console.log("the number is", y)
    }
}
