import fs from 'fs';

const read = () => JSON.parse(fs.readFileSync('./settings.json'));

export const edit = (obj) => {
    fs.writeFileSync('./settings.json', {
        ...read(),
        ...obj
    });
}

const file = read();

export default file;