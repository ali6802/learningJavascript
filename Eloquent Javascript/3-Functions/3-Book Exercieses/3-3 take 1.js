function countChar (char, content)
{     
     let count=0;
     if (char.length>1){
          return "only one Char";
     }
     else{
          for (let i=0; i<=content.length-1; i++)
          {
               if (content.charAt(i)==char){
                    count+=1;               
               }               
          }
     }
     return count;
}
content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor libero id lacus scelerisque venenatis et vitae neque. Nullam et libero rutrum, laoreet nulla a, aliquet sem. Sed rutrum nunc ante, ut interdum eros fermentum ac. Ut pulvinar nisi id ipsum tempus semper. Nullam facilisis tempor ipsum. Morbi vitae efficitur nunc, a convallis nulla. Quisque nunc felis, imperdiet vel aliquet sed, malesuada nec elit. Donec nibh tellus, congue eget feugiat vitae, convallis vel libero. Nulla nulla dolor, vulputate in suscipit et, finibus ut justo. Donec enim velit, sagittis et velit et, pharetra ultrices quam. Fusce rutrum vehicula neque ut tempus. Ut in justo enim. Sed vitae risus semper, luctus turpis eget, vestibulum augue. Donec dui felis, tristique quis congue id, varius a ex. Maecenas feugiat, ipsum vel gravida maximus, velit augue sagittis diam, suscipit posuere purus arcu a turpis. Morbi eget ipsum egestas, tincidunt nulla at, porttitor diam.";
char="c";
console.log(countChar(char,content));
