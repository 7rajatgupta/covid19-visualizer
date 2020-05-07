import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";

const Cards = ({ basicData }) => {
  console.log(basicData);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              {basicData.confirmed === undefined ? (
                "Updating..."
              ) : (
                <CountUp
                  start={0}
                  end={basicData.confirmed.value}
                  duration={7}
                  separator=","
                />
              )}
            </Typography>
            <Typography color="textSecondary">
              {basicData.lastUpdate === undefined
                ? "Updating..."
                : new Date(basicData.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Num of active cases of Chinese Virus
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Patients Recovered
            </Typography>
            <Typography variant="h5">
              {basicData.recovered === undefined ? (
                "Updating..."
              ) : (
                <CountUp
                  start={0}
                  end={basicData.recovered.value}
                  duration={5}
                  separator=","
                />
              )}
            </Typography>
            <Typography color="textSecondary">
              {basicData.lastUpdate === undefined
                ? "Updating..."
                : new Date(basicData.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Num of recoveries from Chinese Virus
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              {basicData.deaths === undefined ? (
                "Updating..."
              ) : (
                <CountUp
                  start={0}
                  end={basicData.deaths.value}
                  duration={4}
                  separator=","
                />
              )}
            </Typography>
            <Typography color="textSecondary">
              {basicData.lastUpdate === undefined
                ? "Updating..."
                : new Date(basicData.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Total number of deaths from Chinese Virus.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
