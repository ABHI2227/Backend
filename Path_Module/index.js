import path from 'path';

//join two or more file

const fullpath = path.join('/path','index.py','file.java');
console.log('file join',fullpath);

//index.py , test.java

//absolute path

// const absolutePath = path.resolve();

const extention = path.extname('resume.pdf');
console.log("extention=",extention);

if (extention === '.pdf') {
    console.log('pdf file ok');
}else {
    console.log('pdf file not ok');
}
