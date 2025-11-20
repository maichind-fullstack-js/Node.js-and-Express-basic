const express = require('express');
const { math } = require('../database/courses.js').infoCourses;

const routerMath = express.Router();

routerMath.get('/', (req, res) => {
    res.json(math);
});

routerMath.get('/:theme', (req, res) => {
    const theme = req.params.theme;
    const courses =
        math.filter(
            course => course.title.toLowerCase().includes(theme.toLowerCase())
        );
    if (courses.length === 0) 
        return res.status(204).json({ status: 204, message: 'No courses found for the specified theme' });
    res.json(courses);
});

module.exports = routerMath;
