//alert('sign in');
//console.log('JS');

console.dir(document);
console.log(document.all);
console.log(document.body);

const a = 'movies';
const b = 'tv shows';
const c = 'kids shows'
console.log(a,b,c);

const movies = new Array(10);
console.log(movies);

const movies1 = new Array( 'movie', 'tvshows' ,'kidsshows');
console.log(movies1);

const shows = ['latest','drama','action','comedy'];
console.log(shows);
shows.push('classic');
console.log(shows);

const viewers = {
    userid : '1',
    searches :'4',
    interests : ['drama','comedy']
}
console.log(viewers);

//const categories = [
  //  {
    //    cat1 = 'films'
    //},
    //{
     //   cat2 = 'tvshows'
    //},
    //{
      //  cat3 = 'kidsshows'
    //}
    //];
    //console.log(categories);



//QuerySelectorAll;
 
//var div = document.getElementsByClassName('top2');
//div.addEventListener('click', getText);
//function getText(event){
  //  console.log(event);
 


var button = document.getElementsByClassName('btn');
document.addEventListener('click', getData);
function getData(event){
    event.preventDefault();
    console.log(event);
}

//var btn = document.createElement('button');
var button = document.getElementsByClassName('btn');
button[0].addEventListener('click', getData);

function  getData(event) {

    var xhr = new XMLHttpRequest();
    xhr.open(GET, url ,true);
    var url = 'http://api.tvmaze.com/shows/1?embed=cast';

   // xhr.setRequestHeader("","");

    xhr.onreadystatechange = function() {
        if(this.status == 4 && 200){
            console.log(this.responseText);
        }
    }
    xhr.send();
}
