function addRatingCallback(obj) {
	var addRatings = obj;
	var str = "";
	var username = "";
	username = addRatings[0].ratings.url
    ratingWidth = addRatings[0].star_image_value * 30 ;
	str +=('<DIV class="rateblock" id="unit_long50" ><UL class="addRating" >');
	str +=('<LI class="current-rating" style="WIDTH: '+ ratingWidth+'px">Currently '+addRatings[0].star_image_value+'/10</LI>');
    str +=('<LI><A class="r1-unit" onclick="AddRating(\'1\',\''+addRatings[0].id+'\',\''+addRatings[0].ratings.score+'\',\''+addRatings[0].ratings.ratedby+'\');return false;" href="void();">1</A></LI>');
	str +=('<LI><A class="r2-unit" onclick="AddRating(\'2\',\''+addRatings[0].id+'\',\''+addRatings[0].ratings.score+'\',\''+addRatings[0].ratings.ratedby+'\');return false;" href="void();">2</A></LI>');
	str +=('<LI><A class="r3-unit" onclick="AddRating(\'3\',\''+addRatings[0].id+'\',\''+addRatings[0].ratings.score+'\',\''+addRatings[0].ratings.ratedby+'\');return false;" href="void();">3</A></LI>');
	str +=('<LI><A class="r4-unit" onclick="AddRating(\'4\',\''+addRatings[0].id+'\',\''+addRatings[0].ratings.score+'\',\''+addRatings[0].ratings.ratedby+'\');return false;" href="void();">4</A></LI>');
	str +=('<LI><A class="r5-unit" onclick="AddRating(\'5\',\''+addRatings[0].id+'\',\''+addRatings[0].ratings.score+'\',\''+addRatings[0].ratings.ratedby+'\');return false;" href="void();">5</A></LI>');
	str +=('</UL><FONT face="arial" size="1">Rating: <STRONG>'+addRatings[0].star_image_value+'</STRONG> / '+addRatings[0].ratings.ratedby+' votes </FONT></DIV>');
	
	document.getElementById('addrating_star_info').innerHTML += str;
}

function AddRating(rating,id,score,ratedby)
{
    try
    { 
     var Sc = parseInt(score) + parseInt(rating);
        var RB = parseInt(ratedby)+1;
        var oR =Sc/RB ;
        if ((oR <1)&&(oR>0))
           	oR = ".5";
		else if (oR ==1.0)
		oR = "1";
		else if ((oR >1)&&(oR<2)) oR = "1.5";
		else if (oR ==2.0)oR = "2";
		else if ((oR >2)&&(oR<3)) oR = "2.5";
		else if (oR ==3.0) oR = "3";
		else if ((oR >3)&&(oR<4)) oR = "3.5";
		else if (oR ==4.0) oR = "4";
		else if ((oR >4)&&(oR<5)) oR = "4.5";
		else if (oR ==5.0) oR = "5";
		else if (oR ==0.0) oR = "0";
        var rW = oR * 30;         
        var sH = "";
        
        sH +=('<DIV class="rateblock" title="Current Rating">');
        sH +=('<UL class="addRating" STYLE="padding:0 0 0 0;border:0;margin:0 0 0 0;">');
	    sH +=('<LI class="current-rating" style="WIDTH: '+ rW+'px;padding:0 0 0 0;"></LI>');
	    sH +=('</UL><FONT face="arial" size="1">'+oR+' / '+RB+' votes </font>');
	    sH +=('<A target="_blank" href="http://addrating.com" title="Get your FREE Rating Widget at AddRating.com">');
	    sH +=('<img width="14px" height="14px" alt="Get FREE Rating Widget at AddRating.com" border="0" src="images/ar-done.png"></a></DIV>');
	    document.getElementById('addrating_star_info').innerHTML = sH;
	    var popupWin = window.open("RateItem.aspx?id="+id+"&rating="+rating, 'AddRating', 'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbar=no,resizable=false,copyhistory=no,width=500px, height=400px ,left=' + ((window.screen.width - 500) / 2) + ',top=' + ((window.screen.height - 500) / 2));
        popupWin.focus();
     }
    catch (err)
    {
        alert('Error occured: ' + err);
    }
}

