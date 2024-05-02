<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description"content="Introduccion a la programacion">
  <title>PRINCIPIOS DE LA PROGRAMACIÓN</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
     <h1>PRINCIPIOS DE LA PROGRAMACIÓN</h1>
  </header>

  <nav>
    <button onclick="mostrarMateria('materia1')">Conceptos basicos</button>
    <button onclick="mostrarMateria('materia2')">Pseint y diagramas de flujos</button>
    <button onclick="mostrarMateria('materia3')">Lenguajes populares en el ámbito laboral</button>
    <button onclick="mostrarMateria('materia4')">Introduccion a la Programación Orientada a Objetos</button>
    <button onclick="mostrarMateria('materia5')">Carreras universitarias vinculadas a la programación</button>
  </nav>
  <div class="materia" id="materia1"> 
    <h1><header>PROGRAMACIÓN</header></h1>
    <h1>¿Qué es Programar?</h1>
    <p>La programación de software es una actividad que está ligada a los procesos con los cuales se ejecutan
      tareas y programas en un dispositivo electrónico como las computadoras y celulares.
    </p>
    <h1>El Papel del Programador</h1>
    <p>
     El programador escribe líneas de texto o "código" que se distribuyen en diferentes archivos dentro de una carpeta,
     siguiendo las reglas que le define un lenguaje de programación y que, finalmente, se ejecutan para cumplir una o múltiples funciones. 
     Existen diversos lenguajes de programación: cada uno define un conjunto de reglas y cada uno tiene un propósito en específico, así que, 
     dependiendo del proyecto o tarea que el programador deba ejecutar, se utilizará un lenguaje en específico. 
     Un programador sigue las reglas de un lenguaje para comunicarse con la computadora y así definir las instrucciones a seguir para construir un programa o software.
    </p>
    <h1>Tipos de Programación</h1>
    <ul>
      <li><strong>Lenguajes de programación procedimental:</strong>Los lenguajes de programación imperativos son aquellos que se basan en una estructura secuencial y 
        jerárquica, y que ejecutan acciones de acuerdo con reglas precisas. Deben su nombre a que son lenguajes que indican a los ordenadores qué tienen que hacer y cómo 
        deben hacerlo. </li>
      <li><strong>Lenguajes de programación orientada a objetos:</strong>Los lenguajes de programación orientada a objetos pertenecen a los lenguajes imperativos, pues se
         basan en la presentación de instrucciones claras y organizadas estructuralmente para la ejecución de una tarea. Se distinguen de los procedimentales porque recurren 
         a la existencia de objetos que serán necesarios para ejecutar el programa, por lo que son más complejos y requieren información adicional.</li>
      <li><strong>Lenguajes de programación funcional:</strong>En contraposición a los lenguajes de programación imperativa, los lenguajes declarativos no requieren indicar al
         ordenador cómo debe llevar a cabo una tarea paso por paso. Por el contrario, solamente dan instrucciones generales sobre qué resultados se esperan del sistema. Para que este 
         pueda cumplir con las tareas asignadas se emplean principios matemáticos.</li>
      <li><strong>Lenguajes de programación lógica:</strong>Los lenguajes de programación lógica son considerados lenguajes declarativos porque, así como los funcionales, no requieren
         especificar paso a paso una estructura ordenada de instrucciones al ordenador para obtener un resultado. Por el contrario, únicamente precisan de la aplicación de principios
          lógicos para cumplir con su función.</li>
    </ul>
    <h1>¿Qué Habilidades desarollas con la Programación?</h1>
    <p>
      Algunas de las aptitudes o habilidades que se desarrollan durante esta actividad son:
    </p>
    <ul>
      <li>Pensamiento lógico.</li>
      <li>Aptitud matemática.</li>
      <li>Atención al detalle.</li>
      <li>Desarrollo de nuevas tecnologías. </li>
      <li>Aprendizaje de diferentes lenguajes de programación. </li>
      <li>Análisis de problemas. </li>
      <li>Gestión del tiempo. </li>
    </ul>
    <img src="Programador.jpg" alt="programador" width="450 px">
    <h1><header>Conceptos basicos para programar</header></h1>
   <h1>Algoritmo</h1>
   <p>
    Llamamos algoritmos al conjunto de instrucciones sistemáticas y previamente definidas que se utilizan para 
    realizar una determinada tarea. Estas instrucciones están ordenadas y acotadas a manera de pasos a seguir 
    para alcanzar un objetivo.
    Todo algoritmo tiene una entrada, conocida como inputy una salida, conocida como output,y entre medias, 
    están las instrucciones o secuencia de pasos a seguir. Estos pasos deben estar ordenados y, sobre todo, 
    deben ser una serie finita de operaciones que permitan conseguir una determinada solución.
    En el mundo de la programación, todo programa o sistema operativo funciona a través de algoritmos, 
    escritos en un lenguaje de programación que el ordenador pueda entender para ejecutar los pasos o 
    instrucciones de una forma automatizada. A nivel debig data e inteligencia artificial, los algoritmos 
    analizan la información y datos de consumidores y usuarios finales.
   </p>
   <h2>Tipos de Algritmos</h2>
   <p>
   <strong> Según su sistema de signos</strong>, es decir, cómo se describen los pasos a seguir, los algoritmos puede ser: <br>
    Cuantitativos y cualitativos: si funcionan a través de cálculos matemáticos o secuencias lógicas.
    Computacionales o no computacionales: si requieren o no del uso de un ordenador para la solución 
    o ejecución de una determinada tarea.  <br>
    Según su función y estrategia, es decir, qué hacen y cómo lo hacen, existen cinco tipos de algoritmos:<br>

   <strong>Algoritmos de búsqueda:</strong> aquellos que encuentran uno o varios elementos que presenten un conjunto de 
   propiedades dentro de una determinada estructura de datos.<br> Las búsquedas pueden ser:<br>
   <ul>
    <li>Secuenciales: comparan el elemento a buscar con cada elemento del conjunto, hasta encontrarlo.</li>
   <li>Binarias: comparan el elemento de búsqueda con un elemento ubicado en el medio de una serie </li>
   <li>ordenada para determinar si son iguales. </li>
   </ul>
   
   </p>
   <img src="ALGORITMO.jpg" alt="img algoritmo" width="450 px">
   <h1>DATOS</h1>
   <p>
    En programación, un tipo de dato es la clasificación de un dato según sus características. Puede tratarse de 
    una cadena, de un texto, de números, etc., y un valor es cualquier clase de dato que se halle dentro de un tipo de dato.
   </p>
   <h2>Tipos de Datos</h2>
   <ul>
     <li><strong>numéricas:</strong> que almacenan números enteros.</li>
     <li><strong>de caracteres:</strong> que representan símbolos o caracteres.</li>
     <li><strong>de cadena de caracteres:</strong>que contienen palabras y textos.</li>
     <li><strong>lógicas o booleanas:</strong>que sirven para almacenar valores lógicos (verdadero o falso).</li>
   </ul>
     <img src="tipos de datos.jpg" alt="datos" height="200 px" width="450 px">
   <h2>
       Juegos Dinamicos para Aprender
   </h2>
   <a href="https://www.cokitos.com/el-mundo-de-blinky-deportes/play/">El mundo de blinky</a>
   <a href="https://codecombat.com/play">CODECOMBAT</a>
  <section>
    <div class="comentarios-container">
      <h3>Deja tus comentarios:</h3>
      <textarea id="comentarioMateria1" rows="4" placeholder="Escribe tu comentario aquí"></textarea>
      <br>
      <button onclick="enviarComentario('comentarioMateria1')">Enviar Comentario</button>
      <div id="comentariosMateria1" class="comentarios"></div>
      </div>
    </div>
 </section>    
  <div class="materia" id="materia2">
   <header><h1>Pseint</h1></header>
   <h2>¿Qué es Pseint?</h2>
   <p>PSeInt es una herramienta para asistir a un estudiante en sus primeros pasos en programación. Mediante un simple 
      e intuitivo pseudolenguaje en español (complementado con un editor de diagramas de flujo), le permite centrar su 
      atención en los conceptos fundamentales de la algoritmia computacional, minimizando las dificultades propias de un 
      lenguaje y proporcionando un entorno de trabajo con numerosas ayudas y recursos didácticos.
   </p>
   <h2>¿Para que sirve Pseint?</h2>
    <p> PSeInt está pensado para asistir a los estudiantes que se inician en la construcción de programas o algoritmos
      computacionales. El pseudocódigo se suele utilizar como primer contacto para introducir conceptos básicos como el
      uso de estructuras de control, expresiones, variables, etc, sin tener que lidiar con las particularidades de la sintaxis 
      de un lenguaje real. Este software pretende facilitarle al principiante la tarea de escribir algoritmos en este pseudolenguaje 
      presentando un conjunto de ayudas y asistencias, y brindarle ademas algunas herramientas adicionales que le ayuden a encontrar
      errores y comprender la lógica de los algoritmos.
      </p>
      <h2>Página para descargarlo</h2>
      <a href="https://pseint.sourceforge.net/?page=descargas.php">Pseint Página oficial</a>
      <h3>Video de como descargar Pseint</h3>
      <a href="https://youtu.be/AqV0PuwWEOQ?si=VxNCSP5_f2qKeLJb">Pseit video</a>
      <h3>Curso completo de somo usar pseint</h3>
      <a href="https://www.youtube.com/playlist?list=PL4Wdg-psRY0ZEzlAaglj6Lm-q_vXi_arU">Curso de pseint</a>
    <header><h1>¿Qué es un diagrama de flujo?</h1></header>
    <p>
      Un diagrama de flujo es un diagrama que describe un proceso, sistema o algoritmo informático. Se usan ampliamente en numerosos
     campos para documentar, estudiar, planificar, mejorar y comunicar procesos que suelen ser complejos en diagramas claros y fáciles 
      de comprender. Los diagramas de flujo emplean rectángulos, óvalos, diamantes y otras numerosas figuras para definir el tipo de paso,
      junto con flechas conectoras que establecen el flujo y la secuencia. Pueden variar desde diagramas simples y dibujados a mano hasta
     diagramas exhaustivos creados por computadora que describen múltiples pasos y rutas.
    </p>
    <h2>Simbologia de los diagramas de flujo</h2>
    <img src="simbologia diagrama de flujo.jpg" alt="simbologia">
    <h3>Video explicativo sobre como hacer un diagrama de flujo</h3>
    <a href="https://youtu.be/u6fusP6JLgg?si=VsDcnYEkXhtGDT41">link del video</a>
    <h3>Ejemplos y ejercicios de diagramas de flujo</h3>
    <a href="diagramas pdf.pdf">Ejercicios y ejemplos</a>
    <h2>Practicas de Pseint</h2>
    <a href="ACTIVIDAD 01 ALGORITMOS Y PSEINT.pdf">Practicas</a>
    <section>
    <div class="comentarios-container">
      <h3>Deja tus comentarios:</h3>
      <textarea id="comentarioMateria2" rows="4" placeholder="Escribe tu comentario aquí"></textarea>
      <br>
      <button onclick="enviarComentario('comentarioMateria2')">Enviar Comentario</button>
      <div id="comentariosMateria2" class="comentarios"></div>
    </section>
    </div>
  </div>

  <div class="materia" id="materia3">
    <h1>Lenguajes mas demandados de programacion</h1>
    <p>
      Según Statista, se prevé que los ingresos del mercado de servicios de TI en España supere los 22.000 millones de euros en 2024.
      Sabemos que estudiar todos los lenguajes de programación es virtualmente imposible, sobre todo teniendo en cuenta que existen cientos
      de ellos. Abrumador, ¿verdad?
      Por eso, en este artículo recopilamos una lista con los lenguajes de programación más demandados en el sector a día de hoy, actualizada 
      con los datos de DevJobsScanner, un índice que analiza cuántos empleos se han creado cada mes con alguno de los siguientes lenguajes de programación
      como requisito.
    </p>
    <h2>JAVASCRIPT</h2>
    <P>
      este lenguaje de programación es usado por el 98% de las webs de todo el mundo, ¡wow! En los últimos meses, las ofertas de empleo que requieren explícitamente
      JavaScript a sus candidatos se han incrementado más de un 30%.
      Junto a HTML y CSS, JavaScript es uno de los pilares esenciales de internet tal y como lo conocemos. Originalmente, era utilizado exclusivamente en navegadores, 
      pero en la actualidad se ha integrado como parte fundamental de algunos servidores y una gran variedad de aplicaciones.
    </P>
    <center>
    <img src="Estadistica java.webp" alt="java" height="500 px" width="1000 px">
    </center>
    <p>
      En la gráfica se muestra la evolución de las vacantes que solicitan JavaScript, durante los 17 meses explorados, y podemos ver su constante demanda a lo largo del 
      tiempo. El 2023 empezó con más de 120.000 vacantes abiertas en tecnología, ¡y la demanda por este lenguaje de programación persiste!
    </p>
    <h3>Curso de Java</h3>
    <a href="https://www.youtube.com/playlist?list=PL2Z95CSZ1N4HXvLWg8oL4IpyJx27HafcD">Link de curso</a>
    <h2>PHYTON</h2>
    <p>
      está presente en servicios tan populares como Spotify, Instagram y Netflix. Este lenguaje tiene como característica su enfoque multiparadigma y una alta legibilidad 
      de su código, lo que lo ha convertido en uno de los lenguajes más populares en todo el planeta.
    </p>
    <img src="estadistica phyton.webp" alt="phyton">
    <h3>Curso Phyton</h3>
    <a href="https://www.youtube.com/playlist?list=PL6_-QWg-BIvGsFqBTW9EQt9tKNsIQBXh3">Link del curso</a>
    <h2>JAVA</h2>
    <p>
      este lenguaje de programación está presente en multitud de dispositivos y sistemas, como teléfonos móviles, ordenadores, centros de datos, consolas de videojuegos
      y diversas aplicaciones basadas en la comunicación cliente-servidor en la web.
    </p>
    <h3>Curso de Java</h3>
    <a href="https://www.youtube.com/playlist?list=PLG1qdjD__qH6ULjW5iN8E45m5nkaCNbUu">Link del curso</a>
    <h2>C#</h2>
    <p>
      suele ser utilizado para el desarrollo de aplicaciones móviles y software simple, mientras que C++ se aplica para desarrollos más complejos y de gran escala. C# es un 
      lenguaje más simple frente a C++, pero no por eso es menos relevante. La complejidad del C++ hace que sea considerado más difícil de dominar que C#.
    </p>
    <h3>Curso de C#</h3>
    <a href="https://www.youtube.com/playlist?list=PL6_-QWg-BIvFdmw2pbouviE2jxypFz446">Link del cursp</a>
    <h2>PHP</h2>
    <p>
      Su uso general está enfocado al desarrollo web y está orientado a la creación de aplicaciones web dinámicas que necesitan acceder a información almacenada en una base 
      de datos. Su nombre original hacía referencia, en inglés, a Personal Home Page, aunque actualmente hace referencia a Hypertext Preprocessor.
    </p>
    <h3>Curso de PHP</h3>
    <a href="https://www.youtube.com/playlist?list=PLkMfBvjZIubyzuVGLBrWppMokoTfseaf8">Link del curso</a>
    <h2>C/C++</h2>
    <p>
      Tanto C como C++ son lenguajes de programación de propósito general, lo que significa que ambos pueden usarse para alcanzar objetivos similares: conectarse a una base de datos,
      realizar cálculos matemáticos o simplemente conectar dos dispositivos entre sí.
      Son parecidos en muchos aspectos, siendo una de sus principales diferencias el nivel de abstracción con el que cuenta C++, mayor que el de su lenguaje hermano. C++ es un lenguaje 
      orientado a objetos que proporciona a los profesionales del desarrollo acceso a características más avanzadas que C, aunque este último es más simple y rápido.
    </p>
    <h3>Curso C</h3>
    <a href="https://www.youtube.com/playlist?list=PLIygiKpYTC_6zHLTjI6cFIRZm1BCT3CuV">Link del curso</a>
    <h3>Curso C++</h3>
    <a href="https://www.youtube.com/playlist?list=PLWtYZ2ejMVJlUu1rEHLC0i_oibctkl0Vh">Link del curso</a>
    <h1>Estadistica Total de los lenguajes en 2024</h1>
    <center>
    <img src="Estadisticas totales.jpg" alt="totales">
    </center>

    <section>
    <div class="comentarios-container">
      <h3>Deja tus comentarios:</h3>
      <textarea id="comentarioMateria3" rows="4" placeholder="Escribe tu comentario aquí"></textarea>
      <br>
      <button onclick="enviarComentario('comentarioMateria3')">Enviar Comentario</button>
      <div id="comentariosMateria3" class="comentarios"></div>
    </div>
  </section>
  </div>

  <div class="materia" id="materia4">
    <header><h1>¿Qué es la Programación Orientada a Objetos?</h1></header>
    <p>es un paradigma de programación, es decir, un modelo o un estilo de programación que nos da unas guías sobre cómo trabajar con él. Se basa en el concepto de clases y objetos.
      Este tipo de programación se utiliza para estructurar un programa de software en piezas simples y reutilizables de planos de código (clases) para crear instancias individuales
      de objetos. <br>
      Con el paradigma de Programación Orientado a Objetos lo que buscamos es dejar de centrarnos en la lógica pura de los programas, para empezar a pensar en objetos, lo que
      constituye la base de este paradigma. Esto nos ayuda muchísimo en sistemas grandes, ya que en vez de pensar en funciones, pensamos en las relaciones o interacciones de los
      diferentes componentes del sistema. <br>
      Un programador diseña un programa de software organizando piezas de información y comportamientos relacionados en una plantilla llamada clase. Luego, se crean objetos individuales
      a partir de la plantilla de clase. Todo el programa de software se ejecuta haciendo que varios objetos interactúen entre sí para crear un programa más grande.
    </p>
    <h2>Claves de la programación orientada a objetos</h2>
    <p>
      La POO se inspira en la forma en que percibimos y entendemos el mundo que nos rodea. Imagina que estás construyendo un sistema de gestión de una biblioteca. En lugar de pensar en términos de 
      algoritmos y estructuras de datos, la POO te invita a considerar las entidades que existen en el contexto de la biblioteca, como libros, bibliotecarios y usuarios.
      En este enfoque, cada una de estas entidades se convierte en un objeto, con propiedades (datos) y comportamientos (funcionalidades). Por ejemplo, un objeto «Libro» puede tener 
      atributos como el título, el autor y el año de publicación, así como métodos para obtener información sobre el libro, prestarlo o devolverlo a la biblioteca.
    </p>
    <h2>Clases,Objetos e instancias </h2>
    <p>
      es una plantilla. Define de manera genérica cómo van a ser los objetos de un determinado tipo. Por ejemplo, una clase para representar a animales puede llamarse ‘animal’ y tener una serie de atributos,
      como ‘nombre’ o ‘edad’ (que normalmente son propiedades), y una serie con los comportamientos que estos pueden tener, como caminar o comer, y que a su vez se implementan como métodos de la clase (funciones).
      un ejemplo sencillo de un objeto, como decíamos antes, podría ser un animal. Un animal tiene una edad, por lo que creamos un nuevo atributo de ‘edad’ y, además, puede envejecer, por lo que definimos un nuevo 
      método. Datos y lógica. Esto es lo que se define en muchos programas como la definición de una clase, que es la definición global y genérica de muchos objetos.
    </p>
    <img src="POO.jpg" alt="POO">
    <header><h1>Principios de la POO</h1></header>
    <h2>La encapsulación</h2>
    <p>
      La encapsulación contiene toda la información importante de un objeto dentro del mismo y solo expone la información seleccionada al mundo exterior. 
     Esta propiedad permite asegurar que la información de un objeto esté oculta para el mundo exterior, agrupando en una Clase las características o atributos que cuentan con un acceso privado, y los
     comportamientos o métodos que presentan un acceso público.
    </p>
    <h2>La abstracción</h2>
    <p>
      La abstracción es cuando el usuario interactúa solo con los atributos y métodos seleccionados de un objeto, utilizando herramientas simplificadas de alto nivel para acceder a un objeto complejo.
     En la programación orientada a objetos, los programas suelen ser muy grandes y los objetos se comunican mucho entre sí. El concepto de abstracción facilita el mantenimiento de
      un código de gran tamaño, donde a lo largo del tiempo pueden surgir diferentes cambios.
     Así, la abstracción se basa en usar cosas simples para representar la complejidad. Los objetos y las clases representan código subyacente, ocultando los detalles complejos al 
     usuario. Por consiguiente, supone una extensión de la encapsulación. Siguiendo con el ejemplo del coche, no es necesario que conozcas todos los detalles de cómo funciona el 
     motor para poder conducirlo.
    </p>
    <h2>La herencia</h2>
    <p>
      La herencia define relaciones jerárquicas entre clases, de forma que atributos y métodos comunes puedan ser reutilizados. Las clases principales extienden atributos y comportamientos 
      a las clases secundarias. A través de la definición en una clase de los atributos y comportamientos básicos, se pueden crear clases secundarias, ampliando así la funcionalidad de la clase principal y agregando atributos y comportamientos adicionales.
    </p>
    <h2>Polimorfismo</h2>
    <p>
      El polimorfismo consiste en diseñar objetos para compartir comportamientos, lo que nos permite procesar objetos de diferentes maneras. Es la capacidad de presentar la misma interfaz para diferentes formas subyacentes o tipos de datos. Al utilizar la
      herencia, los objetos pueden anular los comportamientos principales compartidos, con comportamientos secundarios específicos. El polimorfismo permite que el mismo método ejecute diferentes comportamientos de dos formas: anulación de método y sobrecarga de método.
    </p>
    <header><h1>La POO en diferentes lenguajes</h1></header>
    <h2>JAVA</h2>
    <ul>
      <li>Define clases utilizando la palabra clave «class» y especifica atributos y métodos dentro de ellas.</li>
      <li>Utiliza la herencia con la palabra clave «extends» para crear subclases que hereden características de una clase base.</li>
      <li>Aprovecha las interfaces para definir contratos que las clases deben implementar.</li>
      <li>Aprovecha el polimorfismo para tratar objetos de diferentes clases de manera uniforme, utilizando métodos con la misma firma en diferentes clases.</li>
      <li>Utiliza la encapsulación para ocultar los detalles internos de los objetos y proporcionar una interfaz pública para interactuar con ellos.</li>
    </ul>
    <h3>Curso de JAVA en la POO</h3>
    <a href="https://www.youtube.com/playlist?list=PLQxX2eiEaqbwNP20GMMCjRslRq2lOLWlg">Link del video</a>
    <h2>C++</h2>
    <ul>
      <li>Define clases utilizando la palabra clave «class» y especifica atributos y métodos dentro de ellas.</li>
      <li>Utiliza la herencia con los operadores de acceso «public», «private» y «protected» para establecer la visibilidad de los miembros heredados.</li>
      <li>Aprovecha las funciones virtuales y la herencia múltiple para lograr polimorfismo.</li>
      <li>Utiliza la encapsulación con los modificadores de acceso «public», «private» y «protected» para controlar el acceso a los miembros de una clase.</li>
    </ul>
    <h3>Curso de C++ en la POO</h3>
    <a href="https://www.youtube.com/playlist?list=PLj3mZJ9UmHuyf4THOaZMJxmwArAyQL2Dl">Link del video</a>
    <h2>PHYTON</h2>
    <ul>
      <li>Define clases utilizando la palabra clave «class» y especifica atributos y métodos dentro de ellas.</li>
      <li>Aprovecha la herencia utilizando la clase base entre paréntesis al definir una clase.</li>
      <li>Utiliza la herencia múltiple y el polimorfismo de manera natural, ya que Python lo permite.</li>
      <li>Aprovecha las propiedades y los decoradores para implementar la encapsulación y controlar el acceso a los atributos de una clase. </li>
    </ul>
    <h3>Curso de PHYTON en la POO</h3>
    <a href="https://www.youtube.com/playlist?list=PLVzwufPir356z6MI_zp7w7Cg_t7QT20As">Link del curso</a>
    <header><h1>Programa para empezar con la POO</h1></header>
    <h2>Visual Basic</h2>
    <p>
      El Visual Basic ha sido desarrollado con el objetivo de entregar a los usuarios de programación informática un paquete de utilidades simples y accesibles.
      Es por esto que el Visual Basic puede ser usado y fácilmente comprendido por expertos como también por usuarios principiantes. Su base parte del dialecto BASIC 
      pero con componentes novedosos que lo adaptan a los lenguajes informáticos modernos. A esto se suma que el Visual Basic es además un lenguaje de programación guiado
      por eventos que permite mayor operatibilidad y mejores resultados.
    </p>
    <h2>VIDEO DE COMO DESCARGAR VISUAL BASIC</h2>
    <a href="https://www.youtube.com/watch?v=W9nV9R-FiSg">Link del video</a>
    <h2>Curso de visual basic</h2>
    <a href="https://www.youtube.com/playlist?list=PL0EGHBNuqVE3cFw6QJyWMsX0-6IHA-EXC">Link del curso</a>
    <section>
     <div class="comentarios-container">
      <h3>Deja tus comentarios:</h3>
      <textarea id="comentarioMateria4" rows="4" placeholder="Escribe tu comentario aquí"></textarea>
      <br>
      <button onclick="enviarComentario('comentarioMateria4')">Enviar Comentario</button>
      <div id="comentariosMateria4" class="comentarios"></div>
    </div>
  </div>
