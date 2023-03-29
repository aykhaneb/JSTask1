//DATETIME TASK
var datetime=new Date()
var hours=datetime.getHours()

if(hours>=00 && hours<6){
    alert("Good Night")
    document.getElementById("all").style.backgroundColor="black"
}

else if(hours>=6 && hours<12){
    alert("Good Morning")
    document.getElementById("all").style.backgroundColor="yellow"
}

else if(hours>=12 && hours<18){
    alert("Good Afternoon")
    document.getElementById("all").style.backgroundColor="aqua"
}

else if(hours>=18 && hours<00){
    alert("Good Evening")
    document.getElementById("all").style.backgroundColor="gray"
}

// CALC TASK
function Plus() {
    var a = parseInt(document.getElementById('inp1').value)
    var b = parseInt(document.getElementById('inp2').value)
    
   var d=a+b
    document.getElementById('result').innerHTML = d
    console.log(d);
    
}
function Minus() {
    var a = parseInt(document.getElementById('inp1').value)
    var b = parseInt(document.getElementById('inp2').value)
    
   var d=a-b
    document.getElementById('result').innerHTML = d
    console.log(d);
    
}
function Multiplication() {
    var a = parseInt(document.getElementById('inp1').value)
    var b = parseInt(document.getElementById('inp2').value)
    
   var d=a*b
    document.getElementById('result').innerHTML = d
    console.log(d);
    
}
function Per() {
    var a = parseInt(document.getElementById('inp1').value)
    var b = parseInt(document.getElementById('inp2').value)
    
   var d=a/b
    document.getElementById('result').innerHTML = d
    console.log(d);
    
}
