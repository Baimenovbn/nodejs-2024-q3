const parseArgs = () => {
  const result = [];


  const args = process.argv.slice(2);
  args.forEach((arg, i) => {
    if (arg.startsWith('--')) {
      const probableVal = args[i + 1].startsWith('--') ? '' : args[i + 1];

      result.push(`${arg} is ${probableVal}`);
    }
  });

  console.log(result.join(', '))
};

parseArgs();
