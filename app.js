




const mainMenu = [ 
    {
        title :  "Hot Deal 1" ,
        description : "1 Chicken Tikka - LEG 1 Chicken Roll 1 Paratha | 1 Regular Drink",  
        price : "299",
        Category : "Hot deal",
        img : "https://tipuburgerandbroast.com/food-items/item-04768dcc-baad-4ae3-b01f-6bf1fbcc168e.webp",

    },
    {
        title :  "Hot Deal 2" ,
        description : "2 Chicken Tikka - LEG 1 Chicken Roll 1 Paratha | 1 Regular Drink",  
        price : "999",
        img : "https://tipuburgerandbroast.com/food-items/item-e8895eab-fe32-48c4-bbc6-be35ccb352b3.webp",
        Category : "Hot deal",

    },
    {
        title :  "Hot Deal 3" ,
        description : "Chicken Tikka - LEG 1 Chicken Roll 1 Paratha | 1 Regular Drink",  
        price : "299",
        img : "https://tipuburgerandbroast.com/food-items/item-ac3d804b-79a1-409c-83e0-4be2db0bffea.webp",
        Category : "Hot deal",

    },
    {
        title :  "tikka" ,
        description : "Chicken Tikka - LEG 1 Chicken Roll 1 Paratha | 1 Regular Drink",  
        price : "299",
        img : "https://tipuburgerandbroast.com/food-items/item-74afda32-798a-4d7d-9ba5-1144ffb3a85a.webp",
        Category : "Tikka",

    },
    {
        title :  "tikka" ,
        description : "Chicken Tikka - Chest 1 Chicken Roll 1 Paratha | 1 Regular Drink",  
        price : "499",
        img : "https://tipuburgerandbroast.com/food-items/item-a5abc0b0-d71f-4706-94f6-c90f5fb76548.webp",
        Category : "Tikka",

    },
    {
        title :  "Chicken burger " ,
        description : "Chicke burger and frech Fries",  
        price : "399",
        img : "https://tipuburgerandbroast.com/food-items/item-472ae571-b0bf-4774-b849-ffadca539a5a.jpg",
        Category : "Chicken Burger",

    },
    {
        title :  "Chicken Burger Double " ,
        description : "Chicke burger and frech Fries",  
        price : "299",
        img : "https://tipuburgerandbroast.com/food-items/item-90c07f05-1fb6-437c-980c-5938ad82699a.jpg",
        Category : "Chicken Burger",

    },
    {
        title :  "Beef Burger Double " ,
        description : "Beef burger and frech Fries",  
        price : "299",
        img : "https://tipuburgerandbroast.com/food-items/item-4504b492-9fd5-428d-812b-48aadf853e9f.jpg",
        Category : "Beef Burger",

    },
    {
        title :  "Beef Steak Burger" ,
        description : "Chicken burger and frech Fries",  
        price : "299",
        img : "https://tipuburgerandbroast.com/food-items/item-94147475-8dc5-4038-8a83-51a350444b51.jpg",
        Category : "beef burger ",

    },
    {
        title :  "Sandwitch " ,
        description : "Chicken  sandwitchand  & frech Fries",  
        price : "299",
        img : "https://tipuburgerandbroast.com/food-items/item-9fc88e23-9da1-4076-9f38-7167c2b39dd8.jpg",
        Category : "Sandwitch",

    },
     {
        title :  "Club Sandwitch With Cheese " ,
        description : "Chicken sandwitch and frech Fries",  
        price : "299",
        img : "https://tipuburgerandbroast.com/food-items/item-3d689499-be47-4411-a01b-76748aeb4e2a.jpg",
        Category : "Sandwitch",

    }, 
    {
        title :  "Beef Roll " ,
        description : "",  
        price : "299",
        img : "https://tipuburgerandbroast.com/food-items/item-3ee9208a-5e6b-4780-b142-a7b46ee3fa0b.jpg",
        Category : "Roll",

    }, 
    
    {
        title :  "Zinger Burger" ,
        description : "With French Fries And Coles Law",  
        price : "399",
        img : "https://tipuburgerandbroast.com/food-items/item-078e68c9-fd7e-42bc-aead-7243a0a36d71.jpg",
        Category : "Roll",

    }, 
     
    {
        title :  "Double Zinger Burger" ,
        description : "With French Fries And Coles Law",  
        price : "599",
        img : "https://tipuburgerandbroast.com/food-items/item-a6e2746a-e3b8-4d5d-9944-7a3471d72061.jpg",
        Category : "Zinger Burger",

    }, 
    
    {
        title :  "Beef Roll " ,
        description : "",  
        price : "299",
        img : "https://tipuburgerandbroast.com/food-items/item-3ee9208a-5e6b-4780-b142-a7b46ee3fa0b.jpg",
        Category : "BBQ",

    }, 
    {
        title :  "Chicken Malai Tikka " ,
        description : "",  
        price : "299",
        img : "https://tipuburgerandbroast.com/food-items/item-446adab8-3691-40fc-a3a2-1933ea70f3e0.jpg",
        Category : "BBQ",

    }, 
    
    {
        title :  "chicken malai Boti" ,
        description : "",  
        price : "299",
        img : "https://tipuburgerandbroast.com/food-items/item-262b63df-cd34-4c8d-88f5-ce2a969d4147.jpg",
        Category : "BBQ",

    }, 
]
 

     toggle()

    // search Input function



    // const searchinput = document.getElementById("search-input");
    // const searchValue = searchinput.value;
    // console.log(searchValue)

    


    // document.querySelector(".search-button").addEventListener("input", function (){
    //    let searchValue = document.querySelector(".search-input").value;
         
    // })

   

     // searchValue 


