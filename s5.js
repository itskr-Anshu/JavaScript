let bt = document.querySelector("#btn");
// bt.onclick = () =>{
//     console.log("Hi Anshu");
// }
let bd = document.querySelector("body");
let mode = document.querySelector("body");
let cmode = "light";
bt.addEventListener("click",() =>
{
    if(cmode === "light")
    {
        console.log("dark");
        cmode = "dark";
        bd.classList.remove("light");
        bd.classList.add("dark");
    }
    else{
        console.log("light");
        cmode = "light";
        bd.classList.remove("dark");
        bd.classList.add("light");
    }
})

