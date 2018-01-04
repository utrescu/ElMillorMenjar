# ElMillorMenjar
Provant Nativescript amb Angular4 + Firebase per fer una aplicació mòbil amb Javascript :-P

## Sistema de votació

La idea és fer un sistema de votació que permeti als usuaris identificats votar quin és el millor plat del món d'una llista 
que es proporciona a partir de les dades que es troben a Firebase.

Els usuaris s'identifiquen a través d'un correu electrònic i una contrasenya. Es fa servir l'autenticació Firebase per login/contrasenya.
* Els usuaris abans de poder entrar es poden registrar en el sistema.

![Login](readme/screen4.png)

Un cop identificat l'usuari, el sistema mostra una llista amb els plats disponibles per votar:

![Llista](readme/screen0.png)

I al clicar a sobre d'una de les opcions se'n veuen les característiques: 

![Característiques](readme/screen1.png)

En aquesta pantalla es pot votar pel plat i serem redirigits a la pantalla amb els resultats 
(La captura no és de la darrera versió, però els resultats surten ordenats per vots de gran a petit):

![Resultats](readme/screen3.png)

En la llista de plats hi ha un menú lateral que ens permet arribar als resultats sense votar 
(no em feia falta per res, però ja que provem ...):

![Resultats](readme/screen2.png)


