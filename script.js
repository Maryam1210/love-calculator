
const call = () =>{
 let girl = document.getElementById("firstName").value
 let boy= document.getElementById("secondName").value
 let total = Math.round(Math.random()*100)
    if( girl != "" || boy != ""){
       if (total>=0 && total<15) {
        show.innerHTML = `<h3"> ${girl} and ${boy}, your percentage is ${total}% ,this is a very poor matching.Do not try am guys,It is very risky 🥴🥴</h3>`
       } else if (total > 15 && total <25) {
        show.innerHTML = `<h3">  Dear ${girl} and ${boy}, your percentage is ${total}%, Due to your genotype,it is not advisable for you to get married </h3>`
        
       }
       else if (total < 30 && total<50) {
        show.innerHTML = `<h3 ">Dear future lovers❤️ ${girl}, ${boy} your percentage is ${total}%, Run for your life 🥴🥴 </h3>`
       }
       else if (total > 50 && total<60) {
        show.innerHTML = `<h3">Dear future partners ${girl}, ${boy}  your percentage is ${total}%, You fit match each other😍😍  </h3>`
       }
       else if (total > 60 && total<75) {
        show.innerHTML = `<h3 ">Miss ${girl} and Mr ${boy}, your percentage is ${total}%, together forever ❤️❤️❤️ </h3>`
       }
       else if (total > 75 && total<85) {
        show.innerHTML = `<h3 "> your percentage is ${total}%, What a beautiful union is this! Mr ${boy} and Miss ${girl} enjoy yourself to the fullest ❤️❤️ <h3>`

       }
       else if  (total > 85 && total<100) {
        show.innerHTML = `<h3>your percentage is ${total}%, wish you guys everlasting relationship 😍😍 </h3>`
       }
    }
    document.getElementById("firstName").value = ""
    document.getElementById("secondName").value = ""
    
}