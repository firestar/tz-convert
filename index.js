const timezones = require('./timezones.json');

module.exports = {
    timezones: timezones,
    fromTZ: (tzName)=>{
        return timezones[tzName];
    }
}
