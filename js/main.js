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
    brandDetail.textContent='';
    phones.slice(0, 20).forEach(phone=>{
    
        const div = document.createElement('div')
        div.classList.add('col-lg-4');
        div.innerHTML = `<div class="card border p-5">
        <div class="pro-pic ">
            <img class="w-30 img-fluid" src="${phone.image}" alt="">
        </div>
        <h2>Name: ${phone.phone_name}</h2>
        <h5>Brand: ${phone.brand}</h5>
       
        <div class="all-button">
            <button onclick="details('${phone.slug}')" class="btn btn-success">Details</button>
            </div>
            </div>
        `
        brandDetail.appendChild(div)
    })
   
}
const details=(id)=>{
    const url =`https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then(res=> res.json())
    .then(data=> setDetails(data.data))
 }
 const setDetails=(info)=>{
   
  const details =document.getElementById("details")
  details.textContent='';
  details.innerHTML=`
  <div class="px-auto center mx-auto">
        <div class="pro-pic ">
            <img class="w-30 img-fluid" src="${info.image}" alt="">
        </div>
        <h2>Name: ${info.name}</h2>
        <p> Release Date:${info.releaseDate}</p>
        <h4>Brand: ${info.brand}</h4>
        <div class="d-fex justify-content-center"><div> <h6> Memory Storage <br> 
        Capacity:</h6></div> 
        <div><P>${info.mainFeatures.storage}  </p></div>
        </div>
        <h6>Sensor:</h6>
        <P>${info.mainFeatures.sensors}</p>
        <h6>Others information:</h6>
        <p> ${info.others.WLAN}
       </div>

  `
  console.log(info)
}
