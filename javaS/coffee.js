var coffee = prompt("hello coffee lover")
if (coffee == "hello") {
    document.write('<h3>Welcome</h3>');
}
var turkish = ""
var american = ""
var favCoffee = prompt("what do you prefer turkish coffe or american?")
while (favCoffee !== "turkish" && favCoffee !== "american")
    favCoffee = prompt("please chose turkish/american")

var product = ""
var qountity = ""

if (favCoffee == "turkish") {
    product = ('<img src="https://cdn.tragate.com/items/assa-turkish-coffee-79554-14636.jpg" width=400px>/');
}
else if (favCoffee == "american") {
    product = ('<img src="https://conticoffee.co.za/wp-content/uploads/2020/05/product-photograph.jpg" width=400px/>')
}
var howPackYouWant = prompt("how much u want to buy?")
for (var i = 0; i < howPackYouWant; i++) {
    qountity += product;
    document.write(product);
}
var theme = prompt("chose your theme green or gray")
console.log(theme)
if (theme == "gray") {
    document.body.style.backgroundColor = ('gray');
}
else if (theme == "green") {
    document.body.style.backgroundColor = ('green');
}
else {
    document.body.style.backgroundColor = ('brown');
}
