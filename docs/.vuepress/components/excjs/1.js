export const selectOption = {
  first: [{
      btn: "A",
      sel: "false,true"
    },
    {
      btn: "B",
      sel: "'Lydia',21"
    },
    {
      btn: "C",
      sel: "true,true"
    },
    {
      btn: "D",
      sel: "undefined,undefined"
    }
  ],
  second: [{
      btn: "A",
      sel: "{name:'Lydia',age:21},['name','age']"
    },
    {
      btn: "B",
      sel: "{name:'Lydia',age:21},['name']"
    },
    {
      btn: "C",
      sel: "{name:'Lydia'},['name','age']"
    },
    {
      btn: "D",
      sel: "{name:'Lydia'},['age']"
    }
  ],
  third: [{
      btn: "A",
      sel: "21"
    },
    {
      btn: "B",
      sel: "undefined"
    },
    {
      btn: "C",
      sel: "ReferenceError"
    },
    {
      btn: "D",
      sel: "TypeError"
    }
  ],
  answer: {
    first: 'A',
    second: 'B',
    third: 'C'
  },
  tips: {
    first: ' delete 操作符返回一个布尔值：true 值删除成功，否则返回 false ,但是通过 var , const , let 关键字声明的变量无法用 delete 操作符删除。 <br/>name 变量由 const 关键字声明，所以删除不成功返回 false ，而设定 age 等于 21 时，实际上添加了名为 age 的属性给全局对象，对象中的属性是可以删除的，所以 delete age 返回 true ',
    second: '通过 defineProperty 方法,我们可以给对象添加一个新属性, 或者修改已经存在的属性。 而我们使用 defineProperty  方法给对象添加了一个属性之后, 属性默认为不可枚举( not enumerable ), Object.keys 方法仅返回对象中可枚举 enumerable 的属性,因此只剩下了 name 。 <br/>用 defineProperty方法添加的属性默认不可变。 你可以通过 writable, configurable 和 enumerable 属性来改变这一行为。 这样的话, 相比于自己添加的属性, defineProperty 方法添加的属性有了更多的控制权',
    third: '使用 use strict ,可以确保不会意外地声明全局变量。我们从未声明变量 age, 因为我们使用 use strict ,它会引发一个 Reference error。如果我们不使用 use strict ",它就会起作用,因为属性age会被添加到全局对象中。'
  }
};