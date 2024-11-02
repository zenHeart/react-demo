// ================ React Core Implementation ================

// 1. Element creation
function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: []
        },
    };
}

function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...(props || {}),  // Add null check for props
            children: children.map((child) =>
                child === null || child === undefined
                    ? createTextElement("")
                    : typeof child === "object"
                        ? child
                        : createTextElement(child)
            ),
        },
    };
}

// 2. DOM operations
function createDom(fiber) {
    const dom =
        fiber.type === "TEXT_ELEMENT"
            ? document.createTextNode("")
            : document.createElement(fiber.type);

    updateDom(dom, {}, fiber.props || {});  // Add null check for props
    return dom;
}


function updateDom(dom, prevProps, nextProps) {
    // Ensure props are objects
    prevProps = prevProps || {};
    nextProps = nextProps || {};
    const isEvent = (key) => key.startsWith("on");
    const isProperty = (key) =>
        key !== "children" &&
        !isEvent(key) &&
        key !== "style" &&
        key !== "className";

    // Remove old or changed event listeners
    Object.keys(prevProps)
        .filter(isEvent)
        .filter(
            (key) => !(key in nextProps) || prevProps[key] !== nextProps[key]
        )
        .forEach((name) => {
            const eventType = name.toLowerCase().substring(2);
            if (prevProps[name]) {  // Check if event handler exists
                dom.removeEventListener(eventType, prevProps[name]);
            }
        });

    // Add new event listeners
    Object.keys(nextProps)
        .filter(isEvent)
        .filter((key) => prevProps[key] !== nextProps[key])
        .forEach((name) => {
            const eventType = name.toLowerCase().substring(2);
            if (nextProps[name]) {  // Check if event handler exists
                dom.addEventListener(eventType, nextProps[name]);
            }
        });

    // Remove old properties
    Object.keys(prevProps)
        .filter(isProperty)
        .filter((key) => !(key in nextProps))
        .forEach((name) => {
            dom[name] = "";
        });

    // Set new or changed properties
    Object.keys(nextProps)
        .filter(isProperty)
        .filter((key) => prevProps[key] !== nextProps[key])
        .forEach((name) => {
            dom[name] = nextProps[name];
        });

    // Handle styles separately with null checks
    if (prevProps.style || nextProps.style) {
        const prevStyle = prevProps.style || {};
        const nextStyle = nextProps.style || {};

        // Remove old styles
        Object.keys(prevStyle).forEach((key) => {
            if (!nextStyle || !(key in nextStyle)) {
                dom.style[key] = "";
            }
        });

        // Set new styles
        if (nextStyle) {
            Object.keys(nextStyle).forEach((key) => {
                if (!prevStyle || prevStyle[key] !== nextStyle[key]) {
                    dom.style[key] = nextStyle[key];
                }
            });
        }
    }

    // Set new or changed className
    if (prevProps.className !== nextProps.className) {
        const prevClassNames = prevProps.className
            ? prevProps.className.split(" ")
            : [];
        const nextClassNames = nextProps.className
            ? nextProps.className.split(" ")
            : [];
        const classNamesToRemove = prevClassNames.filter(
            (className) => !nextClassNames.includes(className)
        );
        const classNamesToAdd = nextClassNames.filter(
            (className) => !prevClassNames.includes(className)
        );

        classNamesToRemove.forEach((className) => {
            if (className) dom.classList.remove(className);
        });

        classNamesToAdd.forEach((className) => {
            if (className) dom.classList.add(className);
        });
    }
}

// 3. Reconciliation
function reconcileChildren(wipFiber, elements) {
    let index = 0;
    let oldFiber = wipFiber.alternate && wipFiber.alternate.child;
    let prevSibling = null;
    elements = elements || [];  // Ensure elements is an array


    while (index < elements.length || oldFiber) {
        const element = elements[index];
        let newFiber = null;

        const sameType =
            oldFiber && element && element.type === oldFiber.type;

        if (element && sameType) {
            newFiber = {
                type: oldFiber.type,
                props: element.props,
                dom: oldFiber.dom,
                parent: wipFiber,
                alternate: oldFiber,
                effectTag: "UPDATE",
            };
        }

        if (element && !sameType) {
            newFiber = {
                type: element.type,
                props: element.props,
                dom: null,
                parent: wipFiber,
                alternate: null,
                effectTag: "PLACEMENT",
            };
        }

        if (oldFiber && !sameType) {
            oldFiber.effectTag = "DELETION";
            deletions.push(oldFiber);
        }


        if (oldFiber) {
            oldFiber = oldFiber.sibling;
        }

        if (index === 0) {
            wipFiber.child = newFiber;
        } else if (element && prevSibling) {
            prevSibling.sibling = newFiber;
        }

        prevSibling = newFiber;
        index++;
    }
}

