document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const suggestions = document.getElementById('suggestions');
    const product1 = document.getElementById('product1');
    const product2 = document.getElementById('product2');
    const compareBtn = document.getElementById('compare-btn');
    const refreshBtn = document.getElementById('refresh-btn');
    const result = document.getElementById('result');

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
        { producto1: 3, producto2: 11, compatible: true }
    ];

    let selectedProducts = [];

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        suggestions.innerHTML = '';
        if (query.length > 1) {
            productos.forEach(product => {
                if (product.nombre.toLowerCase().includes(query)) {
                    const div = document.createElement('div');
                    div.textContent = product.nombre;
                    div.classList.add('suggestion');
                    div.addEventListener('click', () => {
                        if (selectedProducts.length < 2) {
                            if (selectedProducts.length === 0 || selectedProducts[0].tipo !== product.tipo) {
                                selectedProducts.push(product);
                                if (selectedProducts.length === 1) {
                                    product1.textContent = product.nombre;
                                } else {
                                    product2.textContent = product.nombre;
                                }
                                searchInput.value = '';
                                suggestions.innerHTML = '';
                            } else {
                                alert('No se pueden comparar productos del mismo tipo');
                            }
                        } else {
                            alert('Ya has seleccionado dos productos');
                        }
                    });
                    suggestions.appendChild(div);
                }
            });
        }
    });

    compareBtn.addEventListener('click', () => {
        if (selectedProducts.length === 2) {
            const compatible = compatibilidades.some(c => 
                (c.producto1 === selectedProducts[0].id && c.producto2 === selectedProducts[1].id) || 
                (c.producto1 === selectedProducts[1].id && c.producto2 === selectedProducts[0].id)
            );
            result.textContent = compatible ? 'Son compatibles' : 'No son compatibles';
        } else {
            alert('Selecciona dos productos para comparar');
        }
    });

    refreshBtn.addEventListener('click', () => {
        window.location.reload();
    });
});
