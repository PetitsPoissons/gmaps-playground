/*
	author: Owsiak, Erik
	date: Wed Nov 16 22:52:23 2016
   website: http://www.infomatrix.us/
*/

var App = {
   // + + +
   APIKey:"AIzaSyApK9f1cwX-hBkIaft5H3o_E1iie6fC1ok",
   BaseUrl:"https://maps.googleapis.com/maps/api/staticmap?",
   QString:"center={$0}&zoom={$1}&scale=1&size=640x480&maptype={$2}&key={$3}",
   // + + +
   Init:function(){
      $("#btnLoadMap").click(App.LoadMap);
   },
   // + + +
   LoadMap:function(){
      var adr = $("#txtAddress").val();
      var key = $("#txtApiKey").val();
      var zoom = $("#numZoom").val();
      var mtype= $("#txtMapType").val();
      var qstr = App.QString.Format([adr, zoom, mtype, key]);
      qstr = encodeURI(qstr);
      var url = "url(" + App.BaseUrl + qstr + ")";
      $(".cls-map-screen").css("background-image", url);
   }
}