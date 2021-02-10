const text='Hey there Welcome!!!';

let index = 0;

function autoText() {
    document.body.innerText=text.slice(0,index);

    index++;
   
    if(index>text.length-1) {
        index=0;
    }

};
setInterval(autoText,100);