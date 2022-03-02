
// search button function 
const searchBtn = ()=>{
    const searchInput =document.getElementById('search-box');
    const searchText = searchInput.value;
    searchInput.value ='';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res=> res.json())
    .then(data=> showResult(data.data))
}

// search result function 
const showResult = phones =>{
    
    const brandDetail =document.getElementById('brands');
    brandDetail.textContent='';
    if(phones.length===0){
       
       
            const div = document.createElement('div')
           
            div.innerHTML = `<h1 class="fs-1 fw-bolder bg-white py-5 text-uppercase text-center text-danger">No Phone found</h1>
            `
            brandDetail.appendChild(div)
    }

   else{
       phones.slice(0, 20).forEach(phone=>{
    
        const div = document.createElement('div')
        div.classList.add('col-lg-4');
        div.classList.add('col-sm-12');
        div.innerHTML = `<div class="card p-5 my-2 card-display" style="width: 20rem; height:520px ;">
        <div class="pro-pic ">
            <img class="w-30 img-fluid" src="${phone.image}" alt="">
        </div>
        <h2>Name: ${phone.phone_name}</h2>
        <h5>Brand: ${phone.brand}</h5>
       
        <div class="all-button">
            <button onclick="details('${phone.slug}')" class="buttons">Details</button>
            </div>
            </div>
        `
        brandDetail.appendChild(div)
    })
   }
}

// details api 
const details=(id)=>{
    const url =`https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then(res=> res.json())
    .then(data=> setDetails(data.data))
 }

//  show details data function 
 const setDetails=(info)=>{
   
  const details =document.getElementById("details")
  details.textContent='';
  details.innerHTML=`
  <div class="px-auto center mx-auto">
        <div class="pro-pic ">
            <img class="w-30 img-fluid" src="${info.image}" alt="">
        </div>
        <h2><span class="fw-bold">Name: </span>${info.name}</h2>
        <p> <span class="fs-6">Release Date: </span>${info.releaseDate ?? 'not found'}</p>
        <h4<span class="fw-bold">Brand: </span>${info.brand}</h4>
        <h6 class="fs-5"> Memory Storage <br> 
        Capacity:</h6>
        <P>${info.mainFeatures.storage}  </p>
        
        <h6 class="fs-5">Display Size:</h6>
        <p>${info?.mainFeatures?.displaySize ??'not found'}</p>
        <h6 class="fs-5">Sensor:</h6>
        <P>${info?.mainFeatures?.sensors ??'Not found'}</p>
        <h5 class="fs-5" >Others information:</h6>
        <p><span class="fs-6">Chip Set: </span>${info.mainFeatures?.chipSet ??'not found '}</p>
        <p><span class="fs-6">WLAN: </span> ${info.others?.WLAN ??'not found '}</p>
        <p><span class="fs-6">Bluetooth: </span>${info.others?.Bluetooth ??'not found '}</p>
        <p><span class="fs-6">GPS: </span>${info.others?.GPS ??'not found '}</p>
        <p><span class="fs-6">NFC: </span>${info.others?.NFC ??'not found '}</p>
        <p><span class="fs-6">Radio: </span>${info.others?.Radio ??'not found '}</p>
        <p><span class="fs-6">USB: </span>${info.others?.USB ??'not found '}</p>
        
       </div> `
 
}
