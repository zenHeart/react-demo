import React from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

// 创建 vuex 状态
class AppState {
  @observable timer = 0;

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  @action.bound
  reset() {
    this.timer = 0;
  }
}
// 创建状态
const TimerView = observer(({ appState }: { appState: AppState }) => (
  <button onClick={appState.reset}>Seconds passed: {appState.timer}</button>
));

// 利用 mbox 状态
function Show() {
  return <TimerView appState={new AppState()} />
}

export default Show