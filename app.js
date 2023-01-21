
  const kontrol = document.querySelector(".top");
  
  kontrol.addEventListener("click", (e) => {
 
    if (e.target.className === "fa-solid fa-plus") {
      e.target.previousElementSibling.innerText++;
    }
     else if (e.target.className === "fa-solid fa-minus") {
      if (e.target.nextElementSibling.innerText > 1) {
       e.target.nextElementSibling.innerText--;
      } 
    }
  
    else if(e.target.className ==="remove"){
     
       e.target.closest(".box").remove()
    }
  
  });

const productTotal =(eleman)=>{
   const number =document.querySelector(".num").innerText;
   const price =document.querySelector("strong").innerText;
   const productTotal= number * price;
    
}