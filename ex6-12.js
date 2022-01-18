function hyoji2()
{var str="一文字ずつ表示します。"; 
var cnt = document.timer1.moji1.value.length;
if(cnt<11){document.timer1.moji1.value=str.substr(0,cnt+1);}
else{document.timer1.moji1.value="";}
setTimeout("hyoji2()",1000);}
