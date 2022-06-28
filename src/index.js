module.exports = function reverse (n) {
    
    let newN = ''; 

    if (n == 0){
        newN = 0;
    } else if ( n > 0 ){
        for (let i = String(n).length - 1; i >= 0; i--) { 
            newN += String(n)[i]; 
        } 
    } else {
        n = n * -1;
        for (let i = String(n).length - 1; i >= 0; i--) { 
            newN += String(n)[i]; 
        } 
    }
        
        return newN; 

}
