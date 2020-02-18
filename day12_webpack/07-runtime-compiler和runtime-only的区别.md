
vue内部的大致执行过程：
```
template-> ast(抽象语法树)-> render函数-> virtual dom-> 真实DOM(UI)
```
runtime-compiler的执行过程：
```
template-> ast-> render-> vdom-> ui
```
runtime-only的执行过程：
```
render-> vdom-> ui
```
综上所述：
```
runtime-only的性能更好，代码量更少(小6kb),常用
```
