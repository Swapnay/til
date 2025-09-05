async function searchData(event) {
    

    try{    
    
    const result = await fetch( "https://dummyjson.com/products"); 
    const jsonData = await result.json();
    let searchTerm = document.getElementById("search").value.trim().toLowerCase();
    console.log(searchTerm);
    const filteredData = jsonData.products.filter((item)=>(item.brand ||"").toLowerCase().includes(searchTerm));
    
        console.log(filteredData);
   
    
    let body = (filteredData? filteredData : jsonData.products).map((data, index)=>{
       return `<div class="card" >
        <div class="card-image">
          <a href="details.html?id=${data.id}"><img src=${data.images[0]}></a>
          <span class="card-title">${data.title}</span>
        </div>
        <div class="card-content">
          <p>${data.description}</p>
          
        </div>
        
    </div>`
        
    });

    document.getElementById("show-data").innerHTML = body
     } catch(error){
        console.log(error);

    }

    }
 

searchData();