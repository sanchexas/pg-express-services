import {App} from "./config/app";

function main(){
    const app = new App(process.env.PORT);
    app.listen();
}

main();