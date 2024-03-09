// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temp1 = [17, 21, 23],
  temp2 = [12, 5, -5, 0, 4];
let output = "",
  output1 = "";

for (let i = 0; i < temp1.length; ++i) {
  output += `... ${temp1[i]}C in ${i + 1} days `;
}
for (let i = 0; i < temp2.length; ++i) {
  output1 += `... ${temp2[i]}C in ${i + 1} days `;
}

console.log(output, output1);
