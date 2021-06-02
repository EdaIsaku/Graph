//utility functions for Bar
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

//utility functions fro Line

export const getDataForLineChart = (data) => {
  const keys = Object.keys(data);
  const myData = [];
  const readyData = keys.slice(0, 9).map((el) => {
    myData.push({
      x: el,
      y: data[el]["All"].confirmed,
    });
    return myData;
  });
  console.log(myData);
  return [
    {
      id: "confirmed",
      color: "red",
      data: myData,
    },
  ];
};

// export const getDataForLineChart = (data) => {
//   const keys = Object.keys(data);
//   const myData = keys.slice(0, 9).map((el) => {
//     const datas = {
//       confirmed: {
//         x: el,
//         y: data[el]["All"].confirmed,
//       },
//       recovered: {
//         x: el,
//         y: data[el]["All"].recovered,
//       },
//       deaths: {
//         x: el,
//         y: data[el]["All"].deaths,
//       },
//     };
//     return datas;
//   });
//   console.log(myData);

//   const ids = ["deaths", "recovered", "cases"];
//   const colors = ["black", "green", "red"];
