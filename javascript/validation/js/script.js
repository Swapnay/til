// function addArray(){
// console.log("Hi");
// alert("hi");
// }
// //Function Expression
// const funexp = function(){
//     alert("function expression");

// }
// funexp();

// //Arrow function

// const arrow = ()=>{
//     alert(" in arrow function");
// }
// arrow();

// addArray()

// var  name = "name";
// var fatherName= ather";
// var friendName = "friend";
// var age = 100;
// var personDetails = {name, fatherName,friendName, age };
// var perDetail  = {
    //     name: name,
    //     family:{
        //          fatherName:fatherName,
        //          motherName:"motherName"
        
        //     },
        //     age:age,
        //     friends:{
            //         friend1:"friend1",
            //         friend2:"friend2"
            //     }
            // }
            
            // console.log(perDetail.friends.friend2);
            
            
function mydata( event) {
    event.preventDefault();
    let name = document.getElementById("uname").value;
    let password = document.getElementById("upassword").value;
    let email = document.getElementById("uemail").value;
    let city = document.getElementById("drop").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    //console.log(name,password,email,city,gender);
    let mydata = {name, email,password, city, gender};
    let myarray =[];
    myarray.push(mydata);
    console.log(myarray);
    localStorage.setItem("form1",JSON.stringify(myarray));

 

}

function arrayDemo(){
    const cars = ["Saab", "Volvo", "BMW"];
}

function validate(event) {
     event.preventDefault();
      let name = document.getElementById("uname");
      let password = document.getElementById("upassword");
      let pname =document.getElementById("namep");
      let passwordp =document.getElementById("passwordp");
      let email = document.getElementById("uemail").value;
      let emailp =document.getElementById("emailp");
      if(name.value === ""){
        pname.innerHTML = " user name required";
        pname.style.color = "red";
        name.style.borderColor="red"
      }else if( password.value === "") {
        passwordp.innerHTML = " password required";
        passwordp.style.color = "red";
        passwordp.style.borderColor="red"
      } else if (email === "" ){
        emailp.innerHTML = " Email required";
        emailp.style.color = "red";
        emailp.style.borderColor="red"

      }

}