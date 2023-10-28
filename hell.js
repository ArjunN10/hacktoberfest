console.log("1.third umpire review requested")

var displayEle=document.getElementById("dispEle")
var Timeout=5000
var umpireDescision

function getThirdUmpireResults(callback){
console.log("2.third umpire review started")
console.log("3.third umpire checking cameras")

setTimeout(()=>{
    umpireDescision="out"
    console.log(`4.third umpire final result is ${umpireDescision}`)
callback()
},Timeout)
}

function displayUmpireResult(callback){
    console.log(`5.Ready to show umpire results in ground screen ${umpireDescision}`)
    displayEle.innerText=umpireDescision
callback()
}

function firstUmpireResult(){
    console.log(`hey,ground upire please change your Descision`)
}

getThirdUmpireResults(function() {
    displayUmpireResult(function(){
        firstUmpireResult()
    })
})


