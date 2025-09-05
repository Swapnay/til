async function fetchData(){
try{
const mydata = await axios('https://dummyjson.com/products');
const productJson = await mydata.json();
console.log(productJson.products);
}catch(error){
console.log(error);
}

}
fetchData();