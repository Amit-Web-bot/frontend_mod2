const data = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "Non Veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "Non Veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "Non Veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "Non Veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "Non Veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "Non Veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "Non Veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "Veg",
        "isLiked": false,
        "rating": 4.9
    }
]
function creatCard(recipe){
    let parentMain = document.getElementsByClassName("main_contain")
    let parentDiv = document.createElement("div");
    parentDiv.setAttribute("id","cont2")
    for(let i = 0; i<recipe.length; i++){
        let card1= document.createElement("div");
        card1.setAttribute("class","card");
        card1.innerHTML=`<img src =${recipe[i].imageSrc} class="food_image">
        <p>${recipe[i].type}</p>
        <div class="rating">
            <b>${recipe[i].name}</b>
            <i class="fa-solid fa-star" style="color: #fde43f;"></i>
            ${recipe[i].rating}
        </div>
        <div class="time">
        ${recipe[i].time}
        <button onClick="isLiked(this)" data-name="${recipe[i].name}" class= islike_${recipe[i].isLiked}><i class="fa-regular fa-heart"></i></button>
        <i class="fa-regular fa-comment" style="color: #050505;"></i>`
        parentDiv.appendChild(card1);
    }
    parentMain[0].appendChild(parentDiv);
}
creatCard(data);

let allRes = document.getElementsByClassName("all_res")[0]
allRes.addEventListener("click",()=>{
    location.reload();
})

let vegRes = document.getElementsByClassName("veg_res")[0]
vegRes.addEventListener("click",()=>{
    let oldDiv = document.getElementById("cont2")
    oldDiv.remove();
    let veg = []
    for(let i = 0; i<data.length; i++){
        if(data[i].type == "Veg"){
            veg.push(data[i]);
        }
    }
    creatCard(veg);
})

let nonRes = document.getElementsByClassName("non_res")[0]
nonRes.addEventListener("click", ()=>{
    let oldDiv = document.getElementById("cont2")
    oldDiv.remove();
    let non = []
    for(let i = 0; i<data.length; i++){
        if(data[i].type == "Non Veg"){
            non.push(data[i]);
        }
    }
    creatCard(non);
})

function isLiked(btnReff){
    let btnId = btnReff.getAttribute("data-name")
    for(let i =0; i<data.length; i++){
        if(btnId===data[i].name){
            if(data[i].isLiked === false){
                data[i].isLiked = true;
                btnReff.setAttribute("class", "islike_true")
            }else{
                data[i].isLiked=false;
                btnReff.setAttribute("class", "islike_false")
            }
        }
    }

}

let abo = document.getElementById("4above");
abo.addEventListener("click",()=>{
    let oldDiv = document.getElementById("cont2")
    oldDiv.remove();
    let abo4 = []
    for(let i = 0; i<data.length; i++){
        if(data[i].rating >= 4.5){
            abo4.push(data[i]);
        }
    }
    creatCard(abo4);
})

let blo = document.getElementById("4less");
blo.addEventListener("click",()=>{
    let oldDiv = document.getElementById("cont2")
    oldDiv.remove();
    let blo4 = []
    for(let i = 0; i<data.length; i++){
        if(data[i].rating < 4.5){
            blo4.push(data[i]);
        }
    }
    creatCard(blo4);
})

const srchItm = document.getElementById("searchItm");
let srchBtn = document.getElementById("srchBtn");
srchBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    let oldDiv = document.getElementById("cont2")
    oldDiv.remove();
    console.log(srchItm.value)
    let blo4 = []
    for(let i = 0; i<data.length; i++){
        if(data[i].name.toLowerCase() === srchItm.value.toLowerCase()){
            blo4.push(data[i]);
        }
    }
    creatCard(blo4);  
})


// <div class="overlay"></div>
//   <nav class="nav">
//     <div class="toggle">
//       <span class="toggler">»</span>
//     </div>
//     <div class="logo">
//       <a href="#">CodeHim</a>
//     </div>
//     <ul>
//       <li><a href="#">Home</a></li>
//       <li><a href="#">About</a></li>
//       <li><a href="#">Projects</a></li>
//       <li><a href="#">Blog</a></li>
//       <li><a href="#">Contact</a></li>
//     </ul>
//   </nav>

function jsDrawer(){
    let mob_con = document.createElement("div")
    mob_con.setAttribute("class","overlay")
    let nav = document.createElement("nav")
    nav.setAttribute("class", "nav")
    nav.innerHTML=`<div class="toggle">
         </div>
         <div class="logo">
           <img src="./static/Cookpal 1.png">
         </div>
         <ul>
           <li>Home</li>
           <li>Explore</li>
           <li>Help</li> 
         </ul>`
    let prntClass = document.getElementsByClassName("nvBr")
    prntClass[0].appendChild(mob_con)
    prntClass[0].appendChild(nav)
}
let mob_navbtn = document.getElementById("mob_nav")
mob_navbtn.addEventListener(("click"),()=>{
    if(mob_navbtn.className==="hid"){
        mob_navbtn.setAttribute("class","no_hid")
        jsDrawer();
    }else{
        mob_navbtn.setAttribute("class","hid")
        document.getElementsByClassName("overlay")[0].remove()
        document.getElementsByClassName("nav")[0].remove()

    }
})


