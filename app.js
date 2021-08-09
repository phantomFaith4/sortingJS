const randomArray=[];  
const arraySize=35;
const sortingSpeed=200; 
 
function generateRandomArray(){ 
    if(randomArray.length>0){     
        removeElementsByClass("barClass");
        randomArray.length=0;
        while(randomArray.length > 0) {
            randomArray.pop();
        }  
        for(let i=0;i<arraySize;i++){
            let broj=Math.floor(Math.random()*100) 
            randomArray.push(broj);
            var elem = document.createElement('div'); 
            elem.style.cssText = 'width:25px;height:'+broj*3+'px;background:#CD113B;margin:3px;padding:3px;display:inline-block';
            elem.classList.add("barClass");
            let barHolder=document.getElementById("put")
            barHolder.appendChild(elem);   
            elem.innerHTML += broj;   
        };   
    }else{   
        for(let i=0;i<arraySize;i++){   
            let broj=Math.floor(Math.random()*100)  
            randomArray.push(broj); 
            var elem = document.createElement('div');
            elem.style.cssText = 'width:25px;height:'+broj*3+'px;background:#CD113B;margin:3px;padding:3px;display:inline-block';
            elem.classList.add("barClass");
            let barHolder=document.getElementById("put")
            barHolder.appendChild(elem);   
            elem.innerHTML += broj; 
        }; 
    }; 
}; 
function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
function swap(ele1,ele2){ 
    const sortingView =document.getElementById("put");
    sortingView.insertBefore(ele2,ele1) 

} 
async function bubbleSort(){
    const len=randomArray.length;
    const arrayDiv=document.getElementsByClassName("barClass");
    for(let i=0;i<len;i++){   
        for(let j=0;j<len-i- 1;j++){  
            arrayDiv[j].style.backgroundColor='#233E8B';
            arrayDiv[j+1].style.backgroundColor='#233E8B'; 
            arrayDiv[j].style.transform = "translate(0, 5px)";
            arrayDiv[j+1].style.transform = "translate(0, 5px)";
            await new Promise(resolve=>{ 
                setTimeout(()=>{  
                    resolve();
                },sortingSpeed); 
            });
            const broj1=Number(arrayDiv[j].innerHTML);
            const broj2=Number(arrayDiv[j+1].innerHTML); 
            arrayDiv[j].style.backgroundColor = "#233E8B";
            arrayDiv[j + 1].style.backgroundColor = "#233E8B"; 
            arrayDiv[j].style.transform = "translate(0,0)";
            arrayDiv[j+1].style.transform = "translate(0,0)"; 
            if(broj1>broj2){
                swap(arrayDiv[j],arrayDiv[j+1]);
            }
        };
        arrayDiv[arrayDiv.length - i - 1].style.backgroundColor = "#66DE93"; 
    };    
    arrayDiv[arrayDiv.length - i - 1].style.backgroundColor = "#66DE93"; 
}; 
 
async function selectionSort(){ 
    const len=randomArray.length;
    const arrayDiv=document.getElementsByClassName("barClass");
    for(let i= 0 ;i< len-1 ;i++){
        let min = i;
        for(let j= i+1;j < len; j++){ 
            arrayDiv[min].style.backgroundColor='#233E8B'; 
            arrayDiv[j].style.backgroundColor='#8E2657';  
            arrayDiv[j].style.transform = "translate(0, 5px)";  
            await new Promise(resolve=>{
                setTimeout(()=>{
                    resolve(); 
                },sortingSpeed)    
            }); 
            const minNum= Number(arrayDiv[min].innerHTML);
            const currentNum= Number(arrayDiv[j].innerHTML); 
            if(minNum > currentNum){
                arrayDiv[min].style.backgroundColor='#8E2657';
                min = j;
            };
            arrayDiv[j].style.transform = "translate(0, 0)";
        }; 
        arrayDiv[min].style.backgroundColor = '#66DE93'; 
        swap(arrayDiv[i],arrayDiv[min]);
    };     
    arrayDiv[arrayDiv.length-1].style.backgroundColor ='#66DE93'; 
};
  
async function insertionSort(){
    const arrayDiv=document.getElementsByClassName("barClass");
    const len=randomArray.length;
    for(let i=1;i<len;i++){    
        let key=Number(arrayDiv[i].innerHTML);
        let j=i-1; 
        while(j>=0 && Number(arrayDiv[j].innerHTML)>key){
            arrayDiv[j].style.backgroundColor='#233E8B';
            arrayDiv[j+1].style.backgroundColor='#233E8B';
            arrayDiv[j].style.transform='translate(0,5px)';
            arrayDiv[j+1].style.transform='translate(0,5px)';  
            await new Promise(resolve=>{
                setTimeout(()=>{
                    resolve(); 
                },sortingSpeed)    
            }); 
            swap(arrayDiv[j],arrayDiv[j+1]);
            arrayDiv[j].style.transform='translate(0,0)';
            arrayDiv[j+1].style.transform='translate(0,0)';
            arrayDiv[j].style.backgroundColor='#66DE93';
            arrayDiv[j+1].style.backgroundColor='#66DE93';
            j=j-1; 
        }; 
    };  
};

     