
function inc() {
  const data = document.getElementById("quantity");
  const showQuantity = document.getElementById("show-quantity");
  const showTotal = document.getElementById("show-total");
  let data2 = parseInt(data.innerText);


  if (data2 < 10) {
    data.innerText = ++data2;
  }
  else {
    alert("You Can't add More than 10 items")
  }

  showQuantity.innerText = `${data2} x 100`;
  showTotal.innerText = `Total:${data2 * 100}`;


}
function dec() {
  const data = document.getElementById("quantity");
  const showQuantity = document.getElementById("show-quantity");
  const showTotal = document.getElementById("show-total");
  let data2 = parseInt(data.innerText);

  if (data2 > 1) {
    data.innerText = --data2;
  }
  else {
    alert("You Can't add Less than 1 item")
  }

  showQuantity.innerText = `${data2} x 100`;
  showTotal.innerText = `Total:${data2 * 100}`;
}




// function incr() {
//   const data3 = document.getElementById("quantity-1");
//   const showQuantity1 = document.getElementById("show-quantity-1");
//   const showTotal1 = document.getElementById("show-total-1");
//   let data4 = parseInt(data.innerText);


//   if (data4 < 10) {
//     data3.innerText = ++data4;
//   }
//   else {
//     alert("You Can't add More than 10 items")
//   }

//   showQuantity-1.innerText = `${data4} x 100`;
//   showTotal-1.innerText = `Total:${data4 * 100}`;


// }
// function decr() {
//   const data3 = document.getElementById("quantity-1");
//   const showQuantity1 = document.getElementById("show-quantity-1");
//   const showTotal1 = document.getElementById("show-total-1");
//   let data4 = parseInt(data3.innerText);

//   if (data4 > 1) {
//     data3.innerText = --data4;
//   }
//   else {
//     alert("You Can't add Less than 1 item")
//   }

//   showQuantity-1.innerText = `${data4} x 100`;
//   showTotal1-1.innerText = `Total:${data4 * 100}`;
// }



