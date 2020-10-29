

/**
 * This function displays the tree1 question
 * The labels and number of options depend on the value of tree0
 */
function showTree1(tree0){

    
    //hide lower questions
    document.getElementById("tree1-question").style.display = "none";
    document.getElementById("tree2-question").style.display = "none";
    document.getElementById("star-response").style.display = "none";

    //set all lower options to unselected and to display
    var tree1Options = document.getElementsByName("tree1");
    var tree2Options = document.getElementsByName("tree2");
    var ratingOptions = document.getElementsByName("user-rating");
    var i;
    for (i=0; i < tree1Options.length; i++){
        tree1Options[i].checked = false;
        tree1Options[i].style.display = "inline";
    }
    for (i=0; i < tree2Options.length; i++){
        tree2Options[i].checked = false;
        tree2Options[i].style.display = "inline";
        
    }
    for (i=0; i < ratingOptions.length; i++){
        ratingOptions[i].checked = false;
    }

    //clear all lower labels and set to display
    var tree1Labels = document.getElementsByName("tree1-label");
    
    var tree2Labels = document.getElementsByName("tree2-label");
    for (i=0; i < tree1Labels.length; i++){
        tree1Labels[i].innerHTML = "";
        tree1Labels[i].style.display = "inline";
    }
    for (i=0; i < tree2Labels.length; i++){
        tree2Labels[i].innerHTML = "";
        tree2Labels[i].style.display = "inline";
    }

    //Sign/Signal
    if(tree0.value == 0) {
        //set labels for options
        tree1Labels[0].innerHTML = "What is this a matter of?";
        tree1Labels[1].innerHTML = "Signal Timing";
        tree1Labels[2].innerHTML = "Broken Signal";
        tree1Labels[3].innerHTML = "Visibility";
        tree1Labels[4].innerHTML = "Other";
        tree1Labels[5].style.display = "none";
        tree1Labels[6].style.display = "none";

        //set amount of radio buttons to display
        tree1Options[4].style.display = "none";
        tree1Options[5].style.display = "none";
        tree1Options[6].style.display = "none";

        //display tree1 question
        document.getElementById("tree1-question").style.display = "inline";
    }

    //Sidewalk
    else if(tree0.value == 1) {
        //set labels for options
        tree1Labels[0].innerHTML = "What is the issue?";
        tree1Labels[1].innerHTML = "Cracking";
        tree1Labels[2].innerHTML = "Unevenness";
        tree1Labels[3].innerHTML = "Pitting";
        tree1Labels[4].innerHTML = "Excessive Water/Ice Accumulation";
        tree1Labels[5].innerHTML = "Other";
        tree1Labels[6].style.display = "none";

        //set amount of radio buttons to display
        tree1Options[5].style.display = "none";
        tree1Options[6].style.display = "none";

        //display tree1 question
        document.getElementById("tree1-question").style.display = "inline";
    }

    //Parking Lot
    else if(tree0.value == 2) {
        tree1Labels[0].innerHTML = "What is this a matter of?";
        tree1Labels[1].innerHTML = "Cracking";
        tree1Labels[2].innerHTML = "Line Visibility";
        tree1Labels[3].innerHTML = "Potholes";
        tree1Labels[4].innerHTML = "Excessive Water/Ice Accumulation";
        tree1Labels[5].innerHTML = "Other";
        tree1Labels[6].style.display = "none";

        //set amount of radio buttons to display
        tree1Options[5].style.display = "none";
        tree1Options[6].style.display = "none";

        //display tree1 question
        document.getElementById("tree1-question").style.display = "inline";
    }

    //Building
    else if(tree0.value == 3) {
        //set labels for options
        tree1Labels[0].innerHTML = "What is the issue?";
        tree1Labels[1].innerHTML = "Structural Cracking";
        tree1Labels[2].innerHTML = "Signage";
        tree1Labels[3].innerHTML = "Inadequate Learning Space";
        tree1Labels[4].innerHTML = "Accessibility/ADA compliance";
        tree1Labels[5].innerHTML = "Other";
        tree1Labels[6].style.display = "none";

        //set amount of radio buttons to display
        tree1Options[5].style.display = "none";
        tree1Options[6].style.display = "none";

        //display tree1 question
        document.getElementById("tree1-question").style.display = "inline";
    }
    //Roadway
    else if(tree0.value == 6) {
        //set labels for options
        tree1Labels[0].innerHTML = "What is this a matter of?";
        tree1Labels[1].innerHTML = "Cracking";
        tree1Labels[2].innerHTML = "Line Visibility";
        tree1Labels[3].innerHTML = "Potholes";
        tree1Labels[4].innerHTML = "Excessive Water/Ice Accumulation";
        tree1Labels[5].innerHTML = "Visibility";
        tree1Labels[6].innerHTML = "Other";

        //set amount of radio buttons to display
        tree1Options[6].style.display = "none";
        
        //display tree1 question
        document.getElementById("tree1-question").style.display = "inline";
    }

    
    
    //Other options have no value for tree1, so show nothing
    else {
        document.getElementById("tree1-question").style.display = "none";
    }

}


