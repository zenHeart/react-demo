interface onChange {
  (name: 'A', val: {a: number}) : void,
  (name: 'B', val: {b: number}) :void,
  (name: 'C', val: {c: string}): void, 
}

interface MenusProps {
  onChange:onChange
}

function Menus(props: MenusProps) {
  const { onChange } = props;
  
  return <div>
    <button onClick={() => onChange('A', {a: 1})}>A</button>
    <button onClick={() => onChange('B', {b: 2})}>B</button>
    <button onClick={() => onChange('C', {c: 'c'})}>C</button>
  </div>
}

let onChange: onChange =  (name, value) => {
  // if(name === "A") {
  //   console.log(value.a)
  // }
  // else if(name === "B") {
  //   console.log(value.b)
  // }
  // else {
  //     console.log(value.c)
  // }
} 

function switchMenus() {
  return (
      <Menus
        onChange={onChange}
      />
  )
}

switchMenus.meta = {
  tags: ['typescript reload']
}
export default switchMenus