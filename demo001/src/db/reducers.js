import { requireAll } from "./utils";

// recorre carpeta modules buscando archivos llamados reducers.js y los va a combinar en un objeto

export default Object.assign(
    {},
    ...requireAll(require.context("../modules", true, /reducers\.js$/ ))
);