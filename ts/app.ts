import { FileSystem, Directory, File, DirectoryItem } from './classes';

console.log("File System started.");

const fs = new FileSystem();

const file = new File();
file.id = 'GUID';
file.title = 'First File';

const folder = new Directory();
folder.id = 'GUID2';
folder.title = 'Folder 1';

fs.add(file, '/');
fs.add(folder, '/');

const items: DirectoryItem[] = fs.getItems('/');

console.log("Number of files: " + items.length);