/**
 * This function displays the tree2 question
 * The labels and number of options depend on the value of tree0 and tree1
 */
function showTree2(tree1){

    //hide lower questions
    document.getElementById("tree2-question").style.display = "none";
    document.getElementById("star-response").style.display = "none";

    //set all lower options to unselected and to display and to radio buttons by default
    var tree2Options = document.getElementsByName("tree2");
    var ratingOptions = document.getElementsByName("user-rating");
    var i;
    for (i=0; i < tree2Options.length; i++){
        tree2Options[i].checked = false;
        tree2Options[i].style.display = "inline";
        tree2Options[i].type = "radio";
    }
    
    for (i=0; i < ratingOptions.length; i++){
        ratingOptions[i].checked = false;
    }

    //clear all lower labels and set to display
    var tree2Labels = document.getElementsByName("tree2-label");
    for (i=0; i < tree2Labels.length; i++){
        tree2Labels[i].innerHTML = "";
        tree2Labels[i].style.display = "inline";
    }

    //get tree0 selected option
    var tree0Options = document.getElementsByName("tree0");
    var tree0Value;
    for (i=0; i< tree0Options.length; i++){
        if (tree0Options[i].checked == true){
            tree0Value = tree0Options[i].value;
        }
    }

    //Sign/Signal
    if (tree0Value == 0){

        //Signal Timing
        if (tree1.value == 0){

            //set labels for options
            tree2Labels[0].innerHTML = "Select the issue.";
            tree2Labels[1].innerHTML = "Traffic signal disrupts regular flow";
            tree2Labels[2].innerHTML = "Pedestrian crossing signal is not adequately timed";
            tree2Labels[3].innerHTML = "Other";
            tree2Labels[4].style.display = "none";
            tree2Labels[5].style.display = "none";
            tree2Labels[6].style.display = "none";

            //set amount of radio buttons to display
            tree2Options[3].style.display = "none";
            tree2Options[4].style.display = "none";
            tree2Options[5].style.display = "none";
            tree2Options[6].style.display = "none";
            
            //display tree2 question and rating
            document.getElementById("tree2-question").style.display = "inline";
            document.getElementById("star-response").style.display = "inline";
        }

        //Broken Signal
        if (tree1.value == 1){

            //set labels for options
            tree2Labels[0].innerHTML = "Select the issue.";
            tree2Labels[1].innerHTML = "Pedestrian crossing button does not function properly";
            tree2Labels[2].innerHTML = "Traffic signal does not function properly";
            tree2Labels[3].innerHTML = "Other";
            tree2Labels[4].style.display = "none";
            tree2Labels[5].style.display = "none";
            tree2Labels[6].style.display = "none";

            //set amount of radio buttons to display
            tree2Options[3].style.display = "none";
            tree2Options[4].style.display = "none";
            tree2Options[5].style.display = "none";
            tree2Options[6].style.display = "none";
            
            //display tree2 question and rating
            document.getElementById("tree2-question").style.display = "inline";
            document.getElementById("star-response").style.display = "inline";
        }

        //Visibility
        if (tree1.value == 2){

            //set labels for options
            tree2Labels[0].innerHTML = "Select the issue.";
            tree2Labels[1].innerHTML = "Sign/signal view is obstructed";
            tree2Labels[2].innerHTML = "Sign/signal is missing";
            tree2Labels[3].innerHTML = "Sign is faded/damaged making it hard to read";
            tree2Labels[4].innerHTML = "Sign exhibits confusing/misleading wording";
            tree2Labels[5].innerHTML = "Signal is to dim, or its light(s) are burnt out";
            tree2Labels[6].innerHTML = "Other";

            //convert radio buttons to check boxes
            for (i=0; i < tree2Options.length; i++){
                tree2Options[i].type = "checkbox";
            }

            //set amount of check boxes to display
            tree2Options[6].style.display = "none";
            
            //display tree2 question and rating
            document.getElementById("tree2-question").style.display = "inline";
            document.getElementById("star-response").style.display = "inline";
        }

    }
    //Parking Lot
    if(tree0Value == 2){

        //Line Visibility
        if (tree1.value == 1){

            //display rating
            document.getElementById("star-response").style.display = "inline";
        }
    }
    //Building
    if(tree0Value == 3){

        //Signage
        if (tree1.value == 1){

            //set labels for options
            tree2Labels[0].innerHTML = "Select the issue.";
            tree2Labels[1].innerHTML = "Sign view is obstructed";
            tree2Labels[2].innerHTML = "Sign is missing";
            tree2Labels[3].innerHTML = "Sign is faded/damaged making it hard to read";
            tree2Labels[4].innerHTML = "Sign exhibits confusing/misleading wording";
            tree2Labels[5].innerHTML = "Other";
            tree2Labels[6].style.display = "none";

            //convert radio buttons to check boxes
            for (i=0; i < tree2Options.length; i++){
                tree2Options[i].type = "checkbox";
            }

            //set amount of check boxes to display
            tree2Options[5].style.display = "none";
            tree2Options[6].style.display = "none";

            //display tree2 question and rating
            document.getElementById("tree2-question").style.display = "inline";
            document.getElementById("star-response").style.display = "inline";
        }

        //Inadequate Learning Space
        if (tree1.value == 2){

            //set labels for options
            tree2Labels[0].innerHTML = "Select the issue.";
            tree2Labels[1].innerHTML = "Classroom contains blind spots";
            tree2Labels[2].innerHTML = "Classroom contains locations where lectures cannot be heard";
            tree2Labels[3].innerHTML = "Desk/table space is inadequate for course";
            tree2Labels[4].innerHTML = "Amenities are inadequate for course";
            tree2Labels[5].innerHTML = "Other";
            tree2Labels[6].style.display = "none";

            //convert radio buttons to check boxes
            for (i=0; i < tree2Options.length; i++){
                tree2Options[i].type = "checkbox";
            }

            //set amount of check boxes to display
            tree2Options[5].style.display = "none";
            tree2Options[6].style.display = "none";

            //display tree2 question
            document.getElementById("tree2-question").style.display = "inline";

        }

        //Accesiblity/ADA Compliance
        if (tree1.value == 3){

            //set labels for options
            tree2Labels[0].innerHTML = "Select the issue.";
            tree2Labels[1].innerHTML = "Adequate ramps/railing are not provided";
            tree2Labels[2].innerHTML = "ADA compliant entrances are not properly marked";
            tree2Labels[3].innerHTML = "Elevators do not function";
            tree2Labels[4].innerHTML = "Doorway/passageway is too narrow";
            tree2Labels[5].innerHTML = "Other";
            tree2Labels[6].style.display = "none";

            //convert radio buttons to check boxes
            for (i=0; i < tree2Options.length; i++){
                tree2Options[i].type = "checkbox";
            }

            //set amount of check boxes to display
            tree2Options[5].style.display = "none";
            tree2Options[6].style.display = "none";

            //display tree2 question
            document.getElementById("tree2-question").style.display = "inline";
        }
    }

    //Roadway
    if(tree0Value == 6){

        //Line Visibility
        if (tree1.value == 1){

            //display rating
            document.getElementById("star-response").style.display = "inline";
        }
        //Visibility
        if (tree1.value == 4){

            //set labels for options
            tree2Labels[0].innerHTML = "Select the issue.";
            tree2Labels[1].innerHTML = "Inadequate warning for hidden driveways/entrances";
            tree2Labels[2].innerHTML = "Inadequate line of sight for merging traffic";
            tree2Labels[3].innerHTML = "Other";
            tree2Labels[4].style.display = "none";
            tree2Labels[5].style.display = "none";
            tree2Labels[6].style.display = "none";

            //set amount of radio buttons to display
            tree2Options[3].style.display = "none";
            tree2Options[4].style.display = "none";
            tree2Options[5].style.display = "none";
            tree2Options[6].style.display = "none";

            //display tree2 question and rating
            document.getElementById("tree2-question").style.display = "inline";
            document.getElementById("star-response").style.display = "inline";
        }
    }
}

