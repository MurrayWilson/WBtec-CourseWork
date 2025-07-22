var misprintc = 0;
var sparec = 0;
var chippedc = 0;
var fakec = 0;
var blankc = 0;
var powerused = 0 ;
var score = 0;
var storetext = "";
var canPress = 0;
var mispress = 0;
var spapress = 0;
var chipress = 0;
var fakpress = 0;
var blankpress = 0;
var gopress = 0;
var typePos = 0;
var typeString = "";
var inter1 = 0;
var chance = 0;

function startType(x){
	printText("")
	typePos = 0;
	typeString = x;
	textType();
}

function textType(){
	if (typePos < typeString.length) {
    document.getElementById("gamewdw").innerHTML += typeString.charAt(typePos);
    typePos++;
    setTimeout(textType, 40);
  }
}

function random() {
	var num = 0;
	num = Math.floor(Math.random() * 100);
	return num;
}

function win(x,y){
	var winner = 0;
	if (x < y){
		winner = 1;
		return winner;
	} else {
		return winner;
	}
}

function spareCoin(x,y){
	var z = 0;
	var c = 0;
	z = win(x,y);
	if (z == 0){
		c = random();
		z = win(c,y);
		return z;
	} else {
		return z;
	}
}

function chippedCoin(x,y){
	var a = y + 10;
	return win(x,a);
}

function fakeCoin(x,y){
	var a = y + 25;
	return win(x,a);
}

function givePower(){
	var k = 0;
	k = random();
	if (k <= 40){
		chippedc = chippedc + 1;
		document.getElementById("chiNum").innerHTML = chippedc;
		return;
	} else if (k > 40 && k <= 65){
		fakec = fakec + 1;
		document.getElementById("fakNum").innerHTML = fakec;
		return;
	} else if (k > 65 && k <= 85){
		blankc = blankc + 1;
		document.getElementById("blaNum").innerHTML = blankc;
		return;
	} else if (k > 85 && k <= 95){
		sparec = sparec + 1;
		document.getElementById("spaNum").innerHTML = sparec;
		return;
	} else if (k > 95){
		misprintc = misprintc + 1;
		document.getElementById("misNum").innerHTML = misprintc;
		return;
	}
}

function printText(x){
	document.getElementById("gamewdw").innerHTML = x;
	return;
}

function startGame() {
	givePower();
	encounter1();
	return;
}

document.getElementById('Misprint').onclick = function() {
	if (canPress == 1 && misprintc > 0){
		mispress = 1;
		canPress = 0;
		misprintc = misprintc - 1;
		document.getElementById("misNum").innerHTML = misprintc;
	} else { 
	return;
	}
}

document.getElementById('Spare').onclick = function() {
	if (canPress == 1 && sparec > 0){
		spapress = 1;
		canPress = 0;
		sparec = sparec - 1;
		document.getElementById("spaNum").innerHTML = sparec;
	} else { 
	return;
	}
}

document.getElementById('Chipped').onclick = function() {
	if (canPress == 1 && chippedc > 0){
		chipress = 1;
		canPress = 0;
		chippedc = chippedc - 1;
		document.getElementById("chiNum").innerHTML = chippedc;
	} else { 
	return;
	}
}

document.getElementById('Fake').onclick = function() {
	if (canPress == 1 && fakec > 0){
		fakpress = 1;
		canPress = 0;
		fakec = fakec - 1;
		document.getElementById("fakNum").innerHTML = fakec;
	} else { 
	return;
	}
}

document.getElementById('Blank').onclick = function() {
	if (canPress == 1 && blankc > 0){
		blankpress = 1;
		canPress = 0;
		blankc = blankc - 1;
		document.getElementById("blaNum").innerHTML = blankc;
	} else { 
	return;
	}
}

document.getElementById('flipBtn').onclick = function() {
	if (canPress == 1){
		gopress = 1;
		canPress = 0;
	} else { 
	return;
	}
}

function scoreboard(){
	localStorage.setItem("powerused", powerused);
	localStorage.setItem("score", score);
	window.location.href = "./scorepage.html";
}

function encounter1(){
	chance = 80;
	storetext = "Welcome to Heads or Tails, you must land on heads to win, your first task is simple: .............. Flip This Coin";
	canPress = 1;
    startType(storetext)
	inter1 = setInterval(encounter1I,1000)
}

