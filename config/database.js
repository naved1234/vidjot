if(process.env.NODE_ENV == 'production') {
    const dbuser = 'naved1234';
    const dbpassword = 'n@ved786';
    module.exports = {
        mongoURI: 'mongodb://'+dbuser+':'+dbpassword+'@ds225038.mlab.com:25038/vidjot-live'
    };
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot-dev'
    };
}