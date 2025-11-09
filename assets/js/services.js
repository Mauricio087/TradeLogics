// ===== FUNCIONALIDAD DE SERVICIOS =====

document.addEventListener('DOMContentLoaded', function() {

    // ===== DATOS DE SERVICIOS =====
    const services = [
        {
            id: 1,
            title: "Transporte Internacional",
            subtitle: "Marítimo, aéreo y terrestre",
            description: "Conectamos tu carga con cualquier destino del mundo a través de nuestras rutas marítimas, aéreas y terrestres optimizadas.",
            icon: "transport",
            features: [
                "Rutas marítimas globales",
                "Transporte aéreo express",
                "Logística terrestre especializada",
                "Seguimiento en tiempo real"
            ],
            category: "transporte"
        },
        {
            id: 2,
            title: "Gestión Aduanera",
            subtitle: "Trámites sin complicaciones",
            description: "Nos encargamos de todos los procesos aduaneros para que tu mercancía cruce fronteras sin demoras ni complicaciones.",
            icon: "customs",
            features: [
                "Clasificación arancelaria",
                "Documentación completa",
                "Gestión de permisos",
                "Cumplimiento normativo"
            ],
            category: "aduanas"
        },
        {
            id: 3,
            title: "Asesoría Pre-importación",
            subtitle: "Planifica antes de importar",
            description: "Te guiamos desde la selección de proveedores hasta la planificación logística, minimizando riesgos y optimizando costos.",
            icon: "consulting",
            features: [
                "Análisis de viabilidad",
                "Selección de proveedores",
                "Estimación de costos",
                "Planificación logística"
            ],
            category: "asesoria"
        },
        {
            id: 4,
            title: "Financiamiento Comercial",
            subtitle: "Impulsa tu crecimiento",
            description: "Soluciones financieras flexibles que te permiten importar sin descapitalizar tu empresa y mantener tu flujo de caja.",
            icon: "finance",
            features: [
                "Cartas de crédito",
                "Financiamiento de inventario",
                "Cobranza documentaria",
                "Líneas de crédito comercial"
            ],
            category: "financiamiento"
        },
        {
            id: 5,
            title: "Almacenaje y Distribución",
            subtitle: "Tu mercancía en buenas manos",
            description: "Centros de distribución estratégicamente ubicados con tecnología avanzada para el manejo seguro de tu carga.",
            icon: "warehouse",
            features: [
                "Almacenes certificados",
                "Control de inventario",
                "Distribución nacional",
                "Manejo especializado"
            ],
            category: "almacenaje"
        },
        {
            id: 6,
            title: "Seguros de Carga",
            subtitle: "Protección total",
            description: "Cobertura integral para tu mercancía desde el origen hasta el destino final, brindándote tranquilidad en cada embarque.",
            icon: "insurance",
            features: [
                "Cobertura todo riesgo",
                "Pólizas flexibles",
                "Gestión de siniestros",
                "Asesoría especializada"
            ],
            category: "seguros"
        }
    ];
    
    // ===== ICONOS SVG =====
    const serviceIcons = {
        transport: `<img src="assets/img/transporte_internacional.jpeg" alt="Transporte Internacional" class="service-image">`,

        customs: `<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>`,
        consulting: `<img src="assets/img/pre-importacion.jpeg" alt="Asesoría Pre-importación" class="service-image">`,

        finance: `<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.8,10.9C9.53,10.31 8.8,9.7 8.8,8.75C8.8,7.66 9.81,6.9 11.5,6.9C13.28,6.9 13.94,7.75 14,9H16.21C16.14,7.28 15.09,5.7 13,5.19V3H11V5.16C9.06,5.58 7.5,6.84 7.5,8.77C7.5,11.08 9.41,12.23 12.2,12.9C14.7,13.5 15.2,14.38 15.2,15.31C15.2,16 14.71,17.1 12.5,17.1C10.44,17.1 9.63,16.18 9.52,15H7.32C7.44,17.19 9.08,18.42 11,18.83V21H13V18.85C14.95,18.48 16.5,17.35 16.5,15.3C16.5,12.46 14.07,11.5 11.8,10.9Z"/>
        </svg>`,
        warehouse: `<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A1.25,1.25 0 0,1 13.25,10A1.25,1.25 0 0,1 12,11.25A1.25,1.25 0 0,1 10.75,10A1.25,1.25 0 0,1 12,8.75M7,13H17V18H15V15H9V18H7V13Z"/>
        </svg>`,
        insurance: `<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
        </svg>`
    };
    
    // ===== FUNCIÓN PARA RENDERIZAR SERVICIOS =====
    function renderServices() {
        const servicesGrid = document.getElementById('services-grid');
        
        if (!servicesGrid) {
            console.warn('Contenedor de servicios no encontrado');
            return;
        }
        
        // Limpiar contenido existente
        servicesGrid.innerHTML = '';
        
        // Crear elementos de servicios
        services.forEach((service, index) => {
            const serviceElement = createServiceElement(service, index);
            servicesGrid.appendChild(serviceElement);
        });
        
        // Aplicar animaciones de entrada
        animateServices();
    }
    
    // ===== FUNCIÓN PARA CREAR ELEMENTO DE SERVICIO =====
    function createServiceElement(service, index) {
        const serviceDiv = document.createElement('div');
        serviceDiv.className = 'service-item';
        serviceDiv.setAttribute('data-category', service.category);
        serviceDiv.style.animationDelay = `${index * 0.1}s`;
        
        const featuresHTML = service.features.map(feature => 
            `<li class="service-feature">
                <svg class="feature-check" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                </svg>
                ${feature}
            </li>`
        ).join('');
        
        serviceDiv.innerHTML = `
            <div class="service-content">
                <div class="service-header">
                    <div class="service-icon">
                        ${serviceIcons[service.icon] || serviceIcons.transport}
                    </div>
                    <div class="service-title-group">
                        <h3 class="service-title">${service.title}</h3>
                        <p class="service-subtitle">${service.subtitle}</p>
                    </div>
                </div>
                <div class="service-body">
                    <p class="service-description">${service.description}</p>
                    <ul class="service-features">
                        ${featuresHTML}
                    </ul>
                </div>
                <div class="service-footer">
                    <button class="service-cta" data-service="${service.id}">
                        Más información
                        <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        
        return serviceDiv;
    }
    
    // ===== ANIMACIONES DE SERVICIOS =====
    function animateServices() {
        const serviceItems = document.querySelectorAll('.service-item');
        
        // Intersection Observer para animaciones al hacer scroll
        if ('IntersectionObserver' in window) {
            const serviceObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            serviceItems.forEach(item => {
                serviceObserver.observe(item);
            });
        } else {
            // Fallback para navegadores sin soporte
            serviceItems.forEach(item => {
                item.classList.add('animate-in');
            });
        }
    }
    
    // ===== FUNCIONALIDAD DE FILTRADO =====
    function filterServices(category) {
        const serviceItems = document.querySelectorAll('.service-item');
        
        serviceItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
                item.classList.add('animate-in');
            } else {
                item.style.display = 'none';
                item.classList.remove('animate-in');
            }
        });
    }
    
    // ===== EVENT LISTENERS =====
    function setupEventListeners() {
        // Event listeners para botones CTA de servicios
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('service-cta') || e.target.closest('.service-cta')) {
                const button = e.target.classList.contains('service-cta') ? e.target : e.target.closest('.service-cta');
                const serviceId = button.getAttribute('data-service');
                const service = services.find(s => s.id == serviceId);
                
                if (service) {
                    // Crear mensaje personalizado para WhatsApp
                    const message = `Hola, me interesa conocer más sobre el servicio de ${service.title}. ¿Podrían brindarme más información?`;
                    const whatsappUrl = `https://api.whatsapp.com/send?phone=56992614369&text=${encodeURIComponent(message)}`;
                    
                    // Abrir WhatsApp
                    window.open(whatsappUrl, '_blank');
                }
            }
        });
    }
    
    // ===== INICIALIZACIÓN =====
    
    // Renderizar servicios al cargar la página
    renderServices();
    
    // Configurar event listeners
    setupEventListeners();
    
    // Exponer funciones globalmente si es necesario
    window.filterServices = filterServices;
    
    console.log('Services JavaScript cargado correctamente');
});