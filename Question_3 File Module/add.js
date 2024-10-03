const fs = require('fs');
const path = require('path');

const logFolder = path.join(__dirname, 'Logs');

const addLogs = () => {

    if (!fs.existsSync(logFolder)) {
        fs.mkdirSync(logFolder);
    }

    process.chdir(logFolder);

    for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file number ${i}`);
        console.log(fileName);
    }
    
};

addLogs();