</section>
<div class="materia" id="materia5">
    <header><strong><h1>¿Qué Carreras universitarias estan vinculadas a la Programación?</h1></strong></header>
    <p>
      ya sabemos que la programación es de esas carreras en las que puedes conseguir un buen trabajo sin un título universitario, porque el avance de la tecnología es tan 
      veloz que las empresas no pueden esperar 5 años a que termines la carrera.
      Pero esto no significa que no vayas a la universidad, ya que es un excelente lugar para formarte y convertirte en profesional. Pero la pregunta es: 
      ¿qué carrera debes elegir si quieres ser programador? ¿Ingeniería de sistemas?, ¿ingeniería informática?, ¿ciencias de la computación? ¿Cuántas carreras existen?
      Esta es una de las dudas más comunes y seguro te ha pasado. Pero tranquilo, en este blog te responderé todas esas dudas
    </p>
    <strong><h2>Ingeniería en sistema</h2></strong>
    <p>
      Un ingeniero de sistemas se encarga de los sistemas.Obvio, pero, ¿qué es un sistema? Un sistema es un conjunto de elementos que trabajan en conjunto de forma organizada
     para obtener un resultado específico. Desde ese punto de vista, un equipo de fútbol es un sistema. Una startup (o una gran empresa) es un sistema. Una familia es un sistema.
     Sí, los sistemas no se limitan al software o hardware. Nuestro ecosistema es un sistema, de hecho lo tiene en su nombre.Yendo a la tecnología, tenemos Sistemas Operativos
     (Windows, Linux, Mac, Android, iOS, etc.), sistemas de bases de datos, sistemas de redes de computadoras, sistemas de servidores, sistemas de gestión y recuperación de 
     información, sistemas de seguridad y control de riesgos, entre otros.Ya sé qué estás pensando: que un software también es un sistema. Por supuesto. Entonces en esta
     carrera sí verás programación, pero como te darás cuenta, no es el foco principal. Además de cursos de programación, tendrás cursos de gestión de proyectos, ingeniería 
     de requerimientos, sistemas de información y gerencia, entre otros.
    </p>
    <img src="sistemas.jpeg" alt="">
    <h2><strong>Ingeniería en software</strong></h2>
    <p>
      a ingeniería de software, que como su nombre lo dice, se encarga de del desarrollo, pruebas y mantenimiento del software. Mientras que la ingeniería de sistemas, 
      ve todos los sistemas informáticos en general, y las ciencias de la computación, se encargan específicamente de los sistemas de cómputo (tanto hardware, software y 
      modelos matemáticos), la ingeniería de software se especializa en eso: el desarrollo de aplicaciones. Aplicaciones web, móviles, de escritorio, videojuegos y más.
      Esta es la carrera que debes elegir para formarte como programador, porque su enfoque es exclusivamente el desarrollo de software. Aunque, si nos ponemos estrictos,
       un ingeniero de software es un perfil más amplio que el de un programador.
    </p>
    <img src="software.jpeg" alt="">
  <section>
   <div class="comentarios-container">
    <h3>Deja tus comentarios:</h3>
    <textarea id="comentarioMateria4" rows="4" placeholder="Escribe tu comentario aquí"></textarea>
    <br>
    <button onclick="enviarComentario('comentarioMateria5')">Enviar Comentario</button>
    <div id="comentariosMateria5" class="comentarios"></div>
  </div>
</div>
</section>
  <script src="script.js"></script>
</body>
</html>
