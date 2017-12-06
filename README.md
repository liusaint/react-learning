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
* 纯函数。一样的输入有一样的输出。没有副作用。一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数。
  * 一个函数执行过程对产生了外部可观察的变化那么就说这个函数是有副作用的。
  * 除了修改外部的变量，一个函数在执行过程中还有很多方式产生外部可观察的变化，比如说调用 DOM API 修改页面，或者你发送了 Ajax 请求，还有调用 window.reload 刷新浏览器，甚至是 console.log 往控制台打印数据也是副作用。纯函数很严格，也就是说你几乎除了计算数据以外什么都不能干，计算的时候还不能依赖除了函数参数以外的数据。 
  * 纯函数非常“靠谱”，执行一个纯函数你不用担心它会干什么坏事，它不会产生不可预料的行为，也不会对外部产生影响。利于调试，测试。
  * 导出模块加括号与不加括号的区别。
  * smart与dumb
  * 组件的函数写法与class写法。
  * 尽管 key 看起来像是 props 的一部分，可是事实上我们无法通过 this.props.key 获取到 key 的值。React 会自动的在判断元素更新时使用 key ，而组件自己是无法获取到 key 的。
  * 数据自顶向下流动。数据提升。
　* 通过 bind 方式向监听函数传参，在类组件中定义的监听函数，事件对象 e 要排在所传递参数的后面
* 使用这个语法有个问题就是每次 LoggingButton 渲染的时候都会创建一个不同的回调函数。在大多数情况下，这没有问题。然而如果这个回调函数作为一个属性值传入低阶组件，这些组件可能会进行额外的重新渲染。我们通常建议在构造函数中绑定或使用属性初始化器语法来避免这类性能问题。
  * jsx与&&运算符。{unreadMessages.length > 0 && <h1>haha</h1>}
  * 组件的 render 方法返回 null 并不会影响该组件生命周期方法的回调。例如，componentWillUpdate 和 componentDidUpdate 依然可以被调用。
  * Keys应该是稳定的，可预测的，且唯一的。
  * key元素的key只有在它和它的兄弟节点对比时才有意义。放遍历的组件上而不是放组件里的细节上。
  * 受控组件。在HTML当中，像<input>,<textarea>, 和 <select>这类表单元素会维持自身状态，并根据用户输入进行更新。但在React中，可变的状态通常保存在组件的状态属性中，并且只能用 setState(). 方法进行更新.
我们通过使react变成一种单一数据源的状态来结合二者。React负责渲染表单的组件仍然控制用户后续输入时所发生的变化。相应的，其值由React控制的输入表单元素称为“受控组件”。
* this.handleChange = this.handleChange.bind(this);  constructor中。
* 在React中，<textarea>会用value属性来代替。
* 事件。原生事件如onClick最好不要绑定在组件上。应该绑定在原生dom上，也就是在组件内部绑。否则只有从组件内部来调用才会有效果。
* event.preventDefault();显示调用
* 当你有处理多个受控的input元素时，你可以通过给每个元素添加一个name属性，来让处理函数根据 event.target.name的值来选择做什么。this.setState({[name]: value });
* 尽管有这些警告，如果你还是坚持要使用context，那么尽量将使用context的代码隔离到一小块地方并避免直接使用context API，这样以后API变更的时候更容易升级。
* props甚至可以传入promise。
* router:http://www.ruanyifeng.com/blog/2016/05/react_router.html
  * onEnter钩子还可以用来做认证。


  #### redux
  * 使用统一的方法来管理全局状态。使得状态变化可追溯，可debug。
  * 增加修改的难度。





#### es6
* 在使用 JavaScript classes 时，你必须调用 super(); 方法才能在继承父类的子类中正确获取到类型的 this 。
* 箭头函数中的this。词法作用域规则。https://github.com/zhengweikeng/blog/blob/master/posts/2016/%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E4%B8%ADthis%E7%9A%84%E7%94%A8%E6%B3%95.md
* class的属性初始化器语法。  handleClick = () => {console.log('this is:', this); }



#### flux架构
跟mvc架构是同一类东西。
* 基本
  * View： 视图层
  * Action（动作）：视图层发出的消息（比如mouseClick）
  * Dispatcher（派发器）：用来接收Actions、执行回调函数
  * Store（数据层）：用来存放应用的状态，一旦发生变动，就提醒Views要更新页面

* 单向数据流
  * 用户访问 View
  * View 发出用户的 Action
  * Dispatcher 收到 Action，要求 Store 进行相应的更新
  * Store 更新后，发出一个"change"事件
  * View 收到"change"事件后，更新页面

https://www.zhihu.com/question/33864532

* Dispatcher 只能有一个，而且是全局的。


### controller与model界限在哪里

* React 本身只涉及UI层。类似蛮荒年代的html做的事？
* Redux 规定， 一个 State 对应一个 View。只要 State 相同，View 就相同。你知道 State，就知道 View 是什么样。纯函数？
* payload
* Reducer 函数最重要的特征是，它是一个纯函数。不得改写参数 不能调用系统 I/O 的API 不能调用Date.now()或者Math.random()等不纯的方法，因为每次会得到不一样的结果。
* 就可以保证同样的State，必定得到同样的 View。但也正因为这一点，Reducer 函数里面不能改变 State，必须返回一个全新的对象。

* reudx
* 最终，为了把 action 和 state 串起来，开发一些函数，这就是 reducer。
* 多个reducer



* mapStateToProps相当于自助地从state中获取信息。要哪些拿哪些。
* 变成高阶组件之后context中获取数据和修改及订阅的过程都放到了connect组件中。
* mapDispatchToProps相当于写好自已上级的事件。传入dispatch。告诉高级组件，本组件中有哪些要修改state的操作。
* 所有的 Dumb 组件都放在 components/ 目录下，所有的 Smart 的组件都放在 containers/ 目录下，这是一种约定俗成的规则。
