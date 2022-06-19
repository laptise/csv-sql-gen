# csv-sql-gen

This tool generate sql from csv file.

You can easily run on CLI with `csv-sql-gen`.

```bash
$ csv-sql-gen
```

So you can set this command in your `docker-compose` command or build task.

## Set up

csv-sql-gen needs setting file named `csv-sql-gen.config.json`

Make json file named `csv-sql-gen.config.json` in your project root folder, Then fill it.

The rule is simple, please look below

```json
[
  {
    "csv": "ken_all_rome.csv",
    "sql": "10_ken_all_r2ome.sql",
    "tableName": "ken_mst"
  },
  {
    "csv": "subway_stations.csv",
    "sql": "11_subway_stations.sql",
    "tableName": "subway_station_mst"
  }
]
```

You should **start with Array.** Then write properties inside each of them.

Key and Value is meaning

| Key       | Value                                     |
| --------- | ----------------------------------------- |
| csv       | Path to csv                               |
| sql       | Path to sql what generated from this tool |
| tableName | Name of the table (Insert target)         |
# csv-sql-gen
# csv-sql-gen
