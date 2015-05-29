//
//var map;
//function initialize() {
//  var mapOptions = {
//    zoom: 8,
//    center: new google.maps.LatLng(-34.397, 150.644),
//    mapTypeId: google.maps.MapTypeId.ROADMAP
//  };
//  map = new google.maps.Map(document.getElementById('map_canvas'),
//      mapOptions);
//}
//
//google.maps.event.addDomListener(window, 'load', initialize);
//
//////
//
//var doc=document.getElementById("demo");
//function getLocation()
//{
//    if (navigator.geolocation)
//    {
//    navigator.geolocation.getCurrentPosition(showPosition,showError);
//    }
//}
//
//function showPosition(position)
//{
//    //var latlon=position.coords.latitude+","+position.coords.longitude;
//    var myloc = document.getElementById("searchField").value;
//
//    var img_url="http://maps.googleapis.com/maps/api/staticmap?center="
//    +myloc+"&zoom=14&size=400x300&sensor=false";
//    document.getElementById("map-canvas").innerHTML="<img src='"+img_url+"'>";
//}
//
//function showError(error)
//{
//    switch(error.code) 
//    {
//    case error.PERMISSION_DENIED:
//      doc.innerHTML="Request for Geolocation denied by the user."
//      break;
//    case error.POSITION_UNAVAILABLE:
//      doc.innerHTML="Unavailable location information."
//      break;
//    case error.TIMEOUT:
//      doc.innerHTML="Location request timed out."
//      break;
//    case error.UNKNOWN_ERROR:
//      doc.innerHTML="UNKNOWN_ERROR."
//      break;
//    }
//}

//jsfiddle.net/9qe4g8yt/1/
// vd2dqt7q/1/
//$(document).ready(function(){
//       $("#locate").click(function(){
//var $address = $("#address").val();
//
//
//$.ajax({
//            url:"http://api.remix.bestbuy.com/v1/stores(city="+$address+")?format=json&apiKey=tapy5b7d3zuseztp7s36pn4y",
//    type:"GET",
//            dataType:'jsonp',
////    contentType: 'text/plain',
//           data:$address, 
//            success : function(data){
//        console.log(data);
////        $("#ldisplayed").append($address+"<br>"+stores.name + "<br>"+" Address:" + stores.address  );
//    
//    
//}})
//    
//} );
//});















var map;	
	
	// Initialize and display a google map
	$(function() {  
		
		var latlng = new google.maps.LatLng( 38.8951, -77.0367 );	// Washington, DC
		
		//  how to display the Google map
		var mapOptions = { zoom: 12, center: latlng  };
		
		// Show the map in id 'map-canvas'.
		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		// Update inputted address
		$( "#locate" ).click( function( event ) {
			var geocoder = new google.maps.Geocoder();    
			
			// Get the user's inputted address
			var address = document.getElementById( "address" ).value;
		
			// Make asynchronous call to Google geocoding API
			geocoder.geocode( { 'address': address }, function(results, status) {
				var addr_type = results[0].types[0];	// type of address inputted
				if ( status == google.maps.GeocoderStatus.OK ) 
					ShowLocation( results[0].geometry.location, address, addr_type );
				else     
					alert("We could not find your location: " + status);        
			});
		} );
	} );
	
	// Show the location on the map.
	function ShowLocation( latlng, address, addr_type )
	{
		// Center the map at the specified location
		map.setCenter( latlng );
		
		// Set the zoom level 
		var zoom = 12;
		switch ( addr_type )
		{
		case "administrative_area_level_1"	: zoom = 6; break;		// user specified a state
		case "locality"						: zoom = 10; break;		// user specified a city/town
		case "street_address"				: zoom = 15; break;		// user specified a street address
		}
		map.setZoom( zoom );
		
		// Place a Google Marker 
		// display a title
		var marker = new google.maps.Marker( { 
			position: latlng,     
			map: map,      
			title: address
		});
		
		// Create an InfoWindow for the marker
		var contentString = "<b>" + address + "</b>";	// HTML text to display in the InfoWindow
		var infowindow = new google.maps.InfoWindow( { content: contentString } );
		
		// Set event to display the InfoWindow anchored to the marker when the marker is clicked.
		google.maps.event.addListener( marker, 'click', function() { infowindow.open( map, marker ); });
	}; 







