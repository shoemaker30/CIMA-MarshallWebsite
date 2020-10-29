
<html>
<head>
    <title>Full Screen Leaflet Map</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="https://d19vzq90twjlae.cloudfront.net/leaflet-0.7/leaflet.css" />
    <link href="https://fonts.googleapis.com/css?family=Basic|Slabo+27px" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <style>
        body {
            padding: 0;
            margin: 0;
        }
        html, body, #map {
            height: 95%;
            width: 100%;
        }
    </style>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>C.I.M.A.- map</title> 
</head>
<body>

    <!--Navigation Bar
style sheet is imported from internet, so check regularly if ever changed
    https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_navbar_collapse -->
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>                        
          </button>
          <img src="marshallLogo.png" class="navbar-brand" href="#">
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
          </ul>
          <ul class="nav navbar-nav navbar-right">
          <li><a href="index.html">Fill out a Form</a></li>
            <li class="active"><a href="map.php">View Nearby Reports</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
   
    <div id="map-error-message" style="display:none;">
    <h2 id="error-header">There was an error obtaining the map. Refresh this page after ensuring that you...</h2>
    <ul >
      <li>are connected to the internet</li>
      <li>have enabled location data on your device</li>
    </ul>
  </div>

    <div id="map"></div>

    <script src="https://d19vzq90twjlae.cloudfront.net/leaflet-0.7/leaflet.js">
    </script>


<?php  
      $latitude = array();
      $longitude = array();
      $tree0 = array();
      $tree1 = array();

      include 'dbConfig.php';

      $sql = "SELECT tree0, tree1, user_latitude, user_longitude FROM reports";
      $result = $conn->query($sql);

      if ($result->num_rows > 0) {
      //search table for this log-in
        while($row = $result->fetch_assoc()) {

            array_push($tree0, $row["tree0"]);
            array_push($tree1, $row["tree1"]);
            array_push($latitude, $row["user_latitude"]);
            array_push($longitude, $row["user_longitude"]);
        }
      }

      $conn->close();
    ?>

    <!--This function generates the map using locations gathered from the database-->
    <script>
      function generateMap(){
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
            //initialize map
            const map = L.map('map');   

          // Get the tile layer from OpenStreetMaps 
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 

          // Specify the maximum zoom of the map 
          maxZoom: 25, 

          // Set the attribution for OpenStreetMaps 
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map); 

          // Set the view of the map 
          // with the latitude, longitude and the zoom value 
          map.setView([38.422927, -82.424273], 15); 

          var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
          var reportMarkers = [];
          
          var latitudeArray = <?php echo json_encode($latitude); ?>;
          var longitudeArray = <?php echo json_encode($longitude); ?>;

          console.log(latitudeArray.length);

          for(var i=0; i<latitudeArray.length; i++){ //both arrays should always be same length
            if(latitudeArray[i]!="" && longitudeArray!=""){
              marker = L.marker([latitudeArray[i],longitudeArray[i]]).addTo(map);
              //reportMarkers.push(marker);
            }
           //for (var i=0; reportMarkers.length; i++){
              //reportMarkers[i].addTo(map);
          //}
          }

          var polygon = L.polygon([
              [38.424564, -82.432329],
              [38.420137, -82.431053],
              [38.421383, -82.423808],
              [38.422778, -82.424228],
              [38.422778, -82.424228],
              [38.423123, -82.422501],
              [38.423720, -82.422716],
              [38.424502, -82.418371],
              [38.426284, -82.418747],
              [38.425292, -82.424980],
              [38.425805, -82.425130],
          ],{color:'green'}).addTo(map);
          });
        } else{
          document.getElementById("error-header").innerHTML = "Your browser does not support HTML5 location";
          document.getElementById("map-error-message").style.display = "inline";
        }
        navigator.permissions.query({name:'geolocation'}).then(function(status){
            if(status.state == "denied"){
                document.getElementById("map-error-message").style.display = "inline";
            }
        });
      }
    </script>

   

    <script>generateMap()</script>



</body>
</html>