function digitalclock(){

	var dateTime= new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();

    var Meridiem = document.getElementById("Meridiem");
   
    

    if (hrs >= 12){
      Meridiem.innerHTML ="PM";
  }else {
      Meridiem.innerHTML ="AM"; 
  }

  if(hrs > 12){
    hrs = hrs - 12;
  }
// to display time in 00:00:01 am format

  if( hrs <= 9){
        hrs = "0" + hrs;
 } 

 if(min <= 9){
      min = "0" + min;
 }

 if (sec <=9) {
  sec = "0"+ sec;
 }



     document.getElementById("hour").innerHTML = hrs;
     document.getElementById("minute").innerHTML = min;
     document.getElementById("second").innerHTML = sec;
                     
 };

 setInterval(digitalclock, 10);
			

    
	   

    







