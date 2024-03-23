
var modal;
var cart;
var span ;
var price1=0;
var price2=0;
var price3=0;
var price4=0;
var price5=0;
var price6=0;
var quantity;
const total=[];
var quantityArray =[];
var productArray =[];
var priceArray =[];
var alertMessage =[];


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function product1(){ 
  modal = document.getElementById("myModal");
  modal.style.display = "block";
}
function close1(){
  span = document.getElementsByClassName("close1")[0];
  modal.style.display = "none";
}
function addtocart_1(){
  quantity =document.getElementById("product1").value;
  document.getElementById("cart_data1").textContent="Project Shadow          "+quantity+" =  "+quantity*1000.00;
  price1 =quantity*1000.00;
  
}



function product2(){ 
  modal = document.getElementById("myModal2");
  modal.style.display = "block";
}
function close2(){
  span = document.getElementsByClassName("close2")[0];
  modal.style.display = "none";
}
function addtocart_2(){
  quantity =document.getElementById("product2").value;
  document.getElementById("cart_data2").textContent="UNREAL T-Shirt          "+quantity+" =  "+quantity*2000.00;
  total.push(quantity*2000.00);
}


function product3(){ 
  modal = document.getElementById("myModal3");
  modal.style.display = "block";
}
function close3(){
  span = document.getElementsByClassName("close3")[0];
  modal.style.display = "none";
}
function addtocart_3(){
  quantity =document.getElementById("product3").value;
  document.getElementById("cart_data3").textContent="UNREAL Hoodie           "+quantity+" =  "+quantity*3000.00;
  total.push(quantity*3000.00);
}



function product4(){ 
  modal = document.getElementById("myModal4");
  modal.style.display = "block";
}
function close4(){
  span = document.getElementsByClassName("close4")[0];
  modal.style.display = "none";
}
function addtocart_4(){
  quantity =document.getElementById("product4").value;
  document.getElementById("cart_data4").textContent="Invisible Dimesion File "+quantity+" =  "+quantity*900.00;
  total.push(quantity*900.00);
}



function product5(){ 
  modal = document.getElementById("myModal5");
  modal.style.display = "block";
}
function close5(){
  span = document.getElementsByClassName("close5")[0];
  modal.style.display = "none";
}
function addtocart_5(){
  quantity =document.getElementById("product5").value;
  document.getElementById("cart_data5").textContent="UNREAL Cap              "+quantity+" =  "+quantity*400.00;
  total.push(quantity*400.00);
}





function product6(){ 
  modal = document.getElementById("myModal6");
  modal.style.display = "block";
}
function close6(){
  span = document.getElementsByClassName("close6")[0];
  modal.style.display = "none";
}

function addtocart_6(){
  quantity =document.getElementById("product6").value;
  document.getElementById("cart_data6").textContent="UNREAL Watch            "+quantity+" =  "+quantity*3500.00;
  if(quantity==0){
    price6=0;
  }
  else{ price6=quantity*3500.00;}
 return price6;
}
var last_total=price6;

  document.getElementById("total-price").textContent=last_total;
  console.log(total[1]);



function product_cart(){ 
  modal = document.getElementById("mycart");
  modal.style.display = "block";
}
function close_cart(){
  span = document.getElementsByClassName("close_cart")[0];
  modal.style.display = "none";
}



function close_user(){
  span = document.getElementsByClassName("close_user")[0];
  modal.style.display = "none";
  close_cart()
  
}


var totalPrice=0;
	var i;
	for(i = 0; i < productArray.length; i++){
		var tempString = quantityArray[i] + " x " + productArray[i] + " - Rs " + priceArray[i];
		alertMessage.push(tempString);
		totalPrice += priceArray[i];
    const para = document.getElementById('cart_data').textContent;
    para.textContent = join("\nYour order summary : \n" + alertMessage.join("\n") + "\nYour total is Rs " + totalPrice.toString() + "\nThank you for shopping with Taprobane online store.\nYour products will be delivered within soon.");
	}
  /*var value2;

  function test(){
    value2=document.getElementById("product6").value;
    document.getElementById("cart-data").textContent=("UNREAL Watch "+value2+" = "+value2 *3500);
    /*display("cart-data","UNREAL Watch "+value2+" = "+value2 *3500);
  }
  function display(id,text){
    document.getElementById(id).textContent=text;
  
  }*/


window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



function validateForm(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var address = document.getElementById("address").value;
	var credit = document.getElementById("Cnumber").value;
	var mobile = document.getElementById("Mnumber").value;
	var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
	
	if(name.length < 3){
		alert("Name must be filled out");
		return false;
	}
	
	
	if(!email.match(mailformat)){
		alert("Email must be filled out");
		return false;
	}
	
	
	if(address==""){
		alert("Address must be filled out");
		return false;
	}

	if(credit==""){
		alert("Credit card number must be filled out");
		return false;
	}

	if(mobile.length < 9){
		alert("Mobile Number must be filled out");
		return false;
	}

	var totalPrice=0;
	var i;
	for(i = 0; i < productArray.length; i++){
		var tempString = quantityArray[i] + " x " + productArray[i] + " - Rs " + priceArray[i];
		alertMessage.push(tempString);
		totalPrice += priceArray[i];
	}
}

