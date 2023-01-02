// recoil
import {
  RecoilRoot,
} from 'recoil';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <RecoilRoot>
      <ScrollToTop />
      <StyledChart />
      <Router />
      </RecoilRoot>
    </ThemeProvider>
  );
}
