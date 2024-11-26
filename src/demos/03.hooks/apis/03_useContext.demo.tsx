import {useContext ,createContext, useState} from 'react'
enum ThemeType {
  DARK = 'dark',
  LIGHT = 'light'
}

// 定义全局主题组件
const Theme = {
  [ThemeType.DARK]: {
    background: '#fff',
    color: '#000'
  },
  [ThemeType.LIGHT]: {
    background: '#000',
    color: '#fff'
  }
}


const ThemeContext = createContext(Theme[ThemeType.DARK]);

function ThemeButton() {
  const theme = useContext(ThemeContext);
  const [name, toggleTheme] = useState(ThemeType.DARK)


  return (<ThemeContext.Provider value={Theme[name]}>
      <h1 style={theme}>test text</h1>
      <button onClick={() => name === ThemeType.DARK ? toggleTheme(ThemeType.LIGHT): toggleTheme(ThemeType.DARK) }>toggle theme {name}</button>
  </ThemeContext.Provider>)
}
ThemeButton.meta = {
  tags: ['hook']
}
export default ThemeButton