<?php

include 'dbConfig.php';

//make txt file to download
$filename = date("Y-m-d")." cimaReports.csv";
header("Content-type: text/plain");
header("Content-Disposition: attachment; filename=$filename");
$content = "id,email,hour,minute,day,month,year,safety_issue,tree0,tree1,tree2,star_rating,details,latitude,longitude\n";

$sql = "SELECT id, user_email, report_hours, report_mins, report_day, report_month, report_year,
    safety_issue, tree0, tree1, tree2, user_rating, user_explain, user_latitude, user_longitude FROM reports";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  //search table for this log-in
  while($row = $result->fetch_assoc()) {
      $content = $content.$row["id"].",".$row["user_email"].",".$row["report_hours"].",".$row["report_mins"].",".$row["report_day"].","
          .$row["report_month"].",".$row["report_year"].",".$row["safety_issue"].",".$row["tree0"].",".$row["tree1"].","
          .$row["tree2"].",".$row["user_rating"].",".$row["user_explain"].",".$row["user_latitude"].",".$row["user_longitude"].",\n";
  } 
} 

$conn->close();
print $content;
?>