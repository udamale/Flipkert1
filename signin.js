let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];

function Signin(){
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("pass").value;
    let count = 0;

    if(mobile.length==0)
    {
     alert("Enter mobile number");
     }
    else if(mobile.length !== 10)
    {
       alert("mobile number should have 10 digits");
    }
    else{

    for(let i=0;i<getUsersdata.length;i++)
    {
        if(mobile==getUsersdata[i].mobile)
        {
            if(password==getUsersdata[i].password) 
            {

                alert("sign in success");
                window.location.href="index.html";
            }
            else{
                alert("Invalid Password");    
            }
        }
        else{
            count++;
        }
    }
 } 
    if(count== getUsersdata.length)
    {
        alert("user is not register, Sign up to conttiue");
        window.location.href="signup.html";
    }
}
