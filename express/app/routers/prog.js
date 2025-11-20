const express = require('express');
const { programming } = require('../database/courses.js').infoCourses;

const routerProgramming = express.Router();

/* MIDDLEWARE */
routerProgramming.use(express.json());

/* GET */
routerProgramming.get('/', (req, res) => {
    res.json(programming);
});

routerProgramming.get('/:language', (req, res) => {
    const language = req.params.language;
    const query = req.query.order;
    let courses =
        programming.filter(
            course => course.title.toLowerCase().includes(language.toLowerCase())
        );    

    if (courses.length === 0) 
        return res.status(204)
            .json({ status: 204, message: 'No courses found for the specified language' });

    if (query === 'views') return res.json(courses.sort((a, b) => b.views - a.views)); 
    res.json(courses);
});

routerProgramming.get('/:language/:level', (req, res) => {
    const language = req.params.language;
    const level = req.params.level;
    const courses =
        programming.filter(
            course => course.title.toLowerCase().includes(language.toLowerCase()) && 
            course.level.toLowerCase() === level.toLowerCase()
        );

    if (courses.length === 0) 
        return res.status(204)
            .json({ status: 204, message: 'No courses found for the specified language' });
            
    res.json(courses);
});


/* POST */
routerProgramming.post('/', (req, res) => {
    const newCourse = req.body;
    programming.push(newCourse);
    res.json(programming);
});


/* PUT */
routerProgramming.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedCourse = req.body;
    const index = programming.findIndex(course => course.id === id);    
    if (index === -1) return res.status(204).json({ status: 204, message: 'Course not found' });
    programming[index] = updatedCourse;
    res.json(programming);
});


/* PATCH */
routerProgramming.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id); 
    const updatedFields = req.body;
    const index = programming.findIndex(course => course.id === id);    
    if (index === -1) return res.status(204).json({ status: 204, message: 'Course not found' });
    Object.assign(programming[index], updatedFields);
    res.json(programming);
});


/* DELETE */
routerProgramming.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id); 
    const index = programming.findIndex(course => course.id === id);    
    if (index === -1) return res.status(204).json({ status: 204, message: 'Course not found' });
    programming.splice(index, 1);
    res.json(programming);
});


module.exports = routerProgramming;
