import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem } from '@mui/material';

const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Clock = () => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    const updateTime = () => {
        const now = new Date();
        const timeString = `${zeroPadding(now.getHours(), 2)}:${zeroPadding(now.getMinutes(), 2)}:${zeroPadding(now.getSeconds(), 2)}`;
        const dateString = `${now.getFullYear()} ${zeroPadding(now.getMonth() + 1, 2)} ${zeroPadding(now.getDate(), 2)} ${WEEK[now.getDay()]}`;

        setTime(timeString);
        setDate(dateString);
    };

    useEffect(() => {
        const intervalId = setInterval(updateTime, 1000);
        updateTime();
        return () => clearInterval(intervalId);
    }, []);

    const zeroPadding = (num, digit) => {
        return String(num).padStart(digit, '0');
    };

    return (
        <div className="clock">
            <Typography variant="body1" id="date">{date}</Typography>
            <Typography variant="body1" id="time">{time}</Typography>
            

        </div>
    );
};

export default Clock;
