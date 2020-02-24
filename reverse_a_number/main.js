function reverse_a_number(n){
   var m = document.getElementById("dav").value;
   m=n;
    n=n+"";
    return n.split("").reverse().join("");
}
document.write("Reverse of the given number is:" + reverse_a_number())
