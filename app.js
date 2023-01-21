
  const kontrol = document.querySelector(".top");
  
  kontrol.addEventListener("click", (e) => {
 
    if (e.target.className === "fa-solid fa-plus") {
      e.target.previousElementSibling.innerText++;
      productTotal(e.target)
    }
     else if (e.target.className === "fa-solid fa-minus") {
      if (e.target.nextElementSibling.innerText > 1) {
       e.target.nextElementSibling.innerText--;
       productTotal(e.target)
      } 
    }
  
    else if(e.target.className ==="remove"){
     
       e.target.closest(".box").remove()
       
    }
    
  });

const productTotal =(eleman)=>{
   const number =eleman.parentElement.querySelector(".num").innerText;
   const price =eleman.parentElement.parentElement.querySelector("strong").innerText;
   const productTotal= (number * price).toFixed(2);

   eleman.parentElement.parentElement.querySelector(".product-span").innerText = productTotal; 
}