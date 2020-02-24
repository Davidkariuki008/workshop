function formValidation(){
    var a =document.form1.first_name.value;
        if(a==null|| a==""){
            alert("Enter your first Name");
            return false;
        }
    var b = document.form1.second_name.value;
        if(b==null || b==""){
            alert("Enter your second name");
            return false;
        }
    var c = document.form1.age.value;
        if(c==null || c==""){
            alert("Enter your age");
            return false;
        }
    var data = document.form1.email.value;
        var j= data.indexOf('a');
        var i= data.indexOf('.');
        var diff=parseInt(i)+parseInt(j)
        var k=parseInt(j)+l;
        var e=data.charAt(k);

        if(i<l || diff<=l || c==""){
            alert("Invalid email address")
        
        document.form1.email.focus();
        }
}