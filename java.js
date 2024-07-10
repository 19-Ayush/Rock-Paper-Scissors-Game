console.log("hello");
const ch=document.querySelectorAll(".img1");
const ch1=document.querySelector("#p1");
const play =(usc)=>{
    let usw=false;
    choices=["rock","paper","scissors"];
    let j =Math.floor(Math.random()*3);
    console.log(j);
    if(choices[j]===usc){
        console.log("draw");
        ch1.innerText="## DRAW ##";
        ch1.style.backgroundColor="#FFBF00";
        return none;
    }
    else if(choices[j]==="rock"){
        usw=(usc==="paper"?true:false);
    }
    else if(choices[j]==="paper"){
        usw=(usc==="scissors"?true:false);
    }
    else if(choices[j]==="scissors"){
        usw=(usc==="rock"?true:false);
    }
    return usw;
}
ch.forEach(img1 => {
    img1.addEventListener("click",()=>{
        i=img1.getAttribute("id");
        console.log("choice was clicked ",i);
        if(play(i)){
            console.log("you win");
            ch1.innerText="$$ YOU WIN $$";
            ch1.style.backgroundColor="#8DECB4";

        }
        else{
            console.log("you looose");
            ch1.innerText="!! YOU LOOSE !!";
            ch1.style.backgroundColor="#FA7070";

        }
    })
    
});