

 function Sum (...args) {
   if(args.length === 1){
    return "Arguments length should be atleast 2";
   }
   else if (args.length === 0){
      return "Sum invoked without arguments"
   }

   var sum = [...args].reduce((a,c)=>a+Number(c), 0);
   return Number(sum.toFixed(1));
}




module.exports = Sum;

