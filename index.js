var input = "";
var key = "";
var output = "";
const keyln = key.length;
var textOut = document.getElementById('encrypted');

let form  = document.forms[0];

function encrypt(){
	output = "";
	//take inputs from textfields in the webpage
    input = document.getElementById('message').value;
    key = document.getElementById('key').value;

	//equalize the length of message and key by repeating key
	for( var i = 0; key.length < input.length; i++){
        if(i==keyln) i = 0;
        key = key + key[i];
    }
	
	//find x and y coordinates in matrix for message and key respectively and substitute
    for( var i = 0, x=0, y=0; i<input.length; i++){
        x = sBox[0].indexOf(input[i]);
        y = sBox[0].indexOf(key[i]);
        output = output + sBox[x][y];
    }

    textOut.value = output;
}

function copyText(){
    textOut.value = output;
    textOut.select();
    textOut.setSelectionRange(0, 99999);

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }
}