// 4. Fiber tree and work loop
let nextUnitOfWork = null;
let currentRoot = null;
let wipRoot = null;
let deletions = [];
let wipEffectHooks = null;

let wipFiber = null;
let hookIndex = null;

function updateFunctionComponent(fiber) {
    wipFiber = fiber;
    hookIndex = 0;
    wipFiber.hooks = [];
    try {
        const children = [fiber.type(fiber.props || {})];  // Add null check for props
        reconcileChildren(fiber, children);
    } catch (error) {
        console.error('Error in function component:', error);
        // Handle error gracefully
        reconcileChildren(fiber, []);
    }
}

function updateHostComponent(fiber) {
    if (!fiber.dom) {
        fiber.dom = createDom(fiber);
    }
    reconcileChildren(fiber, fiber.props?.children || []);  // Safe access to children
}

function performUnitOfWork(fiber) {
    const isFunctionComponent = typeof fiber.type === "function";
    if (isFunctionComponent) updateFunctionComponent(fiber);
    else updateHostComponent(fiber);

    if (fiber.child) return fiber.child;
    let nextFiber = fiber;
    while (nextFiber) {
        if (nextFiber.sibling) return nextFiber.sibling;
        nextFiber = nextFiber.parent;
    }
}

function commitDeletion(fiber, domParent) {
    if (fiber.dom) domParent.removeChild(fiber.dom);
    else commitDeletion(fiber.child, domParent);
}

function commitWork(fiber) {
    if (!fiber) return;
    let domParentFiber = fiber.parent;
    while (!domParentFiber.dom) domParentFiber = domParentFiber.parent;
    const domParent = domParentFiber.dom;

    if (fiber.effectTag === "PLACEMENT" && fiber.dom)
        domParent.appendChild(fiber.dom);
    else if (fiber.effectTag === "UPDATE" && fiber.dom)
        updateDom(fiber.dom, fiber.alternate.props, fiber.props);
    else if (fiber.effectTag === "DELETION")
        commitDeletion(fiber, domParent);

    commitWork(fiber.child);
    commitWork(fiber.sibling);
}

function commitRoot() {
    deletions.forEach(commitWork);
    commitWork(wipRoot.child);
    currentRoot = wipRoot;
    wipRoot = null;
    commitEffects();
}

function workLoop(deadline) {
    let shouldYield = false;
    while (nextUnitOfWork && !shouldYield) {
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
        shouldYield = deadline.timeRemaining() < 1;
    }

    if (!nextUnitOfWork && wipRoot) commitRoot();
    requestIdleCallback(workLoop);
}

function render(element, container) {
    wipRoot = {
        dom: container,
        props: { children: [element] },
        alternate: currentRoot,
    };
    deletions = [];
    nextUnitOfWork = wipRoot;
    requestIdleCallback(workLoop);
}

// 5. Hooks
// useState
function useState(initial) {
    const oldHook =
        wipFiber.alternate &&
        wipFiber.alternate.hooks &&
        wipFiber.alternate.hooks[hookIndex];

    const hook = {
        state: oldHook ? oldHook.state : initial,
        queue: [],
    };

    const actions = oldHook ? oldHook.queue : [];
    actions.forEach((action) => {
        hook.state =
            typeof action === "function" ? action(hook.state) : action;
    });

    const setState = (action) => {
        hook.queue.push(action);
        wipRoot = {
            dom: currentRoot.dom,
            props: currentRoot.props,
            alternate: currentRoot,
        };
        nextUnitOfWork = wipRoot;
        deletions = [];
    };

    wipFiber.hooks = wipFiber.hooks || [];
    wipFiber.hooks.push(hook);
    hookIndex++;
    return [hook.state, setState];
}

