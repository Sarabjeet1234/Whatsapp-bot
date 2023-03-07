export default class Webuilder {
    constructor(){
    this.fetchRequestAccess = () => {
        const fetchRequest = function () {
            fetch('./data.json')
             .then((response) => response.json())
               .then((json) => console.log(json));
           }
           return fetchRequest
    }
}

    cssAll(){
        const i = `<link ${link()}>`;
        console.log(i)
    }

    animationcss(){

    }

    navBar(){

    }

    searchBar(){

    }

    contactForm(){

    }

    footer(){

    }

    jsFrame(){

    }
}