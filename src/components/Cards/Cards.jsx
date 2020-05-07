import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";

const Cards = ({ basicData }) => {
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
              These people are fighting every second for their lives.
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
              Recovered
            </Typography>
            <Typography variant="h5">
              {basicData.recovered === undefined ? (
                "Updating..."
              ) : (
                <CountUp
                  start={0}
                  end={basicData.recovered.value}
                  duration={3}
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
              Our Warriors, again and again the've proved that we can defeat
              this.
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
                  duration={2}
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
              Rest In Peace, These people would not be forgotten.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
