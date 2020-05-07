import React, { useState, useEffect } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";

const App = () => {
  const [basicInfo, setBasicInfo] = useState({});
  const getCovidData = async () => {
    const basicData = await fetchData();
    setBasicInfo(basicData);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div className={styles.container}>
      <Cards basicData={basicInfo} />
      <CountryPicker />
      <Chart />
    </div>
  );
};

export default App;
