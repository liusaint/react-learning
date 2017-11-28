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
* 将这种组件之间共享的状态交给组件最近的公共父节点保管，然后通过 props 把状态传递给子组件，这样就可以在组件之间共享数据了。
* React.js 将组件渲染，并且构造 DOM 元素然后塞入页面的过程称为组件的挂载
* 挂载的时候，React.js 会在组件的 render 之前调用 componentWillMount，在 DOM 元素塞入页面以后调用 componentDidMount。
* componentWillUnmount：组件对应的 DOM 元素从页面中删除之前调用。
* 一些组件启动的动作，包括像 Ajax 数据的拉取操作、一些定时器的启动等，就可以放在 componentWillMount 里面进行，例如 Ajax。
* componentWillUnmount 它的作用就是在组件销毁的时候，做这种清场的工作。例如清除该组件的定时器和其他的数据清理工作。
* 我们一般会把组件的 state 的初始化工作放在 constructor 里面去做；在 componentWillMount 进行组件的启动工作，例如 Ajax 数据拉取、定时器的启动；组件从页面上销毁的时候，有时候需要一些数据的清理，例如定时器的清理，就会放在 componentWillUnmount 里面去做。

说一下本节没有提到的 componentDidMount 。一般来说，有些组件的启动工作是依赖 DOM 的，例如动画的启动，而 componentWillMount 的时候组件还没挂载完成，所以没法进行这些启动工作，这时候就可以把这些操作放在 componentDidMount 当中。
* shouldComponentUpdate(nextProps, nextState)：你可以通过这个方法控制组件是否重新渲染。如果返回 false 组件就不会重新渲染。这个生命周期在 React.js 性能优化上非常有用。
componentWillReceiveProps(nextProps)：组件从父组件接收到新的 props 之前调用。
componentWillUpdate()：组件开始重新渲染之前调用。
componentDidUpdate()：组件重新渲染并且把更改变更到真实的 DOM 以后调用。
* 但是 React.js 并不能完全满足所有 DOM 操作需求，有些时候我们还是需要和 DOM 打交道。比如说你想进入页面以后自动 focus 到某个输入框，你需要调用 input.focus() 的 DOM API，比如说你想动态获取某个 DOM 元素的尺寸来做后续的动画，等等。

React.js 当中提供了 ref 属性来帮助我们获取已经挂载的元素的 DOM 节点，你可以给某个 JSX 元素加上 ref属性。
<input ref={(input) => this.input = input} />。
能不用就不用。
* 所以 React.js 团队认为把事情搞复杂可以防止（警示）大家滥用这个属性。这个属性不必要的情况就不要使用。
* dangerouslySetInnerHTML :<div className='editor-wrapper'dangerouslySetInnerHTML={{__html: this.state.content}} />
* React.js 中的元素的 style 属性的用法和 DOM 里面的 style 不大一样。是对象。
* {{...defaultStyle,...this.props.style}}　对象合并。
* 验证。  static propTypes = {comment: PropTypes.object }　　 PropTypes.object.isRequired
* 虽然 propTypes 帮我们指定了参数类型，但是并没有说这个参数一定要传入，事实上，这些参数默认都是可选的。可选参数我们可以通过配置 defaultProps，让它在不传入的时候有默认值。
* 循环遍历列表的时候要注意传入的key值得跟数据一一固定对应。如果直接用序号i。可能导致组件内部状态错误。
* 组件的内容编写顺序如下：

static 开头的类属性，如 defaultProps、propTypes。
构造函数，constructor。
getter/setter（还不了解的同学可以暂时忽略）。
组件生命周期。
_ 开头的私有方法。
事件监听方法，handle*。
render*开头的方法，有时候 render() 方法里面的内容会分开到不同函数里面进行，这些函数都以 render* 开头。
render() 方法。
* 组件的私有方法都用 _ 开头，所有事件监听的方法都用 handle 开头。把事件监听方法传给组件的时候，属性名用 on 开头。
* 高阶组件就是一个函数，传给它一个组件，它返回一个新的组件。装饰者模式。
* 高阶组件的作用其实不言而喻，其实就是为了组件之间的代码复用。组件可能有着某些相同的逻辑，把这些逻辑抽离出来，放到高阶组件中进行复用。高阶组件内部的包装组件和被包装组件之间通过 props 传递数据。
* context的使用。父组件的声明。　
 　static childContextTypes = {
    themeColor: PropTypes.string
  }
　getChildContext () {
    return { themeColor: this.state.themeColor }
  }
  子组件使用  static contextTypes = {
    themeColor: PropTypes.string
  }　　
  获取：this.context.themeColor
  设置：this.setState({ themeColor: 'green' })


  #### redux
  * 使用统一的方法来管理全局状态。使得状态变化可追溯，可debug。
  * 增加修改的难度。