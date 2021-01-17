import React from "react";

import { Container, ColorsSet, ColorsList, ColorPoint } from "./styles";

export const VIOLET_PALLETE = ["#8b4488", "#b641a9", "violet", "#d6b2ce", "efc8ef"];
export const BLUE_PALLETE = ["#268596", "#4eadbe", "#63c2d1", "#83d6e3"];
export const GREEN_PALLETE = ["#334d1d", "#558131", "#77b544", "#c1deaa"];
export const DEFAULT_COLLOR_PALLET = VIOLET_PALLETE;

export default () => {
  return (
    <Container>
      <ColorsSet>
        <ColorsList>
          <ColorPoint color={DEFAULT_COLLOR_PALLET[0]} />
          <ColorPoint color={DEFAULT_COLLOR_PALLET[1]} />
          <ColorPoint color={DEFAULT_COLLOR_PALLET[2]} />
          <ColorPoint color={DEFAULT_COLLOR_PALLET[3]} />
        </ColorsList>
        <ColorsList>
          <ColorPoint color={VIOLET_PALLETE[0]} />
          <ColorPoint color={VIOLET_PALLETE[1]} />
          <ColorPoint color={VIOLET_PALLETE[2]} />
          <ColorPoint color={VIOLET_PALLETE[3]} />
        </ColorsList>
        <ColorsList>
          <ColorPoint color={BLUE_PALLETE[0]} />
          <ColorPoint color={BLUE_PALLETE[1]} />
          <ColorPoint color={BLUE_PALLETE[2]} />
          <ColorPoint color={BLUE_PALLETE[3]} />
        </ColorsList>
        <ColorsList>
          <ColorPoint color={GREEN_PALLETE[0]} />
          <ColorPoint color={GREEN_PALLETE[1]} />
          <ColorPoint color={GREEN_PALLETE[2]} />
          <ColorPoint color={GREEN_PALLETE[3]} />
        </ColorsList>
      </ColorsSet>
    </Container>
  );
};
