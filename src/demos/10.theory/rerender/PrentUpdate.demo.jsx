import { useState, memo } from 'react';

function Children() {
    console.log('children render');
    return <div>children  {new Date().toISOString()}</div>;
}

function NestedChildren() {
    console.log('nested children render');
    return <div>nested children</div>;
}
function Parent() {
    const [count, setCount] = useState(0);
    console.log('parent render');
    return <div>
        <Children />
        <NestedChildren />
        <button onClick={() => {
            // when the button is clicked, the parent component will re-render
            // all of its children will also re-render even if they haven't changed
            setCount(count + 1);
        }}>update count: {count}</button>
    </div>;
}

Parent.meta = {
    tags: ['rerender'],
};

export default Parent;
