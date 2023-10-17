let sample_data = [
    {
        Brand:"Samange",
        img_src:"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/h/c/-original-imagth5xwrg4gfyp.jpeg?q=70",
        names:"1m 08cm (43) CUE60 Crystal 4K UHD Smart TV",
        price:"₹39,999",
        actualprice:"128 GB,8 GB RAM"
    },
    {
        Brand:"APPLE iPhone 14 ",
        img_src:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"₹57,999",
        actualprice:"Blue, 128 GB"
    },
    {
        Brand:"realme C53 ",
        img_src:"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/5/q/6/-original-imags487ftf3g2s7.jpeg?q=70",
        names:"(Champion #JustHere",
        price:"₹10,999",
        actualprice:"128 GB,6 GB RAM",
    },
    {
        Brand:"realme C51",
        img_src:"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/i/x/-original-imagt4qptrkzwmxa.jpeg?q=70",
        names:"realme",
        price:"₹9,990",
        actualprice:"64 GB,4 GB RAM"
    },
    {
        Brand:"REDMI 12",
        img_src:"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/h/f/w/-original-imags37hy7uz2usv.jpeg?q=70",
        names:"REDMI 12",
        price:"₹8,999",
        actualprice:"128 GB, 4 GB RAM"
    },
    {
        Brand:"POCO M5 ",
        img_src:"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/z/8/p/-original-imaghsptt8g6rjz9.jpeg?q=70",
        names:"Power Black, ",
        price:"₹7,777",
        actualprice:"64 GB,4 GB RAM"
    },
    {
        Brand:"MOTOROLA g14 ",
        img_src:"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/z/3/e/g14-payf0010in-motorola-original-imagrtypwf5m6kqw.jpeg?q=70",
        names:"MOTOROLA g14",
        price:"₹8,500",
        actualprice:" 128 GB,4 GB RAM)"
    },
     {
        Brand:"Samange",
        img_src:"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/q/t/h/galaxy-f54-5g-sm-e546bzshins-samsung-original-imagq79f82pfyzvh.jpeg?q=70",
        names:"Samange ",
        price:"₹25,999",
        actualprice:"256 GB,8 GB RAM"
    },
    {
        Brand:"OPPO Reno10 5G ",
        img_src:"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/9/e/4/-original-imagtcrumzbqj4xd.jpeg?q=70",
        names:"OPPO Reno10 5G",
        price:"₹32,999",
        actualprice:"256 GB,8 GB RAM"
    },
    {
        Brand:"OPPO F21 Pro",
        img_src:"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/3/u/w/-original-imagtcrvzrqnnxpc.jpeg?q=70",
        names:"OPPO F21 Pro",
        price:"₹18,990",
        actualprice:" 128 GB,8 GB RAM"
    },
    {
        Brand:"OnePlus Nord CE3 5G",
        img_src:"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/3/n/6/nord-ce3-5g-nord-ce3-5g-oneplus-original-imags44nznxdw28n.jpeg?q=70",
        names:"OnePlus Nord CE3 5G",
        price:"₹28,699",
        actualprice:" 256 GB,12 GB RAM"
    },
    {
        Brand:"vivo T2x 5G ",
        img_src:"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70",
        names:"vivo T2x 5G",
        price:"₹11,999",
        actualprice:" 128 GB,4 GB RAM"
    },
    {
        Brand:"vivo T2 5G ",
        img_src:"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/1/h/-original-imagpfbvfu4p55n4.jpeg?q=70",
        names:"vivo T2 5G",
        price:"₹19,999",
        actualprice:"128 GB,8 GB RAM"
    },
    

];


localStorage.setItem("productsdata", JSON.stringify(sample_data));

let collection = JSON.parse(localStorage.getItem("productsdata")) || [];

Product();

function Product(){

    collection.map((element)=>{
        
        let box = document.createElement("div");

        let innerbox = document.createElement("div")
    let price1 = document.createElement("span");
     price1.innerHTML = element.price
    let price2 = document.createElement("span");
    price2.innerHTML = element.actualprice

    innerbox.append(price1, price2);
    innerbox.className = "innerbox"
  let avatar = document.createElement("img");
  avatar.src = element.img_src;
  avatar.className = "avatar"
  let brand = document.createElement("p");
  brand.innerHTML = element.Brand;
   box.append(avatar,brand,innerbox);
   document.getElementById("collection").append(box);

    })
}