import * as $ from 'jquery';
import {Greeter} from './Greeter'

let greeter = new Greeter("world");

$(() => {
    const app = Sammy('#app1', function () {
        this.use('Handlebars', 'hbs');

        this.get('/', displayHome);

        function displayHome(context) {
            this.partial('./home.hbs').then(function () {
                 console.log(greeter.greet())
            })
        }


    }).run()
})