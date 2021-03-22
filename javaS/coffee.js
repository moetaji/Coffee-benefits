var welcome = prompt("hello coffee lover")
function welcomeMseg() {

    if (welcome == "hello") {
    }
    document.write('<h3>Welcome</h3>');
    welcomeMseg()
}
var turkish = ""
var american = ""
var favCoffee = prompt("what do you prefer turkish coffe or american?")

var getFavCoffee = function () {

    while (favCoffee !== "turkish"&&favCoffee==" " && favCoffee !== "american"){
        favCoffee = prompt("please chose turkish/american");
    }

    var qountity = ""
    var product = ""
    
    if (favCoffee == "turkish") {
        product = ('<img src="https://cdn.tragate.com/items/assa-turkish-coffee-79554-14636.jpg" width=400px>/');
    }
    else if (favCoffee == "american") {
        product = ('<img src="https://conticoffee.co.za/wp-content/uploads/2020/05/product-photograph.jpg" width=400px/>');
    }
    var howPackYouWant = prompt("how much u want to buy?")
    for (var i = 0; i < howPackYouWant; i++) {
        qountity += product;
        document.write(product);
    }
}
getFavCoffee()
var theme = prompt("chose your theme green or gray")
function themePicker() {

    console.log(theme)
    if (theme == "gray") {
        document.body.style.backgroundColor = ('gray');
    }
    else if (theme == "green") {
        document.body.style.backgroundColor = ('green');
    }
}
themePicker()