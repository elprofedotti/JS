// - Una cadena de texto con tu Nombre
let nombre="Matias";
// - Otra cadena de texto con tu Apellido
let apellido="Dotti";
// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante=`${nombre} ${apellido}`;

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus=estudiante.toUpperCase;

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus=estudiante.toLowerCase;

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let cantLetras=estudiante.length;
// - Una variable que contenga la primera letra del Nombre
let primeraNom=nombre.charAt(0);

// - Otra variable que contenga la última letra del Apellido
let ultimaApe=apellido.charAt(apellido.length-1);

// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let sinEsp=estudiante.replace(" ","");
sinEsp

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let esta=estudiante.includes(nombre);
esta