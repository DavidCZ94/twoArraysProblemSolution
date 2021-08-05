const strArray1 = ['hello', 'hi', 'wouldyoulikefries', 'hackerrankcommunity', 'jackandjill', 'writetoyourparents'];
const strArray2 = ['World', 'Bye', 'abcabcabcabcabcabc', 'cdecdecdecde', 'wentupthehill', 'fghmqzldbc'];

console.log("---------Input---------");
console.log(strArray1);
console.log(strArray1);
console.log("---------Ounput---------");

function twoStrings(s1, s2){
    let matchFoundMap = [];
    for (let i = 0; i < s1.length; i++) {

        matchFoundMap[i] = 'NO';

        for (let j = 0; j < s2[i].length; j++){
            if( s1[i].indexOf(s2[i][j]) > -1 ){
                matchFoundMap[i] = 'YES';
                break;
            }
        }
    }

    matchFoundMap.map( item => console.log(item) );
}

twoStrings(strArray1, strArray2);