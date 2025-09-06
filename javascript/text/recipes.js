async function getrecipesData(){

    const recipes = await fetch("https://dummyjson.com/recipes")
    const recipeJson =  await recipes.json();

    var heading = `<table  border="10">
    <thead>
        <tr>
            <th>Name</th>
            <th>Ingredients</th>
            <th>instructions</th>
            <th>prepTimeMinutes</th>
            <th>cookTimeMinutes</th>
            <th>difficulty</th>
            <th>caloriesPerServing</th>
            <th>cuisine</th>
            <th>tags</th>
            <th>image</th>
             <th>Rating</th>
            <th>review count</th>
            <th>Meal Type</th>

        </tr>
        </thead>`;


    let body = recipeJson.recipes.map((data, index)=>{
        return `<tbody><tr>
        <td>${data.name}</td><td>
        <td><ul>${data.ingredients.map(ing => `<li>${ing}</li>`).join("")}</ul></td>
         <td>${data.instructions.map(ing => `<li>${ing}</li>`).join("")}</ul></td>
         <td>${data.prepTimeMinutes}</td>
          <td>${data.cookTimeMinutes}</td>
          <td>${data.difficulty}</td>
           <td>${data.caloriesPerServing}</td>
           <td>${data.cuisine}</td>
            <td>${data.tags.map(ing => `<li>${ing}</li>`).join("")}</ul></td>
            <td><img src=${data.image} width="100px" height="100px"/></td>
            <td>${data.rating}</td>
            <td>${data.reviewCount}</td>
            <td>${data.mealType}</td>
        
        
        </tr>
        </tbody>`;
    });
    let tableFoot = `</table>`
     document.getElementById("carts").innerHTML += heading +body+tableFoot;



}

getrecipesData();