function candyType(N){
    n = candyType.length
    maxCandies = n/2    
    //Get unique values in the array
    uniqueCandies = [... new Set(N)]
    if(uniqueCandies.length <= maxCandies){
        return uniqueCandies.length
    }else{
        return maxCandies
    }
}
candyType([1,1,2,2,3,3])

