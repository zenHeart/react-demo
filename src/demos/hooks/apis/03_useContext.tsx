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

// 1. 采用 createContext 创建全局的 context
const ThemeContext = createContext(Theme[ThemeType.DARK]);

function ThemeContent() {
  // 2. 使用 useContext(ThemeContext) 消费创建的 context 变量
  const theme = useContext(ThemeContext);
  return <h1 style={theme}>test text</h1>
}

function ThemeContentUseConsumer() {
  // 2.1 也可以使用 ThemeContext.Consumer 组件消费 context 的值
  return (<ThemeContext.Consumer>
    {val =>  <h1 style={val}>use Consumer</h1>}
  </ThemeContext.Consumer>)
}
function ChangeTheme() {
  const [themeType, toggleTheme] = useState(ThemeType.DARK)
  // 3. 采用 ThemeContext.Provider 传递 context 信息
  // 3.1 修改 ThemeContext.Provider 的 value 来更换全局的 context 值
  return (<ThemeContext.Provider value={Theme[themeType]}>
            <ThemeContent/>
            <ThemeContentUseConsumer/>
            <button onClick={() => themeType === ThemeType.DARK ? toggleTheme(ThemeType.LIGHT): toggleTheme(ThemeType.DARK) }>toggle theme {name}</button>
        </ThemeContext.Provider>)
}


ChangeTheme.meta = {
  tags: ['hook']
}
export default ChangeTheme