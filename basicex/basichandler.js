exports.basichandlerfunc = async (event) => {
  const number = event.number;
  if (!number) {
      return {
          statusCode: 400,
          body: JSON.stringify({ message: "Number is required!" })
      };
  }
  
  const result = number * number;

  return {
      statusCode: 200,
      body: JSON.stringify({ result })
  };
};
