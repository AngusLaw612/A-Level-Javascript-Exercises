let prime =[]

function negative( minimum , maximum) {
    if (minimum < 0 && maximum < 0)  {
        resultMessage.innerHTML = "Number can not be negative"
    }
}

function prime( minimum , maximum) {
    
    for (let i = minimum ; i <= maximum ; i++) {
        
        for  (let n = 0 ; n <= maximum ; n++) {
            let turn = 0
            
            if (i % n !== 0) {
                turn  = turn + 1
            }

            


    
         }
        }
}











let password = document.getElementById('age');

document.getElementById('buttonInput').addEventListener('click', function() {
    check(password);
});