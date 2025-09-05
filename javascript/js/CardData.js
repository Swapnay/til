async function searchData(event) {
    

    try{    
        const prams = new URLSearchParams(window.location.search);
        let idx = prams.get("id");
    
    const result = await fetch( `https://dummyjson.com/products/${idx}`); 
    const jsonData = await result.json();
    
    //let searchTerm = document.getElementById("search").value.trim().toLowerCase();
    //console.log(searchTerm);
    //const filteredData = jsonData.products.filter((item)=>(item.brand ||"").toLowerCase().includes(searchTerm));
    
       // console.log(filteredData);
    var heading = `<table  ><tbody>`;
      
    let body = `<tr>
        <td>${jsonData.title}</td></tr>
        <tr><td>${jsonData.price}</td></tr>
       <tr> <td>
       <div>
             ${jsonData.images.map(img=> `<img src=${img} width="100px" height="100px"/>`).join("")} </div>  </td></tr>
        <tr><td>${jsonData.category}</td></tr>
        <tr><td>${jsonData.price}</td></tr>
        <tr><td>${jsonData.discountPercentage}</td></tr>
        <tr><td>${jsonData.rating}</td></tr>
        <tr><td>${jsonData.stock}</td></tr>
             <tr><td><a href="index1 copy.html">Back to products</a></td>
        </tr>
        
    `;
        
  
    let tableFoot = `</tbody></table>`

    document.getElementById("product").innerHTML = heading +body+tableFoot
     } catch(error){
        console.log(error);

    }

    }
 

searchData();