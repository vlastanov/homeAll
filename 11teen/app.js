$(() => {
    const app = Sammy('#app1', function () {
        this.use('Handlebars', 'hbs');

        this.get('/', displayHome);

        function displayHome(context) {
            this.partial('./home.hbs').then(function () {
                // console.log()
                funcFromTypescr('after sammy3')
            })
        }


    }).run()
})