changePage();


function changePage(){

debugger;
var x = document.getElementsByClassName("obfuscated-content");
 var b=x[0].parentElement.parentElement;
 b.removeChild(b.children[2]);
 var x = document.querySelectorAll('div[class^="lp_mwi_svg-filter-blur"]');
 
 x[0].className="";


 
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

    for (i = 0; i < str.length; i++) {
    	if(charcode===31)
    	{
    		result += " ";
    	}
        charcode = (str[i].charCodeAt()) -1;
        result += String.fromCharCode(charcode);
    }
    return result;

}
