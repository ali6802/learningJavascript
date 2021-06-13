var s="hello";//string
var s=/hello/;//regex - Object in js
var r=/\d{3}/;
r.test("123");//true
r.test(123);//true
r.test("123ABC");//true
var s=/\d{3}\b/;
s.test("123");//true
s.test(123);//true
s.test("123ABC");//false
var t=/^\d{3}$/;// ^ beginning $ end
t.test("123");//true
t.test(123);//true
t.test("123ABC");//false
//
var r=/\w+@\w+\.(com|net|co|org|mil)/;
var email="alison@un.org";
r.test(email);//true
//unicorns and rainbows
var phase="unicorn and rainbows and cupcakes";
var r=/\w+/;
phase.match(r);//true
//
var r=/[a-z]+/g;
phase.match(r);
//["unicorn", "and", "rainbows", "and", "cupcakes"]
var phase="Unicorn and rainbows and Cupcakes";
var r=/\b[a-z]+\b/g;
phase.match(r);
//["and", "rainbows", "and"]
var phase="Unicorn and rainbows and Cupcakes";
var r=/\b[a-z]+\b/gi;
phase.match(r);
//["Unicorn", "and", "rainbows", "and", "Cupcakes"] i- case insensitive
var phones="123-4575 564-8552";
var r=/\b\d{3}[-.]\d{4}\b/g;
phones.match(r);
//["123-4575", "564-8552"]
//

var check=/(\d{2})-(\d{2})-(\d{4})/;
var date="06-07-1921";
check.test(date);
//
var teco=/[^73]+/;
var seq1="1253785";
var seq2="1258";
teco.test(seq1);
//
var phase="Boohoooohoohooo";
let cartoonCrying = /boo+(hoo+)+/i;
//
let numbers="807-2342 852-8565 5245-8562";
var r=/(\d{3})[.-]\d{4}/g;//(group 1)
var result=r.exec(numbers);// [matched,group1]
//always capture the first match
//[first match,group1,...,first match index,input,group definitions]
//["807-2342", "807", index: 0, input: "807-2342 852-8565 5245-8562", groups: undefined]
var result=r.exec(numbers);
//["852-8565", "852", index: 9, input: "807-2342 852-8565 5245-8562", groups: undefined]
var result=r.exec(numbers);
//["245-8562", "245", index: 19, input: "807-2342 852-8565 5245-8562", groups: undefined]
var result=r.exec(numbers);
//nul
//split : string.split(regex)
//replace : 
var s="unicorns and rainbows and Cupcakes";
s.split(/\s/);
// ["unicorns", "and", "rainbows", "and", "Cupcakes"]
s.split(/[,\s/]+/);
//["unicorns", "and", "rainbows", "and", "Cupcakes"]
s.split(/\W+/);//anything that is not a word
//["unicorns", "and", "rainbows", "and", "Cupcakes"]
//Replace
var lorem="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
var ronaldo="Ronaldo fenônemo gosta de mulher";
ronaldo.replace(/mulher/,"traveco");
var s="unicorns and rainbows and cupcakes vai tnc";
lorem.replace(/\w{6,8}/g,"sledgehammer");// /g so that it does simply not replace the first one but all of them that matches within the string
//doubles the vowels
var r=/\b\w{8}\b/g;
lorem.replace(r,replacer);
//
function replacer(match){
     console.log(match);
     return match.toUpperCase();
}
/*
"is simply dummy text of the PRINTING and typesetting INDUSTRY. Lorem Ipsum has been the INDUSTRY's STANDARD dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type SPECIMEN book. It has SURVIVED not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of LETRASET sheets containing Lorem Ipsum PASSAGES, and more RECENTLY with desktop publishing SOFTWARE like Aldus PageMaker including VERSIONS of Lorem Ipsum."
*/
var lorem="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 632-2849 an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 542-5875 essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
//
var r=/(\d{3})-(\d{4})/g;
//
function replacer(match,group1,group2){
     console.log(match);
     console.log(group1);
     console.log(group2);
     return group1+"-XXXX";
}
lorem.replace(r,replacer);
/*
"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 632-XXXX an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 542-XXXX essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
> "632-2849"
> "632"
> "2849"
> "542-5875"
> "542"
> "5875"
*/
//stores the phone number in an array
var phones=[];
function replacer(match,group1,group2){
     phones.push([group1,group2]);     
     return match;
}
lorem.replace(r,replacer);
lorem.split(/W+/);
//
let str="**^&$Regular#$%Expressions$%$$%^**";
let regex=/\w+/gi;
let result="";
var match;
do{
     match=regex.exec(str);
     if (match==null) break;
     result+=match[0]+" ";
} while (true);