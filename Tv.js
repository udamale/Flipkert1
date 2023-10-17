let sample_data = [
    {
        Brand:"Samange",
        img_src:"https://m.media-amazon.com/images/I/51+5hyIFqdL._SX300_SY300_.jpg",
        names:"1m 08cm (43) CUE60 Crystal 4K UHD Smart TV",
        price:"₹26990.00",
        actualprice:"48 Inch"
    },
    {
        Brand:"Redmi Tv",
        img_src:"https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/78696d68-fa77-4647-8a02-d551f7a7dcb6._CR147,0,1200,628_SX810_QL70_.png",
        names:"Men Slim Fit Self",
        price:"₹9,999.00",
        actualprice:"32 Inch"
    },
    {
        Brand:"LG",
        img_src:"https://m.media-amazon.com/images/S/aplus-media-library-service-media/e0676494-668d-44bb-ac79-2dc782f87d4e.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
        names:"LG",
        price:"₹13,490",
        actualprice:"48 Inch",
    }, {
        Brand:"Sony",
        img_src:"https://m.media-amazon.com/images/I/51UFcsXQOzL._SY300_SX300_QL70_FMwebp_.jpg",
        names:"Sony",
        price:"₹24,990",
        actualprice:"52 Inch"
    },
    {
        Brand:"Sony",
        img_src:"https://msupermall.com/wp-content/uploads/2021/12/71WxcGLaxbL._SL1500_.jpg",
        names:"Sony",
        price:"₹28,900.00",
        actualprice:"32 Inch"
    },
    {
        Brand:"Samange",
        img_src:"https://m.media-amazon.com/images/I/41Y9XnzBHTL._SY300_SX300_QL70_FMwebp_.jpg",
        names:"Samsung 138 cm (55 inches) Crystal 4K Series Ultra HD Smart LED TV UA55AUE60AKLXL (Black)",
        price:"₹42,990",
        actualprice:"55 inches"
    },
    {
        Brand:"Samange",
        img_src:"https://m.media-amazon.com/images/I/511uzbAnMOL._SY300_SX300_QL70_FMwebp_.jpg",
        names:"Samsung 138 cm (55 inches) Crystal 4K Series Ultra HD Smart LED TV UA55AUE60AKLXL (Black)",
        price:"₹42,990",
        actualprice:"55 inches"
    },
     {
        Brand:"Samange",
        img_src:"https://m.media-amazon.com/images/I/51qX5GAlI4L._SX300_SY300_QL70_FMwebp_.jpg",
        names:"MI 138 cm (55 inches) X Series 4K Ultra HD Smart Android LED TV L55M7-A2IN (Black) ",
        price:"₹34,990",
        actualprice:"55 inches"
    },
    {
        Brand:"MOTOROLA ",
        img_src:"https://rukminim2.flixcart.com/image/832/832/xif0q/television/b/g/n/-original-imagtwterapbxxdj.jpeg?q=70",
        names:"MOTOROLA ",
        price:"₹47,999",
        actualprice:"65 inch"
    },
    {
        Brand:"Mi ",
        img_src:"https://rukminim2.flixcart.com/image/832/832/xif0q/television/f/n/x/-original-imagu436gkxxcsqz.jpeg?q=70",
        names:"Mi ",
        price:"₹30,999",
        actualprice:"50 inch"
    },
    {
        Brand:"Samange",
        img_src:"https://rukminim2.flixcart.com/image/832/832/xif0q/television/j/2/j/-original-imagtq4hqqt37tgx.jpeg?q=70",
        names:"Samange",
        price:"₹45,490",
        actualprice:"55 inch"
    },
    {
        Brand:"iFFALCON",
        img_src:"https://rukminim2.flixcart.com/image/832/832/xif0q/television/4/q/m/-original-imagnvxzkgqp5ubf.jpeg?q=70",
        names:"iFFALCON",
        price:"₹48,490",
        actualprice:"55 inch"
    },
    {
        Brand:"SONY ",
        img_src:"https://rukminim2.flixcart.com/image/832/832/xif0q/television/d/k/e/-original-imagm2e6ztgrawkg.jpeg?q=70",
        names:"SONY ",
        price:"₹47,490",
        actualprice:"50 inch"
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