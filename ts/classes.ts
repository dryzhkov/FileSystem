import * as Interfaces from './interfaces';

abstract class DirectoryItem implements Interfaces.IDirectoryItem {
  private _id: string
  private _path: string;
  private _lmTime: Date;
  private _itemType: Interfaces.ItemType;
  private _title: string;

  get id(): string { return this._id; }

  set id(newId: string) { this._id = newId; }

  get path(): string { return this._path; }

  set path(newPath: string) { this._path = newPath; }

  get lmTime(): Date { return this._lmTime; }

  set lmTime(newDate: Date) { this._lmTime = newDate; }

  get itemType(): Interfaces.ItemType { return this._itemType; }

  set itemType(newItemType: Interfaces.ItemType) { this._itemType = newItemType; }

  get title(): string { return this._title; }

  set title(newTitle: string) { this._title = newTitle; }
}

class Directory extends DirectoryItem {
  directoryItems: Array<DirectoryItem>;
  itemCount: number;
}

class File extends DirectoryItem {
  private size: number;
  private type: string;
  private content: string;
}

class FileSystem implements Interfaces.IFileSystem<DirectoryItem> {
  private _rootDirectory: Array<DirectoryItem>;

  constructor() {
    this._rootDirectory = new Array<DirectoryItem>();
  }

  public add(item: DirectoryItem, path: string): boolean {
    const curDirectory = this.getDirectory(path);
    if (curDirectory) {
      curDirectory.push(item);
      return true;
    }
    return false;
  }

  public remove(title: string, path: string): void {
    const curDirectory = this.getDirectory(path);
    if (curDirectory) {
      curDirectory.filter(x => { return x.title !== title });
    }
  }

  public getItems(path: string): Array<DirectoryItem> {
    return this.getDirectory(path);
  }

  private getDirectory(path: string): Array<DirectoryItem> {
    let curDirectory: Array<DirectoryItem> = this._rootDirectory;
    const pathPieces = path.split('/').filter(x => { return x !== '' });
    for(let title of pathPieces) {
      const targetDir = this.findDirectoryByTitle(title, curDirectory);
      if (targetDir) {
        curDirectory = targetDir.directoryItems;
      } else {
        return;
      }
    }
    return curDirectory;
  }

  private findDirectoryByTitle(title: string, directoryItems: Array<DirectoryItem>): Directory {
    if (!directoryItems || !title) {
      return;
    }

    for (let curItem of directoryItems) {
      if (curItem.title === title && curItem.itemType === Interfaces.ItemType.Folder) {
        return <Directory>curItem;
      }
    }

    return;
  }
}

export {FileSystem, Directory, File, DirectoryItem};