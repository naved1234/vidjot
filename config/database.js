if(process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb://naved1234:n@ved786@ds225038.mlab.com:25038/vidjot-live'
    };
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot-dev'
    };
}