// Simula la rivelazione dei dettagli del biglietto
document.addEventListener('DOMContentLoaded', function () {
    const orario = '15:30'; // Puoi personalizzare con valori dinamici
    const giorno = 'Sabato 14 Settembre'; // Puoi personalizzare con valori dinamici

    document.getElementById('orario').textContent = orario;
    document.getElementById('giorno').textContent = giorno;

    document.getElementById('download-ticket').addEventListener('click', function () {
        alert('Il tuo biglietto è stato scaricato!');
        // Puoi aggiungere la funzionalità di download del biglietto qui
    });
});
