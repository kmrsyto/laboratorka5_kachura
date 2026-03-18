var image = new Image(); // CosДAHNE o6AEKTA NsO6PAMEHNR 
image.onload = function () { // CoXPAHEHNE CCZUKN HA $YHKYND
setInterval(move, 100); // CosДAHNE NHTEPBaua B 100 MCEK ДUR SAMYCKa move
};
// YKaSAHNE aДpeca NSO6PAMEHNR
image.src = 'images.jpg'; 
var x = 10; // HoopДNHATa x NSO6PAMEHNR
function move() { // 8YHKYNR, BZSZBAEMAR MO TANMEPy
if(x < 200) x += 5; else x = 10; // NSMEHEHNE KoopДNHATZ x 
ctx.clearRect(0, 0, canvas.width, canvas.height); // O¬NCTNTA xoUCT 
ctx.drawImage(image, x, 10, 80, 80); // NPOPNCOBKa NSO6PAMEHNR
}
