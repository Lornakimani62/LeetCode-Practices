function fibonacci(N){
   if(N <= 1){
       return N
   }else{
       console.log(fibonacci(N-1) + fibonacci(N-2))
       return fibonacci(N-1) + fibonacci(N-2)
   }
}

fibonacci(3)