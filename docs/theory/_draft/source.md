# 追踪函数执行流程

## render(element, container, cb)
不同类型的 container 会产生什么现象?

1. 创建 root 节点挂载到 `container._reactRootContainer` 上，内部指向 rootFiber 对象
2. 创建空的 `initialFiberNode` 关联到 `root` 的 fiber 节点上
3. 如果 container 首次执行
   1. 修改 `callback` 的 this 指向 fiberRoot
   2. 执行 `updateContainer(children, fiberRoot, parentComponent, callback);` 
   3. 创建一个 update 对象，包含需要更新的内容
        ```js
        {
           expirationTime: expirationTime, // 计算规则
           suspenseConfig: suspenseConfig,
           tag: UpdateState,
           payload: null,
           callback: null,
           next: update, // 指向自身
           callback: callback, // 动态创建指向回调
           payload: {
              element: element, // 动态常见指向 vnode
           }
        }
        ```
   4. 执行 `enqueueUpdate(current$1=fiberRoot.state, update);` 在 `fiberRoot.current.updateQueue.shared` 挂载更新对象
   5. 
### 核心流程
1. `legacyRenderSubtreeIntoContainer(parentComponent = null, element,container, forceHydrate= false, cb)` 返回该渲染结果
   1. 初始化 `root = container._reactRootContainer，fiberRoot` 变量
   2. root 为空执行创建逻辑
      1. `root = container._reactRootContainer = legacyCreateRootFromDOMContainer(container, forceHydrate)` 创建 root 节点
         1. `createLegacyRoot(container, shouldHydrate ? {hydrate: true} : undefined);` 创建 root 节点
            1. `new ReactDOMBlockingRoot(container, LegacyRoot, options)` 创建节点
               1. `this._internalRoot = createRootImpl(container, tag, options)`
                  1. `root = createContainer(container, tag, hydrate)` 创建节点
                     1. 返回 `createFiberRoot(containerInfo, tag, hydrate)` 对象 ⭐
                        1. `var root = new FiberRootNode(containerInfo, tag, hydrate);`
                        2. `var uninitializedFiber = createHostRootFiber(tag);` 初始化一个普通的 fiber 节点
                        3. `initializeUpdateQueue(uninitializedFiber)` 初始化 fiber 节点
                           1. `uninitializedFiber.updateQueue = queue` 属性
                        4. 返回 root
                  2.  ` markContainerAsRoot(root.current, container);` 标记节点
      2. `fiberRoot = root._internalRoot`
      3. `var instance = getPublicRootInstance(fiberRoot);originalCallback.call(instance);` 修改原始回调的 this 指向 `container._reactRootContainer._internalRoot` rootFiber 对象
      4. 执行初始更新，详见大步骤 2
   
         ```js
        unbatchedUpdates(function () {
            updateContainer(children, fiberRoot, parentComponent, callback);
        });
         ```
   3. root 不为空执行更新逻辑
   4. 执行完成从 `getPublicRootInstance(fiberRoot)` 返回空间点 
2. `unbatchedUpdates(fn, a)` 执行初始更新
   1. `executionContext` 执行栈类型标记
   2. 触发传入的 `fn` 执行 `updateContainer(children = vdom, fiberRoot = container._reactRootContainer._internalRoot, parentComponent = null, callback = () => cb.(fiberRoot));` 方法，采用 `try {} finally {}` 捕获渲染错误
      1.  `onScheduleRoot(container, element);` 调度算法？？？
      2.  `var currentTime = requestCurrentTimeForUpdate();` 计算当前时间
      3.  `createUpdate(expirationTime, suspenseConfig = null)` 的 update 结构
        ```js
        {
            expirationTime: expirationTime, // 计算规则
            suspenseConfig: suspenseConfig,
            tag: UpdateState,
            payload: null,
            callback: null,
            next: update, // 指向自身
        };
        ```
    4. 动态添加 `update.payload = { element: element};update.callback =callback;` 
    5. `enqueueUpdate(current$1=fiberRoot.state, update);` 将 update 挂载到 fiberRoot.current 指向的子节点
    6. `scheduleWork(current$1, expirationTime);` 在设定的过期时间内执行调度任务
    7. 参见步骤 3 子节点 fiber 的更新逻辑
3. `scheduleUpdateOnFiber(fiber, expirationTime)` 在设定的超期时间内执行 fiber 调度⭐⭐⭐⭐⭐ 重点函数执行 fiber 更新
   1. `markUpdateTimeFromFiberToRoot(fiber, expirationTime);` 将过期时间标注在 fiberRoot 上
   2. `recordScheduleUpdate()` 记录调度更新逻辑
   3. `performSyncWorkOnRoot(root)`
      1. `prepareFreshStack(root, expirationTime);` 
         1. 创建了 workInProgress
      2. `startWorkOnPendingInteractions(root, expirationTime);` 执行挂载的交互
      3. `workInProgress` 非空递归执行，startWorkLoopTimer(workInProgress); 标记开始
      4. `workLoopSync();` 循环执行
         1. 执行 `while (workInProgress !== null) {workInProgress =performUnitOfWork(workInProgress);}` 直到 workInProgress 为空
            1. 链表执行 `next = completeUnitOfWork(unitOfWork);` 直到结束
    4. `popDispatcher(prevDispatcher);` ??? 作用
    5. `popInteractions(prevInteractions);` ??
    6. `finishSyncRender(root );` 完成同步渲染 
       1. `commitRoot(root);` 提交 fiberRoot 节点执行渲染逻辑


### 问题
核心数据结构包括
1. `fiberRoot = container._reactRootContainer._internalRoot`，`createFiberRoot(containerInfo, tag, hydrate);` 创建, 该对象的作用
2. `root = container._reactRootContainer` 节点
    ```
    {
       _internalRoot:  createRootImpl(container, tag, options)
    }
    ```
     是 root 对象
3. * [ ] forceHydrate 的作用是什么？
4. * [ ] `shouldHydrateDueToLegacyHeuristic` 的作用？
5. * [ ] while(rootSibling = container.lastChild) 遍历的逻辑？
6. isModernRoot 判断作用
7. `eagerlyTrapReplayableEvents(container, doc);` 作用
8. `executionContext` 的作用和不同类型的意义
   1. `BatchedContext` 
   2. `LegacyUnbatchedContext`
9. `expirationTime` 的作用
10. `flushPassiveEffects` 作用