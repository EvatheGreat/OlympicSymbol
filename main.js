// *Trumpets sound* *Drumroll*
// "In honor of the Great Pancake, please applaud for this wonderful code that he has wrote." shouts the announcer from the top off the castle with a megaphone.
// *Audience cheers*
// "Thank you!" yells the announcer again.
// "The king will be so pleased with all of his citizens' behavior!" he yells.
canvas=document.getElementById("gimmepancake");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(150, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=5;
ctx.arc(200, 265, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(295, 265, 40, 0, 2 * Math.PI);
ctx.stroke();


