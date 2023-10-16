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
        img_src:"https://m.media-amazon.com/images/I/51qX5GAlI4L._SX300_SY300_QL70_FMwebp_.jpg",
        names:"MI 138 cm (55 inches) X Series 4K Ultra HD Smart Android LED TV L55M7-A2IN (Black) ",
        price:"₹34,990",
        actualprice:"55 inches"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/o/8/0/32-rmts05339-g5-raymond-original-imagu3gybs8kdtcg.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"Rs.558",
        actualprice:"Rs.1,399"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/s/3/j/m-22mo116-2-moca-by-monte-carlo-original-imagkhz8pfsa7eyp.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"Rs.558",
        actualprice:"Rs.1,399"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/n/m/e/m-int-ts-203-f-ns1-r-l-bk-integriti-original-imaggaqsqaqj5pyu.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"Rs.558",
        actualprice:"Rs.1,399"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"Rs.558",
        actualprice:"Rs.1,399"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"Rs.5578",
        actualprice:"Rs.10,399"
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