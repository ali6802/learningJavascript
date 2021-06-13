/*
function talksAbout(node, string) {
     if (node.nodeType == Node.ELEMENT_NODE) {
     for (let i = 0; i < node.childNodes.length; i++) {
     if (talksAbout(node.childNodes[i], string)) {
     return true;
     }
     }
     return false;
     } else if (node.nodeType == Node.TEXT_NODE) {
     return node.nodeValue.indexOf(string) > -1;
     }
     }
     */
//
function talksAbout(node,string){
     if (node.nodeType==Node.ELEMENT_NODE){
          for (let i=0; i<node.childNotes.length; i++){
               if (talksAbout(node.childNotes[i],string)) return true;
          }
          return false;        
     }
     else if(node.nodeType==Node.TEXT_NODE){
          return node.nodeValue.indexOf(string)>-1;
     }
}
console.log(document.body.getElementsByTagName("a")[0]);
console.log(document.getElementById("gertrude").src);
