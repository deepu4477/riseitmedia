const typedTextSpan=document.querySelector(".typed-text");
const cursorSpan=document.querySelector(".cursor");
 
const textArray=["SOCIAL MEDIA MANAGEMENT","CONTENT CREATION","EMAIL MARKETING","WEBSITE DEVELOPMENT","PAID ADVERTISMENT","WEBSITE HANDLING"];
const typingDelay=200;
const erassingDelay=100;
const newTextDelay=2000;
 
let textArrayIndex=0;
let charIndex=0;
function type(){
    if(charIndex < textArray[textArrayIndex].length){
        if(!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type , typingDelay);
        
    }
    else{
        cursorSpan.classList.remove("typing")
        setTimeout(erase,newTextDelay)
    }
}
function erase(){
    if(charIndex>0){
        if(!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase , erassingDelay);
        
    }
    else{
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex>=textArray.length)
        textArrayIndex=0;
        setTimeout(type , typingDelay+1100);
    }
}
type()
