import * as R from 'ramda';

export const colorScheme = {
  black: { value: '#222222', name: 'Black' },
  white: { value: '#FFFFFF', name: 'White' },
  gray: { value: '#B6B6B6', name: 'Gray' },
  darkWhite: { value: '#F0F2F5', name: 'DarkWhite' },
  aqua: { value: '#00FFFF', name: 'Aqua' },
  red: { value: '#FF0070', name: 'Red' },
};

export const getColor = (colorKey: string): string => R.path([colorKey, 'value'], colorScheme);

const getColorsMap = () =>
  R.compose(
    R.reduce((acc: any, [key, scheme]: any) => R.assoc(key, scheme.value, acc), {}),
    R.toPairs,
  )(colorScheme);

const colors = getColorsMap();

export default colors;
