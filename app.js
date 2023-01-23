
  const kontrol = document.querySelector(".top");
  const icon= new Audio("./ses/çöp.mp3");
  const buton=new Audio("./ses/many.mp3");
  kontrol.addEventListener("click", (e) => {
 
    if (e.target.className === "fa-solid fa-plus") {
      e.target.previousElementSibling.innerText++;
      productTotal(e.target)
      bottom();
      buton.play();
    }
     else if (e.target.className === "fa-solid fa-minus") {
      if (e.target.nextElementSibling.innerText > 0) {
       e.target.nextElementSibling.innerText--;
       productTotal(e.target)
       bottom();
       buton.play();
      } 
    }
  
    else if(e.target.className ==="remove"){
     
       e.target.closest(".box").remove()
       bottom();
icon.play();
    }
    
  });
  
const productTotal =(eleman)=>{
   const number =eleman.parentElement.querySelector(".num").innerText;
   const price =eleman.parentElement.parentElement.querySelector("strong").innerText;
   const productTotal= (number * price).toFixed(2);

   eleman.parentElement.parentElement.querySelector(".product-span").innerText = productTotal; 


} 
//* bottom 

const bottom  =()=>{
  const productsTotal =document.querySelectorAll(".product-span");
  const subTotalValue =[...productsTotal].reduce((acc,item) => acc+ Number(item.innerText ),0  )
  ;

  const subtotalkey =( document.querySelector(".sub").innerText ="$" +subTotalValue.toFixed(2));
//* tax

const taxValue=subTotalValue*0.18;
const taxkey=document.querySelector("#tax .sub").innerText="$"+taxValue.toFixed(2);
//*shipping
const shippingValue=subTotalValue >500 || subTotalValue == 0 ? 0 : 40;
const shippingKey=document.querySelector("#shipping .sub").innerText="$"+shippingValue

const totalValue=subTotalValue+taxValue+shippingValue;
const totalKey=(document.querySelector("#total .sub").innerText= "$" +totalValue.toFixed(2));
}




