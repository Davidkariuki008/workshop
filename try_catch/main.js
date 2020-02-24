var txt="";
function message(){
    try{
        addalert("Welcome guest");
    }
    catch(err){
        txt="There was an Error on this page. \n\n";
        txt+= "Click okay to continue viewing this page, \n"
        txt+= "or Cancel to return to go to facebook. \n \n";

        if(!confirm(txt)){
            document.location.href= "http://www.facebook.com/";
        }
    }
}