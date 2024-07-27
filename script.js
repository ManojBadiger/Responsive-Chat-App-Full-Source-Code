// Toggle Menu Function
toggleBtn = document.getElementById("toggleBtn");
sideMenu =  document.getElementById("SideMenu");

toggleBtn.addEventListener("click",()=>{
    sideMenu.classList.toggle("active-link");
})