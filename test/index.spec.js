const assert = require( "assert" );
const FileSystemModule = require( "../FileSystemModule.js" );
const app = new FileSystemModule();

const case1 = async () =>
{
    const res = await app.read_file( "test/case1.txt" );
    const exp = res.includes( "Hello World!" ) === true;
    const msg = `The actual response is: ${ res }`;
    console.assert( exp, msg );
};
case1();
