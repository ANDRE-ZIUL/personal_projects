//Funcão que ativa os botões e starta as funções
const start = () => {
    const buttonOne = document.getElementById("search");
    buttonOne.addEventListener("click", readJson);
    const buttonTwo = document.getElementById("print");
    buttonTwo.addEventListener("click", printAll);
    const buttonThree = document.getElementById("totalAmount");
    buttonThree.addEventListener("click", totalAmount);
}

//Função que recebe o dado e realiza a busca no array de máquinas
const readJson = () => {
    //FUNÇÃO LIMPA O CONTEÚDO IMPRESSO ANTERIORMENTE E MOSTRA SOMENTE A NOVA CONSULTA
    reload();

    //Variavel que recebe o valor digitado no input do HTML
    var hostnameSearch = document.getElementById("hostnameSearch").value;

    //Transforma a variavel 'hostnameSearch' em letra maiuscula
    hostnameSearch = hostnameSearch.toUpperCase();

    for(let i = 0; i < totens.length; i++) {
        //SE PERCORRER TODOS OS ITENS DO ARRAY E NÃO ENCONTRAR O CONTEÚDO DIGITADO NO INPUT
        if(i == (totens.length - 1)){
            document.getElementById("totem").innerHTML = `
                <h1>MÁQUINA NÃO ENCONTRADA</h1>
                <p>Não foi possível localizar a máquina '${hostnameSearch}', verifique o hostname e tente novamente!</p>
            `
        //SE EXISTIR UMA MÁQUINA COM O HOSTNAME EXATAMENTE IGUAL A EXPRESSÃO DIGITADA ELE ENTRA NO IF
        }else if(totens[i].hostname === hostnameSearch) {
            printTable(totens[i].hostname, totens[i].description, totens[i].localization);
            break
        //SE O HOSTNAME NÃO ESTEJA EXATAMENTE IGUAL ELE VERIFICA SE O HOSTNAME CONTÉM A EXPRESSÃO DIGITADA E ENTRA NO IF
        }else if(totens[i].hostname.includes(hostnameSearch)) {
            for(let j = 0; j < totens.length -1; i++){
                if(totens[i].hostname.includes(hostnameSearch)){
                 printTable(totens[i].hostname, totens[i].description, totens[i].localization);
                }
            }
            break
        //SE NÃO ENTRAR EM NENHUMA CONDIÇÃO ANTERIOR CONTINUA O LOOP
        }else{
            continue;
        }
    }
}

//Função que realiza a impressão dos resultados da pesquisa
const printTable = (totem, description, localization) => {
    document.getElementById("totem").innerHTML += `
        <h1>MÁQUINA ENCONTRADA</h1>
        <table>
            <thead>
                <td>Hostname</td>
                <td>Descrição</td>
                <td>Localização</td>
            </thead>

            <tbody>
                <td>${totem}</td>
                <td>${description}</td>
                <td>${localization}</td>
            </tbody>
        </table>
    ` 
}

