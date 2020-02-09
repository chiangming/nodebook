# 响应式原理
![reactive](../img/reactive.png)
1. Vue的初始化阶段，对vue的属性进行处理对于data和props,Vue会通过ovserve/defineReactive等系列操作，把整个data和props定义的对象每一个属性编成响应式的，同时内部持有一个dep的实例。
2. 当我们访问到响应式数据的时候，就会触发数据内部dep的depend方法来收集依赖
3. 收集依赖收集的是当前正在计算的watcher，也就是说当前的Dep.target就会作为订阅者来订阅这些数据的变化
4. 当我们修改响应式数据的时候，setter方法通知调用dep.notify方法来通知订阅者
5. 订阅者来执行update的逻辑
6. 对于computed的属性而言，内部会创建computed watcher，每一个computed watcher，每一个watcher会持有一个Dep的实例，
7. 当我们去访问computed的属性的时候，会调用computed watcher的evaluate的计算方法，会触发内部持有的dep去depend去收集依赖，和数据一样，他也会收集到我们当前正在计算的watcehr，将这些watcher做为当前这个dep的subscribes订阅者收集起来
8. 当我们计算属性的依赖值发生变化时，会触发computed watcher重新计算，当计算结果发生变化时，才会通知订阅这个computed变化的这些订阅者，触发他们的更新
9. 对于watch而言，实际上会创建一个user watcher，去观测data、computed等属性的变化，当这些属性发生变化时，会通知dep去遍历所有的user watcher 调用他们的update方法，执行run方法去调用用户定义的回调函数
10. 数据的渲染和重新渲染则是基于响应式系统，在Vue的创建过程中，他会执行每一个组件的mount方法，在mount过程中内部会会创建唯一的render watcher，当组件在执行render过程，也就是渲染成vnode的过程中，会访问到响应式数据，也就是render watcher作为订阅者，去订阅响应式数据，数据的变化会触发render watcher的run方法，在run方法中会执行updateComponent方法去执行重新渲染的过程。

## Vue
### 数据响应
* 在实例化过程中为每个data属性创建dep对象，并为每个属性定义get()和set()方法。
* 为每一个data属性创建watcher对象，首先将Dep.target设置为watcher（Dep为类），再调用其getter()方法，触发了get()方法里的dep.depend()，将watcher添加到dep对象的subs，（储存所有该data属性的watcher），再通过Dep.target，将当前dep添加到watcher中的deps（储存所有该data属性的dep）。总而言之就是建立了data，dep，watcher之间的依赖关系。
* 在数据发生变化时，会调用数据的set()方法，会触发notify()方法，将消息通知该data的dep对象，在dep对象中遍历所有的与dep绑定的watcher，触发他们的update()方法，来更新dom。
### virtual-dom 虚拟节点树
用js实现一个节点树，在发生改变的时候，通过比较新的树和旧的树的变化，就可以记录下变化，然后应用到真实的dom树上，这样就不用重新渲染整个dom树了。
#### 视图渲染
用js对象来表示dom节点
```
//声明一个Element对象
function Element(tagName, props, children) {
    this.tagName = tagName
    this.props = props
    this.children = children
}
//创建一个ul实例
var ul = new Element('ul', {id: 'list'}, [
    {tagName: 'li', props: {class: 'item'}, children: ["Item 1"]},
    {tagName: 'li', props: {class: 'item'}, children: ["Item 2"]},
    {tagName: 'li', props: {class: 'item'}, children: ["Item 3"]}
])
```
将JavaScript构建的DOM树渲染到真实的DOM树上
```
//在Element中写上通用的方法
Element.prototype.render = function() {
    let el = document.createElement(this.tagName), // 节点名称
        props = this.props // 节点属性
    for (var propName in props) {
        propValue = props[propName]
        el.setAttribute(propName, propValue)
    }
    this.children.forEach((child) => {
        var childEl = (child instanceof Element)
            ? child.render()
            : document.createTextNode(child)
        el.appendChild(childEl)
    })
    return el
}
```
每一个vnode都映射到一个真实的dom节点上。其中几个比较重要的属性:
* tag 属性即这个vnode的标签属性
* data 属性包含了最后渲染成真实dom节点后，节点上的class,attribute,style以及绑定的事件
* children 属性是vnode的子节点
* text 属性是文本属性
* elm 属性为这个vnode对应的真实dom节点
* key 属性是vnode的标记，在diff过程中可以提高diff的效率，后文有讲解

#### 比较虚拟DOM树的差异 diff算法

#### 将差异应用到都dom树
