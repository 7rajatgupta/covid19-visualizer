import axios from "axios";

const url = "https://covid19.mathdro.id/api";

//Get the overall numbers worldwide:
export const fetchData = async (country) => {
  let dynamicURL = url;
  if (country) {
    dynamicURL = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(dynamicURL);
    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.error(error);
  }
};

//Get the Daily Status Update:

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((d) => ({
      confirmed: d.confirmed.total,
      deaths: d.deaths.total,
      date: d.reportDate,
    }));
    return modifiedData;
  } catch (err) {
    console.error(err);
  }
};

//Fetch the list of Countries:

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((c) => c.name);
  } catch (error) {
    console.error(error);
  }
};
