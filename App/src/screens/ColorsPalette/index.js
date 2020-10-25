import React from "react";

import { Container, ColorsSet, ColorsList, ColorPoint } from "./styles";

export default () => {
  return (
    <Container>
      <ColorsSet>
        <ColorsList>
          <ColorPoint color="#8b4488" />
          <ColorPoint color="#b641a9" />
          <ColorPoint color="violet" />
          <ColorPoint color="#d6b2ce" />
        </ColorsList>

        <ColorsList>
          <ColorPoint color="#268596" />
          <ColorPoint color="#4eadbe" />
          <ColorPoint color="#63c2d1" />
          <ColorPoint color="#83d6e3" />
        </ColorsList>

        <ColorsList>
          <ColorPoint color="#334d1d" />
          <ColorPoint color="#558131" />
          <ColorPoint color="#77b544" />
          <ColorPoint color="#c1deaa" />
        </ColorsList>
      </ColorsSet>
    </Container>
  );
};
