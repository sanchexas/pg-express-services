import {App} from "./_config/app";

function main(){
    const app = new App(process.env.PORT);
    app.listen();
}

main();