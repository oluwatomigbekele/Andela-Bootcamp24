module.exports={
    getPrimes: function(num){
    // function to get a list of prime numbers
        function range(starter,ender){
            let list = [],count
            // the generated numbers are added to Array 'list'.
            for(count = starter; count<= ender; count++){
                list.push(count);
            }
        return list
        }
    // function to test if the numbers generated with the range function are prime numbers
        function prime(num) {
            for ( let count = 2; count <= num; count++ ) {
                if ( num % count === 0 ) {
                    return false;
                }
            }
        return true;
        }    
    return range(2,num).filter(prime)
    }
}
