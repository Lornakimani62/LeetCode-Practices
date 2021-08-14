function Atoi(str){
    let i = 0
    let output = '' 
    const intMax = 2**31 - 1
    const intMin = -intMax - 1
    while (i<str.length) {
       const char = str[i]
       if (!char == " ") {
           if (char.toLowerCase() === char.toUpperCase()) {
               console.log(char)
               output = output + char
               console.log(output)
           } else if (output) {
            console.log("Entry")
            console.log(output)
               break
           }
           if (!output) return 0
           console.log("Entry One")
           console.log(output)
       }
        i++
    }
    output = parseInt(output)
    if (output !== null && !isNaN(output)) {
        if (output > intMax) return  intMax
        if (output < intMin) return intMin 
        return output
    }
    console.log("Entry Three")
    console.log(output)
    return 0
}
Atoi('words and 987')