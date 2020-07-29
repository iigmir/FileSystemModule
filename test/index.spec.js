const FileSystemModule = require( "../FileSystemModule.js" );
const app = new FileSystemModule();

const read_file_ttd = async () =>
{
    const res = await app.read_file( "test/case1.txt" );
    const exp = res.includes( "Hello World!" ) === true;
    const msg = `The actual response is: ${ res }`;
    console.assert( exp, msg );
};
read_file_ttd();

const read_directory_ttd = async () =>
{
    const res = await app.read_directory( "test" );
    const exp = res.includes( "index.spec.js" );
    const msg = `The actual response is: ${ res }`;
    console.assert( exp, msg );
};
read_directory_ttd();

const read_json_ttd = async () =>
{
    const res = await app.read_json( "test/vaild.json" );
    const exp = res.name === "Mitsuha Miyamizu";
    const msg = `The actual response is: ${ res }`;
    console.assert( exp, msg );
};
read_json_ttd();
