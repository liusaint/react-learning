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
* JSX 的特性更接近 JavaScript 而不是 HTML , 所以 React DOM 使用 camelCase 小驼峰命名 来定义属性的名称
* Babel 转译器会把 JSX 转换成一个名为 React.createElement() 的方法调用。
* 一个元素就好像是动画里的一帧，它代表应用界面在某一时间点的样子。
* 所有的React组件必须像纯函数那样使用它们的props。
* 不要直接更新状态。要使用setState


