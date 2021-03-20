var coffee = prompt("hello coffee lover")
if (coffee == "hello") {
    document.write('<h3>Welcome</h3>');
}
var essprso = prompt("are you essprso person?");
if (essprso == "yes") {
    document.write('<img src="javaS/pictures/turkish_coffee_pouring.jpg">/');
}
else {
    alert("sorry for you :D");
    console.log(essprso)
}
var coffeBean =prompt("green,gray")
console.log(coffeBean)
if( coffeBean=="gray"){
    document.body.style.backgroundColor=('gray');
}
else if(coffeBean=="green") {
    document.body.style.backgroundColor=('green');
}
else{
    document.body.style.backgroundColor=('brown');
}
