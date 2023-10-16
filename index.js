let arr=[
   {
    img_sre:"https://rukminim1.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100",
    title:"Grocery",
    
   },
 
   {
    img_sre:"https://rukminim1.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100",
    title:"Mobiles",
    href:'Mobille.html',
   },

   { 

    img_sre:"https://rukminim1.flixcart.com/fk-p-flap/96/96/image/0d75b34f7d8fbcb3.png?q=100",
    title:"Fashion",
    href:'Product.html',
   
   },
   
   {
    img_sre:"https://rukminim1.flixcart.com/flap/96/96/image/69c6589653afdb9a.png?q=100",
    title:"Electronics",
    
   },

   {
    img_sre:"https://rukminim1.flixcart.com/flap/96/96/image/ab7e2b022a4587dd.jpg?q=100",
    title:"Home and Furtinure",
    
   },
   {
    img_sre:"https://rukminim1.flixcart.com/flap/96/96/image/0ff199d1bd27eb98.png?q=100",
    title:"Appliances",
    
   },
   {
    img_sre:"https://rukminim1.flixcart.com/flap/96/96/image/71050627a56b4693.png?q=100",
    title:"Travel",
    
   },
   {
    img_sre:"https://rukminim1.flixcart.com/flap/96/96/image/dff3f7adcf3a90c6.png?q=100",
    title:"Beauty, Toys & More",
   
   },
   {
    img_sre:"https://rukminim1.flixcart.com/fk-p-flap/96/96/image/05d708653beff580.png?q=100",
    title:"Two Wheelers",
    
   },
];

arr.map((element)=>{
   let image= document.createElement('img');
   image.src=element.img_sre;

   let title=document.createElement("p");
   title.innerHTML=element.title;


  
   function fun()
   {
      let href= document.createElement('href');
      href.innerHTML=element.href;
      window.location.href="href";
   }
   
  let box=document.createElement('div');
  box.append(image,title,);
  
  document.getElementById("categories").append(box);
  
})
let a=document.getElementById("categories");


