const btn = document.getElementById("sf")
const btnpud = document.getElementById("pudge")
const btninv = document.getElementById("inv")

btn.addEventListener("click", function() {
    document.getElementById("sfimg").src = "./img/CrispConsiderateBlackbird-size_restricted.gif"
})
btn.addEventListener("dblclick", function() {
    document.getElementById("sfimg").src = "./img/Shadow_Fiend_Guide_Header (1).png"
})


btnpud.addEventListener("click", () => {
    document.getElementById("pudgeimg").src = "./img/pudge-dota2.gif"
})
btnpud.addEventListener("dblclick", () => {
    document.getElementById("pudgeimg").src = "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pudge.png"
})



btninv.addEventListener("click", function() {
    document.getElementById("invimg").src = "./img/invoker.gif"
})
btninv.addEventListener("dblclick", () => {
    document.getElementById("invimg").src = "./img/Без названия.png"
})