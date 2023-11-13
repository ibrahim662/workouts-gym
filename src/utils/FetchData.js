export const exercisesOptions = {
  method: "GET",
  params: { limit: "999999" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_EXERCISES_DB_API_KEY3,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
