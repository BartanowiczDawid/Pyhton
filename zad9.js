
var obliczenie
do{
obliczenie = Number(prompt("jakie obliczenie chcesz wykonac 1.dodawanie 2.odejmowanie 3.mnozenie 4.dzielenie" ));
}
while((1)>obliczenie || obliczenie>4);


let x = Number(prompt("Podaj wartość pierwszego elementu"));
    
    let y = Number(prompt("Podaj wartość drugiego elementami"));

if(obliczenie==1)
{
    wynik=x+y
    alert("wynik wynos : " + wynik);
}
else if(obliczenie==2)
{
    wynik=x-y
    alert("wynik wynos : " + wynik);
}
else if(obliczenie==3)
{
    wynik=x*y
    alert("wynik wynos : " + wynik);
}
else if(obliczenie==4)
{
    wynik=x/y
    alert("wynik wynos : " + wynik);
}

