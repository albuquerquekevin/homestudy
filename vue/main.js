var app = new Vue({
    el: '#app',
    data: {
      message: 'Olá Vue!'
    }
})

var app2 = new Vue({
  el: '#app2',
  data:{
    message: 'D. Pedro gritou YUKEEEEEEEEEEEEEE em ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app3',
  data:{
    seen: true
  }
})

var app4 = new Vue({
  el: '#app4',
  data:{
    todos:[
      {text: 'Dançar Funk'},
      {text: 'Fazer chapinha'},
      {text: 'Causar e te humilhar'}
    ]
  }
})

var app5 = new Vue({
  el: '#app5',
  data:{
    message: 'Bora abalar bb'
  },
  methods:{
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app6',
  data: {
    message: 'Vamo trocar'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app7',
  data:{
    groceryList:[
      {id: 0, text: 'Vegetais'},
      {id: 1, text: 'Queijo'},
      {id: 2, text: 'Qualquer outra coisa meu filho'}
    ]
  }
})

var app8 = new Vue({
  el: '#app8',
  data: {
    message: 'Olá turubõ',
  },
  computed:{
    reversedMessage: function(){
      return this.message.split('').reverse().join('')
    }
  }
})

var watchExampleVm = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'Não posso responder até você me perguntar'
  },
  watch: {
    question: function(newQuestion, oldQuestion){
      this.answer = 'Esperando você me contar suas angústias hihi'
      this.getAnswer()
    }
  },
  methods:{
    getAnswer: _.debounce(
      function(){
        var vm = this
        if (vm.question.indexOf('?') === -1){
          vm.answer = 'Cadê a interrogação bb? Me respeita que eu te respeito.'
          return
        }
      vm.answer = 'Pensando...'
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = response.data.answer === 'yes' ? 'Ohom, com certeza.' :
            response.data.answer === 'no' ? 'Não, mas to indecisa' : 'Talvez chuchu, mas não cria esperança'
        })
        .catch(function (error){
          vm.answer = 'Erro! Minha conexão com o cosmos está fraca.' + error
        })
      }, 500
    )
  }
})

var app9 = new Vue({
  el: '#app9',
  data: {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
})

var app10 = new Vue({
  el: '#app10',
  data: {
    gender: 'female'
  }
})
