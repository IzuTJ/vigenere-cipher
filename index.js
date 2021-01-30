var input = "";
var key = "";
var output = "";
var inputElement = document.getElementById('message');
var keyElement = document.getElementById('key');
var outputElement = document.getElementById('encrypted');

let form  = document.forms[0];

function encrypt(){
	output = "";
	const keyln = key.length;

	//take inputs from textfields in the webpage
    input = inputElement.value;
    key = keyElement.value;

	//equalize the length of message and key by repeating key
	for( var i = 0; key.length < input.length; i++){
        if(i==keyln) i = 0;
        key = key + key[i];
    }
	
	//find x and y coordinates in matrix for message and key respectively and substitute
    for( var i = x = y = 0; i<input.length; i++){
        x = sBox[0].indexOf(input[i]);
        y = sBox[0].indexOf(key[i]);
        output = output + sBox[x][y];
    }

	outputElement.value = output;
	console.log("Encrypt was executed.")
}

function clearAllFields(){
	output = "";
	inputElement.value = "";
	keyElement.value = "";
	outputElement.value = "";
	console.log("Clear was executed.");
}

function copyText(){
    outputElement.value = output;
    outputElement.select();
    outputElement.setSelectionRange(0, 99999);

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }
}