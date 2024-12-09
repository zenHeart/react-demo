import { useState } from 'react';

export default function FunctionComponent() {
    const [count, setCount] = useState(0);

    return <div>
        <div>
            <button onClick={() => {
                setCount(count + 1);
            }}>add count</button>
        </div>
        <p>FunctionComponent count: {count}</p>
    </div>;
}

