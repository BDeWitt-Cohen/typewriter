const sentence = "hello there from lighthouse labs \n";

const typewriter = function(sentence) {
  let delay = 70;
  let newSent = sentence + ("\n ");
  for (const char of newSent) {
    delay += 70;
    setTimeout(() => {
      process.stdout.write(char);

    }, delay); //

  }
};

typewriter(sentence);

// var a = [
//   1,2,3,4,5,6,7,8,9,10
//   ];

// function log(i){
//   console.log(a[i]);
//   if (i<a.length){
//      setTimeout(function(){
//          i++;
//          log(i);
//      },1000);
//   }
// }

// log(0);