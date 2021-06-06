const https = require('https')
const fs = require('fs')
 
const request = https.request({
    hostname: 'juniorfrontend.ir',
    port: 443,
    path: '/',
    method: 'GET'
},res => { 
    let responseBody = '';
    res.setEncoding("utf-8"); 
    res.on('data', data => {
        console.log("--chunk--", data.length);
        responseBody += data;
    })
    // -------------------------------

    res.on('end',()=>{
        fs.writeFile('./junior.html', responseBody, err=>{
            if (err) {
                throw err;
            }
            console.log('file downloaded!');
        })
    })
    // -------------------------------

})

request.end();