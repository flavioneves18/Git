new Vue({
    el: '#app',
    data: {
        imageSrc: './off.jpg', // Imagem inicial
        isOn: false
    },
    computed: {
            buttonText() {
                return this.isOn ? 'Desligar' : 'Ligar';
            }
        },
    methods: {
            toggleImage() {
                this.isOn = !this.isOn;
                this.imageSrc = this.isOn ? './on.jpg' : './off.jpg';}}})