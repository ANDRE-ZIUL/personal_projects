//Funcão que ativa os botões e starta as funções
const start = () => {
    const buttonOne = document.getElementById("search");
    buttonOne.onclick = readJson;
    const buttonTwo = document.getElementById("print");
    buttonTwo.onclick = printAll;
    const buttonThree = document.getElementById("totalAmount");
    buttonThree.onclick = totalAmount;
}

//Função que recebe o dado e realiza a busca no array de máquinas
const readJson = () => {
    const hostnameSearch = document.getElementById("hostnameSearch").value;

    for(let i = 0; i < totens.length; i++) {
        if(i == (totens.length - 1)){
            document.getElementById("totem").innerHTML = `
                <h1>MÁQUINA NÃO ENCONTRADA</h1>
                <p>Não foi possível localizar a máquina '${hostnameSearch}', verifique o hostname e tente novamente!</p>
            `;
        }else if(totens[i].hostname != hostnameSearch.toUpperCase()) {
            continue;
        }else{
            document.getElementById("totem").innerHTML = `
                <h1>MÁQUINA ENCONTRADA</h1>
                <table>
                    <thead>
                        <td>Hostname</td>
                        <td>Descrição</td>
                        <td>Localização</td>
                    </thead>

                    <tbody>
                        <td>${totens[i].hostname}</td>
                        <td>${totens[i].description}</td>
                        <td>${totens[i].localization}</td>
                    </tbody>
                </table>
            ` 
            break;
        }
    }
}

//Função que realiza a impressão da tabela com os dados do array de máquinas completo
const printAll = () => {
    document.getElementById("printAll").innerHTML = `
    <h1>MÁQUINAS CADASTRADAS: </h1>
    <table>
        <thead>
            <td>Hostname</td>
            <td>Descrição</td>
        </thead>
    </table>
    `
    for(let i = 0; i < totens.length - 1; i++) {
       document.getElementById("printAll").innerHTML += `
            <table>
                <tbody>
                    <td>${totens[i].hostname}</td>
                    <td>${totens[i].description}</td>
                </tbody>
            </table>
        `
    } 
}

//Função que mostra a quantidade total de máquinas cadastradas no array
const totalAmount = () => {
    alert("Temos no total " + (totens.length - 1) + " máquinas!")
}

