const warpprs =document.querySelector('.warpprs'),
qrIndut =warpprs.querySelector('.from input'),
grnderBtn =warpprs.querySelector('.from button'),
qrImg =warpprs.querySelector('.qr-code img');
grnderBtn.addEventListener('click',()=>{
    let qrValu =qrIndut.value;
   // console.log(qrValu);
   if(!qrValu) return
   grnderBtn.innertext ="Gerat a code......"
   qrImg.src=` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValu} `;
   qrImg.addEventListener("load",()=>{
    warpprs.classList.add("active");
    grnderBtn.innerText ="Great a qr code"
   });
    
})