//      function searchtoogle(){
           
                              
//         const mainmenubody = mainMenu.filter(function(menu){
//         return menu.title.toLowerCase ===  searchValue.toLowerCase
//       }).map( function(menu) {
//                console.log(mainmenubody)
// const menuHtml = 
     
//        `<div class="card" style="width: 18rem;">
//   <img src="${menu.img}" alt="hot deal">
//   <div class="card-body">
//     <h5 class="card-title"> <strong>${menu.title}</strong></h5>
//     <p class="card-text">${menu.description}</p>
//     <div class="price-btn">
//         <p> <strong>${menu.price}</strong></p>
//          <button class="add-btn">Add</button>
//     </div>
   
//   </div>
// </div> 

// `
// return menuHtml


// document.querySelector(".hdeal").style.backgroundColor = "white";
// return document.querySelector(".hdeal").style.color = "black";
// document.querySelector(".Menu-cards").innerHTML= mainmenubody.join("")




     









  
  

      


 


toggle()






function toggle(){

    const mainmenubody = mainMenu.map( function(menu) {
      
const menuHtml = 
     
       `<div class="card" style="width: 18rem;">
  <img src="${menu.img}" alt="hot deal">
  <div class="card-body">
    <h5 class="card-title"> <strong>${menu.title}</strong></h5>
    <p class="card-text">${menu.description}</p>
    <div class="price-btn">
        <p> <strong>${menu.price}</strong></p>
         <button class="add-btn">Add</button>
    </div>
   
  </div>
</div> `
return menuHtml

})

document.querySelector(".Menu-cards").innerHTML= mainmenubody.join("")

}


function hotdeal() {

      const mainmenubody = mainMenu.filter(function(menu){
        return menu.Category == "Hot deal"
      }).map( function(menu) {
      
const menuHtml = 
     
       `<div class="card" style="width: 18rem;">
  <img src="${menu.img}" alt="hot deal">
  <div class="card-body">
    <h5 class="card-title"> <strong>${menu.title}</strong></h5>
    <p class="card-text">${menu.description}</p>
    <div class="price-btn">
        <p> <strong>${menu.price}</strong></p>
         <button class="add-btn">Add</button>
    </div>
   
  </div>
</div> 

`
return menuHtml

})
// document.querySelector(".hdeal").style.backgroundColor = "white";
// return document.querySelector(".hdeal").style.color = "black";
document.querySelector(".Menu-cards").innerHTML= mainmenubody.join("")


}
function chickenburger(){
          
  const mainmenubody = mainMenu.filter(function(menu){
        return menu.Category == "Chicken Burger"
      }).map( function(menu) {
      
const menuHtml = 
     
       `<div class="card" style="width: 18rem;">
  <img src="${menu.img}" alt="hot deal">
  <div class="card-body">
    <h5 class="card-title"> <strong>${menu.title}</strong></h5>
    <p class="card-text">${menu.description}</p>
    <div class="price-btn">
        <p> <strong>${menu.price}</strong></p>
         <button class="add-btn">Add</button>
    </div>
   
  </div>
</div> `
return menuHtml

})

document.querySelector(".Menu-cards").innerHTML= mainmenubody.join("")
  bigtext.textContent =  mainmenubody.Category
  
}

