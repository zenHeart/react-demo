import {useState, useEffect} from 'react'
function cancelPromise() {
  let dismiss
  
  let asyncList = []

  return {
    async invoke(prom1) {
     let a
     if(dismiss===undefined) {
        a = new Promise((res, rej) => dismiss = res)
        asyncList = []
     }
      asyncList.push(prom1)

      return Promise.race([...asyncList, a])
    },
    async cancel() {
     dismiss('cancel')
     dismiss= undefined
    },
  }
}

interface TabItem {
  name: string,
  value: string | number
}
interface TabsProps  {
  options: TabItem[],
  tabChange?(tab: TabItem): void
}
const tabStyles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  item: {
    border: '1px solid black',
    padding: '5px',
    cursor: 'pointer'
  },
  activeItem: {
    border: '1px solid red'
  }
}

async function serviceApi(tab: string): Promise<TabItem[]> {
  return await new Promise(resolve => {
    setTimeout(() => {
      resolve([1,2,3].map(el => ({name: tab, value: ~~(Math.random()*1e3)})))
    }, ~~(Math.random()*1e3+ 1e3))
  })
}

function Tabs(props: TabsProps) {
  const [tab, setTab] = useState(props.options[0])
  
  return (<div style={tabStyles.container}>{
      props.options.map(item => (
        <div
          key={item.name}
         style={{
          ...tabStyles.item,
          ...(tab.value === item.value? tabStyles.activeItem: {})
        }}
        onClick={() => {
          if(item.value != tab.value) {
            setTab(item)
            if(props.tabChange) {
              props.tabChange(item)
            }
          }
        }}>{item.name}</div>
      ))
    }
  </div>) 
}

const cancelList = cancelPromise();
function switchTabs() {
  const [state, setState] = useState({} as {tabs:{[index: string]: TabItem[]}, active: TabItem, loading: boolean})

  async function switchRes(item: TabItem) {
    setState((prev) => ({
      ...prev,
      loading: true,
      active: item
    }))
    try {
      cancelList.cancel()
      const res =await cancelList.invoke(serviceApi(item.name)) ;
      // cancelList.cancel()
      // const res =await serviceApi(item.name) ;
      setState((prev) => ({
        ...prev,
        loading: false,
        tabs: {[item.name]: res},
      }))
    } catch(e) {
      setState((prev) => ({
        ...prev,
        loading: false,
      }))
    }
  
  }
  console.log('render---', new Date())
  
  return (
    <>
      <Tabs
        options={
        ['1','2','3'].map(el => ({name: el, value: el}))
        }
        tabChange={switchRes}
      />
      {state.loading? 'loading...': state?.tabs?.[state?.active?.name]?.map?.(el => (<p key={el.value}>{el.name}: {el.value}</p>))}
    </>
  )
  

}
switchTabs.meta = {
  tags: ['switch-tab']
}
export default switchTabs