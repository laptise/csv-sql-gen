import fs = require("fs");
import path = require("path");

type Config = {
  csv: string;
  sql: string;
  tableName: string;
};

/**Read file from root path */
const callConfigFile = async (): Promise<Config[]> => {
  const file = await new Promise<Buffer>((res, rej) => {
    fs.readFile("csv-sql-gen.config.json", (err, data) => {
      if (err) rej("Cannot load file csv-sql-gen.config.json frrom " + path.resolve("./"));
      res(data);
    });
  });
  const data = JSON.parse(file.toString());
  return data;
};

function ensureDirectoryExistence(filePath: string) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

const convertCsv = async ({ sql: sqlPath, csv, tableName }: Config) => {
  try {
    const csvFile = await new Promise<Buffer>((res, rej) => {
      fs.readFile(path.resolve(csv), (err, data) => {
        if (err) rej(`Cannot loaded file ${csv}`);
        res(data);
      });
    });
    const csvRes = csvFile.toString();
    const lines = csvRes.split("\n");
    const c = lines[0].split(",");
    console.log(`Csv Loaded ${csv}, Size : ${c.length} * ${lines.length}`);
    const sql = lines.reduce((sql, line) => {
      const columns = line.split(",");
      const newLine = `INSERT INTO ${tableName} VALUES (${columns.map((x) => `'${x.trim()}'`).join(", ")});\n`;
      return sql + newLine;
    }, "");
    ensureDirectoryExistence(path.resolve(sqlPath));
    fs.writeFile(path.resolve(sqlPath), sql, (err) => {});
  } catch (e) {
    console.log(e);
  }
};

export const emit = async () => {
  const configs = await callConfigFile().catch(console.log);
  configs?.map?.(convertCsv);
};
