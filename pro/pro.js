function vals(){
	
	var asd=document.getElementById('Ef').value;
	var bsd=document.getElementById('psf').value;
	if((asd=="")&&(bsd=="")){
		pass();
		document.getElementById('la').innerHTML="Enter your Username";
		document.getElementById('lla').innerHTML="Enter your Password";
	}
	else if(asd==""){
		document.getElementById('Ef').style.borderColor="red";
		document.getElementById('la').innerHTML="Enter your Username";
	}
	else{
		document.getElementById('psf').style.borderColor="red";
		document.getElementById('lla').innerHTML="Enter your Password";
	}
}
function vald(){
	var brc=document.getElementById('fn').value;
	var crc=document.getElementById('ln').value;
	var drc=document.getElementById('mob').value;
	var erc=document.getElementById('np').value;
	var frc=document.getElementById('m').checked;
	var grc=document.getElementById('f').checked;
	var x=1;
	if(brc==""){
		document.getElementById('fn').style.borderColor="red";
		document.getElementById('fnl').innerHTML="Enter Your Firstname";
		x=0;
	}
	if(crc==""){
		document.getElementById('ln').style.borderColor="red";
		document.getElementById('lnl').innerHTML="Enter Your Lastname";
		x=0;
	}
	if(drc==""){
		document.getElementById('mob').style.borderColor="red";
		document.getElementById('mbl').innerHTML="Enter Your Mobile Number or Email";
		x=0;
	}	
	if(erc==""){
		document.getElementById('np').style.borderColor="red";
		document.getElementById('psl').innerHTML="Enter Your Password";
		x=0;
	}
	if((frc==false)&&(grc==false)){
		document.getElementById('gnd').innerHTML="Select Your Gender";
		x=0;
	}
	if(x==1){
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var emt=document.getElementById('mob');
		if(!filter.test(emt.value)){
			alert("Please provide valid Email address");
			emt.focus();
		}
	}
}
function pass(){
document.getElementById('Ef').style.borderColor="red";
document.getElementById('psf').style.borderColor="red";
}




