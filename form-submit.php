<?php

//user information
$user_email = $_POST['user-email'];
$report_hours = $_POST['report-hours'];
$report_mins = $_POST['report-mins'];
$report_day = $_POST['report-day'];
$report_month = $_POST['report-month'];
$report_year = $_POST['report-year'];
$safety_issue = $_POST['safety-issue'];
$tree0 = $_POST['tree0'];
$tree1 = $_POST['tree1-final'];
$tree2 = $_POST['tree2-final'];
$user_rating = $_POST['user-rating'];
$user_explain = $_POST['user-explain'];
$user_latitude = $_POST['user-latitude'];
$user_longitude = $_POST['user-longitude'];
//$report_image = $_POST['report-image'];

//set up connection
include 'dbConfig.php';

//add response to database
$stmt = $conn->prepare("insert into reports(user_email, report_hours, report_mins, 
    report_day, report_month, report_year, safety_issue, tree0, tree1, tree2, user_rating,
    user_explain, user_latitude, user_longitude)
    values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
$stmt->bind_param("ssssssssssssss", $user_email, $report_hours, $report_mins, $report_day,
    $report_month, $report_year, $safety_issue, $tree0, $tree1, $tree2, $user_rating,
    $user_explain, $user_latitude, $user_longitude);    
$stmt->execute();
$stmt->close();

/*
//get largest id (which is most recently added)
$stmt = "SELECT id FROM reports";
$largestID = $conn->query($stmt);
$num = 0;
while($row = $largestID->fetch_assoc()){
    if ($row["id"]>$num){
        $num=$row["id"];
    }
}
*/
/*
//save image with same id as entry
$img_data = addslashes(file_get_contents($report_image));
$stmt = "INSERT INTO report_images($img_data)";
mysqli_query($conn,$stmt);
*/

$conn->close();
header("Location: submit-success.html");
exit();
?>