function encounter2(){
	score = score + 1
	chance = 75;
	storetext = "You've made it past the first task, now choose what door to enter: left or right";
	canPress = 1;
    startType(storetext)
	inter1 = setInterval(encounter2I,1000)
}

function encounter3(){
	score = score + 1
	chance = 70;
	storetext = "you choose the door on your left and make it through, now you come to two buttons. what one will you choose:";
	canPress = 1;
    startType(storetext)
	inter1 = setInterval(encounter3I,1000)
}

function encounter4(){
	score = score + 1
	chance = 65;
	storetext = "Pressing the green button the floor begins to sink down and opens into a giant cavern, you come 2 a branch in the cave: one is blindingly bright, the other is pitch black";
	canPress = 1;
    startType(storetext)
	inter1 = setInterval(encounter4I,1000)
}

function encounter5(){
	score = score + 1
	chance = 60;
	storetext = "You make your way through the darknes and almost slip, you feel your way around and find what feels like a bridge, do you try to cross it or find another way around";
	canPress = 1;
    startType(storetext)
	inter1 = setInterval(encounter5I,1000)
}

function encounter6(){
	score = score + 1
	chance = 50;
	storetext = "As you cross the bridge you see a light and follow it to a door and peek inside, you enter through it into a room of treasure, do you take some for yourself or continue foward";
	canPress = 1;
    startType(storetext)
	inter1 = setInterval(encounter6I,1000)
}

function encounter7(){
	score = score + 1
	chance = 50;
	storetext = "You push foward what seems like a throne room with a golden throne sat pressed against the centre of the back wall, do you take a seat";
	canPress = 1;
    startType(storetext)
	inter1 = setInterval(encounter7I,1000)
}

function encounter8(){
	score = score + 1
	chance = 50;
	storetext = "You Choose not sit in the throne, you decide to walk past and through to the room behind it, you turn to take one last look and sudenly find you self right back at the mouth of the cave. you look down into your hands and decide to flip one last coin: do you enter the cave";
	canPress = 1;
    startType(storetext)
	inter1 = setInterval(encounter8I,1000)
}


