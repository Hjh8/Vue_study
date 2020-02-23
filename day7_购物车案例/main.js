
const app = new Vue({
    el: '#app',
    data:{
         books:[
            {
                id:1,
                name:'算法导论',
                date:'2006-9',
                price:85.00,
                count:1
            },
            {
                id:2,
                name:'C语言',
                date:'2002-9',
                price:102.00,
                count:1
            },
            {
                id:3,
                name:'计算机导论',
                date:'1999-9',
                price:75.00,
                count:1
            },
            {
                id:4,
                name:'java',
                date:'2010-9',
                price:99.00,
                count:1
            }
         ]
    },
    computed:{
        totalPrice(){
            let total_price = 0
            // for(let i in this.books)取得是下标
            for(let i of this.books){
                total_price += i.price*i.count
            }
            return total_price
        }
    },
    methods:{
        increment(index){
            this.books[index].count++;
        },
        decrement(index){
            if(this.books[index].count>1){
                this.books[index].count--;
            }
        },
        remove_book(index){
            this.books.splice(index,1)
        }
    },
    filters:{
        showprice(price){
            return '￥' + price.toFixed(2)
        }
    }
})