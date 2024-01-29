const parseEnv = () => {
  // Write your code here
  const ENV = process.env;
  const regex = /^RSS_/;
  const output = [];
  let formatOutput = '';

  for (let key in ENV) {
    if (regex.test(key)) {
      output.push(`${key}=${ENV[key]}`);
    }
  }

  formatOutput = output.join('; ').trimEnd();
  console.log(formatOutput);
};

parseEnv();
