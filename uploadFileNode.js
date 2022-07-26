var http = require('http');
var formidable = require('formidable');
const fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      let oldPath = files.filetoupload.filepath;
      let newPath = 'C:/Users/User/Desktop/ALL FOLDERS/git/javascript-practice/uploadedFiles' + files.filetoupload.originalFilename;
      fs.rename(oldPath, newPath, (err) => {
      	if(err) throw err;
      	res.write('file uploaded and moved');
      	res.end();
      })
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080, console.log('running in http://127.0.0.1:8080'));