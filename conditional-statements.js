const depthOfOcean = 500; // Change this value to test different depths

if (depthOfOcean < 100) {
  console.log("The ocean is shallow.");
} else if (depthOfOcean >= 100 && depthOfOcean < 500) {
  console.log("The ocean is moderately deep.");
} else if (depthOfOcean >= 500 && depthOfOcean < 1000) {
  console.log("The ocean is deep.");
} else {
  console.log("The ocean is very deep.");
}

/* OR

const depthOfOcean = 500; // Change this value to test different depths

const oceanDepthMessage = 
  depthOfOcean < 100 ? "shallow" :
  depthOfOcean < 500 ? "moderately deep" :
  depthOfOcean < 1000 ? "deep" :
  "very deep";

console.log(`The ocean is ${oceanDepthMessage}.`);
*/
