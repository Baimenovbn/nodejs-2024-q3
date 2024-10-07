const parseEnv = () => {
  const result = [];

  for (const [key, val] of Object.entries(process.env)) {
    if (key.startsWith('RSS_')) {
      result.push(`${key}=${val}`);
    }
  }

  console.log(result.join('; '));
};

parseEnv();
