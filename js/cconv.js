var Hex = document.getElementById("hex");
var red = document.getElementById("rn");
var Blue = document.getElementById("bn");
var Green = document.getElementById("gn");
var Hue = document.getElementById("hn");
var Sat = document.getElementById("sn");
var Val = document.getElementById("vn");

var colour = document.getElementById("colour")
var cl = document.getElementById("clear")
cl.addEventListener("click",clear);

function clear() {
    Hex.value = "";
    red.value = "";
    Green.value = "";
    Blue.value = "";
    Hue.value = "";
    Sat.value = "";
    Val.value = "";
    document.cconvform.colour.style.backgroundColor='#'+"FFFFFF";

}

function rgb2hex(r,g,b)
{if(r=="")r=0;
if(g=="")g=0;
if(b=="")b=0;
r=parseInt(r);
g=parseInt(g);
b=parseInt(b);
if(r<0)r=0;
if(g<0)g=0;
if(b<0)b=0;
if(r>255)r=255;
if(g>255)g=255;
if(b>255)b=255;
let hex= r*65536+ g*256+ b;
hex= hex.toString(16,6);
let len=hex.length;
if(len<6)
for(i=0;i<6-len;i++){
hex='0'+hex;}
hex=hex.toUpperCase();
return hex;}

function rgb2hsv(r,g,b)
{if(r=="")r=0;
if(g=="")g=0;
if(b=="")b=0;
r=parseFloat(r);
g=parseFloat(g);
b=parseFloat(b);
if(r<0)r=0;
if(g<0)g=0;
if(b<0)b=0;
if(r>255)r=255;
if(g>255)g=255;
if(b>255)b=255;
r/=255;g/=255;b/=255;
M=Math.max(r,g,b);
m=Math.min(r,g,b);
C=M-m;
if(C==0)h=0;
else if(M==r)h=((g-b)/C)%6;
else if(M==g)h=(b-r)/C+2;
else h=(r-g)/C+4;h*=60;
if(h<0)h+=360;v=M;
if(C==0)
s=0;
else
s=C/v;
s*=100;
v*=100;
h=h.toFixed(0);
s=s.toFixed(0);
v=v.toFixed(0);
return[h,s,v];}


function hex2rgb(hex)
{if(hex=="")hex="000000";
if(hex.charAt(0)=="#")hex=hex.substring(1,hex.length);
if(hex.length!=6)
return[0,0,0];
r=hex.substring(0,2);
g=hex.substring(2,4);
b=hex.substring(4,6);
r=parseInt(r,16);
g=parseInt(g,16);
b=parseInt(b,16);
return[r,g,b];}


function hsv2rgb(h,s,v)
{if(h=="")h=0;
if(s=="")s=0;
if(v=="")v=0;
h=parseFloat(h);
s=parseFloat(s);
v=parseFloat(v);
if(h<0)h=0;
if(s<0)s=0;
if(v<0)v=0;
if(h>=360)h=359;
if(s>100)s=100;
if(v>100)v=100;
s/=100;v/=100;
C=v*s;
hh=h/60;
X=C*(1-Math.abs(hh%2-1));
r=g=b=0;
if(hh>=0&&hh<1)
{r=C;g=X;}
else if(hh>=1&&hh<2)
{r=X;g=C;}
else if(hh>=2&&hh<3)
{g=C;b=X;}
else if(hh>=3&&hh<4)
{g=X;b=C;}
else if(hh>=4&&hh<5)
{r=X;b=C;}
else
{r=C;b=X;}
m=v-C;
r+=m;g+=m;b+=m;r*=255;g*=255;b*=255;r=Math.floor(r);g=Math.floor(g);b=Math.floor(b);
return[r,g,b];}


function set_color(hex)
{document.cconvform.colour.style.backgroundColor='#'+hex;}