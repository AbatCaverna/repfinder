import { createGlobalStyle } from 'styled-components';

export const COLORS = {
  clr_white: '#EFF2EF',
  clr_red: '#92140C',
  clr_red_secondary: '#795548',
  clr_dar: '#1E1E24',
  clr_grey: '#798086'
}

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: ${COLORS.clr_white};
    font-family: 'Roboto', sans-serif;
    margin: 0;
    width: 100vw;
    height: 100vh;
    #root { 
      width: 100%;
      height: 100%;
    }
  }
  
`

