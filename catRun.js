let player = document.getElementById("player");
let innerContainer = document.querySelector(".innerContainer")
const againContainer = document.querySelector(".againContainer");
let block = document.querySelector(".block");
let block2 = document.querySelector(".block2");


const cat1 = document.querySelector(".cat1");
const cat2 = document.querySelector(".cat2");
let cats = document.querySelectorAll(".cat");



//adds eventlistener to all (2) cat buttons
cats.forEach(function (element){
    
       
    
//console.log(element.classList);
    
  /*  if(element.classList.contains("cat2")){
        player.style.backgroundColor = "white";
    }
    
    if(element.classList.contains("cat2")){
        player.style.backgroundColor = "brown";
    }*/

        element.addEventListener("click", startGame);
        
          
  /*  
function getName(e){
    element.onclick = e.target.className;
    console.log(element);
    if(element.target.className === "cat1"){
        player.style.backgroundColor = "white";
    }else     if(element.classList.contains("cat2")){
        player.style.backgroundColor = "brown";
    }
 
}*/
   


        
           
        
            
        
                
                
            
        
    

    


})


 

//START the game
function startGame(){


    block.style.display = "block";
    
   
    player.style.display = "block";
    againContainer.style.visibility = "hidden";

//counter, loops through the two count elements and updates them 
let counter = 0;
let count = document.getElementsByClassName("count");

function loopCount(){
    for(let i = 0; i < count.length; i++){
        count[i].innerHTML = counter;
     }
}





//listen to the whole page for key space
document.body.addEventListener('keypress',  event => {
    if(event.code === "Space")
    {
        jump();

    }
   
}); 

//for mobile TEST
document.body.addEventListener("touchstart", event =>{
    jump();
})



//makes the player obj jump by adding the class animate
function jump(){
    if(player.classList != "animate"){
        player.classList.add("animate");
        
    }
    
    setTimeout(function(){ 
        player.classList.remove("animate") 
    }, 500)
    
}




//randomn value for the bubble
block.classList.add("animateBlock");  
//calls the ran every 4sec
setInterval(function(){
    
   
        const root = document.querySelector(":root");
        let random = Math.floor(Math.random() * 100);
                 
        root.style.setProperty("--test1", random + "px");
        
        block.classList.add("animateBlock");  


  }, 4000)
   
   









    //check hits and add eventlistener to the button to reload the page
    let checkHit = setInterval(function(){

    //calling the func that updates the elements
    loopCount();
   
 
    if(counter >= 2 ){

        block2.classList.add("blokki2");
        block2.style.display = "block";
    }



    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));

    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let blockLeft2 = parseInt(window.getComputedStyle(block2).getPropertyValue("left"));
//|| blockLeft2 <20 && blockLeft2>0 && playerTop>=130 
    if((blockLeft <50 && blockLeft>0 && playerTop>=130) || (blockLeft2 <50 && blockLeft2>0 && playerTop>=130)){

        const againButton = document.querySelector(".playAgain");
        const messsage = document.querySelector(".message")
  
   
            block.style.animation ="none";
            block2.style.animation ="none";
            block.style.display = "none";
            block2.style.display = "none";
            player.style.display = "none";

            
            againContainer.style.visibility = "visible";
            messsage.innerHTML = `Your score: <br>${[counter]}`;
            cat1.style.display = "none";
            cat2.style.display = "none";
            againButton.style.visibility = "visible";
               

    againButton.addEventListener("click", () =>{
        location.reload()
    })
            
    }else if((blockLeft <50 && blockLeft>40)  ||( blockLeft2 <50 && blockLeft2 >40)){
        counter  ++; //++ works better than +=1
          
    }
//||( blockLeft2 <20 && blockLeft2 >15) 




}, 10) 



} //startGame end