// Scripts-safe.js - Não interfere no conteúdo principal, apenas demo interativo opcional (comentado para evitar travamentos).
// Descomente se quiser testar.

/*
const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Demo dinâmico (clique para adicionar itens).';
document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('Conteúdo:');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const newContent = prompt('Novo conteúdo:');
    this.textContent = newContent;
  }
}
*/
