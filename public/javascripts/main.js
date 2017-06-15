$('#inp1').click(function(){
     var textarea =  $('<textarea></textarea>');
     textarea.css({'width':'100%',
     'resize':'none','background-color':'#ededed',
     'border-radius':'3px','box-shadow':'0 3px 6px #ddd',
     'border-color':'#636363',
     'margin':'2%','outline':'none',
     'height':'auto'
     });
    $('#cont1').append(textarea);
});

$('#inp2').click(function(){
     var textarea =  $('<textarea></textarea>');
     textarea.css({'width':'100%',
     'resize':'none','background-color':'#ededed',
     'border-radius':'3px','box-shadow':'0 3px 6px #ddd',
     'border-color':'#636363',
     'margin':'2%','outline':'none',
     'height':'auto'
     });
    $('#cont2').append(textarea);
});

$('#inp3').click(function(){
     var textarea =  $('<textarea></textarea>');
     textarea.css({'width':'100%',
     'resize':'none','background-color':'#ededed',
     'border-radius':'3px','box-shadow':'0 3px 6px #ddd',
     'border-color':'#636363',
     'margin':'2%','outline':'none',
     'height':'auto'
     });
    $('#cont3').append(textarea);
});
$('#inp4').click(function(){
     var p =  $('<p></p>');
     var r = Math.floor(Math.random() * (256 - 10));
     var g = Math.floor(Math.random() * (256 - 10));
     var b = Math.floor(Math.random() * (256 - 10));
     p.css({'width':'100%',
     'border-radius':'3px','box-shadow':'0 3px 6px #ddd',
     'margin':'4%','outline':'none',
     'height':'13px'
     });
     $(p).css("background-color", "rgb("+r+","+g+","+b);
    $('#tag').append(p);
});
