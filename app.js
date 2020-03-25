console.time('test');
const prod1='pizza',
prod2='humberger',
price1=30,
price2=40;
let html;

html='<ul>'+
'<li class="item">Item :'+prod1+'</li>'+
'<li>price :'+price1+'</li>'+
'<li>Item :'+prod2+'</li>'+
'<li>price :'+price2+'</li>'+
'<li>total :'+(price1+price2)+'</li>'+
'</ul>';
// Template Strings

html=`

<ul class="list-group w-100">
<li class="list-group-item bg-danger">price :${price1}</li>
<li class="list-group-item bg-dark">Item :${prod2}</li>
<li class="list-group-item bg-info">price :${price2}</li>
<li class="list-group-item bg-light">Total :${price1+price2}</li>
<li class="list-group-item bg-primary">Total :${total(price1,price2)}</li>
<li class="list-group-item bg-warning">Item :${prod1}</li>
</ul>
`;
function total(param1,param2){
    return param1+param2;
}
const welcome=document.querySelector('#welcome');
welcome.innerHTML=html;
// let imed=0;
// imed=1;
// console.log(imed);
console.table([1,2,3]);
console.warn("oo");
console.timeEnd('test');
let name,prenom;
name="juan";
prenom="akrouti";
console.log(name)
//prompt(name,prenom);
//prompt(name+prenom);
var imed=""
var imed="akrouti";
console.log(imed);
//let name='juan';
name='pablo';
console.log((name));
const obj={
    name:'imed',
    prenom:'akrouti'
}
obj.name="juan"
console.log(obj);
// Same with arrays
const numbers = [1,2,3,4,5];

console.log(numbers);

numbers[3] = 3;
console.log(numbers);

numbers.push(6);
console.log(numbers);

// But you cannot re assign the whole array

//numbers = [1,2,3];
const js='learing ',
      modern=' modern '  ;
console.log(js+modern+'javascript ' + obj.name);
let a=4;
a+=3;
 console.log(a);
 
 const real='real';
 let concat=real.concat(' madrid');
 console.log(concat)
 console.log(concat.indexOf('l'));
 console.log(real.length);
 const email='imed.akroutigmail.com';
 if (email.indexOf('@')>0){
     console.log('valid email')}
     else    
     {
        console.log('invalid email')
     }
 
let firstname='imed.akrouti';
let out=firstname.substring(4, firstname.length);
 out=firstname.substring(4, firstname.length);
let out1=firstname.substring(4,7);
 out1=firstname.substring(4,7);
console.log(out1);
let lakrez='lakrez'
console.log(lakrez.substring(lakrez.length - 2))
lakrez=lakrez.slice(-4);//slice from end 
console.log(lakrez);
const hobbies="sport , musique ,voyage"
output=hobbies.split(',');//decouper chaine selon separateur
output=hobbies.replace('musique', 'foot');
output=hobbies.includes('musique')
output=hobbies.indexOf('musique')
console.log(output)
let tab=[1,2,3];
console.table(tab)
let ariable={
    nom:"imed",
    prenom:"akrouti"
}
let variable='imed\'akrouti';
console.log(variable);
// a=(prompt('shoose a number'));
// b=(prompt('shoose a number'));
// C=a+b
// if (typeof(C)==string){
//     console.log(C)
//     console.log(typeof(C))
// }
 console.log(typeof(C))
const number='50.77',
      number1=10,
      number2=parseInt(number);
      
console.log(number % number1);
console.log(typeof(number2));
let result;
result=Math.round(3.2);
result=Math.ceil(3.2)
result=Math.floor(3.2);
result=7.88888;
console.log(result.toFixed(3));
result='hello'

try {
    console.log(number(result))

} catch (error) {
    console.error('something error')
}
if (isNaN(result)){
    console.log('not a number');

}
console.log(`aaaa${result}`)
let aanumber=1209139.101213;
console.log(aanumber.toFixed())
console.info(typeof(String(true)));
//const arr=['imed',3.7,4,5,{'car':'symbole','price':12}];
const arr=new Array('imed',3.7,4,5,{'car':'symbole','price':12})
console.table(arr);
//check if an array
console.log(Array.isArray(arr));
console.log([1,2,3].toString())
console.log(Number([1,2,2]));