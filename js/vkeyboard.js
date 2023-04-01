    var screenWidth = $(document).width();
    var screenHeight = $(document).height();

    var lcdHeight = $("#lcd").height();
    var lcdOffset = $("#lcd").offset();
    console.log('lcdHeight -> '+lcdHeight);
    console.log('lcdOffset -> ');
    console.log(lcdOffset);
    $(".mask").css({
        "height":lcdHeight+"px",
        "line-height":lcdHeight+"px",
        "margin-top":lcdOffset.top+"px"
    });

    setTimeout(function(){
        $(".mask").fadeOut(500);
    },1900);

    $(".up").click(function(){
      console.log('tap up');
      keyDown("U");
      keyUp("U");
    });

    $(".right").click(function(){
      console.log('tap right');
      keyDown("R");
      keyUp("R");
    });

    $(".down").click(function(){
      console.log('tap down');
      keyDown("D");
      keyUp("D");
    });

    $(".left").click(function(){
      keyDown("L");
      keyUp("L");
      console.log('tap left');
    });

    $(".top").click(function(){
      console.log('tap top');
      keyDown("Y");
      keyUp("Y");
    });

    $(".bottom").click(function(){
      console.log('tap bottom');
      keyDown("X");
      keyUp("X");
    });

    $(".jump").click(function(){
      console.log('tap jump');
      keyDown("B");
      keyUp("B");
    });

    $(".confirm").click(function(){
      console.log('tap confirm');
      keyDown("A");
      keyUp("A");
    });