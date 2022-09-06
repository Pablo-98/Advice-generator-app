//this is my url
//var apiUrl = 'https://api.adviceslip.com'

//this is one method I found online about how to do a GET request but it seems weird. A fetch may be more appropriate
//function httpGet('https://api.adviceslip.com/advice') {
   // let xmlHttpReq = new XMLHttpRequest();
    //xmlHttpReq.open("GET",'https://api.adviceslip.com/advice', true );
    //xmlHttpReq.send(null);
   // return xmlHttpReq.responseText;
// }


// this successfully took the advice and put it in the console.
fetch ('https://api.adviceslip.com/advice')
.then(res => res.json())
.then(data => console.log(data))


 