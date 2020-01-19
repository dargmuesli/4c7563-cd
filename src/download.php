<?php
    $start = 1577055600 - 5;
    $end = 1577142000;
    $timestamp = (new DateTime())->getTimestamp();

    if ($timestamp >= $start && $timestamp < $end) {
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="fi.le"');
        readfile("media/fi.le");
    }
?>