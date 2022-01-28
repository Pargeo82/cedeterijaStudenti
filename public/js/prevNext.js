function clearTable() {
    let tabela = document.querySelectorAll('#mjesec tbody tr');
    for (let i = 0; i < tabela.length; i++) {
        tabela[i].remove();
    }
};

export { clearTable };