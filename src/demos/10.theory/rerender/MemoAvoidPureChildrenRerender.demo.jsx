import { useState, memo } from 'react';

const Children = memo(function Children() {
    console.log('children render');
    // beacause the children is wrapped with memo, it will not re-render if the props are the same
    // so even the new Date() is called, the children will not re-render
    return <div>children  {new Date().toISOString()}</div>;
});

const NestedChildren = memo(function NestedChildren() {
    console.log('nested children render');
    return <div>nested children</div>;
});
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
