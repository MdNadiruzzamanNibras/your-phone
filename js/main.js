const searchBtn = ()=>{
    const searchInput =document.getElementById('search-box');
    const searchText = searchInput.value;
    searchInput.value ='';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res=> res.json())
    .then(data=> showResult(data))
}

const showResult = brands =>{
    console.log(brands)
}