const fs = require('fs');
const path = require('path');

const logFolder = path.join(__dirname, 'Logs');

const removeLogs = () => {

    if (fs.existsSync(logFolder)) {
        const logFiles = fs.readdirSync(logFolder);
        logFiles.forEach(file => {
            fs.unlinkSync(path.join(logFolder, file));
            console.log(`delete files...${file}`);
        });
        fs.rmdirSync(logFolder);
        console.log('Logs folder removed');
    } else {
        console.log('Logs folder not found');
    }
    
};

removeLogs();