export { themes as BUNDLED_THEMES, Theme } from './themes'
export { languages as BUNDLED_LANGUAGES, Lang } from './languages'

export { getHighlighter } from './highlighter'
export { renderToHtml } from './renderer'
export { IThemedToken } from './themedTokenizer'
export {
  ILanguageRegistration,
  IShikiTheme,
  IThemeRegistration,
  Highlighter,
  HighlighterOptions
} from './types'
export { setCDN, setOnigasmWASM } from './loader'