// let bewone = mainmenubody.Category

// console.log(bewone)
function beefburger() {
  
              
  const mainmenubody = mainMenu.filter(function(menu){
        return menu.Category == "Beef Burger"
      }).map( function(menu) {
      
const menuHtml = 
     
       `<div class="card" style="width: 18rem;">
  <img src="${menu.img}" alt="hot deal">
  <div class="card-body">
    <h5 class="card-title"> <strong>${menu.title}</strong></h5>
    <p class="card-text">${menu.description}</p>
    <div class="price-btn">
        <p> <strong>${menu.price}</strong></p>
         <button class="add-btn">Add</button>
    </div>
   
  </div>
</div> `
return menuHtml

})

document.querySelector(".Menu-cards").innerHTML= mainmenubody.join("")
  



}
function zingerburger(){
  
      
           
  const mainmenubody = mainMenu.filter(function(menu){
        return menu.Category == "Zinger Burger"
      }).map( function(menu) {
      
const menuHtml = 
     
       `<div class="card" style="width: 18rem;">
  <img src="${menu.img}" alt="hot deal">
  <div class="card-body">
    <h5 class="card-title"> <strong>${menu.title}</strong></h5>
    <p class="card-text">${menu.description}</p>
    <div class="price-btn">
        <p> <strong>${menu.price}</strong></p>
         <button class="add-btn">Add</button>
    </div>
   
  </div>
</div> `
return menuHtml

})

document.querySelector(".Menu-cards").innerHTML= mainmenubody.join("")
  



}
function sadnwitch() {


           
  const mainmenubody = mainMenu.filter(function(menu){
        return menu.Category == "Sandwitch"
      }).map( function(menu) {
      
const menuHtml = 
     
       `<div class="card" style="width: 18rem;">
  <img src="${menu.img}" alt="hot deal">
  <div class="card-body">
    <h5 class="card-title"> <strong>${menu.title}</strong></h5>
    <p class="card-text">${menu.description}</p>
    <div class="price-btn">
        <p> <strong>${menu.price}</strong></p>
         <button class="add-btn">Add</button>
    </div>
   
  </div>
</div> `
return menuHtml

})

document.querySelector(".Menu-cards").innerHTML= mainmenubody.join("")
  
  
}
function roll(){
  

           
  const mainmenubody = mainMenu.filter(function(menu){
        return menu.Category == "Roll"
      }).map( function(menu) {
      
const menuHtml = 
     
       `<div class="card" style="width: 18rem;">
  <img src="${menu.img}" alt="hot deal">
  <div class="card-body">
    <h5 class="card-title"> <strong>${menu.title}</strong></h5>
    <p class="card-text">${menu.description}</p>
    <div class="price-btn">
        <p> <strong>${menu.price}</strong></p>
         <button class="add-btn">Add</button>
    </div>
   
  </div>
</div> `
return menuHtml

})

document.querySelector(".Menu-cards").innerHTML= mainmenubody.join("")
  

}
function bbq() {
  

            
  const mainmenubody = mainMenu.filter(function(menu){
        return menu.Category == "BBQ"
      }).map( function(menu) {
      
const menuHtml = 
     
       `<div class="card" style="width: 18rem;">
  <img src="${menu.img}" alt="hot deal">
  <div class="card-body">
    <h5 class="card-title"> <strong>${menu.title}</strong></h5>
    <p class="card-text">${menu.description}</p>
    <div class="price-btn">
        <p> <strong>${menu.price}</strong></p>
         <button class="add-btn">Add</button>
    </div>
   
  </div>
</div> `
return menuHtml

})

document.querySelector(".Menu-cards").innerHTML= mainmenubody.join("")
  


}
function tikka() {
  
             
  const mainmenubody = mainMenu.filter(function(menu){
        return menu.Category == "Tikka"
      }).map( function(menu) {
      
const menuHtml = 
     
       `<div class="card" style="width: 18rem;">
  <img src="${menu.img}" alt="hot deal">
  <div class="card-body">
    <h5 class="card-title"> <strong>${menu.title}</strong></h5>
    <p class="card-text">${menu.description}</p>
    <div class="price-btn">
        <p> <strong>${menu.price}</strong></p>
         <button class="add-btn">Add</button>
    </div>
   
  </div>
</div> `
return menuHtml

})

document.querySelector(".Menu-cards").innerHTML= mainmenubody.join("")
  

}