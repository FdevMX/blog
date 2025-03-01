function createParticles() {
    const particles = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Tamaño aleatorio
        const size = Math.random() * 5 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Posición aleatoria
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Opacidad aleatoria
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        // Animación aleatoria
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particles.appendChild(particle);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los botones de tabs
    const tabs = document.querySelectorAll('.tab');
    
    // Agregar evento click a cada tab
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Obtener el target del tab (el id del panel que debe mostrarse)
            const target = this.getAttribute('data-target');
            
            // Remover la clase active-tab de todos los tabs
            tabs.forEach(t => t.classList.remove('active-tab'));
            
            // Agregar la clase active-tab al tab seleccionado
            this.classList.add('active-tab');
            
            // Seleccionar todos los paneles de contenido
            const tabPanes = document.querySelectorAll('.tab-pane');
            
            // Ocultar todos los paneles de contenido
            tabPanes.forEach(pane => pane.classList.remove('active-pane'));
            
            // Mostrar el panel de contenido correspondiente al tab seleccionado
            document.getElementById(target).classList.add('active-pane');
        });
    });
    
    // También agregar funcionalidad a los botones "Leer más"
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const detailsId = this.getAttribute('data-target');
            const details = document.getElementById(detailsId);
            
            // Toggle de la clase active para mostrar/ocultar detalles
            details.classList.toggle('active');
            
            // Cambiar texto del botón
            if (details.classList.contains('active')) {
                this.innerHTML = 'Leer menos <i class="fas fa-arrow-up"></i>';
            } else {
                this.innerHTML = 'Leer más <i class="fas fa-arrow-right"></i>';
            }
        });
    });

    // Funcionalidad para las referencias bibliográficas
    const references = document.querySelectorAll('.bibliography-list li');
    const toggleBtn = document.getElementById('toggle-references');
    
    // Ocultar todas las referencias después de las primeras 5
    if (references.length > 5) {
        for (let i = 5; i < references.length; i++) {
            references[i].classList.add('hidden-reference');
        }
        
        // Mostrar el botón toggle
        toggleBtn.style.display = 'block';
        
        // Agregar evento al botón
        toggleBtn.addEventListener('click', function() {
            const hiddenRefs = document.querySelectorAll('.hidden-reference');
            
            if (hiddenRefs[0].style.display === 'list-item') {
                // Ocultar referencias
                hiddenRefs.forEach(ref => {
                    ref.style.display = 'none';
                });
                toggleBtn.innerHTML = 'Ver más referencias <i class="fas fa-chevron-down"></i>';
                
                // Scroll suave hasta el botón
                toggleBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                // Mostrar referencias
                hiddenRefs.forEach(ref => {
                    ref.style.display = 'list-item';
                });
                toggleBtn.innerHTML = 'Ver menos referencias <i class="fas fa-chevron-up"></i>';
            }
        });
    }
});