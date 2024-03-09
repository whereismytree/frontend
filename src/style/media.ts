import { CSSObject, Interpolation, css } from 'styled-components';

const SCREENS = {
  mediumDevice: 868,
};

const rawMediaQuery =
  (screenSize: keyof typeof SCREENS) =>
  (style: TemplateStringsArray | CSSObject | Interpolation<object>) => css`
    @media (max-width: ${SCREENS[screenSize]}px) {
      ${style};
    }
  `;

const mediaQuery = (screenSize: keyof typeof SCREENS) => rawMediaQuery(screenSize);

export default mediaQuery;
