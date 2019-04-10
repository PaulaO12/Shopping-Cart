var Product=[];
var Price=[];

$("#newItem").click(function(){
    var Item = $("#nameofproduct").val();
    Product.push(Item);
    console.log(Product);
    $(".cartItem").text(Product.length);
   $("#Nameproduct").append("<p>"+Item+"</p>");
   var price = $("#priceofproduct").val();
    Price.push(price);
    console.log(Price);
   $("#priceofProduct").append("<p>"+price+"</p>");
});
    