// let hi = localStorage.getItem("cart")
// let stringIntoArr = JSON.parse(hi)
// let div = document.querySelector("#output")


// orderedPhones =[...stringIntoArr]

// orderedPhones.map((item) => {
//     div.innerHTML += `
//     <div class = "container mb-5  bg-white text-black rounded-5 pb-5 pt-5  d-flex justify-content-center gap-5 flex-wrap my-5">
//      <ul class = "list">
//        <li><h1>NAME : ${item.model}</h1></li>
//        <li><h1>BRAND : ${item.brand}</h1></li>
//        <li><h1>PRICE : ${item.price}$</h1></li>
//        <li><h1>QUANTITY : ${item.quantity}</h1></li>
//        <li><h1>TOTAL PRICE : ${item.price * item.quantity}$</h1></li>
//        <button onclick ="">Delete Item</button>
//      </ul> 
//     </div>  
//     `
// })


// console.log(stringIntoArr);

// const deleteItem =(index) => {
//      div.innerHTML = ``
//      orderedPhones.splice(index,1)
//      const newcartstring = JSON.stringify(orderedPhones)
//      localStorage.setItem("cart",newcartstring)
//      orderedPhones.map((item,index) => {
//         div.innerHTML += `
//      <div class="container mb-5  bg-white text-black rounded-5 pb-5 pt-5  d-flex justify-content-center gap-5 flex-wrap my-5" >
//      <ul class ="list">
//      <li><h1>NAME : ${item.model}</h1></li>   
//      <li><h1>BRAND : ${item.brand}</h1></li>
//      <li><h1>PRICE : ${item.price}</h1></li>
//      <li><h1>QUANTITY : ${item.quantity}</h1></li>
//      <li><h1>TOTAL PRICE : ${item.price * item.quantity}</h1></li>
//      <button onclick= "">Delete Item</button>   
//      </ul>
//      </div> 
//      `
//      })


//      Swal.fire({
//         position : "center",
//         icon : "success",
//         title : "Your item has been deleted",
//         showConfirmButton : false ,
//         timer : 1000
//      });
//     }


// function goBack() {
//     window.location = "index.html"
// }







let hi = localStorage.getItem("cart")
let stringintoarr = JSON.parse(hi)
let div = document.querySelector("#output")

orderedPhones = [...stringintoarr]

orderedPhones.map((item) =>{
    div.innerHTML += `
    <div class="container mb-5  bg-white text-black rounded-5 pb-5 pt-5  d-flex justify-content-center gap-5 flex-wrap my-5" >
  <ul class="list">
      <li><h1>NAME : ${item.model}</h1></li>
      <li><h1>Brand: ${item.brand}</h1></li>
      <li><h1>Price: ${item.price}$</h1></li>
      <li><h1>Quantity: ${item.quantity}<h1><li>
      <li><h1>TOTAL PRICE: ${item.price * item.quantity}$<h1></li>  
      <Button onclick= "deleteItem()">Delete Item<Button>
      </div>
      `
})

console.log(stringintoarr);

const deleteItem =(index) =>{
div.innerHTML = ``
orderedPhones.splice(index,1) 
const newcartstring = JSON.stringify(orderedPhones)
localStorage.setItem("cart",newcartstring)
 orderedPhones.map((item,index)=>{
     div.innerHTML += `             
       <div class="container mb-5  bg-white text-black rounded-5 pb-5 pt-5  d-flex justify-content-center gap-5 flex-wrap my-5" >
  <ul class="list">
      <li><h1>NAME : ${item.model}</h1></li>
      <li><h1>Brand: ${item.brand}</h1></li>
      <li><h1>Price: ${item.price}$</h1></li>
      <li><h1>Quantity: ${item.quantity}<h1><li>
    <li><h1>TOTAL PRICE: ${item.price}<h1></li>  
      <Button onclick= "deleteItem()">Delete Item<Button>
      </div>`
})
  Swal.fire({
      position: "center",
      icon: "success",
      title: "Your item has been deleted",
      showConfirmButton: false,
      timer: 1500
    });
}

function goBack() {
    window.location = "index.html"
}