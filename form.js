
//var btn = document.createElement('button');

var button = document.getElementsByClassName('btn');
button.addEventListener('click', getDataFromServer);


function getDataFromServer(){

    var xhr = new XMLHttpRequest();
    
    
    var url = 'http://api.tvmaze.com/singlesearch/shows?q=girls';
    xhr.open(GET ,url , true);
    

   // xhr.setRequestHeader("","");

    xhr.onload = function() {
        if(this.status == 200){
            console.log(this.responseText);
        }
    }
    xhr.send();
}
