function getData(url, callbackFunc) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function successAjax(xhttp) {
    // itt a json content, benne a data változóban
    var userDatas = JSON.parse(xhttp.responseText);

    createDivs(userDatas)

    /*
      Pár sorral lejebb majd ezt olvashatod:
      IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ!

      Na azokat a függvényeket ITT HÍVD MEG! 

      A userDatas NEM GLOBÁLIS változó, ne is tegyétek ki globálisra. Azaz TILOS!
      Ha valemelyik függvényeteknek kell, akkor paraméterként adjátok át.
    */



}

// Írd be a json fileod nevét/útvonalát úgy, ahogy nálad van
getData('/json/characters.json', successAjax);

// Live servert használd mindig!!!!!
/* IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ! */


function createDivs(data) {
    var main = document.querySelector('#main');
    sortByNames(data);
    var div = '';
    for (let i = 0; i < data.length; i++) {
        if (data[i].dead != "true") {
            div += `
        <div class="heroes" id="${data[i].id}" onclick="find(${data} ,${data[i].id})">
        <img src="/${data[i].portrait}" alt="a">
        ${data[i].name}
        
        </div>`
        }
    }
    main.innerHTML += div;

}

function sortByNames(data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++)
            if (data[i].name > data[j].name) {
                var temp = data[i]
                data[i] = data[j]
                data[j] = temp
            }

    }

}

function evListeners(data) {
    for (let i = 0; i < data.length; i++) {
        var hero = document.querySelector('#pre90');
    }
}

var bigPic = document.querySelector('#bigPic')
var heroName = document.querySelector('#heroName')
var story = document.querySelector('#story')

function find(data, hero) {

    console.log(data[hero]);

    bigPic.innerHTML = `<img src="/${data[hero].picture}" alt="a">`

    for (let i = 0; i < data.length; i++) {


    }

    console.log(typeof (hero));
}

function searchHero(data) {
    var searchBar = document.querySelector('#searchBar');
    for (let i = 0; i < data.length; i++) {
        if (searchBar.value.toLowerCase() == data[i].name.toLowerCase()) {

        }
    }
}