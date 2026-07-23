const painelMesas = document.getElementById('painelMesas');
let todasAsMesas = [];

class Mesa {
    constructor(numero, primeiroPedido) {
        this.numero = numero;
        // Transformamos os pedidos em um Array de Objetos!
        this.pedidos = [{ nome: primeiroPedido, concluido: false }];
        this.atendida = false;
    }

    renderizarHtml = () => {
        const cartao = document.createElement('div');
        cartao.style.border = '1px solid #ccc';
        cartao.style.padding = '15px';
        cartao.style.width = 'fit-content';
        cartao.style.margin = '10px 0';
        cartao.style.borderRadius = '5px';
        cartao.style.backgroundColor = this.atendida ? '#d4edda' : '#f8d7da';

        // 1. Monta o cabeçalho do cartão da mesa
        let htmlConteudo = `
            <h3>Mesa ${this.numero}</h3>
            <p><strong>Status Geral:</strong> ${this.atendida ? 'Atendida' : 'Pendente'}</p>
            <h4>Itens do Pedido:</h4>
            <ul style="list-style-type: none; padding-left: 0;">
        `;

        // 2. Loop para gerar as linhas de cada item do pedido
        this.pedidos.forEach((item, index) => {
            htmlConteudo += `
                <li style="margin-bottom: 8px; text-decoration: ${item.concluido ? 'line-through' : 'none'}">
                    • ${item.nome} - <strong>${item.concluido ? '✓ Pronto' : '⏳ Preparando'}</strong>
                    <button onclick="todasAsMesas.find(m => m.numero == ${this.numero}).alternarItem(${index})" style="margin-left: 10px; padding: 2px 5px; font-size: 11px;">
                        ${item.concluido ? 'Reabrir Item' : 'Concluir Item'}
                    </button>
                </li>
            `;
        });

        htmlConteudo += `</ul>`;
        cartao.innerHTML = htmlConteudo;

        // 3. Campo de texto e Botão para Adicionar/Editar novos itens na mesa
        const divEditar = document.createElement('div');
        divEditar.style.marginTop = '15px';
        divEditar.style.borderTop = '1px dashed #bbb';
        divEditar.style.paddingTop = '10px';

        const inputNovoItem = document.createElement('input');
        inputNovoItem.type = 'text';
        inputNovoItem.placeholder = 'Acrescentar novo item...';
        inputNovoItem.style.padding = '4px';

        const btnAcrescentar = document.createElement('button');
        btnAcrescentar.textContent = 'Adicionar Item';
        btnAcrescentar.style.marginLeft = '5px';
        
        btnAcrescentar.addEventListener('click', () => {
            if (inputNovoItem.value.trim() === '') return;
            this.adicionarNovoItem(inputNovoItem.value);
        });

        divEditar.appendChild(inputNovoItem);
        divEditar.appendChild(btnAcrescentar);
        cartao.appendChild(divEditar);

        // 4. Botão Geral para fechar/atender a mesa inteira
        const btnMesaGeral = document.createElement('button');
        btnMesaGeral.textContent = this.atendida ? 'Reabrir Mesa' : 'Fechar Mesa (Atendida)';
        btnMesaGeral.style.marginTop = '10px';
        btnMesaGeral.style.display = 'block';
        
        btnMesaGeral.addEventListener('click', () => {
            this.alternarStatusMesa();
        });

        cartao.appendChild(btnMesaGeral);
        painelMesas.appendChild(cartao);
    }

    // Adiciona um novo objeto de item dentro do array de pedidos da mesa
    adicionarNovoItem = (nomeItem) => {
        this.pedidos.push({ nome: nomeItem, concluido: false });
        atualizarPainel();
    }

    // Alterna o status de um item específico usando o índice dele no array
    alternarItem = (index) => {
        this.pedidos[index].concluido = !this.pedidos[index].concluido;
        atualizarPainel();
    }

    alternarStatusMesa = () => {
        this.atendida = !this.atendida;
        atualizarPainel();
    }
}

function atualizarPainel() {
    painelMesas.innerHTML = '';
    todasAsMesas.reverse().forEach(mesa => {
        mesa.renderizarHtml();
    });
}

function adicionarNovaMesa() {
    const inputNumero = document.getElementById('numMesa');
    const inputPedido = document.getElementById('txtPedido');

    if (inputNumero.value === '' || inputPedido.value === '') {
        alert('Por favor, preencha o número da mesa e o primeiro pedido!');
        return;
    }

    const novaMesa = new Mesa(inputNumero.value, inputPedido.value);
    todasAsMesas.push(novaMesa);
    atualizarPainel();

    inputNumero.value = '';
    inputPedido.value = '';
}
