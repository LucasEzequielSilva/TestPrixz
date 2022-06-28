const longestPalindrome = function(s) {
    let start = 0; // inicio de sol
    let end = 0; //fin de sol
    for (let i=0; i<s.length; i++) { //recorrer cada carácter
        let oddPalindrome = true; //bool para verificar si el palindromo es par o impar en length
        let lenOdd = expandAroundCenter(s, i, i); //length del palindromo impar
        let lenEven = expandAroundCenter(s, i, i+1); //length de palindromo par
        let lenMax = Math.max(lenOdd, lenEven); //get the max
        if (lenMax === lenEven) { 
            oddPalindrome = false;
        }
        if (lenMax > (end - start+1)) { //end - start + 1 = length del palindromo más largo
            if (oddPalindrome) { //caso impar
                // utilizamos Floor ya que javascript es un lenguaje debileme   nte tipado y hay que especificar a través de funciones de orden superior
                start = i - Math.floor(lenMax/2); //ya que "i" es el centro / divide la longitud por dos y resta
                end = i + Math.floor(lenMax/2); //vice versa
            } else {
                start = (i - (lenMax/2)) +1; // el centro tiene - 1, añadimos 1 sin floor ya que el length es par
                end = (i+1 + (lenMax/2)) -1; //el centro está adelantado por uno, así que reste uno
            }
        }
    }
    return s.substring(start, end+1); 
}
const expandAroundCenter = function(s, L, R) {
    //las dos primeras condiciones evitan un ciclo infinito
    //segunda condición verifica que es un palindromo
    while (L >=0 && R < s.length && s[L] == s[R]) { 
        L--;
        R++;
    }
    //el bucle saldrá una vez que verifique que ya no hay un palíndromo. Entonces, L y R están ambos equivocados por una segunda condición verifica que es un palindrómico 
    R = R-1; 
    L = L+1;
    return R - L + 1; //retornamos length
}