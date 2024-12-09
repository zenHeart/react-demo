import React from 'react';
class DemoClassComponent extends React.Component {
    static defaultProps = {
        color: 'blue',
    };
    static getDerivedStateFromError(error) {
        console.log("getDerivedStateFromError, error %o", error);
        return null;
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps, props %o, state %o", props, state);
        return null;
    }


    state = {
        count: 0,
    };

    /**
     * @deprecated
     * in old react
     * if you define a function in class component, you need to bind it in constructor.
     * to avoid this missing binding, you can use arrow function.
     */
    oldAddCount() {
        this.setState({ count: this.state.count + 1 });
    }

    /**
     * @modern
     * in new react, you can use arrow function to define a method in class component.
     * this method is already bound to the component instance.
     */
    addCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    /* in old react, constructor function
    - init state
    - bind event handler

    but in new react, constructor is not used for these purpose.
    becarefule you can't return anything in constructor.

    some rule in constructor:
    - can't return anything, instead use componentDidMount
    - must call super(props) before using `this`, if you don't do this, you will make props undefined in constructor.
    - you only can assign to `this.state` in constructor. in other place, you should use `setState` to update state.
    - in server component, componentDidMount or componentWillUnmount will not run on the server.
    - when strict mode is enabled, contrutor will be called twice in development mode, and then throw away one of the instance.
    this is helps you notice the accidental side effects that need to be moved out of the constructor.
    */
    constructor(props) {
        console.log('constructor init');
        super(props);
        // init state
        this.state = {
            count: props.count,
        };

        // bind event handler
        this.oldAddCount = this.oldAddCount.bind(this);

    }
    /**
     * this use to catch error in class component and child component.
     * can't return anything in this method.
     */
    componentDidCatch(error, info) {
        console.log("error %o, info %o", error, info);
    }

    /**
     * call when the component is about to update   
   * return true to update, return false to not update
   * default is true
   */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate, nextProps %o, nextState %o, nextContext %o", nextProps, nextState, nextContext);
        return true;
    }

    /** 
     * when the component is mounted added to the screen
     * 1. fetch data
     * 2. set up event listener
     * 3. nanipulate dom nodes
     * in summary, this put side effect code.
     * 
     * id development mode will call
     * componentDidMount
     * componentWillUnmount
     * componentDidMount
     * to check the side effect code is correct process in componentWillUnmount
     * 
     * dont call setState in componentDidMount, this will cause re-render.
     */
    componentDidMount() {
        console.log("componentDidMount");
    }

    /**
     * call when props or state is updated, only work in update phase.
     * not trigger in initial render.
     * 
     * use when current state or props is different from previous state or props.
     * you can make network request, or side effect code here.
     * 
     * snapshot is the return value of getSnapshotBeforeUpdate in the same lifecycle.
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.count !== this.state.count) {
            console.log("componentDidUpdate, count is updated");
        }
    }



    /**     
     * call when the component is mounted
     * @deprecated
     */
    componentWillmount() {
        console.log("componentWillUnmount");
    }

    /**     
     * call when the component is mounted
     * you can use codemod to replace old componentWillmount
     */
    UNSAFE_componentWillMount() {
        console.log("UNSAFE_componentWillMount");
    }

    /**
     * call when the component receive props
     * @deprecated
     */
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps, nextProps %o", nextProps);
    }

    /**
     * call when the component receive props
     * you can use codemod to replace old componentWillReceiveProps
     */
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("UNSAFE_componentWillReceiveProps, nextProps %o", nextProps);
    }

    /**
     * call when the component is about to update
     * @deprecated
     */
    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate, nextProps %o, nextState %o", nextProps, nextState);
    }

    /**
     * call when the component is about to update
     * you can use codemod to replace old componentWillUpdate
     */
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log("UNSAFE_componentWillUpdate, nextProps %o, nextState %o", nextProps, nextState);
    }

    /**
     * call when the component is about to unmount
     * 1. unmount side effect code
     */
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    /**
     * force update the component
     */
    forceUpdateClick = () => {
        this.forceUpdate(() => {
            console.log("forceUpdate completed");
        });
    }

    /**
     * call when the component is update dom
     * use to capture some information from the dom
     * you can return anything
     * if shouldComponentUpdate return false, this method will not be called.
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate, prevProps %o, prevState %o", prevProps, prevState);
        return null;
    }


    /**
     * render the component
     * must be defined in class component
     * return a react element
     */
    render() {
        return (<div style={{ color: this.props.color }}>
            <div>
                <button onClick={this.addCount}>add count</button>
                <button onClick={this.forceUpdateClick}>force update</button>
                <button onClick={this.errorClick}>error</button>
            </div>
            <div>
                ClassComponent counter : {this.state.count}
            </div>
        </div>);
    }
}

export default DemoClassComponent;