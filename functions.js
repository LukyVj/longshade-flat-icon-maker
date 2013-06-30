$(document).ready(function () {

    var output = $("#output");
    var add = $("#addIcon");
    var inputColor = $("#colorIcon");
    var color = inputColor.val();
          // output.html('<div class="icon fl" id="example"></div>');

    inputColor.keyup(function () {
        var color = $(this).val();
        var icon = $('.icon .ls:after');
        console.log(color);
        $("body").css("background-color", color + '!important');
    });

    function shadeColor(color, porcent) {

        var R = parseInt(color.substring(1, 3), 16)
        var G = parseInt(color.substring(3, 5), 16)
        var B = parseInt(color.substring(5, 7), 16);

        R = parseInt(R * (100 + porcent) / 100);
        G = parseInt(G * (100 + porcent) / 100);
        B = parseInt(B * (100 + porcent) / 100);

        R = (R < 255) ? R : 255;
        G = (G < 255) ? G : 255;
        B = (B < 255) ? B : 255;

        var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
        var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
        var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

        return "#" + RR + GG + BB;
    }


        var ctInput = $('#controlOutput');
        var clPane = $('#closePane');

        ctInput.css('display','none')
        clPane.css('display','none')
   
 

    
    add.click(function () {
    
        var icName = $("#nameIcon").val();
        var color = $("#colorIcon").val();
        var shade = shadeColor("#" + color + "", -20);
        var out = $("#output");
        var code = $("#output").val();
        var controls = $('#controls');
        var ctInput = $('#controlOutput');
        var clPane = $('#closePane');
        var refresh = $('#refresh');
        var del = $("#delete");
        var gCode = $("#getCode");

        gCode.on('click',function(){
	        
        });
        del.on('click', function(){
	      var tar =   $('.modify');
	      tar.remove();        
	      });
        refresh.on('click', function() {
	         location.reload();
         })
        
         clPane.on('click', function(){
         $('#closePane').toggleClass('reverse');
         $(this).toggleClass('ctLeft');
	    controls.toggleClass('closeFull');
	    out.toggleClass('openFull');
	    
    });
    

        ctInput.css('display','block');
        clPane.css('display','block');
            $("#nameIcon").empty().attr('disabled',false);
            $("#colorIcon").empty().attr('disabled',false);

        $('label[for=name] strong ').css('background','#E7533C');
        $('label[for=name] strong span').attr('class','entypo-pencil');
        $('label[for=color] strong').css('background','#E7533C').empty().text('#');
        
        controls.css('width','30%');
        $("#admin strong").css({margin:'2px -9%',width:'40px',padding:'2px 10px'});
        output.append('<div class="icon fl " id="' + icName + '"  ></div>');
        $("#output").append("<style type='text/css' > #" + icName + ":after{background:#" + color + " !important; content:'" + icName + "';text-shadow: 1px 1px 0 rgba(0,0,0,.15),138px 138px 0px " + shade + ", 137px 137px 0px " + shade + ", 136px 136px 0px " + shade + ",135px 135px 0px " + shade + ", 134px 134px 0px " + shade + ", 133px 133px 0px " + shade + ",132px 132px 0px " + shade + ", 131px 131px 0px " + shade + ", 130px 130px 0px " + shade + ", 129px 129px 0px " + shade + ", 128px 127px 0px " + shade + ", 126px 126px 0px " + shade + ",125px 125px 0px " + shade + ", 124px 124px 0px " + shade + ", 123px 123px 0px " + shade + ",122px 122px 0px " + shade + ", 121px 121px 0px " + shade + ", 120px 120px 0px " + shade + ", 119px 118px 0px " + shade + ", 117px 116px 0px " + shade + ", 115px 114px 0px " + shade + ",113px 113px 0px " + shade + ", 112px 112px 0px " + shade + ", 111px 111px 0px " + shade + ", 110px 110px 0px " + shade + ", 109px 109px 0px " + shade + ", 108px 108px 0px " + shade + ", 107px 107px 0px " + shade + ", 106px 106px 0px " + shade + ", 105px 105px 0px " + shade + ", 104px 104px 0px " + shade + ", 103px 103px 0px " + shade + ", 102px 102px 0px " + shade + ", 101px 101px 0px " + shade + ", 100px 100px 0px " + shade + ", 99px 99px 0px " + shade + ", 98px 98px 0px " + shade + ", 97px 97px 0px " + shade + ", 96px 96px 0px " + shade + ", 95px 95px 0px " + shade + ", 94px 94px 0px " + shade + ", 93px 93px 0px " + shade + ", 92px 92px 0px " + shade + ", 91px 91px 0px " + shade + ", 90px 90px 0px " + shade + ", 80px 80px 0px " + shade + ", 79px 79px 0px " + shade + ", 78px 78px 0px " + shade + ", 77px 77px 0px " + shade + ", 76px 76px 0px " + shade + ", 75px 75px 0px " + shade + ", 74px 74px 0px " + shade + ", 73px 73px 0px " + shade + ", 72px 72px 0px " + shade + ", 71px 71px 0px " + shade + ", 70px 70px 0px " + shade + ", 69px 69px 0px " + shade + ", 68px 68px 0px " + shade + ", 67px 67px 0px " + shade + ", 66px 66px 0px " + shade + ", 65px 65px 0px " + shade + ",64px 64px 0px " + shade + ", 63px 63px 0px " + shade + ", 62px 62px 0px " + shade + ", 61px 61px 0px " + shade + ", 60px 60px 0px " + shade + ", 59px 59px 0px " + shade + ", 58px 58px 0px " + shade + ", 57px 57px 0px " + shade + ", 56px 56px 0px " + shade + ", 55px 55px 0px " + shade + ", 54px 54px 0px " + shade + ", 53px 53px 0px " + shade + ", 52px 52px 0px " + shade + ", 51px 51px 0px " + shade + ", 50px 50px 0px " + shade + ", 49px 49px 0px " + shade + ", 48px 48px 0px " + shade + ", 47px 47px 0px " + shade + ", 46px 46px 0px " + shade + ", 45px 45px 0px " + shade + ", 44px 44px 0px " + shade + ", 43px 43px 0px " + shade + ", 42px 42px 0px " + shade + ", 41px 41px 0px " + shade + ", 40px 40px 0px " + shade + ", 39px 39px 0px " + shade + ", 38px 38px 0px " + shade + ", 37px 37px 0px " + shade + ", 36px 36px 0px " + shade + ", 35px 35px 0px " + shade + ", 34px 34px 0px " + shade + ", 33px 33px 0px " + shade + ",32px 32px 0px " + shade + ", 31px 31px 0px " + shade + ", 30px 30px 0px " + shade + ", 29px 29px 0px " + shade + ", 28px 28px 0px " + shade + ", 27px 27px 0px " + shade + ", 26px 26px 0px " + shade + ", 25px 25px 0px " + shade + ", 24px 24px 0px " + shade + ", 23px 23px 0px " + shade + ", 22px 22px 0px " + shade + ", 21px 21px 0px " + shade + ", 20px 20px 0px " + shade + ", 19px 19px 0px " + shade + ", 18px 18px 0px " + shade + ", 17px 17px 0px " + shade + ", 16px 16px 0px " + shade + ", 15px 15px 0px " + shade + ", 14px 14px 0px " + shade + ", 13px 13px 0px " + shade + ", 12px 12px 0px " + shade + ", 11px 11px 0px " + shade + ", 10px 10px 0px " + shade + ", 9px 9px 0px " + shade + ", 8px 8px 0px " + shade + ", 7px 7px 0px " + shade + ", 6px 6px 0px " + shade + ", 5px 5px 0px " + shade + ", 4px 4px 0px " + shade + ", 3px 3px 0px " + shade + ", 2px 2px 0px " + shade + ", 1px 1px 0px " + shade + "} ." + icName + ":first-letter{text-transform:uppercase;}</style>  <div id='code'> </div>");
    });

/**/  
  /**/  
  
  $('input#radius').on('change', function() {
    printRadius.call($(this));
});
 $('input#shadow').on('change', function() {
    printShad.call($(this));
});
  function printRadius() {
    
   var modIcon = $(".modify").attr('id');
   var id = modIcon;
   var resRad = $(this).val();
   var resizeShade = resRad;
    $('#radVal').empty().append(resRad + 'px');
    $("#output").append("<style type='text/css' > #"+ modIcon +".icon{border-radius:"+ resRad +"px} ");
  } 
  
  
  
   function printShad() {
    
   var modIcon = $(".modify").attr('id');
   var id = modIcon;
   
    var resShad = $(this).val();
   var resizeShade = resShad;
    $('#shadVal').empty().append(resShad + 'px');
    $("#output").append("<style type='text/css' >  #"+ modIcon+".icon:before{content:'';display:block;float:left;width:110px;height:110px;position:absolute;margin:25px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);background:-webkit-gradient(linear,60.06% 107.04%,39.94% -7.04%,from(rgba(0,0,0,.1)),to(rgba(0,0,0,0)));background:-webkit-linear-gradient(100deg,rgba(0,0,0,.1),rgba(0,0,0,0));background:-moz-linear-gradient(100deg,rgba(0,0,0,.1),rgba(0,0,0,0));background:-o-linear-gradient(100deg,rgba(0,0,0,.1),rgba(0,0,0,0));background:linear-gradient(100deg,rgba(0,0,0,.1),rgba(0,0,0,0));width:"+ resizeShade +"px !important; height:"+ resizeShade +"px !important}");
  } 
  var firstStep = $("#firstStep");
  var secondStep = $("#secondStep");
  var icon = $(".icon");
  var isReady = $('#ready');
  var thirdStep = $('#thirdStep');
  var finalCode = $('#finalCode');
  var outVal = $("#output").val();
  secondStep.fadeOut(0);
  thirdStep.fadeOut(0).css('opacity','1');
  
 isReady.on('click', function(){
	 firstStep.fadeOut(0);
	 secondStep.fadeOut(0);
	 thirdStep.css('opacity','1 !important').fadeIn();
	   var icon = $(".icon");

	 icon.removeClass('modify');
	 
	 	$('#output').text();
       var txt = $('#output').html();
       $("#finalCode").text("<style>div.icon{float:left;width:80px;height:80px;margin:5px;display:block;font-family:sans-serif;text-align:center;font-size:4em;font-weight:500;line-height:1.2;border-radius:0;overflow:hidden;cursor:pointer}div.icon:hover{opacity:.3}div.icon:after{top:0;color:rgba(255,255,255,0.9);width:100%;height:100%;display:block;overflow:hidden;position:relative;text-align:center;padding-top:0;box-sizing:border-box;-webkit-box-shadow:1px 1px 0 #000;-moz-box-shadow:1px 1px 0 #000;box-shadow:1px 1px 0 #000}.icon:before{content:'';display:block;float:left;width:110px;height:110px;position:absolute;margin:25px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);background:-webkit-gradient(linear,60.06% 107.04%,39.94% -7.04%,from(rgba(0,0,0,.1)),to(rgba(0,0,0,0)));background:-webkit-linear-gradient(100deg,rgba(0,0,0,.1),rgba(0,0,0,0));background:-moz-linear-gradient(100deg,rgba(0,0,0,.1),rgba(0,0,0,0));background:-o-linear-gradient(100deg,rgba(0,0,0,.1),rgba(0,0,0,0));background:linear-gradient(100deg,rgba(0,0,0,.1),rgba(0,0,0,0))}</style>" + txt)


 });
 
 $('#nameIcon').keyup(function () {
  var max = 2;
  var len = $(this).val().length;
  if (len >= max) {
    $(this).attr('disabled',true);
     $('label[for=name] strong').css('background','#c8db4d');
    $('label[for=name] strong span').attr('class','entypo-check');
     $('#colorIcon').focus();
  } else {
    var char = max - len;
    console.log(char + ' characters left');
  }
});
 $('#colorIcon').keyup(function () {
  var max = 6;
  var len = $(this).val().length;
  if (len >= max) {
    $(this).attr('disabled',true);
    $('label[for=color] strong').css('background','#c8db4d').empty().append('<span class="entypo-check"></span>');
  } else {
    var char = max - len;
    console.log(char + ' characters left');
  }
});
  
		var gCode = $("#getCode");
		var out = $("#output");
		var code = $("#output").val();
		var controls = $('#controls');
		var ctInput = $('#controlOutput');
		var clPane = $('#closePane');
  var thirdStep = $('#thirdStep');

      gCode.on('click',function(){
             thirdStep.css({opacity:'1 !important', width:'400px !important'}).fadeIn();

      	        $('#output').text();
       var txt = $('#output').html();
       $("#finalCode").text("<style>div.icon{float:left;width:80px;height:80px;margin:5px;display:block;font-family:sans-serif;text-align:center;font-size:4em;font-weight:500;line-height:1.2;border-radius:0;overflow:hidden;cursor:pointer}div.icon:hover{opacity:.3}div.icon:after{top:0;color:rgba(255,255,255,0.9);width:100%;height:100%;display:block;overflow:hidden;position:relative;text-align:center;padding-top:0;box-sizing:border-box;-webkit-box-shadow:1px 1px 0 #000;-moz-box-shadow:1px 1px 0 #000;box-shadow:1px 1px 0 #000}.icon:before{content:'';display:block;float:left;width:110px;height:110px;position:absolute;margin:25px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);background:-webkit-gradient(linear,60.06% 107.04%,39.94% -7.04%,from(rgba(0,0,0,.1)),to(rgba(0,0,0,0)));background:-webkit-linear-gradient(100deg,rgba(0,0,0,.1),rgba(0,0,0,0));background:-moz-linear-gradient(100deg,rgba(0,0,0,.1),rgba(0,0,0,0));background:-o-linear-gradient(100deg,rgba(0,0,0,.1),rgba(0,0,0,0));background:linear-gradient(100deg,rgba(0,0,0,.1),rgba(0,0,0,0))}</style>" + txt)

        });





window.setInterval(function(){
	$(".icon").click(function(){$(this).addClass("modify");$("*").not($(this)).removeClass("modify")});
	var secondStep = $("#secondStep");
	var icon = $(".icon");
	if($("*").hasClass("modify")){secondStep.fadeIn(10)}


}, 50);

});
