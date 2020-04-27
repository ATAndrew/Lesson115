/* Task 1

for (let i = 2;  i <= 10; i++) {
    console.log ( i++ )
} 

for (let i = 2;  i <= 10; i++) {
    if (i % 2 > 0)  continue;
    console.log (i);
} 
*/



let x = 1; 
let num = 5;
for ( i = 1; i <= num; i++) { x *= i; } console.log (x)



/*

let i = 0; while (i < 3) { alert( `number ${i}!` ); 
i++; 
}

*/





/*
let a = +prompt ('a?', '');
switch (a) {
    case 0:
        alert (0);
        break;
    case 1:
        alert (1);
        break;
    case 2:
        alert ('2,3');
    case 3:
        alert ('2,3');
        break;
    default:
        alert ( "I don't know such number" );

}
*/

/*
let browser = prompt ( 'What browser do you use');
if (browser == 'Edge') {
    alert ("You've got the Edge");
} else if (( browser == 'Chrome') || (browser == 'Safari') || ( browser == 'FireFox') || ( browser == "Opera")) {
    alert (' Okay we support these browsers too ');
} else {
    alert ( ' We hope that this page looks ok!');
}

*/