###
1.rudux,react-redux,flux。
2.store。createStore。store有哪些功能。　dispatch subcribe getState
3.reducer。的作用。
4.redux与react的结合使用。context与store。以及createStore。传入需要的数据。全局状态在组件中的应用？　新旧数据的对比如何？是利用react自身的对比机制么。
5.connect函数的封装。要修改store中的数据怎么处理。因为组件中已经不包含store了。
6.理解mapStateToProps, mapDispatchToProps。　传入connect。在connext中把store的state和dispatch给函数使用。然后返回我们组件需要的props和可以调用dispatch改变内容的函数。
7.Provider。组件。需要传入store作为初始的值。然后将children放进去。
8.mapState其实也可以看作是作了一个映射。将store中的key改成我们的key。
9.对于很多重复的mapStateToProps, mapDispatchToProps要怎么优雅地处理。