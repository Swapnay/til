async function searchData(event) {
    

    try{    
    
    const result = await fetch( "https://dummyjson.com/products"); 
    const jsonData = await result.json();
    let searchTerm = document.getElementById("search").value.trim().toLowerCase();
    console.log(searchTerm);
    const filteredData = jsonData.products.filter((item)=>(item.brand ||"").toLowerCase().includes(searchTerm));
    
        console.log(filteredData);
    var heading = `<table  border="10">
    <thead>
        <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>brand</th>

        </tr>
        </thead>`;
    
    let body = (filteredData? filteredData : jsonData.products).map((data, index)=>{
        
        return `<tbody><tr>
        <td>${data.title}</td>
        <td>${data.price}</td>
        <td><a href="details.html?id=${data.id}"><img src=${data.images[0]} width="100px" height="100px"/></a></td>
        <td>${data.brand}</td>
        </tr>
    `;
    });
    let tableFoot = `</tbody></table>`

    document.getElementById("carts").innerHTML = heading +body+tableFoot
     } catch(error){
        console.log(error);

    }

    }
 

searchData();