function encounter1I(){
	if (gopress == 1){
		if(win(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter2();
		} else {
			clearInterval(inter1)
			scoreboard();
		}	
	}
	
	if (mispress == 1){
		    powerused = powerused + 1
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter2();		
	}
	
	if (spapress == 1){
		powerused = powerused + 1
		if (spareCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter2();
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	
	if (chipress == 1){
		powerused = powerused + 1
		if (chippedCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter2();
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	if (fakpress == 1){
		powerused = powerused + 1
		if (fakeCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter2();
			
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	if (blankpress == 1){
		powerused = powerused + 1
		clearInterval(inter1);
		mispress = 0;
		spapress = 0;
		chipress = 0;
		fakpress = 0;
		blankpress = 0;
		gopress = 0;
		encounter2();
	}
}

function encounter2I(){
	if (gopress == 1){
		if(win(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter3();
		} else {
			clearInterval(inter1)
			scoreboard();
		}	
	}
	
	if (mispress == 1){
		    powerused = powerused + 1
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter3();		
	}
	
	if (spapress == 1){
		powerused = powerused + 1
		if (spareCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter3();
			
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	
	if (chipress == 1){
		powerused = powerused + 1
		if (chippedCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter3();
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	if (fakpress == 1){
		powerused = powerused + 1
		if (fakeCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter3();
			
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	if (blankpress == 1){
		powerused = powerused + 1
		clearInterval(inter1);
		mispress = 0;
		spapress = 0;
		chipress = 0;
		fakpress = 0;
		blankpress = 0;
		gopress = 0;
		encounter3();
	}
}

function encounter3I(){
	if (gopress == 1){
		if(win(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter4();
		} else {
			scoreboard();
			clearInterval(inter1)
		}	
	}
	
	if (mispress == 1){
		    powerused = powerused + 1
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter4();		
	}
	
	if (spapress == 1){
		powerused = powerused + 1
		if (spareCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter4();
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	
	if (chipress == 1){
		powerused = powerused + 1
		if (chippedCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter4();
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	if (fakpress == 1){
		powerused = powerused + 1
		if (fakeCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter4();
			
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	if (blankpress == 1){
		powerused = powerused + 1
		clearInterval(inter1);
		mispress = 0;
		spapress = 0;
		chipress = 0;
		fakpress = 0;
		blankpress = 0;
		gopress = 0;
		encounter4();
	}
}

function encounter4I(){
	if (gopress == 1){
		if(win(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter5();
		} else {
			clearInterval(inter1)
			scoreboard();
		}	
	}
	
	if (mispress == 1){
		    powerused = powerused + 1
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter5();		
	}
	
	if (spapress == 1){
		powerused = powerused + 1
		if (spareCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter5();
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	
	if (chipress == 1){
		powerused = powerused + 1
		if (chippedCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter5();
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	if (fakpress == 1){
		powerused = powerused + 1
		if (fakeCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter5();
			
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	if (blankpress == 1){
		powerused = powerused + 1
		clearInterval(inter1);
		mispress = 0;
		spapress = 0;
		chipress = 0;
		fakpress = 0;
		blankpress = 0;
		gopress = 0;
		encounter5();
	}
}

function encounter5I(){
	if (gopress == 1){
		if(win(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter6();
		} else {
			clearInterval(inter1)
			scoreboard();
		}	
	}
	
	if (mispress == 1){
		    powerused = powerused + 1
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter6();		
	}
	
	if (spapress == 1){
		powerused = powerused + 1
		if (spareCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter6();
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	
	if (chipress == 1){
		powerused = powerused + 1
		if (chippedCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter6();
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	if (fakpress == 1){
		powerused = powerused + 1
		if (fakeCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter6();
			
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	if (blankpress == 1){
		powerused = powerused + 1
		clearInterval(inter1);
		mispress = 0;
		spapress = 0;
		chipress = 0;
		fakpress = 0;
		blankpress = 0;
		gopress = 0;
		encounter6();
	}
}

function encounter6I(){
	if (gopress == 1){
		if(win(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter7();
		} else {
			clearInterval(inter1)
			scoreboard();
		}	
	}
	
	if (mispress == 1){
		    powerused = powerused + 1
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter7();		
	}
	
	if (spapress == 1){
		powerused = powerused + 1
		if (spareCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter7();
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	
	if (chipress == 1){
		powerused = powerused + 1
		if (chippedCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter7();
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	if (fakpress == 1){
		powerused = powerused + 1
		if (fakeCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter7();
			
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	if (blankpress == 1){
		canPress = 1
		mispress = 0;
		spapress = 0;
		chipress = 0;
		fakpress = 0;
		blankpress = 0;
		gopress = 0;
	}
}

function encounter7I(){
	if (gopress == 1){
		if(win(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter8();
		} else {
			clearInterval(inter1)
			scoreboard();
		}	
	}
	
	if (mispress == 1){
		    powerused = powerused + 1
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter8();		
	}
	
	if (spapress == 1){
		powerused = powerused + 1
		if (spareCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter8();
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	
	if (chipress == 1){
		powerused = powerused + 1
		if (chippedCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter7();
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	if (fakpress == 1){
		powerused = powerused + 1
		if (fakeCoin(random(),chance) == 1){
			givePower();
			clearInterval(inter1);
			mispress = 0;
			spapress = 0;
			chipress = 0;
			fakpress = 0;
			blankpress = 0;
			gopress = 0;
			encounter7();
			
		} else {
			clearInterval(inter1)
			scoreboard();
		}
	}
	if (blankpress == 1){
		canPress = 1
		mispress = 0;
		spapress = 0;
		chipress = 0;
		fakpress = 0;
		blankpress = 0;
		gopress = 0;
	}
}

function encounter8I(){
	if (gopress == 1){
		if(win(random(),chance) == 1){
			score = score + 1
			scoreboard()
		} else {
			scoreboard();
		}	
	}
	
	if (mispress == 1){
		    powerused = powerused + 1
			score = score + 1		
	}
	
	if (spapress == 1){
		powerused = powerused + 1
		if (spareCoin(random(),chance) == 1){
			score = score + 1
			scoreboard()
		} else {
			scoreboard();
		}
	}
	
	if (chipress == 1){
		powerused = powerused + 1
		if (chippedCoin(random(),chance) == 1){
			score = score + 1
			scoreboard();
		} else {
			scoreboard();
		}
	}
	if (fakpress == 1){
		powerused = powerused + 1
		if (fakeCoin(random(),chance) == 1){
			score = score + 1
			scoreboard()
			
		} else {
			scoreboard();
		}
	}
	if (blankpress == 1){
		canPress = 1
		mispress = 0;
		spapress = 0;
		chipress = 0;
		fakpress = 0;
		blankpress = 0;
		gopress = 0;
		
	}
}