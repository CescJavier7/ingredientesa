document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const suggestions = document.getElementById('suggestions');
    const product1 = document.getElementById('product1');
    const product2 = document.getElementById('product2');
    const compareBtn = document.getElementById('compare-btn');
    const refreshBtn = document.getElementById('refresh-btn');
    const result = document.getElementById('result');
    const showInfoBtn = document.getElementById('show-info-btn');
    const infoModal = document.getElementById('info-modal');

    const productos = [
        { id: 1, nombre: 'Metalaxil + Propamocarb', tipo: 'Fungicida' },
        { id: 2, nombre: 'Tebuconazol', tipo: 'Fungicida' },
        { id: 3, nombre: 'Dimetimorph', tipo: 'Fungicida' },
        { id: 4, nombre: 'Difeconazole', tipo: 'Fungicida' },
        { id: 5, nombre: 'Azoxystrobin', tipo: 'Fungicida' },
        { id: 6, nombre: 'Clorotalonil', tipo: 'Fungicida' },
        { id: 7, nombre: 'Clorpirifos + Cipermetrina', tipo: 'Insecticida' },
        { id: 8, nombre: 'Deltrametrina', tipo: 'Insecticida' },
        { id: 9, nombre: 'Lambda-chyhalotrin', tipo: 'Insecticida' },
        { id: 10, nombre: 'Imidacloprid', tipo: 'Insecticida' },
        { id: 11, nombre: 'Malathion', tipo: 'Insecticida' },
        { id: 12, nombre: 'Nicosulfuron', tipo: 'Herbicida' },
        { id: 13, nombre: 'Tifensulfuron - methyl', tipo: 'Herbicida' },
        { id: 14, nombre: 'Glifosato', tipo: 'Herbicida' }

    ];

    const compatibilidades = [
        { producto1: 1, producto2: 7, compatible: true },
        { producto1: 1, producto2: 8, compatible: true },
        { producto1: 1, producto2: 9, compatible: true },
        { producto1: 1, producto2: 10, compatible: true },
        { producto1: 1, producto2: 11, compatible: true },
        { producto1: 2, producto2: 9, compatible: true },
        { producto1: 2, producto2: 10, compatible: true },
        { producto1: 3, producto2: 7, compatible: true },
        { producto1: 3, producto2: 8, compatible: true },
        { producto1: 3, producto2: 9, compatible: true },
        { producto1: 3, producto2: 10, compatible: true },
        { producto1: 3, producto2: 11, compatible: true },
        { producto1: 4, producto2: 7, compatible: true },
        { producto1: 4, producto2: 8, compatible: true },
        { producto1: 4, producto2: 9, compatible: true },
        { producto1: 4, producto2: 10, compatible: true },
        { producto1: 4, producto2: 11, compatible: true },
        { producto1: 5, producto2: 7, compatible: true },
        { producto1: 5, producto2: 8, compatible: true },
        { producto1: 5, producto2: 9, compatible: true },
        { producto1: 5, producto2: 10, compatible: true },
        { producto1: 5, producto2: 11, compatible: true },
        { producto1: 6, producto2: 7, compatible: true },
        { producto1: 6, producto2: 8, compatible: true },
        { producto1: 6, producto2: 9, compatible: true },
        { producto1: 6, producto2: 10, compatible: true },
        { producto1: 6, producto2: 11, compatible: true }

    ];

    const informacionProductos = {
        
        10: {
            tipo: 'Insecticida',
            ingredienteActivo: 'Imidacloprid',
            codigo: 'IRAC Grupo 4A',
            grupoQuimico: 'Neonicotinoides',
            mecanismoAccion: 'Moduladores competitivos del receptor nicotínico de acetilcolina (nAChR)',
            modoAccion: 'Sistémico, contacto e ingestión',
            pesoMolecular: '255,66 g/mol',
            nombreIUPAC: '(NE)-N-[1-[(6-cloropiridin-3-il)metil]imidazolidin-2-ilideno]nitramida',
            formulaMolecular: 'C9H10ClN5O2',
            cultivo: 'Banano, Maíz, Arroz, Tomate de riñon, Rosas, Hypericum, Brócoli, Fréjol, Cebolla, Sandía',
            plaga: 'Mosca blanca, Saltón, Chinche tigre, Mosca Minadora, Sogata, Pulgón, Trips, Paratrioza',
            compatibilidad: 'No mezclar con productos alcalinos'
        },
        11: {
            tipo: 'Insecticida',
            ingredienteActivo: 'Malathion',
            codigo: 'IRAC Grupo 1B',
            grupoQuimico: 'Organofosforados',
            mecanismoAccion: 'Inhibidores de la acetilcolinesterasa (AChE)',
            modoAccion: 'Contacto, inhalación e ingestión',
            pesoMolecular: '330,4 g/mol',
            nombreIUPAC: '2-dimetoxifosfinotioilsulfanilbutanodioato de dietilo',
            formulaMolecular: 'C10H19O6PS2',
            cultivo: 'Rosa, Algodón, Cebolla, Cebolla larga, Cebollines, Fríjol, Pasto, Tomate, Tomate de árbol, Berenjena, Pimentón, Ajíes, Aguacate, Café, Papa, Piña',
            plaga: 'Trips, Picudo, Trips, Mosca blanca, Chinche de los pastos, Cochinilla harinosa, Polilla, Barrenador del fruto',
            compatibilidad: 'Incompatible con sustancias alcalinas y compuestos a base de cobre'
        },
        2: {
            tipo: 'Fungicida',
            ingredienteActivo: 'Tebuconazol',
            codigo: 'FRAC Group 3',
            grupoQuimico: 'Triazoles',
            mecanismoAccion: 'Inhibidores de la biosíntesis de esteroles (SBI)',
            modoAccion: 'Sistémico',
            pesoMolecular: '307,82 g/mol',
            nombreIUPAC: '1-(4-clorofenil)-4,4-dimetil-3-(1,2,4-triazol-1-ilmetil)pentan-3-ol',
            formulaMolecular: 'C16H22ClN3O',
            cultivo: 'Vides, Duraznero, Cerezo, Manzana, Arándano. Frutilla, Mora, Tomate, Ajo, Cebolla, Cebada, Trigo, Rosa',
            plaga: 'Botritis, Oídio, Venturia, Septoriosis, Royas',
            compatibilidad: 'Incompatibles con alcalinos'
        },
        12: {
            tipo: 'Herbicida',
            ingredienteActivo: 'Nicosulfuron',
            codigo: 'HRAC/WSSA 2',
            grupoQuimico: 'Sulfonilureas',
            mecanismoAccion: 'Inhibición de la acetolactato sintasa',
            modoAccion: 'Sistémico y selectivo post emergencia',
            pesoMolecular: '410,4 g/mol',
            nombreIUPAC: '2-[(4,6-dimetoxipirimidin-2-il)carbamoilsulfamoil]- N , N -dimetilpiridina-3-carboxamida',
            formulaMolecular: 'C15H18N6O6S',
            cultivo: 'Maíz',
            plaga: 'Cassia tara, Ipomea sp, Rottboellia exaltata, Malvastrum coromandelianum',
            compatibilidad: 'Productos alcalinos y sustancias oxidantes'
        }
    };

    function showSuggestions(input) {
        suggestions.innerHTML = '';
        if (input.length === 0) return;

        const filteredProducts = productos.filter(producto => 
            producto.nombre.toLowerCase().includes(input.toLowerCase())
        );

        filteredProducts.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('suggestion');
            div.innerText = producto.nombre;
            div.addEventListener('click', () => {
                if (!product1.dataset.id) {
                    product1.innerText = producto.nombre;
                    product1.dataset.id = producto.id;
                } else if (!product2.dataset.id && producto.id !== parseInt(product1.dataset.id)) {
                    product2.innerText = producto.nombre;
                    product2.dataset.id = producto.id;
                } else {
                    alert('No se pueden seleccionar productos del mismo tipo o ya seleccionados.');
                }
                suggestions.innerHTML = '';
                searchInput.value = '';
            });
            suggestions.appendChild(div);
        });
    }

    searchInput.addEventListener('input', (e) => {
        showSuggestions(e.target.value);
    });

    compareBtn.addEventListener('click', () => {
        const productId1 = parseInt(product1.dataset.id);
        const productId2 = parseInt(product2.dataset.id);

        if (!productId1 || !productId2) {
            alert('Por favor, seleccione dos productos para comparar.');
            return;
        }

        const producto1 = productos.find(p => p.id === productId1);
        const producto2 = productos.find(p => p.id === productId2);

        if (producto1.tipo === producto2.tipo) {
            alert('No se pueden comparar productos del mismo tipo.');
            product2.innerText = 'Producto 2';
            delete product2.dataset.id;
            return;
        }

        const compatible = compatibilidades.some(c => 
            (c.producto1 === productId1 && c.producto2 === productId2) ||
            (c.producto1 === productId2 && c.producto2 === productId1)
        );

        result.innerText = compatible ? 'Compatibles' : 'Incompatibles';
        result.style.display = 'block';
        showInfoBtn.style.display = 'block';
    });

    showInfoBtn.addEventListener('click', () => {
    const productId1 = parseInt(product1.dataset.id);
    const productId2 = parseInt(product2.dataset.id);

    const info1 = informacionProductos[productId1];
    const info2 = informacionProductos[productId2];

    let content = '';

    // Manejar el primer producto
    if (info1) {
        content += `
            <div>
                <strong>Tipo:</strong> ${info1.tipo}<br>
                <strong>Ingrediente Activo:</strong> ${info1.ingredienteActivo}<br>
                ${info1.codigo ? `<strong>Código:</strong> ${info1.codigo}<br>` : ''}
                ${info1.grupoQuimico ? `<strong>Grupo Químico:</strong> ${info1.grupoQuimico}<br>` : ''}
                ${info1.mecanismoAccion ? `<strong>Mecanismo de Acción:</strong> ${info1.mecanismoAccion}<br>` : ''}
                ${info1.modoAccion ? `<strong>Modo de Acción:</strong> ${info1.modoAccion}<br>` : ''}
                ${info1.pesoMolecular ? `<strong>Peso Molecular:</strong> ${info1.pesoMolecular}<br>` : ''}
                ${info1.nombreIUPAC ? `<strong>Nombre IUPAC:</strong> ${info1.nombreIUPAC}<br>` : ''}
                ${info1.formulaMolecular ? `<strong>Fórmula Molecular:</strong> ${info1.formulaMolecular}<br>` : ''}
                ${info1.cultivo ? `<strong>Cultivo:</strong> ${info1.cultivo}<br>` : ''}
                ${info1.plaga ? `<strong>Plaga:</strong> ${info1.plaga}<br>` : ''}
                ${info1.compatibilidad ? `<strong>Compatibilidad:</strong> ${info1.compatibilidad}<br>` : ''}
            </div>
            <hr>
        `;
    } else {
        const producto1 = productos.find(p => p.id === productId1);
        content += `
            <div>
                <strong>Tipo:</strong> ${producto1.tipo}<br>
                <strong>Ingrediente Activo:</strong> ${producto1.nombre}<br>
            </div>
            <hr>
        `;
    }

    // Manejar el segundo producto
    if (info2) {
        content += `
            <div>
                <strong>Tipo:</strong> ${info2.tipo}<br>
                <strong>Ingrediente Activo:</strong> ${info2.ingredienteActivo}<br>
                ${info2.codigo ? `<strong>Código:</strong> ${info2.codigo}<br>` : ''}
                ${info2.grupoQuimico ? `<strong>Grupo Químico:</strong> ${info2.grupoQuimico}<br>` : ''}
                ${info2.mecanismoAccion ? `<strong>Mecanismo de Acción:</strong> ${info2.mecanismoAccion}<br>` : ''}
                ${info2.modoAccion ? `<strong>Modo de Acción:</strong> ${info2.modoAccion}<br>` : ''}
                ${info2.pesoMolecular ? `<strong>Peso Molecular:</strong> ${info2.pesoMolecular}<br>` : ''}
                ${info2.nombreIUPAC ? `<strong>Nombre IUPAC:</strong> ${info2.nombreIUPAC}<br>` : ''}
                ${info2.formulaMolecular ? `<strong>Fórmula Molecular:</strong> ${info2.formulaMolecular}<br>` : ''}
                ${info2.cultivo ? `<strong>Cultivo:</strong> ${info2.cultivo}<br>` : ''}
                ${info2.plaga ? `<strong>Plaga:</strong> ${info2.plaga}<br>` : ''}
                ${info2.compatibilidad ? `<strong>Compatibilidad:</strong> ${info2.compatibilidad}<br>` : ''}
            </div>
            <hr>
        `;
    } else {
        const producto2 = productos.find(p => p.id === productId2);
        content += `
            <div>
                <strong>Tipo:</strong> ${producto2.tipo}<br>
                <strong>Ingrediente Activo:</strong> ${producto2.nombre}<br>
            </div>
            <hr>
        `;
    }


        document.querySelector('#info-modal .modal-content').innerHTML = `
            <span class="close">&times;</span>
            ${content}
        `;

        infoModal.style.display = 'block';

        document.querySelector('#info-modal .close').addEventListener('click', () => {
            infoModal.style.display = 'none';
            location.reload();
        });
    });

    refreshBtn.addEventListener('click', () => {
        location.reload();
    });

    window.addEventListener('click', (event) => {
        if (event.target === infoModal) {
            infoModal.style.display = 'none';
            location.reload();
        }
    });
});
