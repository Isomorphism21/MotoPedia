# MOTOPEDIA 🏍️

MotoPedia es una pagina creada con la intención de dar un facil acceso a información basica de motocicletas de diferentes marcas para tener una rapida idea de sus capacidades con la intención de conocer sus prestaciones antes de por ejemplo adquirir una de estas, se inicializa con 4 marcas principales ***Suzuki***, ***Yamaha***, ***Kawasaki***, ***Honda*** se muestra ademas una descripción rapida de la motocicleta y su segmento para dar una mayor referencia para entender mejor donde se desempeña de mejor manera la motocicleta, 

Este proyecto está hecho por ***Diego Aceros*** estudiante de CampusLands haciendo practica de la tecnologia ***React*** para el FrontEnd visto en clase, la tecnologia ***NodeJs*** para el BackEnd y creación de los endPoints tomando la información de la base de datos creada en ***MongoDb***, se usan varios tipos de hooks nativos de React y Querys directas para la creación de los EndPoints todo el proyecto front esta Creado con CRA **(create-react-app)** es la primera practica de la union de estas 2 tecnologias.

## INSTALACIÓN ⚙️

### INICIALIZACIÓN DEL SERVIDOR

> ⚠️
> Antes de iniciar se da por hecho que en el equipo que intentas hacer los pasos ya tienes instalado ***NodeJs***

1. Para poder iniciar el proyecto clona el repositorio: ``https://github.com/Isomorphism21/MotoPedia.git``

2. Entra en la carpeta **Backend** usando el comando: 
``` 
cd .\backend\
```
3. Instala todas las librerias que usaron para la creación del **Backend** con el comando: 
``` 
npm i
```
4. Inicializa el servidor con el comando: 
``` 
npm run iso
```
//**Ya deberias de tener el servidor Inicializado**//

### INICIALIZACIÓN DE REACT 


2. Entra en la carpeta **FrontEnd** usando el comando: 
``` 
cd .\frontend\
```
3. Instala todas las librerias que usaron para la creación del **FrontEnd** con el comando: 
``` 
npm i
```
4. Inicializa React con el comando: 
``` 
npm start
```
//**Se abrira automaticamente una pagina en tu navegador predeterminado en la dirección http://localhost:3000**//

## DIAGRAMA DE LA BASE DE DATOS
<img src="./assets/DiagramaDB.jpg">

### LINK DE LA PAGINA DE DISEÑO FIGMA
- [Figma](https://www.figma.com/file/0XUsAW1orTQ6zD6bTfeRjt/Untitled?type=design&node-id=0%3A1&mode=design&t=dACS4obTu91zbmGV-1)

## DISEÑO FIGMA VERSION DESKTOP
<img src="./assets/desktop.png">

## DISEÑO FIGMA VERSION MOBILE
### TODA LA PAGINA ES COMPLETAMENTE RESPONSIVE DISEÑADO AL TAMAÑO DEL IPHONE 12 PRO 390 x 844, FUNCIONA PARA LA MAYORIA DE RESOLUCIONES DE CELULARES MODERNOS
<img src="./assets/mobile.png">

## DOCUMENTACIÓN ENDPOINTS
La documentación de los endPoints se hizo con **Swagger** toda la logica esta hecha desde el backend pero en los siguientes pasos podras ver el resultado facilmente

Despues de clonar el repositorio **explicado en la sección de INSTALACION** haremos lo siguientes pasos

1. Vamos a la carpeta **backend**
``` 
cd .\backend\
```
2. Instala todas las librerias: 
``` 
npm i
```
3. Inicializa el servidor con el comando: 
``` 
npm run iso
```
4. Ingresa a la URL: 
```
http://localhost:5200/api-doc/
```
5. O puedes presionar este boton:
[Swagger](http://localhost:5200/api-doc/)

> ⚠️
> PARA CONCLUIR, EN EL MOMENTO DE HACER EL POST DE CUALQUIER MARCA DEBERA PONER LA URL DE UNA IMAGEN DE LA MOTOCICLETA A INGRESAR EN FORMATO .PNG PARA QUE SE ADECUE AL COLOR DEL FORMATO PRINCIPAL:

**EJEMPLO:** https://www.yamavalle.com/wp-content/uploads/r6-negro2.png

**EJEMPLO VISUAL:**
<img src="./assets/imagenEjemplo.png">
### GRACIAS POR VISITAR MOTOPEDIA