timezones = require('./timezone_array.json');

function getOffset(str){
    const regex = /\(UTC([+\-0-9:]+)\)/gm;
    let m;

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        return m[1];
    }
}

let timeZoneMapTZ = {};

for (let i = 0; i < timezones.length; i++) {
    for (let x = 0; x < timezones[i].utc.length; x++) {
        const timezoneCopy = JSON.parse(JSON.stringify(timezones[i]))
        timeZoneMapTZ[timezones[i].utc[x]] = {...timezoneCopy, ...{offsetStr:getOffset(timezones[i].text), utc: timezones[i].utc[x]}};
    }
}
console.log(JSON.stringify(timeZoneMapTZ));
