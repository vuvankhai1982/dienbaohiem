<?php

function get_date_time(string $time = null)
{
    if (!$time) {
        return '';
    }

    return \Carbon\Carbon::parse($time)->format('d-m-Y (H:i)');
}

function get_date(string $time = null)
{
    if (!$time) {
        return '';
    }

    return \Carbon\Carbon::parse($time)->format('d-m-Y');
}
