const searchBtn = ()=>{
    const searchInput =document.getElementById('search-box');
    const searchText = searchInput.value;
    searchInput.value ='';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res=> res.json())
    .then(data=> showResult(data.data))
}

const showResult = phones =>{
    
    const brandDetail =document.getElementById('brands');
    phones.slice(0, 20).forEach(phone=>{
      
        const div = document.createElement('div')
        div.classList.add('col-lg-4');
        div.innerHTML = `<div class="card border p-5">
        <div class="pro-pic ">
            <img class="w-30" src="${phone.image}" alt="">
        </div>
        <h2>Name: ${phone.phone_name}</h2>
        <h5>Brand: ${phone.brand}</h5>
        <p></p>
        <div class="all-button">
            
            <button onclick="details('${phone.slug}')" class="btn btn-success">Details</button>
        </div>`
        brandDetail.appendChild(div)
    })
   
}