/**
 * This function calls the appropriate methods to ensure the form is ready to be submitted
 */
function finalizeForm(){
    timeStamp();
    finalizeTree1Answer();
    finalizeTree2Answer();
    setDefaultRating();
}

/**
 * This function gets a timestamp for the report
 */
function timeStamp(){
    var date = new Date();
    document.getElementById("report-hours").value = date.getHours();
    document.getElementById("report-mins").value = date.getMinutes();
    document.getElementById("report-day").value = date.getDate();
    document.getElementById("report-month").value = date.getMonth() + 1;
    document.getElementById("report-year").value = date.getFullYear();
}

/**
 * This function gets the location of the user and saves it to user-latitude and user-longitude
 * It also displays a leaflet utilizing open street maps
 */
function getPosition() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            document.getElementById("user-latitude").value = position.coords.latitude;
            document.getElementById("user-longitude").value = position.coords.longitude;
            document.getElementById("map-button").style.display = "none";
            document.getElementById("no-location").style.display = "none";

            //initialize map
            const map = L.map('map'); 

            // Get the tile layer from OpenStreetMaps 
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
            
            // Specify the maximum zoom of the map 
            maxZoom: 22, 
            
            // Set the attribution for OpenStreetMaps 
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map); 
            
            // Set the view of the map 
            // with the latitude, longitude and the zoom value 
            map.setView([position.coords.latitude, position.coords.longitude], 19); 

            var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
            marker.bindPopup("Location found!<br>Latitude: "+position.coords.latitude+"<br>Longitude: "+position.coords.longitude).openPopup();


        });
    } else {
        document.getElementById("map-button").style.display = "inline";
        document.getElementById("no-location").innerHTML = "<em>**Your browser does not support HTML5 location. Please try Firefox or Chrome.</em>";
        document.getElementById("no-location").style.display = "block";
    }
    navigator.permissions.query({name:'geolocation'}).then(function(status){
        if(status.state == "denied"){
            document.getElementById("map-button").style.display = "inline";
            document.getElementById("no-location").innerHTML = "<em>**Please allow location data</em>";
            document.getElementById("no-location").style.display = "block";
        }
    });
}

