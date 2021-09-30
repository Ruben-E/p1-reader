# Plugwise P1 to InfluxDB exporter

Very simple, not resilliant, Node script to poll the PlugWise P1 reader and store in InfluxDB.

Polls every 10 seconds. Does not output anything on a successful push to Influx (on purpose).

## Configuration
Configure the following environment variables before running the script:

* `INFLUXDB_HOST`: InfluxDBs IP address
* `INFLUXDB_PORT`: InfluxDBs port
* `INFLUXDB_DATABASE`: InfluxDBs database
* `P1_HOST`: Plugwise P1 reader IP address
* `P1_ID`: Plugwise P1 reader ID a.k.a. password (username is always smile)

## How to run

### NodeJS
```
INFLUXDB_HOST=x.x.x.x INFLUXDB_PORT=8086 INFLUXDB_DATABASE=x P1_HOST=x.x.x.x P1_ID=x node index.js
```

### Docker
```
docker run --name p1-reader -e INFLUXDB_HOST=x.x.x.x -e INFLUXDB_PORT=8086 -e INFLUXDB_DATABASE=x -e P1_HOST=x.x.x.x -e P1_ID=x ghcr.io/ruben-e/p1-reader:latest
```
