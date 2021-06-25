const botao = document.querySelector('button')
const tabela = document.querySelector('main')
var salario = 0

function calcular() {
    salario = parseFloat(document.querySelector('input').value)
    salario = salario.toFixed(1).replace(',','.')

    // Verifica se o valor inserido é valido e qual a porcentagem de desconto
    if (salario > 0 && salario <= 1100) {
        descontoPorcentagem(7.5);
    } else if (salario > 1100 && salario <= 2203) {
        descontoPorcentagem(9)
    } else if (salario > 2203 && salario <= 3305) {
        descontoPorcentagem(12)
    } else if (salario > 3305 && salario <= 6433) {
        descontoPorcentagem(14)
    } else if (salario > 6433) {
        descontoFixo()
    } else { tabela.innerHTML = '<p> Por favor insira uma quantia válida </p>'}
}

function descontoPorcentagem(param) {
    var desconto = parseFloat((salario * param) / 100);
    desconto = desconto.toFixed(1)
    var total = parseFloat(salario) - parseFloat(desconto)
    console.log("R$ " + total)
    tabela.innerHTML = `<table>
                        <tbody>
                        <tr>
                        <th>Salário Bruto</th>
                        <th>INSS - Alíquota</th>
                        <th>Desconto</th>
                        <th>Valor líquido</th>
                        </tr>
                        <tr>
                        <td>R$ ${salario}</td>
                        <td>${param}%</td>
                        <td>R$ ${desconto}</td>
                        <td>R$ ${total.toFixed(1)}</td>
                        </tr>
                        </tbody>
                        </table>`
    document.querySelector('input').value = " "
}

function descontoFixo(){
    var total = parseFloat(salario) - 751.99;
    tabela.innerHTML = `<table>
                        <tbody>
                        <tr>
                        <th>Salário Bruto</th>
                        <th>INSS - Alíquota</th>
                        <th>Valor líquido</th>
                        </tr>
                        <tr>
                        <td>R$ ${salario}</td>
                        <td>R$ 751.99 </td>
                        <td>R$ ${total.toFixed(1)}</td>
                        </tr>
                        </tbody>
                        </table>`
    document.querySelector('input').value = " "
}

botao.onclick = calcular;