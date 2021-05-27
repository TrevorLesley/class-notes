(function () {
    'use strict';

    // const source = document.querySelector('#student-template').innerHTML;
    // console.log('source', source);
    // // console.log(template);
    // const template = Handlebars.compile(source);
    // const context = {
    //     name: 'Trevor',
    // }
    // const html = template(context);
    // // console.log(html);

    // document.querySelector('.container').innerHTML = html;

    const source = document.querySelector('#shoes-template').innerHTML;
    const template = Handlebars.compile(source);
    const context = {
        shoes: data.results,
    }
    const html = template(context);
    document.querySelector('.card').innerHTML = html;



})();