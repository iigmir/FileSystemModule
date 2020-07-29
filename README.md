# FileSystemModule

If you just don't want to give your fs a shit...This is an fs simplify library.

## How to use

Just declear the new object, then call the methods.

```JavaScript
const FileSystemModule = require( "FileSystemModule" );
const fsm = new FileSystemModule();
fsm.read_file( "foo/bar" );
```

The path is based on the root directory of the project(That is, where the `package.json` puts).

### Methods

* read_file
  * Parameter: {String} `path` - File path.
  * Return: {Promise} - If file vaild, the Promise will contain file content, else contain Error object.
* read_directory
  * Parameter: {String} `path` - Directory path.
  * Return: {Promise} - If directory vaild, the Promise will contain directory file names array, else contain Error object.
* read_json
  * Parameter: {String} `path` - JSON file path.
  * Return: {Promise} - If JSON file vaild, the Promise will contain JSON, else contain Error object..
* write_file
  * Parameter: {String} `file.path` - Written file path and name.
  * Parameter: {String} `file.data` - Written file content.
  * Return: {void} - Throw error if fs encounter one, else return nothing.
* delete_file
  * Parameter: {String} `path` - Written file path and name.
  * Return: {void} - Throw error if fs encounter one, else return nothing.
