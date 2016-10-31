import { ItemType } from './enum';

interface IDirectoryItem {
  /**
   * GUID to identify item
   */
  id: string
  /**
   * Folder vs File
   */
  itemType: ItemType;
  /**
   * Relative path to item
   */
  path: string;
  /**
   * Last modified time in UTC
   */
  lmTime: Date;
  /**
   * Name of directory item (file or folder)
   */
  title: string;
}

interface IFileSystem<T> {
  add: (item: T, path: string) => boolean;
  remove: (title: string, path: string) => void;
  getItems: (path: string) => Array<T>;
}

export {ItemType, IDirectoryItem, IFileSystem};