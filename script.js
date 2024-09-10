document.getElementById('download-ticket').addEventListener('click', function() {
    const nome = new URLSearchParams(window.location.search).get('nome');
    const cognome = new URLSearchParams(window.location.search).get('cognome');
    const email = new URLSearchParams(window.location.search).get('email');
    const telefono = new URLSearchParams(window.location.search).get('telefono');
    const preferenze = new URLSearchParams(window.location.search).get('preferenze');

    const doc = new jsPDF();
    doc.text(`Nome: ${nome}`, 10, 10);
    doc.text(`Cognome: ${cognome}`, 10, 20);
    doc.text(`Email: ${email}`, 10, 30);
    doc.text(`Telefono: ${telefono}`, 10, 40);
    doc.text(`Preferenze: ${preferenze}`, 10, 50);
    doc.text(`Partenza: Martedì 10 settembre, ore 22:15 in Piazza Borromini`, 10, 60);

    doc.save('biglietto.pdf');
});
