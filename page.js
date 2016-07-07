changePage();


function changePage(){

var x = document.getElementsByClassName("obfuscated-content");
 var b=x[0].parentElement.parentElement;
 b.removeChild(b.children[2]);
 var x = document.getElementsByClassName("obfuscated-content");
 var obf =x[0].parentElement;
 obf.className="";


 
 var x = document.getElementsByClassName("obfuscated");
 for (var p in x){
 	var text= x[p].innerHTML;
 	var textnew =CaesarCipher(text);
 	x[p].innerHTML=textnew;
}
 
}

function CaesarCipher(str) {

  
    var result = '';
    var charcode = 0;
    var headline=false;
    for (i = 0; i < str.length; i++) {
       debugger;
       charcode = (str[i].charCodeAt()) ;
        if(charcode===60){

             headline=true;
             result += String.fromCharCode(charcode);
             continue;
        }if(charcode===62){
            result += String.fromCharCode(charcode);
            headline=false;
             continue;
        }
        if(headline){
            result += String.fromCharCode(charcode);
             continue;
        }
        


    	if(charcode===32)
    	{
    		result += " ";
            continue;
    	}
        charcode=charcode-1;
        result += String.fromCharCode(charcode);
    }
    return result;

}
