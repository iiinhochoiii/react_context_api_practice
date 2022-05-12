const color = {
  Black: '#333333',
  White: '#FFFFFF',
  Orange: '#FB842D',
  Yellow: '#FFD400',
  Gray: ['#9A9BA7', '#C8CAD2', '#F2F3F7'],
};

export const theme = {
  palette: {
    Black: color.Black,
    White: color.White,
    Orange: color.Orange,
    Yellow: color.Yellow,
    Gray: color.Gray,
  },
  button: {
    Prime: `
        background-color: ${color.Orange};
        color: ${color.White};
    `,
    Primary: `
        background-color: ${color.Yellow};
        color: ${color.Black};
    `,
    Disabled: `
        background-color: ${color.Gray[0]};
        color: ${color.Gray[1]};
    `,
    Default: `
        background-color: ${color.Gray[2]};
        color: ${color.Black};
    `,
    Normal: `
        background-color: none;
        color: ${color.Black};
    `,
  },
};
