/*function pour(a,b){
    if a = number;
    b= number; {
        return '<br>' + a + b;
    } else if {
        return a + b;
    }
}
pour(100,100);
*/


function pour(a,b) {
    if (typeof a === 'string' && typeof b === 'string')
    {
        return parseInt(a) + parseInt(b);
    } else if (typeof a === 'number' && typeof b ==='number'){
        return a.toString() + b.toString();
    }
}
pour('1','2');
