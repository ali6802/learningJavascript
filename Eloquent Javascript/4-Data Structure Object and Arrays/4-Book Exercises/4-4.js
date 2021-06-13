function deepEqual(a,b){
     //returns false in case both are equal in value and type
     if (a===b) return true;
     //returns false in case one of the elements are not an object or null
     if (a==null||b==null||typeof a !="object"||typeof b !="object") return false;
     //creates two arrays including the objects keys
     let keysA=Object.keys(a), keysB=Object.keys(b);
     //returns case the numbers of keys are not thesame
     if (keysA.length != keysB.length) return false;
     //verifies whether the keys and the values of the keys match
     for (let key of keysA){
          if (!keysB.includes(key)||!deepEqual(a[key], b[key])) return false;
     }
     //then returns true
     return true;
}
let c= {descricao:"CIMENTO PORTLAND", tipo: "CPII32", endereco: {local: "DEPOSITO MATADOURO", lote: "36"}};
let d= {descricao:"CIMENTO PORTLAND", tipo: "CPII32", endereco: {local: "DEPOSITO MATADOURO", lote: "26"}};
console.log(deepEqual(c,d));

