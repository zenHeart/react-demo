 function cancelPromise() {
   let dismiss
   
   let asyncList = []
 
   return {
     async invoke(asyncFunc) {
      let a
      if(dismiss===undefined) {
         a = new Promise((res, rej) => dismiss = res)
         asyncList = []
      }
       asyncList.push(asyncFunc())
 
       return Promise.race([...asyncList, a])
     },
     async cancel() {
      dismiss('cancel')
      dismiss= undefined
     },
   }
 }
 const createAsync = (val, time) => () => new Promise(res => setTimeout(res.bind(this,val), time))
 const cancelPl = cancelPromise()

cancelPl.invoke(createAsync('a',3)).then(console.log)
cancelPl.invoke(createAsync('b',3)).then(console.log)
cancelPl.invoke(createAsync('c',3)).then(console.log)
cancelPl.cancel()
cancelPl.invoke(createAsync('d',3)).then(console.log)


