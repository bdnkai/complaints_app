HTML
//create form tag in main
    - input class num-of-complaints
    - 5 buttons
        -Brooklyn
        -Manhatten
        -Queens
        -Bronx
        -Staten Island

borough
descriptor: (which says what kind of complaint was made)
agency: "NYPD" (because we only want complaints that were handled by the police department)
resolution_description: (which says how the police handled the complaint)

JS: 

- query select all the city
- Dom Manipulate limit url = numRequest

- fetch data = url limit of num of complaints
- DOM Manipulation to create button per requests

functions I need:

add event listener (click, run)
const input = query input

function requestNum(input) {
    url = &$(input)
    return
}

-function Create Button
    for let i = 0; i < num of request; i++ {
    -DOM create button with innertext of "what did the police do"
    document.createElement("BUTTON")
}

-Function Toggle Button{
    for loop to drop details
    toggle 
}

function pull(Brooklyn,Manhatten,Queens,Bronx,Staten Island)
function 

https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BROOKLYN&$limit=1

https://data.cityofnewyororksk.us/resource/erm2-nwe9.json?agency=NYPD&borough=BROOKLYN&$limit=1