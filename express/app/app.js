const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

/* DATA */
const { infoCourses } = require('./database/courses.js');

/* ROUTERS */
const routerMath = require('./routers/math.js');
app.use('/api/courses/math', routerMath);

const routerProgramming = require('./routers/prog.js');
app.use('/api/courses/prog', routerProgramming);

/* MAIN ROUTERS */
app.get('/', (req, res) => {
    res.send('Welcome to the Courses API');
});

app.get('/api/courses', (req, res) => {
    res.json(infoCourses);
});

/* SERVER */
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}...`);
});
