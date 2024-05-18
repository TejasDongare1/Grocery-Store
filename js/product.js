const quantityText=document.getElementById(`quantity-text`);
const showQuantity=document.getElementById(`show-quantity`);
const showTotal=document.getElementById(`show-total`);

  function inc(){
let quantity=parseInt(quantityText.innerText);
if(quantity<=5){
  quantityText.innerText = ++quantity;
}
else
{
  alert("You can't add more than 6 items....")
}
setTotalAmount(quantity);
}
function dec(){
const quantity=parseInt(quantityText.innerText);

if(quantity>1){
  quantityText.innerText = quantity-1;
}
else
{
  alert("You can't add Less than 1 items....")
}
setTotalAmount(quantity);
}

function setTotalAmount(quantity){
  showQuantity.innerText =` ${quantity}*564`;
showTotal.innerText =`Total:${quantity*564}`;

}
//second card
const quantityText1=document.getElementById(`quantity-text1`);
const showQuantity1=document.getElementById(`show-quantity1`);
const showTotal1=document.getElementById(`show-total1`);
function inc1(){
let quantity=parseInt(quantityText1.innerText);
if(quantity<=5){
  quantityText1.innerText = ++quantity;
}
else
{
  alert("You can't add more than 6 items....")
}
setTotalAmount1(quantity);
}

 //Fourth card
 const quantityText3=document.getElementById(`quantity-text3`);
const showQuantity3=document.getElementById(`show-quantity3`);
const showTotal3=document.getElementById(`show-total3`);
function inc3(){
let quantity=parseInt(quantityText3.innerText);
if(quantity<=5){
  quantityText3.innerText = ++quantity;
}
else
{
  alert("You can't add more than 6 items....")
}
setTotalAmount3(quantity);
}
function dec3(){
const quantity=parseInt(quantityText3.innerText);

if(quantity>1){
  quantityText3.innerText = quantity-1;
}
else
{
  alert("You can't add less than 1 items....")
}
setTotalAmount3(quantity);
}
//end
function setTotalAmount3(quantity){
  showQuantity3.innerText =` ${quantity}*164`;
showTotal3.innerText =`Total:${quantity*164}`;
}
 //Fifth card
 const quantityText4=document.getElementById(`quantity-text4`);
const showQuantity4=document.getElementById(`show-quantity4`);
const showTotal4=document.getElementById(`show-total4`);
function inc4(){
let quantity=parseInt(quantityText4.innerText);
if(quantity<=5){
  quantityText4.innerText = ++quantity;
}
else
{
  alert("You can't add more than 6 items....")
}
setTotalAmount4(quantity);
}
function dec4(){
const quantity=parseInt(quantityText4.innerText);

if(quantity>1){
  quantityText4.innerText = quantity-1;
}
else
{
  alert("You can't add less than 1 items....")
}
setTotalAmount4(quantity);
}
//end
function setTotalAmount4(quantity){
  showQuantity4.innerText =` ${quantity}*340`;
showTotal4.innerText =`Total:${quantity*340}`;
}
 
//end
function setTotalAmount5(quantity){
  showQuantity5.innerText =` ${quantity}*499`;
showTotal5.innerText =`Total:${quantity*499}`;
}
 //  Seven card
 const quantityText6=document.getElementById(`quantity-text6`);
const showQuantity6=document.getElementById(`show-quantity6`);
const showTotal6=document.getElementById(`show-total6`);
function inc6(){
let quantity=parseInt(quantityText6.innerText);
if(quantity<=5){
  quantityText6.innerText = ++quantity;
}
else
{
  alert("You can't add more than 6 items....")
}
setTotalAmount6(quantity);
}
function dec6(){
const quantity=parseInt(quantityText6.innerText);

if(quantity>1){
  quantityText6.innerText = quantity-1;
}
else
{
  alert("You can't add less than 1 items....")
}
setTotalAmount6(quantity);
}
//end
function setTotalAmount6(quantity){
  showQuantity6.innerText =` ${quantity}*1799`;
showTotal6.innerText =`Total:${quantity*1799}`;
}
 //  Eight card
 const quantityText7=document.getElementById(`quantity-text7`);
const showQuantity7=document.getElementById(`show-quantity7`);
const showTotal7=document.getElementById(`show-total7`);
function inc7(){
let quantity=parseInt(quantityText7.innerText);
if(quantity<=5){
  quantityText7.innerText = ++quantity;
}
else
{
  alert("You can't add more than 6 items....")
}
setTotalAmount7(quantity);
}
function dec7(){
const quantity=parseInt(quantityText7.innerText);

if(quantity>1){
  quantityText7.innerText = quantity-1;
}
else
{
  alert("You can't add less than 1 items....")
}
setTotalAmount7(quantity);
}
//end
function setTotalAmount7(quantity){
  showQuantity7.innerText =` ${quantity}*1691`;
showTotal7.innerText =`Total:${quantity*1691}`;
}
const quantityText2=document.getElementById(`quantity-text2`);
const showQuantity2=document.getElementById(`show-quantity2`);
const showTotal2=document.getElementById(`show-total2`);
function inc2(){
let quantity=parseInt(quantityText2.innerText);
if(quantity<=5){
  quantityText2.innerText = ++quantity;
}
else
{
  alert("You can't add more than 6 items....")
}
setTotalAmount2(quantity);
}
function dec2(){
const quantity=parseInt(quantityText2.innerText);

if(quantity>1){
  quantityText2.innerText = quantity-1;
}
else
{
  alert("You can't add less than 1 items....")
}
setTotalAmount2(quantity);
}
//end
function setTotalAmount2(quantity){
  showQuantity2.innerText =` ${quantity}*1691`;
showTotal2.innerText =`Total:${quantity*1691}`;
}

 
 
//dark and light mode
function darkMode(){
const imgDark = document.getElementById(`img-dark`);
imgDark.classList.add(`active`);

const imgLight= document.getElementById(`img-light`);
imgLight.classList.remove(`active`);

const bodyElement=document.getElementById("body");
bodyElement.className=`theme-dark`;
}
function lightMode(){
const imgDark= document.getElementById(`img-dark`);
imgDark.classList.remove(`active`);

const imgLight=  document.getElementById(`img-light`);
imgLight.classList.add(`active`);

const bodyElement=document.getElementById(`body`);
bodyElement.className=`theme-light`;
}
function msg(){
alert("Thank you for your order! ");
}
