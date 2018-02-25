$(() => {

    const username = 'q'
    const password = 'q'
    const tokenRegister = '4149c849-c91f-4fa2-b68d-efeee50fcfe9.0LY7lRdlgfM9O5IwqB9Au3kUyYsnyE2wDGFxQMXpTxQ='
    const tokenLogin = '88f8b428-9265-4e45-a604-4b08f73fbce0.g9lpx93HzuwU84NEW9W0hv0ELb2BmjMmJGki6TbnunY='

    const app = Sammy('#app1', function () {
        this.use('Handlebars', 'hbs');

        this.get('/', displayHome);
        this.get('#/home', displayHome);
        this.get('#/snimka1', function () {
            this.partial('./templates/dvukrili/snimka1.hbs');
        });
        this.get('#/snimka2', function () {
            console.log('snimka2')
        });
        this.get('#/snimka3', function () {
            console.log('snimka3')
        });

        function displayHome(context) {
            context.loadPartials({
                header: './templates/common/header.hbs',
                home: './templates/home/home.hbs'
            }).then(function () {
                this.partial('./templates/home/homePage.hbs').then(function () {
                    $('section').hide()

                    let links = $('#main').find('a[data-target]')

                    links.click(navigateTo)
                    handlers1('str1').get
                    handlers2.Met('str2')
                    function navigateTo() {

                        links.children().addClass('scaleDown').removeClass('scaleUp')

                        let linkId = $(this).attr('data-target')
                        let img1 = $($(this).children()[0])
                        img1
                            .addClass('scaleUp')
                            .removeClass('scaleDown')
                    }

                    $('#sectionKrila').on('change', function (e) {
                        $('section').hide()
                        let d = $(e.currentTarget).val()
                        $('#' + d).show()
                    })


                })
            });
        }

    }).run()

})



