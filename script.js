const container = document.getElementsByClassName("upper")[0];
const user = JSON.parse(sessionStorage.getItem("user"));
if(!user){
    location.href = "../index.html"
}else{
    getDetails();
}


function getDetails(){
    console.log(user);
    const name = user.email.name;
    const email = user.email.email;
    const waNumber = user.waNumber;
    const timestamp = user.timestamp;
    const timezone = user.timezone;
    const token = user.token;
    container.innerHTML=`
                    <div class="data">
                    <h3>User LogIn Detail</h3>
                    <p>Name :<span>${name}</span></p>
                    <p>EmailAddress :<span>${email}</span></p>
                    <p>WhatsAppNumber :<span>${waNumber}</span></p>
                    <p>timestamp :<span>${timestamp}</span></p>
                    <p>timezone :<span>${timezone}</span></p>
                    <p>token :<span>${token}</span></p>
                    
                    <button id="signout" onClick=signout()>SignOut</button>
                </div>
    
    `;

}

// const signout = document.getElementById("signout");
function signout(){
        sessionStorage.removeItem("user");
       location.href="./index.html";
}