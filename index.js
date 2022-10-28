const express = require('express');
const path = require('path');

var app = express();

//Configuración.
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


const posts = [
    {
        handle:'el-blog-mas-rapido',
        titulo:'El blog mas rápido',
        descripcion:'En este post te muestro como hacer el blog'
    },
    {
        handle:'seo-para-tu-blog',
        titulo:'Cómo mejorar el seo de tu blog',
        descripcion:'Te muestro como blablabla'
    },
    {
        handle:'analiticas-para-tu-blog',
        titulo:'como instalar y trackear tu audiencia',
        descripcion:'como trackear lo q la audiencia lee'
    },
];



//Middlewares 
/*app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json())*/

//Routes
app.get('/', (req, res) => res.render('home'));

app.listen(app.get('port'), function() {
    console.log('Servideor escuchando %d', app.get('port'))
});