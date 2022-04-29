# Cron Commands

Servicio para ejecutar crons

## Requisitos

- NodeJs >= 14

## Instrucciones

Instalar las dependencias con el siguiente comando:

```bash
npm install
```

Generar el archivo .env con el siguiente comando:

```bash
cp .env.example .nev
```

En el archivo .env esta la variable `PORT` para poder iniciar el servicio en diferentes puertos.
Por defecto esta en el puerto `3000`

Si requiere iniciar otro servicio en otro puerto, solo cambie el valor de `PORT` y ejecute el siguiente comando

```bash
npm install
```

Para poder ejecutar el cron hay que realizar una petición `POST`, en la siguiete url

Url:

```bash
http://localhost:PORT/api/v1/cron/start-command
```

`PORT` es el puerto asignado en el `.env`

Body: `{command: '', time: ''}`

Donde `command` es el comando a ejecutar y `time` es el tiempo a ejecutarse el cron

Para detener el cron realizar la siguiente peticion con el metodo `GET`

Url:

```bash
http://localhost:PORT/api/v1/cron/stop-cron
```

> No ejecutar el cron dos veces, se recomiendo iniciar el servicio en otro puerto y ejecutar el cron

> Para poder ejecutar otro cron es necesario generar otro servicio con un puerto diferente y realizar el mismo procedimiento