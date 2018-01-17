function car(days){
    if ( 1 <= days < 7 ) {
        return ('payment ' + days * 40 + ' dollars,' + ' cash back 20 dollars');
    } else {
        return ('payment ' + days * 40 + ' dollars,' + ' cash back 50 dollars')
    }
}
car (7);