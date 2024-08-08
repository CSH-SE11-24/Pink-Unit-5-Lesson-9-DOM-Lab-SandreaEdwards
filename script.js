console.log("Script running...")
// Task 1: Intro section
// Implement the DOM manipulation code flow such that when you click the "Click for location" button, the text below says "1300 Boynton Ave (moving soon!)"
// Make sure to add whatever IDs/classes you need to select the necessary elements
let locate = document.getElementById("location")
let pTag = document.getElementById("pLocation")

locate.addEventListener('click', function(){
pTag.textContent = "1300 Boynton Ave(moving soon!)"
})




// Task 2: Our Values section
// Implement the DOM manipulation code flows for each of the SCORE <h3> tags such that when you click on them, the text changes to the full value
// S -> Self-awareness, C -> Consistency, O -> Ownership, R -> Resilience, E -> Excellence
let score1 = document.getElementById("s")
let s = document.getElementById("s")

score1.addEventListener('click', function(){
s.textContent = "Self-awareness"
})



let score2 = document.getElementById("c")
let c = document.getElementById("c")

score2.addEventListener('click', function(){
c.textContent = "Consistency"
})

let score3 = document.getElementById("o")
let o = document.getElementById("o")

score3.addEventListener('click', function(){
o.textContent = "Ownership"
})

let score4 = document.getElementById("r")
let r = document.getElementById("r")

score4.addEventListener('click', function(){
r.textContent = "Resilience"
})

let score5 = document.getElementById("e")
let e = document.getElementById("e")

score5.addEventListener('click', function(){
e.textContent = "Excellence"
})

// Task 3: Uniform section
// Implement the DOM manipulation code flows for each of the images such that when your mouse is over the image, it displays the back image and when it is off the image, it displayes the front image
// First image: Mouse over -> joggers-front.webp, mouse off -> joggers-back.webp
// Second image: Mouse over -> sweater-front.webp, mouse off -> sweater-back.webp
let joggers = document.getElementById("joggers")
let sweater = document.getElementById("sweater")


joggers.addEventListener('mouseover', function(){
joggers.src = "joggers-back.webp"
})

sweater.addEventListener('mouseover', function(){
sweater.src = "sweater-back.webp"
})





// EXTRA CREDIT
// Implement the DOM manipulation code flows for each of the SCORE <h3> tags such that when your mouse is over them, the text color changes to #3ab54b (and back to black when it is off it)





