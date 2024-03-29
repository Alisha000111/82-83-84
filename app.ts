// 82...............
function stringLength(str: string): number {
    return str.length; 
}
console.log(stringLength("Alisha")); 
// 83................
function convertCase(str: string) {
    let upperStr = str.toUpperCase(); 
    let lowerStr = str.toLowerCase(); 

    console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
}
convertCase("Hello Pakistan"); 

function replaceJavaScriptWithTypeScript(sentence: string): string {
    return sentence.replace(/JavaScript/g, "TypeScript");
}

console.log(replaceJavaScriptWithTypeScript("I like JavaScript and JavaScript is fantastic!"));



