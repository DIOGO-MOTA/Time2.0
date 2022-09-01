// Com o d.ts significa que nesse arquivo terá somente codigo de definição de de tipos de typescript
import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
