const endDate = "5 SEPTEMBER 2023 10:00 PM";

document.getElementById('end-date').innerHTML = endDate;

const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate)
    const now = new Date();
    const diff = (end - now)/1000 ;
    console.log(diff);
    //convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600 % 24);
    inputs[2].value = Math.floor(diff / 3600 % 60);
    inputs[3].value = Math.floor(diff) % 60;
    
}
clock();

// 1 day = 24hr
// 1 hr = 60 min
// 60 min = 3600sec

setInterval( () =>
{
    clock()
}, 
1000
)
