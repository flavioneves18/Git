// Vue.createApp({
//     data(){
//         return{
//             nome: "", matricula:"",
//         }
//     }
// }).mount("#central")
Vue.createApp({
    data() {
        return {
            nome: "",
            matricula: "",
        };
    },
    methods: {
        formatMatricula() {
            // Remove qualquer caractere que não seja número
            this.matricula = this.matricula.replace(/\D/g, '');

            // Limita o valor a 7 dígitos
            if (this.matricula.length > 7) {
                this.matricula = this.matricula.substring(0, 7);
            }
        }
    }
}).mount("#central");