//Array de máquinas cadastradas no sistema.
var totens = [
    //Máquinas do Prédio Klimaquip (Ainda falta uma maquina que está sem antena wifi)
    {
        "hostname": "D976PD-KPA",
        "description": "MÁQUINA LOCALIZADA NO SETOR DA FERRAMENTARIA NO PRÉDIO DA KLIMAQUIP",
        "localization": ""
    },
    {
        "hostname": "D598PD-KPA",
        "description": "MÁQUINA LOCALIZADA PRÓXIMO A PRENSA NO PRÉDIO DA KLIMAQUIP",
        "localization": ""
    },
    {
        "hostname": "D07PD-KPA",
        "description": "MÁQUINA LOCALIZADA NO SETOR DA SOLDA NO PRÉDIO DA KLIMAQUIP",
        "localization": ""
    },
    {
        "hostname": "D591PD-KPA",
        "description": "MÁQUINA LOCALIZADA ATRÁS DO LABORATÓRIO DA ENGENHARIA PRÓXIMO A MESA DA LÍDER JOYCE XAVIER NO PRÉDIO DA KLIMAQUIP",
        "localization": ""
    },{
        "hostname": "D1761PD-KPA",
        "description": "MÁQUINA QUE FICA NA ÚLTIMA LINHA DE PRODUÇÃO NO PRÉDIO DA KLIMAQUIP PRÓXIMO AO POSTO DO LÍDER BENILSOM",
        "localization": ""
    },{
        "hostname": "D04PD-KPA",
        "description": "MÁQUINA QUE FICA NA PONTA DA PRIMEIRA LINHA A ESQUERDA ENTRANDO PELA PORTA DO MEIO DO PRÉDIO DA KLIMAQUIP",
        "localization": ""
    },{
        "hostname": "D654PD-KPA",
        "description": "MÁQUINA NO MEIO DA SEGUNDA LINHA A ESQUERDA ENTRANDO PELA PORTA DO MEIO DO PRÉDIO DA KLIMAQUIP",
        "localization": ""
    },{
        "hostname": "D1759PD-KPA",
        "description": "MÁQUINA QUE FICA NO MEIO DA PENÚLTIMA LINHA DO PRÉDIO DA KLIMAQUIP A ESQUERDA DA PRENSA",
        "localization": ""
    },

    //Máquinas do Prédio da Technipan (Tem uma máquina desligada que não é usada)
    {
        "hostname": "D01PD-TPA",
        "description": "MÁQUINA QUE FICA ENTRE O PRÉDIO TECHNIPAN E PRÁTICA PRÓXIMO A SAÍDA PARA RUA",
        "localization": ""
    },{
        "hostname": " D7KN41L1PD-TPA",
        "description": "MÁQUINA QUE FICA NA LINHA A ESQUERDA MAIS AO FUNDO DO PRÉDIO DA TECHNIPAN",
        "localization": ""
    },{
        "hostname": "D10PD-TPA",
        "description": "MÁQUINA QUE FICA NO CORREDOR NO MEIO A ESQUERDA NO PRÉDIO DA TECHNIPAN",
        "localization": ""
    },{
        "hostname": "D545PD-TPA",
        "description": "MÁQUINA QUE FICA NO CORREDOR A DIREITA PRÓXIMO A PINTURA NO PRÉDIO DA TECHNIPAN",
        "localization": ""
    },{
        "hostname": "D775PD-TPA",
        "description": "MÁQUINA QUE FICA NA BAIA DA SOLDA DA PONTA A LADO DA FÁBRICA DE MÁQUINAS NO PRÉDIO DA TECHNIPAN",
        "localization": ""
    },{
        "hostname": "D577PD-TPA",
        "description": "MÁQUINA QUE FICA NA BAIA DA SOLDA DO FUNDO AO LADO DA FÁBRICA DE MÁQUINAS NO PRÉDIO DA TECHNIPAN",
        "localization": ""
    },{
        "hostname": "DESLIGADO",
        "description": "MAQUINA NA PRIMEIRA BAIA A ESQUERDA AO LADO DA PAREDE NO PRÉDIO DA TECHNIPAN",
        "localization": ""
    },{
        "hostname": "D1204PD-TPA",
        "description": "MAQUINA NA SEGUNDA BAIA A ESQUERDA AO LADO DA PAREDE NO PRÉDIO DA TECHNIPAN",
        "localization": ""
    },{
        "hostname": "D18PD-TPA",
        "description": "MAQUINA NA TERCEIRA BAIA A ESQUERDA AO LADO DA PAREDE NO PRÉDIO DA TECHNIPAN",
        "localization": ""
    },{
        "hostname": "D777PD-TPA",
        "description": "MAQUINA NA QUARTA BAIA A ESQUERDA AO LADO DA PAREDE NO PRÉDIO DA TECHNIPAN",
        "localization": ""
    },{
        "hostname": "DJPJ11Y1PD-TPA",
        "description": "MAQUINA NA QUINTA BAIA A ESQUERDA AO LADO DA PAREDE NO PRÉDIO DA TECHNIPAN",
        "localization": ""
    },{
        "hostname": "D9TN0RN1PD-TPA",
        "description": "MAQUINA NA ÚLTIMA BAIA A ESQUERDA AO LADO DA PAREDE DO FUNDO NO PRÉDIO DA TECHNIPAN",
        "localization": ""
    },{
        "hostname": "D675-TPA",
        "description": "MÁQUINA NA PONTA ESQUERDA DA PRIMEIRA BAIA CENTRAL NO PRÉDIO DA TECHNIPAN",
        "localization": ""
    },{
        "hostname": "D1492PD-TPA",
        "description": "MÁQUINA NA PONTA DIREITA DA PRIMEIRA BAIA CENTRAL NO PRÉDIO DA TECHNIPAN",
        "localization": ""
    },{
        "hostname": "D942PD-TPA",
        "description": "MÁQUINA NA PONTA ESQUERDA DA SEGUNDA BAIA CENTRAL NO PRÉDIO DA TECHNIPAN",
        "localization": ""
    },{
        "hostname": "D1491PD-TPA",
        "description": "MÁQUINA NA PONTA DIREITA DA SEGUNDA BAIA CENTRAL NO PRÉDIO DA TECHNIPAN",
        "localization": ""
    },{
        "hostname": "DJPSH6W1PD-TPA",
        "description": "MÁQUINA NA PONTA ESQUERDA DA TERCEIRA BAIA CENTRAL NO PRÉDIO DA TECHNIPAN",
        "localization": ""
    },{
        "hostname": "D1489PD-TPA",
        "description": "MÁQUINA NA PONTA DIRETIRA DA TERCEIRA BAIA CENTRAL NO PRÉDIO DA TECHNIPAN (UNICO TOTEM WINDOWS DO PRÉDIO)",
        "localization": ""
    },

    //Máquinas do prédio Prática
    {
        "hostname": "D1300PD-PPA",
        "description": "MÁQUINA A ESQUERDA DA SALA DO ATALIBA NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D9TNH342PD-PPA",
        "description": "MÁQUINA NA PONTA DA LINHA DE PRODUÇÃO PRÓXIMO A MAQUINA LX NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D763PD-PPA",
        "description": "MÁQUINA NA BAIA DE SOLDA EM FRENTE A SALA DO ATALIBA DO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D974PD-PPA",
        "description": "MÁQUINA COM CARCAÇA DE METAL A DIREITA DA SALA DO ATALIBA NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D1763PD-PPA",
        "description": "MÁQUINA NO MEIO DA PRIMEIRA LINHA DE PRODUÇÃO SENTIDO ENTRADA NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D1758PD-PPA",
        "description": "MÁQUINA NO MEIO DA PRIMEIRA LINHA DE PRODUÇÃO SENTIDO FUNDO NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D973PD-PPA",
        "description": "MÁQUINA NO MEIO DA SEGUNDA LINHA DE PRODUÇÃO SENTIDO ENTRADA  PRÓXIMO A MESA DO LÍDER GABRIEL CANDIDO NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D1757PD-PPA",
        "description": "MÁQUINA NO MEIO DA SEGUNDA LINHA DE PRODUÇÃO SENTIDO FUNDO  PRÓXIMO A MESA DO LÍDER GABRIEL CANDIDO NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D08PD-PPA",
        "description": "MÁQUINA COM CARCAÇA DE METAL NO SETOR DO TESTE PRÓXIMO AO SESMT NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "DDY3S3M1PD-PPA",
        "description": "MÁQUINA QUE FICA NA PONTA ESQUERDA DA TERCEIRA LINHA DE PRODUÇÃO SENTIDO ENTRADA NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "DJCDKNQ1PD-PPA",
        "description": "MÁQUINA QUE FICA DA BAIA DE SOLDA DA TERCEIRA LINHA DE PRODUÇÃO SENTIDO ENTRADA NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D1760PD-PPA",
        "description": "MÁQUINA QUE FICA NA PONTA DIREITA DA TERCEIRA LINHA DE PRODUÇÃO SENTIDO ENTRADA NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D6CDKNQ1PD-PPA",
        "description": "MÁQUINA QUE FICA NA PONTA DIREITA DA TERCEIRA LINHA DE PRODUÇÃO SENTIDO FUNDO ATRÁS DO SETOR DA SOLDA NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D576PD-PPA",
        "description": "MÁQUINA QUE FICA NA BAIA DA SOLDA NO MEIO DA TERCEIRA LINHA DE PRODUÇÃO SENTIDO FUNDO NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D1183PD-PPA",
        "description": "MÁQUINA QUE FICA NA BAIA DA SOLDA NA PONTA ESQUERDA DA TERCEIRA LINHA DE PRODUÇÃO NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D975PD-PPA",
        "description": "MÁQUINA QUE FICA ATRÁS DA MÁQUINA P4 NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D3TN0RN1PD-PPA",
        "description": "MÁQUINA QUE FICA ATRÁS DA P4 NO SETOR DA ESTAMPARIA PRÓXIMO A MESA DO LÍDER ROBSON NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "DG88P8S1PD-PPA",
        "description": "MÁQUINA QUE FICA NO CORREDOR ATRÁS DA NIGHTRAIN 0ENTRE O PRÉDIO PRÁTICA E TECHNIPAN PRÓXIMO A ESTAMPARIA",
        "localization": ""
    },{
        "hostname": "D11PD-PPA",
        "description": "MÁQUINA QUE FICA JUNTO DA MÁQUINA SG NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D1305PD-PPA",
        "description": "MÁQUINA QUE FICA NO SETOR DA LÃ DE ROCHA NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D1762PD-PPA",
        "description": "MÁQUINA QUE FICA NA PONTA ESQUERDA DO SETOR DA SOLDA PRÓXIMO AO SETOR DO PAINEL NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D934PD-PPA",
        "description": "MÁQUINA QUE FICA ATRÁS DO ROBÔ DE SOLDA NO SETOR DA SOLDA NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D979PD-PPA",
        "description": "MÁQUINA QUE FICA A ESQUERDA DO SETOR DA SOLDA A DIREITA DO ROBO DE SOLDA NO PRÉDIO PRATICA (MÁQUINA MAIS ANTIGA DO SETOR)",
        "localization": ""
    },{
        "hostname": "D1192PD-PPA",
        "description": "MÁQUINA QUE FICA NA SEGUNDA BAIA ATRÁS DO ROBÔ DE SOLDA NO SETOR DA SOLDA NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D1303PD-PPA",
        "description": "MÁQUINA QUE FICA NO MEIO DO SETOR DA SOLDA SENTIDO FUNDO NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D1273PD-PPA",
        "description": "MÁQUINA QUE FICA NA PRIMEIRA BAIA NA PONTA DIREITA SENTIDO ENTRADA NO SETOR DA SOLDA NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "DBTN0RN1PD-PPA",
        "description": "MÁQUINA QUE FICA NA SEGUNDA BAIA DA DIREITA PRA ESQUERDA SENTIDO ENTRADA NO SETOR DA SOLDA NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D1304PD-PPA",
        "description": "MÁQUINA QUE FICA NA TERCEIRA BAIA DA DIREITA PRA ESQUERDA SENTIDO ENTRADA NO SETOR DA SOLDA NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D978PD-PPA",
        "description": "MÁQUINA QUR FICA NA QUARTA BAIA DA DIREITA PRA ESQUERDA SENTIDO ENTRADA JUNTO DA MESA DO LÍDER WILLIAM PETERSOM NO SETOR DA SOLDA NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D1490PD-PPA",
        "description": "MÁQUINA QUE FICA NA DOBRADEIRA G-BEND 60 NO SETOR DA ESTAMPARIA NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "D1494PD-PPA",
        "description": "MÁQUINA QUE FICA NA DOBRADEIRA XELECT 50 NO SETOR DA ESTAMPARIA NO PRÉDIO PRÁTICA",
        "localization": ""
    },{
        "hostname": "TERCEIRA DOBRADEIRA",
        "description": "",
        "localization": ""
    },{
        "hostname": "QUARTA DOBRADEIRA",
        "description": "",
        "localization": ""
    },{
        "hostname": "QUINTA DOBRADEIRA",
        "description": "",
        "localization": ""
    },{
        "hostname": "SEXTA DOBRADEIRA (NOVA)",
        "description": "",
        "localization": ""
    },{
        "hostname": "MAQUINA_NAO_ENCONTRADA"
    }
]

//Ativação da função geral
start();


