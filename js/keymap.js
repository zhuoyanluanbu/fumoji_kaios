// “1”确定  “4”、“5”菜单   “3”上一页 “6”上一页 
$(document).keydown(function (event) {
    console.log('down keyCode:'+event.keyCode)
    switch (event.keyCode) {
        case 8:
            keyDown("B");
            event.preventDefault();//清除默认行为（滚动屏幕等）
            break;
        //left
        case 37:
            keyDown("L");
            event.preventDefault();
            break;
        //up
        case 38:
            keyDown("U");
            event.preventDefault();
            break;
        //right
        case 39:
            keyDown("R");
            event.preventDefault();
            break;
        //down
        case 40:
            keyDown("D");
            event.preventDefault();
            break;
        //Space(GameShell's Select)->B //5 
        case 53:
            keyDown("B");
            break;
        //ENTER(GameShell's Start)->A
        case 13:
            keyDown("A");
            break;
        //K(GameShell's A)->A //1
        case 49:
            keyDown("A");
            break;
        //J(GameShell's B)->B //4
        case 52:
            keyDown("B");
            break;

        //I(GameShell's X)->X //3
        case 51:
            keyDown("X");
            break;
        //U(GameShell's Y)->Y //6
        case 54:
            keyDown("Y");
            break;
        default:
            keyDown(event.keyCode);
            break;
    }
});

$(document).keyup(function (event) {
    console.log('up keyCode:'+event.keyCode)
    switch (event.keyCode) {
        //ESC ASCII 27
        case 8:
            //nw.App.closeAllWindows();
            keyUp("B");
            event.preventDefault();//清除默认行为（滚动屏幕等）
            break;
        //left
        case 37:
            keyUp("L");
            event.preventDefault();
            break;
        //up
        case 38:
            keyUp("U");
            event.preventDefault();
            break;
        //right
        case 39:
            keyUp("R");
            event.preventDefault();
            break;
        //down
        case 40:
            keyUp("D");
            event.preventDefault();
            break;
        //Space(GameShell's Select)->B
        case 53:
            keyUp("B");
            break;
        //ENTER(GameShell's Start)->A
        case 13:
            keyUp("A");
            break;
        //K(GameShell's A)->A
        case 49:
            keyUp("A");
            break;
        //J(GameShell's B)->B
        case 52:
            keyUp("B");
            break;
        //I(GameShell's X)->X
        case 51:
            keyUp("X");
            break;
        //U(GameShell's Y)->Y
        case 54:
            keyUp("Y");
            break;
        case 163: //#
            alert("伏魔记 kaios版 by zixing 移植\n按键说明：\n非全屏时，上下左右为上下左右键，OK键为Start，5键为Select，1为A，4为B，3为X，6为Y。\n * 键全屏。\n全屏时上下左右对应右左上下。OK为Start，5为Select，3为A，2为B，9为X，8为Y。");
            break;
        case 170: //*
            switchFullScreen();
            break
        default:
            keyUp(event.keyCode);
            break;
    }
});