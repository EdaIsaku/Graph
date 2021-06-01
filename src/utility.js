export const getDataForChart = (data) => {
  const keys = Object.keys(data);
  let maxCases = {
    confirmed: 0,
    index: 0,
  };
  const readyData = keys.slice(0, 9).map((elem, idx) => {
    const newObj = {
      country: elem,
      confirmed: data[elem]["All"].confirmed,
      confirmedColor: "#ED4C67",
      recovered: data[elem]["All"].recovered,
      recoveredColor: "#12CBC4",
      deaths: data[elem]["All"].deaths,
      deathsColor: "#303952",
    };
    if (newObj.confirmed > maxCases.confirmed) {
      maxCases.confirmed = newObj.confirmed;
      maxCases.index = idx;
    }

    return newObj;
  });
  readyData[maxCases["index"]].confirmedColor = "#303952";
  return readyData.filter((elem, idx) => idx !== maxCases["index"]);
};

export const filterData = (data, filterId) => {
  if (filterId === "all") {
    return data;
  }
  const filtered = data.map((elem) => ({
    country: elem["country"],
    [filterId]: elem[filterId],
    [`${filterId}Color`]: elem[`${filterId}Color`],
  }));

  return filtered;
};
