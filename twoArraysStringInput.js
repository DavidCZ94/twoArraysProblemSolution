const s1 = 'hi';
const s2 = 'World';

function twoStrings(s1, s2) {

    let matchFound = 'NO';

    for (let i = 0; i < s1.length; i++){
        if( s1.indexOf(s2[i]) > -1 ){
            matchFound = 'YES';
            break;
        }
    }

    return matchFound;
}

twoStrings(s1, s2);