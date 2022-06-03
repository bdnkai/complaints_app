
/*----- constants -----*/
const BASE_URL = 'https://data.cityofnewyororksk.us/resource/erm2-nwe9.json?agency=NYPD&borough=QUEENS&$limit='


/*----- app's state (variables) -----*/
let numRequest = '';
let new_Url = '';
/*----- cached element references -----*/
let inputRequest_El = document.querySelector('.request-amount')
let requestBrook_El = document.querySelector('.requestBrook');
let requestMan_El = document.querySelector('.requestMan')
let requestQueens_El = document.querySelector('.requestQueens')
let requestBronx_El = document.querySelector('.requestBronx')
let requestStaten_El = document.querySelector('.requestStaten')
let results_El = document.querySelector('.Results')
console.log(results_El)




/*----- event listeners -----*/

requestBrook_El.addEventListener('click', brooklynResults)
requestMan_El.addEventListener('click', manResults)
requestQueens_El.addEventListener('click',queensResults)
requestBronx_El.addEventListener('click',bronxResults)
requestStaten_El.addEventListener('click',statenResults)




/*----- functions -----*/

function returnNumRequest(){
    return numRequest = inputRequest_El.value;
}

function newURL(borough){
    returnNumRequest()
    return new_Url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=${borough}&$limit=${numRequest}`
}
// console.log(newURL("BROOKLYN"))



function newButtons(){
    let createButton = document.createElement("BUTTON");
    let textButton = document.createTextNode("WHAT DID THE POLICE DO?");
    createButton.appendChild(textButton);
    results_El.appendChild(createButton);
}

function brooklynResults(){
    newURL("BROOKLYN")
    // event.preventDefault();
    fetch(new_Url)
        .then(function (res){
            console.log(res)
            return res.json()
        })
        .then(function(data){
            console.log(data);
            console.log(`complaint: ${data[0].complaint_type} What the police did: ${data[0].resolution_description}`);
    })
        
    for (let i = 0; i < numRequest; i++){
        newButtons()
    }
    
}
    


function manResults(){
    console.log('Manhatten works')
};

function queensResults(){
    console.log('Queens works')
};

function bronxResults(){
    console.log('Bronx works')
};

function statenResults(){
    console.log('Staten Island works')
};






// getData()