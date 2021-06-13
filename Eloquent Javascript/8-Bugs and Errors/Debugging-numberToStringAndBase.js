function numberToString(n, base = 10) {
     let result = "", sign = "";
     if (n < 0) {
     sign = "-";
     n = -n;
     }
     do {
     result = String(n % base) + result;
     n /= base;
     } while (n > 0);
     return sign + result;
}
console.log(numberToString(13, 10));
//for any base
function numberToString(n,base=10){
     if (n<base) return String(n);
     let next= n%base<10 ?  String(n%base) : String.fromCharCode(55+n%base);
     return numberToString(Math.floor(n/base),base)+next;
}
//
try {
     let test="agua"/2;
}
