const fs = require('fs');

fs.writeFileSync('./.env',`REACT_APP_API=${process.env.REACT_APP_API}\n`)