function mostrarMateria(idMateria) {
    var materias = document.querySelectorAll('.materia');
    materias.forEach(function(materia) {
      materia.style.display = 'none';
    });
  
    
    var materiaSeleccionada = document.getElementById(idMateria);
    materiaSeleccionada.style.display = 'block';
  }
  
  function enviarComentario(idComentario) {
    var comentario = document.getElementById(idComentario).value;
    if (comentario.trim() !== '') {
      var materiaId = idComentario.replace('comentario', '');
      var comentariosContainer = document.getElementById('comentarios' + materiaId);
      var nuevoComentario = document.createElement('div');
      nuevoComentario.textContent = comentario;
      comentariosContainer.appendChild(nuevoComentario);
     
    }
  }
  