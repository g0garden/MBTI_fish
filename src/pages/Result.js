import React, { useEffect } from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";

import {firestore} from "../shared/firebase";
import { Text, Grid, Button } from "../elements/";

const Fish = (props) => {
  const dispatch = useDispatch();
  //
  useEffect(() => {}, []);

  return (
  <React.Fragmanet>
    <Grid>
      <Grid>
        <Text>
          듬직한 부시리
        </Text>
      </Grid>
    </Grid>
  </React.Fragmanet>
  );
};

export default Fish;
