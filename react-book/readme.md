学习react小书

4.
一个组件有自己的显示形态（上面的 HTML 结构和内容）行为，组件的显示形态和行为可以由数据状态（state）和配置参数（props）共同决定。数据状态和配置参数的改变都会影响到这个组件的显示形态。

当数据变化的时候，组件的显示需要更新。所以如果组件化的模式能提供一种高效的方式自动化地帮助我们更新页面，那也就可以大大地降低我们代码的复杂度，带来更好的可维护性。

6.所谓的 JSX 其实就是 JavaScript 对象
jsx可以方便地转换成native或其他非dom结构。

9.这些 on* 的事件监听只能用在普通的 HTML 的标签上，而不能用在组件标签上

20.有朋友对 Virtual-DOM 策略比较感兴趣的话，可以参考这篇博客：深度剖析：如何实现一个 Virtual DOM 算法 。https://github.com/livoras/blog/issues/13

ref在componentDidMount后可以使用。能不用 ref 就不用。多余的是dom操作是代码中的噪声。

props.children 和容器类组件以及类比vue中的slot.

高阶组件内部的包装组件和被包装组件之间通过 props 传递数据。