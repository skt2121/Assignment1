 var request = new XMLHttpRequest();
 request.open('GET', 'https://jsonplaceholder.typicode.com/users');
 request.send();
 request.onload = function(){
    var data = JSON.parse(this.response);
    
    //console.log(data);
    for(var i=0; i<data.length;i++){
        console.log(data[i].id)
    }
  } 