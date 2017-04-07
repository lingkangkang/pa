/**
 * Created by Administrator on 2017/4/6.
 */
$(function() {
    var i=0;
  var time1= setInterval(function(){
       var color1 = Math.floor(Math.random() * 257);
       var color2 = Math.floor(Math.random() * 257);
       var color3 = Math.floor(Math.random() * 257);
       var endcolor="rgb("+color1+","+color2+","+color3+")";
       $("body").css("background-color",endcolor)

       var textArray=["你","静","静","的","等","待","几","秒","会","有","惊","喜","发","生"]
       $("h1").html("");
       for(var j=0;j<=i;j++){
           $("h1").append(textArray[j])
       }
       i++;
      if(i>=14){
//           $("body").css("background-color","transparent")
          clearInterval(time1)
          $("video").attr("src","1.mp3")
           $("video").[0].play()
          setTimeout(function(){
          $("h1").toggle(1)
          $("#window").toggle(1)
},0)
          
      }
   },500)

})
