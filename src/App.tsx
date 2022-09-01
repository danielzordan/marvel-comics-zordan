import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { Router } from './Router';
import { ComicsProvider } from './contexts/ComicsContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ComicsProvider>
        <Router />
      </ComicsProvider>
    </ThemeProvider>
  );
}
