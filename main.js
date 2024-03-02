const textArea=document.querySelector(".my-text-area");
const totalWords=document.querySelector(".total-words");
const outText=document.querySelector(".out-text p");
console.log(outText);
let wordCount=0;
let listOfWords=[];

function updateTotalWords(){
    totalWords.innerText=wordCount;
}

function changeWordBackground(wordList){
    
    //let str="";
    let threshold=5;
    
    /* wordList.forEach(word => {
        word.length>threshold? str+=`<span class="larger-word">${word}</span> `: str+=word+" ";
    }); */

    let str=wordList.map((word)=>word.length>threshold?`<span class="larger-word">${word}</span>`:word);

    return str.join(" ");
}

textArea.addEventListener("input", (event)=>{
   
    let text=textArea.value;
    let cleanedText=text.replace(/\s+/g, ' ').trim();
    
    let arrOfWords=cleanedText.split(" ");
   
    wordCount=arrOfWords.length;
    
    outText.innerHTML=changeWordBackground(arrOfWords);
    updateTotalWords();
    
});

updateTotalWords();