//Função que realiza a impressão da tabela com os dados do array de máquinas completo
const printAll = () => {
    //FUNÇÃO LIMPA O CONTEÚDO IMPRESSO ANTERIORMENTE E MOSTRA SOMENTE A NOVA CONSULTA
    reload();

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

//Função que mostra a quantidade total de máquinas cadastradas no total e quantidade separadas por prédio
const totalAmount = () => {
     //FUNÇÃO LIMPA O CONTEÚDO IMPRESSO ANTERIORMENTE E MOSTRA SOMENTE A NOVA CONSULTA
     reload();

    //Variáveis que somam a quantia de PCs por prédio
    let pratica = 0;
    let technipan = 0;
    let klimaquip = 0;

    for(let i = 0; i < totens.length -1; i++) {
        if(totens[i].hostname.includes("-PPA")){
            pratica++;
        }else if(totens[i].hostname.includes("-TPA")){
            technipan++;
        }else if(totens[i].hostname.includes("-KPA")){
            klimaquip++;
        }
    }

    document.getElementById("qtdMachines").innerHTML = `
        <h1>QUANTIDADE DE MÁQUINAS CADASTRADAS</h1>
        <h1>${totens.length - 1} MÁQUINAS NO TOTAL</h1>
        <table>
            <thead>
                <td>Prédio Prática</td>
                <td>Prédio Technipan</td>
                <td>Prédio Klimaquip</td>
            </thead>

            <tbody>
                <td>${pratica} MÁQUINAS</td>
                <td>${technipan} MÁQUINAS</td>
                <td>${klimaquip} MÁQUINAS</td>
            </tbody>
        </table>
    `
}

//Função que limpa a tela antes de imprimir o novo conteúdo
const reload = () => {
    document.getElementById("printAll").innerHTML = "";
    document.getElementById("totem").innerHTML = "";
    document.getElementById("qtdMachines").innerHTML = "";
}

//Array de máquinas cadastradas no sistema.
var totens = [
    //Máquinas do Prédio Klimaquip (Ainda falta uma maquina que está sem antena wifi)
    {
        "hostname": "D976PD-KPA",
        "description": "MÁQUINA LOCALIZADA NO SETOR DA FERRAMENTARIA NO PRÉDIO DA KLIMAQUIP",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/KLIMAQUIP/D976PD-KPA.jpg\">Ver no Mapa</a>",
    },
    {
        "hostname": "D6KN41L1PD-KPA",
        "description": "MÁQUINA LOCALIZADA NA LINHA DO SPEED OVEN PRÓXIMO A MESA DO LÍDER JÚLIO NO PRÉDIO DA KLIMAQUIP",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/KLIMAQUIP/D6KN41L1PD-KPA.jpg\">Ver no Mapa</a>",
    },
    {
        "hostname": "DDCDKNQ1PD-KPA",
        "description": "MÁQUINA WINDOWS LOCALIZADA NA LINHA DO SPEED OVEN PRÓXIMO A MESA DO LÍDER JÚLIO NO PRÉDIO DA KLIMAQUIP",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/KLIMAQUIP/DDCDKNQ1PD-KPA.jpg\">Ver no Mapa</a>",
    },
    {
        "hostname": "D598PD-KPA",
        "description": "MÁQUINA LOCALIZADA PRÓXIMO A PRENSA NO PRÉDIO DA KLIMAQUIP",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/KLIMAQUIP/D589PD-KPA.jpg\">Ver no Mapa</a>"
    },
    {
        "hostname": "D07PD-KPA",
        "description": "MÁQUINA LOCALIZADA NO SETOR DA SOLDA NO PRÉDIO DA KLIMAQUIP",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/KLIMAQUIP/D07PD-KPA.jpg\">Ver no Mapa</a>"
    },
    {
        "hostname": "D591PD-KPA",
        "description": "MÁQUINA LOCALIZADA ATRÁS DO LABORATÓRIO DA ENGENHARIA PRÓXIMO A MESA DA LÍDER JOYCE XAVIER NO PRÉDIO DA KLIMAQUIP",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/KLIMAQUIP/D591PD-KPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D1761PD-KPA",
        "description": "MÁQUINA QUE FICA NA ÚLTIMA LINHA DE PRODUÇÃO NO PRÉDIO DA KLIMAQUIP PRÓXIMO AO POSTO DO LÍDER BENILSOM",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/KLIMAQUIP/D1761PD-KPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D04PD-KPA",
        "description": "MÁQUINA QUE FICA NA PONTA DA PRIMEIRA LINHA A ESQUERDA ENTRANDO PELA PORTA DO MEIO DO PRÉDIO DA KLIMAQUIP",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/KLIMAQUIP/D04PD-KPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D654PD-KPA",
        "description": "MÁQUINA NO MEIO DA SEGUNDA LINHA A ESQUERDA ENTRANDO PELA PORTA DO MEIO DO PRÉDIO DA KLIMAQUIP",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/KLIMAQUIP/D654PD-KPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D1759PD-KPA",
        "description": "MÁQUINA QUE FICA NO MEIO DA PENÚLTIMA LINHA DO PRÉDIO DA KLIMAQUIP A ESQUERDA DA PRENSA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/KLIMAQUIP/D1759PD-KPA.jpg\">Ver no Mapa</a>"
    },

    //Máquinas do Prédio da Technipan (Tem uma máquina desligada que não é usada)
    {
        "hostname": "D01PD-TPA",
        "description": "MÁQUINA QUE FICA ENTRE O PRÉDIO TECHNIPAN E PRÁTICA PRÓXIMO A SAÍDA PARA RUA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/TECHNIPAN/D01PD-TPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": " D7KN41L1PD-TPA",
        "description": "MÁQUINA QUE FICA NA LINHA A ESQUERDA MAIS AO FUNDO DO PRÉDIO DA TECHNIPAN",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/TECHNIPAN/D7KN41L1PD-TPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D10PD-TPA",
        "description": "MÁQUINA QUE FICA NO CORREDOR NO MEIO A ESQUERDA NO PRÉDIO DA TECHNIPAN",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/TECHNIPAN/D10PD-TPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D545PD-TPA",
        "description": "MÁQUINA QUE FICA NO CORREDOR A DIREITA PRÓXIMO A PINTURA NO PRÉDIO DA TECHNIPAN",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/TECHNIPAN/D545PD-TPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D775PD-TPA",
        "description": "MÁQUINA QUE FICA NA BAIA DA SOLDA DA PONTA A LADO DA FÁBRICA DE MÁQUINAS NO PRÉDIO DA TECHNIPAN",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/TECHNIPAN/D775PD-TPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D577PD-TPA",
        "description": "MÁQUINA QUE FICA NA BAIA DA SOLDA DO FUNDO AO LADO DA FÁBRICA DE MÁQUINAS NO PRÉDIO DA TECHNIPAN",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/TECHNIPAN/D577PD-TPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "DESLIGADO-TPA",
        "description": "MAQUINA NA PRIMEIRA BAIA A ESQUERDA AO LADO DA PAREDE NO PRÉDIO DA TECHNIPAN",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/TECHNIPAN/DESLIGADO.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D1204PD-TPA",
        "description": "MAQUINA NA SEGUNDA BAIA A ESQUERDA AO LADO DA PAREDE NO PRÉDIO DA TECHNIPAN",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/TECHNIPAN/D1204PD-TPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D18PD-TPA",
        "description": "MAQUINA NA TERCEIRA BAIA A ESQUERDA AO LADO DA PAREDE NO PRÉDIO DA TECHNIPAN",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/TECHNIPAN/D18PD-TPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D777TM-TPA",
        "description": "MAQUINA NA QUARTA BAIA A ESQUERDA AO LADO DA PAREDE NO PRÉDIO DA TECHNIPAN",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/TECHNIPAN/D777PD-TPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "DJPJ11Y1PD-TPA",
        "description": "MAQUINA NA QUINTA BAIA A ESQUERDA AO LADO DA PAREDE NO PRÉDIO DA TECHNIPAN",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/TECHNIPAN/DJPJ11Y1PD-TPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D9TN0RN1PD-TPA",
        "description": "MAQUINA NA ÚLTIMA BAIA A ESQUERDA AO LADO DA PAREDE DO FUNDO NO PRÉDIO DA TECHNIPAN",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/TECHNIPAN/D9TN0RN1PD-TPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D675-TPA",
        "description": "MÁQUINA NA PONTA ESQUERDA DA PRIMEIRA BAIA CENTRAL NO PRÉDIO DA TECHNIPAN",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/TECHNIPAN/D675-TPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D1492PD-TPA",
        "description": "MÁQUINA NA PONTA DIREITA DA PRIMEIRA BAIA CENTRAL NO PRÉDIO DA TECHNIPAN",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/TECHNIPAN/D1492PD-TPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D942PD-TPA",
        "description": "MÁQUINA NA PONTA ESQUERDA DA SEGUNDA BAIA CENTRAL NO PRÉDIO DA TECHNIPAN",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/TECHNIPAN/D942PD-TPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D1491PD-TPA",
        "description": "MÁQUINA NA PONTA DIREITA DA SEGUNDA BAIA CENTRAL NO PRÉDIO DA TECHNIPAN",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/TECHNIPAN/D1491PD-TPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "DJPSH6W1PD-TPA",
        "description": "MÁQUINA NA PONTA ESQUERDA DA TERCEIRA BAIA CENTRAL NO PRÉDIO DA TECHNIPAN",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/TECHNIPAN/DJPSH6W1PD-TPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D1489PD-TPA",
        "description": "MÁQUINA NA PONTA DIREITA DA TERCEIRA BAIA CENTRAL NO PRÉDIO DA TECHNIPAN (UNICO TOTEM WINDOWS DO PRÉDIO)",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/TECHNIPAN/D1489PD-TPA.jpg\">Ver no Mapa</a>"
    },

    //Máquinas do prédio Prática
    {
        "hostname": "D1300PD-PPA",
        "description": "MÁQUINA A ESQUERDA DA SALA DO ATALIBA NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D1300PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D9TNH342PD-PPA",
        "description": "MÁQUINA NA PONTA DA LINHA DE PRODUÇÃO PRÓXIMO A MAQUINA LX NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D9TNH342PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D763PD-PPA",
        "description": "MÁQUINA NA BAIA DE SOLDA EM FRENTE A SALA DO ATALIBA DO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D763PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D974PD-PPA",
        "description": "MÁQUINA COM CARCAÇA DE METAL A DIREITA DA SALA DO ATALIBA NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D974PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D1763PD-PPA",
        "description": "MÁQUINA NO MEIO DA PRIMEIRA LINHA DE PRODUÇÃO SENTIDO ENTRADA NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D1763PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D1758PD-PPA",
        "description": "MÁQUINA NO MEIO DA PRIMEIRA LINHA DE PRODUÇÃO SENTIDO FUNDO NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D1758PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D973PD-PPA",
        "description": "MÁQUINA NO MEIO DA SEGUNDA LINHA DE PRODUÇÃO SENTIDO ENTRADA  PRÓXIMO A MESA DO LÍDER GABRIEL CANDIDO NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D973PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D1757PD-PPA",
        "description": "MÁQUINA NO MEIO DA SEGUNDA LINHA DE PRODUÇÃO SENTIDO FUNDO  PRÓXIMO A MESA DO LÍDER GABRIEL CANDIDO NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D1757PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D08PD-PPA",
        "description": "MÁQUINA COM CARCAÇA DE METAL NO SETOR DO TESTE PRÓXIMO AO SESMT NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D08PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "DDY3S3M1PD-PPA",
        "description": "MÁQUINA QUE FICA NA PONTA ESQUERDA DA TERCEIRA LINHA DE PRODUÇÃO SENTIDO ENTRADA NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/DDY3S3M1PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "DJCDKNQ1PD-PPA",
        "description": "MÁQUINA QUE FICA DA BAIA DE SOLDA DA TERCEIRA LINHA DE PRODUÇÃO SENTIDO ENTRADA NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/DJCDKNQ1PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D1760PD-PPA",
        "description": "MÁQUINA QUE FICA NA PONTA DIREITA DA TERCEIRA LINHA DE PRODUÇÃO SENTIDO ENTRADA NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D1760PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "DGCDKNQ1PD-PPA",
        "description": "MÁQUINA QUE FICA NA PONTA DIREITA DA TERCEIRA LINHA DE PRODUÇÃO SENTIDO FUNDO ATRÁS DO SETOR DA SOLDA NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/DGCDKNQ1PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D576PD-PPA",
        "description": "MÁQUINA QUE FICA NA BAIA DA SOLDA NO MEIO DA TERCEIRA LINHA DE PRODUÇÃO SENTIDO FUNDO NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D576PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D1183PD-PPA",
        "description": "MÁQUINA QUE FICA NA BAIA DA SOLDA NA PONTA ESQUERDA DA TERCEIRA LINHA DE PRODUÇÃO NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D1183PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D975PD-PPA",
        "description": "MÁQUINA QUE FICA ATRÁS DA MÁQUINA P4 NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D975PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D3TN0RN1PD-PPA",
        "description": "MÁQUINA QUE FICA ATRÁS DA P4 NO SETOR DA ESTAMPARIA PRÓXIMO A MESA DO LÍDER ROBSON NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D3TN0RN1PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "DG88P8S1PD-PPA",
        "description": "MÁQUINA QUE FICA NO CORREDOR ATRÁS DA NIGHTRAIN 0ENTRE O PRÉDIO PRÁTICA E TECHNIPAN PRÓXIMO A ESTAMPARIA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/DG88P8S1PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D11PD-PPA",
        "description": "MÁQUINA QUE FICA JUNTO DA MÁQUINA SG NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D11PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D1305PD-PPA",
        "description": "MÁQUINA QUE FICA NO SETOR DA LÃ DE ROCHA NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D1305PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D1762PD-PPA",
        "description": "MÁQUINA QUE FICA NA PONTA ESQUERDA DO SETOR DA SOLDA PRÓXIMO AO SETOR DO PAINEL NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D1762PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D934PD-PPA",
        "description": "MÁQUINA QUE FICA ATRÁS DO ROBÔ DE SOLDA NO SETOR DA SOLDA NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D934PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D979PD-PPA",
        "description": "MÁQUINA QUE FICA A ESQUERDA DO SETOR DA SOLDA A DIREITA DO ROBO DE SOLDA NO PRÉDIO PRATICA (MÁQUINA MAIS ANTIGA DO SETOR)",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D979PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D1192PD-PPA",
        "description": "MÁQUINA QUE FICA NA SEGUNDA BAIA ATRÁS DO ROBÔ DE SOLDA NO SETOR DA SOLDA NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D1192PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D1303PD-PPA",
        "description": "MÁQUINA QUE FICA NO MEIO DO SETOR DA SOLDA SENTIDO FUNDO NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D1192PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D1273PD-PPA",
        "description": "MÁQUINA QUE FICA NA PRIMEIRA BAIA NA PONTA DIREITA SENTIDO ENTRADA NO SETOR DA SOLDA NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D1273PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "DBTN0RN1PD-PPA",
        "description": "MÁQUINA QUE FICA NA SEGUNDA BAIA DA DIREITA PRA ESQUERDA SENTIDO ENTRADA NO SETOR DA SOLDA NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/DBTN0RN1PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D1304PD-PPA",
        "description": "MÁQUINA QUE FICA NA TERCEIRA BAIA DA DIREITA PRA ESQUERDA SENTIDO ENTRADA NO SETOR DA SOLDA NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D1304PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D978PD-PPA",
        "description": "MÁQUINA QUR FICA NA QUARTA BAIA DA DIREITA PRA ESQUERDA SENTIDO ENTRADA JUNTO DA MESA DO LÍDER WILLIAM PETERSOM NO SETOR DA SOLDA NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D978PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D1490TM-PPA",
        "description": "MÁQUINA QUE FICA NA DOBRADEIRA G-BEND 60 NO SETOR DA ESTAMPARIA NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D1490PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "D1494PD-PPA",
        "description": "MÁQUINA QUE FICA NA DOBRADEIRA XELECT 60 NO SETOR DA ESTAMPARIA NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/D1494PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "DD90NF22PD-PPA",
        "description": "MÁQUINA QUE FICA NA DOBRADEIRA XELECT 50 NO SETOR DA ESTAMPARIA NO PRÉDIO PRÁTICA",
        "localization": "<a href=\"../IMAGE/LOCALIZACAO/PRATICA/DD90NF22PD-PPA.jpg\">Ver no Mapa</a>"
    },{
        "hostname": "QUARTA DOBRADEIRA-PPA",
        "description": "",
        "localization": ""
    },{
        "hostname": "QUINTA DOBRADEIRA-PPA",
        "description": "",
        "localization": ""
    },{
        "hostname": "SEXTA DOBRADEIRA (NOVA)-PPA",
        "description": "",
        "localization": ""
    },{
        "hostname": "MAQUINA_NAO_ENCONTRADA"
    }
]

//Ativação da função geral
start();