/**
 * This function takes the selected value for tree1 and saves it to tree1-final
 * 
 * if tree1 has not been answered, save empty string to tree1-final
 */
function finalizeTree1Answer(){
    var tree1Answers = document.getElementsByName("tree1");
    var i;
    var finalAnswer = "";
    for (i=0; i < tree1Answers.length; i++){
        if(tree1Answers[i].checked){
            finalAnswer = tree1Answers[i].value;
        }
    }
    document.getElementById("tree1-final").value = finalAnswer;
}

/**
 * This function takes all selected values for tree2 and concatenates them into 1 string
 * saves it to tree2-final
 * 
 * if tree2 has not been answered, save empty string to tree2-final
 */
function finalizeTree2Answer(){
    var tree2Answers = document.getElementsByName("tree2");
    var i;
    var finalAnswer = "";
    for (i=0; i < tree2Answers.length; i++){
        if(tree2Answers[i].checked){
            finalAnswer += tree2Answers[i].value;
        }
    }
    document.getElementById("tree2-final").value = finalAnswer;
    console.log("tree2-final");
}

/**
 * This function sets rating to an empty string if the user submits the form without choosing a rating
 */
function setDefaultRating(){
    var ratingOptions = document.getElementsByName("user-rating");
    var i;
    var noneChecked = true;
    for(i=0; i < ratingOptions.length; i++){
        if(ratingOptions[i].checked){
            noneChecked = false;
        }
    }
    if(noneChecked){
        document.getElementById("star-def").checked = true;
    }
}

