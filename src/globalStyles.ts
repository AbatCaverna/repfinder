import { createGlobalStyle } from 'styled-components';

export const COLORS = {
  clr_white: '#EFF2EF',
  clr_red: '#92140C',
  clr_red_secondary: '#795548',
  clr_dar: '#1E1E24',
  clr_grey: '#798086'
}

export default createGlobalStyle`
  
  body {
    background-color: ${COLORS.clr_white};
    font-family: 'Roboto', sans-serif;
    margin: 0;
    width: 100v;

    #root { 
      width: 100%;
    }
  }
  
`

