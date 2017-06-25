# UEditor 配置一个带有插件的Deno Update on 2017.6.25
### 创建Demo文件
##### UEditor路径：github.com/hizhuzhan/UEditor/js/ueditor/*
* 创建Demo.html并引入js文件
```javascript
<!-- 配置文件 config.js -->
<script type="text/javascript" charset="utf-8" src="js/ueditor/ueditor.config.js"></script>
<!-- 编辑器源码文件 ueditor.all.js -->
<script type="text/javascript" charset="utf-8" src="js/ueditor/ueditor.all.js"></script>
<!-- zh-cn.js -->
<script type="text/javascript" charset="utf-8" src="js/ueditor/lang/zh-cn/zh-cn.js"></script>
<!--Fromdesign扩展-->
<script type="text/javascript" charset="utf-8" src="js/ueditor/Formdesign/leipi.Formdesign.v4.js"></script>
```
* 加载编辑器的容器
```javascript
<script id="container" name="content" type="text/plain">
    这里写你的初始化内容
</script>
```
* 实例化编辑器
```javascript

```

