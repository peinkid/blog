export const selectOption = {
    first: [{
            btn: "A",
            sel: "10"
        },
        {
            btn: "B",
            sel: "11"
        },
        {
            btn: "C",
            sel: "Error"
        },
        {
            btn: "D",
            sel: "NaN"
        }
    ],
    second: [{
            btn: "A",
            sel: `Lydia 21 [""," is "," years old"]`
        },
        {
            btn: "B",
            sel: `[""," is "," years old"] Lydia 21`
        },
        {
            btn: "C",
            sel: `Lydia [""," is "," years old"] 21`
        },
        {
            btn: "D",
            sel: "Error"
        }
    ],
    third: [{
            btn: "A",
            sel: `undefined {n:2}`
        },
        {
            btn: "B",
            sel: `undefined undefined`
        },
        {
            btn: "C",
            sel: `{n:2} undefined`
        },
        {
            btn: "D",
            sel: "{n:2} {n:2}"
        }
    ],
    answer: {
        first: 'C',
        second: 'B',
        third: 'A'
    },
    tips: {
        first: "引入的模块是只读的，你不能修改引入的模块。只有导出他们的模块才能修改其值",
        second: "如果使用标记的模板字符串，则第一个参数始终是字符串值的数组。其余参数获取传递到模板字符串的表达式的值",
        third: `.的优先级高于 =，所以先执行a.x，堆内存中的{n: 1}就会变成{n: 1, x: undefined}，改变之后相应的b.x也变化了，因为指向的是同一个对象。<br/>赋值操作是从右到左，所以先执行a = {n: 2}，a的引用就被改变了，然后这个返回值又赋值给了a.x，需要注意的是这时候a.x是第一步中的{n: 1, x: undefined}那个对象，其实就是b.x，相当于b.x = {n: 2}`
    }
};