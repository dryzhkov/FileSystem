import { FileSystem, Directory, File, DirectoryItem } from './classes';

console.log("File System started.");

const fs = new FileSystem();

const file = new File();
file.id = 'GUID';
file.title = 'First File';

fs.add(file, '/');

const items: DirectoryItem[] = fs.getItems('/');

console.log("Number of files: " + items.length);