// useEffect
function useEffect(callback, dependencies) {
    const oldHook =
        wipFiber.alternate &&
        wipFiber.alternate.hooks &&
        wipFiber.alternate.hooks[hookIndex];
    const hasChanged = dependencies
        ? !oldHook ||
        !dependencies.every((dep, i) => dep === oldHook.dependencies[i])
        : true;

    const hook = { callback, dependencies, hasChanged };

    wipFiber.hooks.push(hook);
    hookIndex++;

    if (hasChanged) {
        wipEffectHooks = wipEffectHooks || [];
        wipEffectHooks.push(() => {
            hook.cleanup && hook.cleanup();
            hook.cleanup = callback();
        });
    }
}

function commitEffects() {
    wipEffectHooks && wipEffectHooks.forEach((effect) => effect());
}

// useReducer
function useReducer(reducer, initialState) {
    const [state, setState] = useState(initialState);

    function dispatch(action) {
        setState((prevState) => reducer(prevState, action));
    }

    return [state, dispatch];
}

// useContext
const ReactContext = {};

function createContext(defaultValue) {
    const context = {
        Provider: ({ value, children }) => {
            context._currentValue = value;
            return children;
        },
        _currentValue: defaultValue,
    };
    ReactContext[context] = context;
    return context;
}

function useContext(context) {
    return context._currentValue;
}

// useMemo
function useMemo(factory, dependencies) {
    const oldHook =
        wipFiber.alternate &&
        wipFiber.alternate.hooks &&
        wipFiber.alternate.hooks[hookIndex];
    const hasChanged = dependencies
        ? !oldHook ||
        !dependencies.every((dep, i) => dep === oldHook.dependencies[i])
        : true;

    const hook = {
        memoizedState: hasChanged ? factory() : oldHook.memoizedState,
        dependencies,
    };

    wipFiber.hooks.push(hook);
    hookIndex++;
    return hook.memoizedState;
}

// useCallback
function useCallback(callback, dependencies) {
    return useMemo(() => callback, dependencies);
}

// useRef
function useRef(initialValue) {
    return useMemo(() => ({ current: initialValue }), []);
}

// 6. Higher Order Components
// memo
function memo(Component) {
    return function MemoizedComponent(props) {
        const prevProps = MemoizedComponent.prevProps;
        if (prevProps && shallowEqual(prevProps, props)) {
            return MemoizedComponent.prevRendered;
        }
        const rendered = Component(props);
        MemoizedComponent.prevProps = props;
        MemoizedComponent.prevRendered = rendered;
        return rendered;
    };
}

function shallowEqual(objA, objB) {
    if (objA === objB) return true;
    if (
        typeof objA !== "object" ||
        objA === null ||
        typeof objB !== "object" ||
        objB === null
    )
        return false;
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for (let i = 0; i < keysA.length; i++) {
        if (
            !objB.hasOwnProperty(keysA[i]) ||
            objA[keysA[i]] !== objB[keysA[i]]
        )
            return false;
    }
    return true;
}

// forwardRef
function forwardRef(render) {
    return function (props, ref) {
        return render(props, ref);
    };
}

// 7. Lazy and Suspense
function lazy(ctor) {
    let status = "pending";
    let result;
    let suspender = ctor().then(
        (module) => {
            status = "success";
            result = module.default;
        },
        (error) => {
            status = "error";
            result = error;
        }
    );

    return function LazyComponent(props) {
        if (status === "pending") {
            throw suspender;
        } else if (status === "error") {
            throw result;
        } else if (status === "success") {
            return createElement(result, props);
        }
    };
}

function Suspense({ fallback, children }) {
    try {
        return children;
    } catch (promise) {
        if (typeof promise.then === "function") {
            promise.then(() => {
                wipRoot = {
                    dom: currentRoot.dom,
                    props: currentRoot.props,
                    alternate: currentRoot,
                };
                nextUnitOfWork = wipRoot;
                deletions = [];
            });
        }
        return fallback;
    }
}

// 8. Fragment
function Fragment({ children }) {
    return children;
}

// 9. Profiler
function Profiler({ id, onRender, children }) {
    const start = performance.now();
    const result = children;
    const end = performance.now();
    onRender(id, start, end);
    return result;
}