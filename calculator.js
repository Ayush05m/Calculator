let eq = "";
function clicked(a){
    console.log(a);
    eq = eq +  a
    console.log(eq);
    
}

function add(){
    x = eq;
    eq="";
    console.log(x);
    console.log(eq);
}
function subs(){
    y = eq;
    eq="";
    console.log(y);
    console.log(eq);
    sum = x+y
    console.log(sum);
}

function mult(){
    z = eq;
    eq="";
    substraction = sum - z
    console.log(z);
    console.log(eq);
    console.log(substraction);
}

function divi(){
    d = eq;
    eq="";
    multiply = substraction*z
    console.log(d);
    console.log(eq);
}

function solve(){
    s=(x+y-z)*d/eq
    console.log(s);
}