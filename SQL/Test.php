<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
        }
    </style>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
</head>
<body>
    <p>Test</p>

    <table>
        <tr>
            <th>Vorname</th>
            <th>Hometown</th>
            <th>Hobby</th>
        </tr>

        <?php
            $servername = "localhost";
            $username = "gymmatthieu";
            $password = "ORG";
            $dbname = "gymmatthieu";

            //Kreiert eine Connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            //Check connection
            if ($conn->connect_error) {
                die("". $conn->connect_error);
            }
            else {
                echo "We're in!";
            }

            $sql = "SELECT Name, Hometown, Hobby FROM People";
            $result = mysqli_query($conn, $sql);

            while ($row = mysqli_fetch_assoc($result)) {
                echo "<tr><td>" . $row["Name"] . "</td><td>" . $row["Hometown"] . "</td><td>" . $row["Hobby"] . "</td>";
            }
        ?>
    </table>
</body>
</html>