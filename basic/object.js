
const D = {
   name : "Anshu",
   id   : 11,
   state : "Jharkhand",
   dist : "Garhwa"
}

console.log(D.name)
console.log(D["name"])

D.email = "Anshu@google.com"
Object.freeze(D)
D.email = "Anshu@gmail.com"
console.log(D)