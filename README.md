# react-learning
学习react

* jsx 中括号中的内容注意
```
const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
```
* render
```
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
* 大括号包裹的 JavaScript 表达式时就不要再到外面套引号了。JSX 会将引号当中的内容识别为字符串而不是表达式。
* JSX 的特性更接近 JavaScript 而不是 HTML , 所以 React DOM 使用 camelCase 小驼峰命名 来定义属性的名称。className,htmlFor。
* Babel 转译器会把 JSX 转换成一个名为 React.createElement() 的方法调用。
* 一个元素就好像是动画里的一帧，它代表应用界面在某一时间点的样子。
* 所有的React组件必须像纯函数那样使用它们的props。
* 不要直接更新状态。要使用setState。
* JSX要有一个根节点。不能是两个并列的。
* JSX表达式插入{}。
* JSX可做元素变量。
* 自定义的组件都必须要用大写字母开头，普通的 HTML 标签都用小写字母开头。
* 没有经过特殊处理的话，这些 on* 的事件监听只能用在普通的HTML的标签上，而不能用在组件标签上。
* event。经过了封装的。
* 事件中的this。如是实例方法传递时需bind(this)。
* setState 接受对象参数。
* 当你调用 setState 的时候，React.js 并不会马上修改 state。其实是异步的，而且会合并。当传递函数时，函数的第一个参数是上一个setState的结果。
* 事件命名handleClickOnDog。
* 在使用一个组件的时候，可以把参数放在标签的属性当中，所有的属性都会作为 props 对象的键值
* this.props
* 箭头函数的使用。以及this的指向。
* 默认配置 defaultProps。  static defaultProps = {likedText: '取消', unlikedText: '点赞'}。　注意是=号
* React.js 希望一个组件在输入确定的 props 的时候，能够输出确定的 UI 显示形态。如果 props 渲染过程中可以被修改，那么就会导致这个组件显示形态和行为变得不可预测，这样会可能会给组件使用者带来困惑。
但这并不意味着由 props 决定的显示形态不能被修改。组件的使用者可以主动地通过重新渲染的方式把新的 props 传入组件当中，这样这个组件中由 props 决定的显示形态也会得到相应的改变。
* state 是让组件控制自己的状态，props 是让外部对组件自己进行配置。
* 尽量少地用 state，尽量多地用 props。
没有 state 的组件叫无状态组件（stateless component），设置了 state 的叫做有状态组件（stateful component）。因为状态会带来管理的复杂性，我们尽量多地写无状态组件，尽量少地写有状态的组件。
* 渲染存放 JSX 元素的数组。会依次输出。