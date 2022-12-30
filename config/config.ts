// 1) Define una variable de entorno en tu sistema operativo que contenga 
// el dato privado que necesitas. Por ejemplo:

// export FB_APP_ID=mi_id_privado

// 2) Crea un archivo config.json que incluya el dato privado. Por ejemplo:

// {
//     "fbAppId": "mi_id_privado"
// }

export interface Config {
    fbAppId: string;
}