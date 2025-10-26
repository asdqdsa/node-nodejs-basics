const parseArgs = () => {
  const regex = /[^--][\S]+/g;
  const cliArgs = process.argv.slice(2);
  const output = cliArgs.map((val) => val.match(regex));
  const formatOutput = [];

  for (let i = 0; i < output.length; i += 2) {
    formatOutput.push(`${output[i]} is ${output[i + 1]}`);
  }

  const formatOutputString = formatOutput.join(", ").trimEnd();
  console.log(formatOutputString);
};

parseArgs();
