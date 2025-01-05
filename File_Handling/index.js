import { Console } from 'console';
import {readFile,writeFile ,appendFile, mkdir} from 'fs/promises';

//read file Content
const read_file= async (fileName)=>{
    {
        const data=await readFile(fileName,'utf-8');
        console.log(data);
    }
    
}

read_file('sample.txt');

//CREATE FILE

const create_file = async (fileName,Content)=>{
    await writeFile(fileName,Content);
    Console.log("File created Successfully");
}

//create file ai.py,This is a test file
// create_file('App.jsx','This is a react file');


//appednd file...add content to file
//existing file mdhe conntent add karayche 
const append_file = async (fileName,Content)=>{
    await appendFile(fileName,Content);
    Console.log("File created Successfully, extra content added");
}

// append_file('App.jsx',' This is a react file');

//create folder- directory
const create_folder=async(directory)=>{
    await mkdir(directory,{recursive:true});

}
// create_folder('src/py'); 