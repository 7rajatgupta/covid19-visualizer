import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Cards, Chart, CountryPicker, Nav } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";
import mask from "./static/img/mask.png";

const App = () => {
  const [basicInfo, setBasicInfo] = useState({});
  const [selectedCountry, setSelectedCountry] = useState("");
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  const getCovidData = async () => {
    //const basicData = await fetchData();
    setBasicInfo(await fetchData());
  };

  const handleCountryChange = async (country) => {
    console.log(country);
    setSelectedCountry(country);
    setBasicInfo(await fetchData(country));
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div>
      <Nav />
      <div className={styles.container}>
        <h1>
          {selectedCountry === ""
            ? "COVID-19 Live Statistics Globally "
            : `Statistics for ${selectedCountry}`}
        </h1>
        <ThemeProvider theme={darkTheme}>
          <Cards basicData={basicInfo} />
          <h5>Select a Country for specific details:</h5>
          <CountryPicker handleCountryChange={handleCountryChange} />
          <h3>Visualizer - Data in last 30 days</h3>
          <Chart basicData={basicInfo} country={selectedCountry} />
        </ThemeProvider>

        <div className={styles.footer}>
          <h4>
            This webapp was developed by Rajat Gupta, dedicated to everyone who
            is struggling in these difficult times. Kindly donate to the needful
            people if you can. We are together in this.
          </h4>

          <img className={styles.mask} src={mask} alt="Wear a mask" />
          <h4>
            {" "}
            <a
              href="http://www.github.com/7rajatgupta"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my Other Projects!
            </a>{" "}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default App;
