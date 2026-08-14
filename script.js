// Add your real WhatsApp number here, including country code.
// Example for India: const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_NUMBER = "918237259593";

document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

function openWhatsApp(event){
  event.preventDefault();
  if(WHATSAPP_NUMBER.includes("REPLACE")){
    alert("Add your WhatsApp number in script.js first.");
    return;
  }
  window.open("https://wa.me/" + WHATSAPP_NUMBER, "_blank");
}

function sendWhatsApp(event){
  event.preventDefault();
  if(WHATSAPP_NUMBER.includes("REPLACE")){
    alert("Add your WhatsApp number in script.js first.");
    return;
  }
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;
  const text = `Hello Shri Krishna Jewellers!%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
}
