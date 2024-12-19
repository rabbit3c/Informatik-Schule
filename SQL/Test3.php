<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        table {
            width: 600px;
            height: 600px; /* Full viewport height */
            border-collapse: collapse;
        }
        td {
            text-align: center;
            vertical-align: middle;
            position: relative;
            border: 1px solid black; /* Optional: for visible table borders */
        }
        td {
            width: 70px;
            height: 70px;
            text-align: center; 
            vertical-align: middle;
            font-size: 36px;
        }
        .top-left {
            position: absolute; 
            top: 5px; 
            left: 5px; 
            font-size: 12px;
        }
        .center {
            font-size: 54px; 
            text-align: center;
        }
    </style>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Schachbrett</title>
</head>
<body>
    <p>Schachbrett</p>

    <table>
        <?php
            $letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

            $position = [
                ["♜", "♞", "♝" , "♛", "♚", "♝", "♞", "♜"],
                ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"], 
                ["", "", "", "", "", "", "", ""], 
                ["", "", "", "", "", "", "", ""], 
                ["", "", "", "", "", "", "", ""], 
                ["", "", "", "", "", "", "", ""], 
                ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"], 
                ["♖", "♘", "♗" , "♕", "♔", "♗", "♘", "♖"],
            ];

            for ($i = 0; $i < 8; $i++) {
                echo "<tr>";
                for ($j = 0; $j < 8; $j++) {
                    if (($j + $i) % 2 == 1) {
                        echo "<td style='background: brown'>
                            <div class = 'top-left'>" 
                                . $letters[$j] . (8 - $i) . 
                            "</div>
                            <div class = 'center'>"
                                . $position[$i][$j] . 
                            "</div>
                        </td>";
                    }
                    else {
                        echo "<td style='background: white'>
                            <div class = 'top-left'>" 
                                . $letters[$j] . (8 - $i) . 
                            "</div>
                            <div class = 'center'>" 
                                . $position[$i][$j] . 
                            "</div>
                        </td>";
                    }
                }
                echo "</tr>";
            }
        ?>
    </table>
</body>
</html>