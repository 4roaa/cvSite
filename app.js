// Scroll reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add("show");
  });
},{threshold:0.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

// Active nav highlight (basic)
(function(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(a=>{
    if(a.getAttribute("href") === path) a.style.background = "rgba(86,124,141,.10)";
  });
})();

// Simple toast
window.showToast = function(msg){
  const t = document.createElement("div");
  t.style.cssText = `
    position:fixed; left:50%; top:18px; transform:translateX(-50%);
    background:rgba(17,24,39,.92); color:#fff; padding:12px 14px;
    border-radius:999px; font-size:13px; z-index:9999;
    box-shadow:0 18px 45px rgba(0,0,0,.25);
  `;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(()=>{ t.style.opacity="0"; t.style.transition=".4s"; }, 1400);
  setTimeout(()=>t.remove(), 1900);
}