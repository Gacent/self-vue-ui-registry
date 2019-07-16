# @jasonjohn/zjsui

## 初探上传包

### Using npm:

- $ npm i -g npm
- $ npm i --save @jasonjohn/zjsui

### Using package

- `import zjsui from '@jasonjohn/zjsui'`
- `import '@jasonjohn/zjsui/dist/zjsui.css'`

### 组件
1. TopBar
```javascript
/*topname:为标题名字
 *toLink:为点击标题触发的methods方法
*/ 
<TopBar :topname='xxx' @toLink='xxx'>
```