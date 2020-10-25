import React from "react";

import {
  Container,
  ColorsSet,
  ColorsList,
  ColorPoint
} from "./styles";

export default () => {
  return (
    <Container>
      <ColorsSet>
        <ColorsList>
          <ColorPoint color='#63c2d1'/>
          <ColorPoint color='#268596'/>
        </ColorsList>
        <ColorsList>
          <ColorPoint color='#63c2d1'/>
          <ColorPoint color='#268596'/>
          <ColorPoint/>
        </ColorsList>
      </ColorsSet>
    </Container>
  );
};
