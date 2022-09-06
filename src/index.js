//this is my url
//var apiUrl = 'https://api.adviceslip.com'

//this is one method I found online about how to do a GET request but it seems weird. A fetch may be more appropriate
//function httpGet('https://api.adviceslip.com/advice') {
   // let xmlHttpReq = new XMLHttpRequest();
    //xmlHttpReq.open("GET",'https://api.adviceslip.com/advice', true );
    //xmlHttpReq.send(null);
   // return xmlHttpReq.responseText;
// }
const resDiv = document.querySelector('#results');
const resBtn = document.querySelector('#get-advice');

resBtn.addEventListener('click', () => {
   getAdvice();
});

window.onload = () =>{
   getAdvice();
}

function getAdvice(){

   fetch ('https://api.adviceslip.com/advice')
.then(res => {
   return res.json();
}).then(adviceData => {
   const Adviceobj = adviceData.slip ;
   resDiv.innerHTML = `<p> ${Adviceobj.advice} </p>`;
}).catch(error => {
   console.log(error);
});

}

// this successfully took the advice and put it in the console.


 