let ans = prompt("Hi Aaron! Answer this question:\nHow old are you?>");
if (ans<18){
    document.getElementById("isDrink").innerHTML='You are not even an adult and you are thinking of drinking!? I will tell your mom!';
} else if(ans<21){
    document.getElementById("isDrink").innerHTML='You are not old enough to drink but atlease you are an adult now ;)';
} else if(ans>=21){
    document.getElementById("isDrink").innerHTML='Yo bro congratulations! You are old enough to drink!! Call me :)';
} else{
    document.getElementById("isDrink").innerHTML='invalid age please try again!';
}