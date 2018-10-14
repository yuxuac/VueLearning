var app = new Vue({
    el: '#app',
    data:  {
        message: 'Hello World!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: function() {
        var msg = '页面加载于 ' + new Date().toLocaleString();
        // Return data
        return {
            message: msg,
        }
    },
    computed: {
        // 绑定一个具体的样式
        fontSize: function() {
            var fsArray = [20, 30, 40]
            return fsArray[Math.floor(Math.random() * Math.floor(3))];
        }
        // Style绑定一个对象
        // styleObject: function() {
        //     var fsArray = [20, 30, 40]
        //     return {
        //         // CSS style, 没有减号
        //         fontSize: fsArray[Math.floor(Math.random() * Math.floor(3))] + 'px'
        //     }
        // }
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: function() {
        return {
            message: "我是APP3", 
        }
    },
    computed: {
        classObject: function(){
            var coArray = ['red', 'yellow', 'green']
            return coArray[Math.floor(Math.random() * Math.floor(3))]
        }
    }
})