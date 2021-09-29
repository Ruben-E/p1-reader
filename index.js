// create a Smile P1 session, login to device, fetch meter readings
const Smile = require('smilep1');
const Influx = require('influx');
const cron = require('node-cron');

const influx = new Influx.InfluxDB({
 host: process.env.INFLUXDB_HOST,
 port: process.env.INFLUXDB_PORT,
 protocol: 'http',
 database: process.env.INFLUXDB_DATABASE,
})

const smile = new Smile({meterMethod: 2});

async function getMeterReadings() {
    try {
        const options = { id: process.env.P1_ID, host: process.env.P1_HOST}
        await smile.login(options);
        const powerInfo = await smile.getMeterReadings();
        await influx.writePoints([
            {
              measurement: 'energy',
              fields: powerInfo,
            }
          ])
    } catch (error) {
        console.log(error);
    }
}

cron.schedule('*/10 * * * * *', getMeterReadings);

process.on('SIGINT', function() {
    process.exit();
});