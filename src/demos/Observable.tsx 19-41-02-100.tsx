import React from 'react'
import { observer } from "mobx-react";
import { observable, keys } from "mobx";

class Store {
  @observable primitiveVal = 1;
  @observable arr = [1, 2, 3];
}

let store = (window as any)._os = new Store();
const ShowObserval = observer(() => {
  return (
    <div>
      {keys(store).map(key => {
        let data = (store as any)[key];
        console.log(key, data);
        return (
          <p><strong>{key}:</strong>{data}</p>
        )
      })}
    </div>
  )
})
export default ShowObserval;

