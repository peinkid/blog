export const selectOption = {
    first: [{
            btn: "A",
            sel: "1"
        },
        {
            btn: "B",
            sel: "2"
        },
        {
            btn: "C",
            sel: "2 and 3"
        },
        {
            btn: "D",
            sel: "All of them"
        }
    ],
    second: [{
            btn: "A",
            sel: "['a','b','c']"
        },
        {
            btn: "B",
            sel: "['a','b','c','d']"
        },
        {
            btn: "C",
            sel: "['a','b','c',{item:'d'}]"
        },
        {
            btn: "D",
            sel: "['a','b','c','[object Object]']"
        }
    ],
    third: [{
            btn: "A",
            sel: "undefined is 21;Lydia is 21"
        },
        {
            btn: "B",
            sel: "function;function"
        },
        {
            btn: "C",
            sel: "Lydia is 21;Lydia is 21"
        },
        {
            btn: "D",
            sel: "Lydia is 21;function"
        }
    ],
    answer: {
        first: 'B',
        second: 'B',
        third: 'D'
    },
    tips: {
        first: "当通过 set 方法添加一个键值对,一个传递给set方法的参数将会是键名, 第二个参数将会是值。在这个 case 里, 键名为函数 () => 'greeting',值为 Hello world 。myMap 现在就是{()=>'greeting' => Hello world }。<br/>1 是错的, 因为键名不是 greeting 而是 () => 'greeting'。3是错的,因为我们给 get 方法传递了新的函数,对象受引用影响,函数也是对象, 因此两个函数严格上并不等价, 尽管他们相同，但他们有两个不同的内存引用地址。",
        second: "通过解构对象们,我们可以从右手边的对象中拆出值,并且将拆出的值分配给左手边对象同名的属性。 在这种情况下, 我们将值 d 分配给 items[3] 。 相当于我们正在篡改数组 items, 添加了 d 这个值。",
        third: "使用两者,我们可以传递我们想要 this 关键字引用的对象。 但是, call 方法会立即执行。<br/>bind 方法会返回函数的拷贝值, 但带有绑定的上下文,它不会立即执行。"
    }
};