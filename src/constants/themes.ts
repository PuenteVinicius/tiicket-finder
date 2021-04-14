import { BREAKPOINTS } from './breakpoints'
import { TYPOGRAPHY } from './typography'
import { COLORS } from './colors'
import { ThemeType } from 'grommet'

const DEFAULT_THEME: ThemeType = {
  global: {
    breakpoints: BREAKPOINTS,
    colors: COLORS,
  },
  heading: TYPOGRAPHY.heading,
} 

export default DEFAULT_THEME;
