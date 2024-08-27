import { css } from "styled-components";
import { Typography } from ".";

const header1 = css`
  font-weight: 700;
  font-size: 36px;
  /* line-height: 43px; */
  letter-spacing: 0.05em;
`;

const header2 = css`
  font-weight: 700;
  font-size: 30px;
  /* line-height: 36px; */
  letter-spacing: 0.05em;
`;

const header3 = css`
  font-weight: 700;
  font-size: 24px;
  /* line-height: 29px; */
  /* identical to box height */
  letter-spacing: 0.05em;
`;

const header4 = css`
  font-weight: 600;
  font-size: 20px;
  /* line-height: 24px; */
  /* identical to box height */
  letter-spacing: 0.01em;
`;

const header5 = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;

const header6 = css`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;

const label = css`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  /* line-height: 15px; */
`;

export const typography: Typography = {
  fontFamily: {
    regular:
      "'Geologica', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen'",
    primary:
      "'Syne', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen'",
  },
  header1,
  header2,
  header3,
  header4,
  header5,
  header6,
  label,
};
