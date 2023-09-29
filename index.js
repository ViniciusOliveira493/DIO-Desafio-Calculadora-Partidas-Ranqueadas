const scanner = require("prompt-sync")();
// -------------------------------- LOOP ---------------------------------------
while(true){
    let playerName = scanner("Digite o seu nome: ");
    let playerWins = scanner("Digite a quantidade de vitórias: ");
    let playerLosses = scanner("Digite a quantidade de derrotas: ");

    console.log("\n");

    let balance = winsVsLosses(playerWins,playerLosses);
    let rank = classifyPlayer(balance);

    console.log(`O jogador ${playerName} tem saldo de ${balance} e está no rank ${rank}`);

    console.log("\n \n");
}
// ------------------------------ FUNCTIONS ------------------------------------

function winsVsLosses(wins,losses) {
    return wins-losses;
}

function classifyPlayer(balance){
    if(balance < 11){
        return "Ferro";
    }else if(balance < 21){
        return "Bronze";
    }else if(balance < 51){
        return "Prata";
    }else if(balance < 81){
        return "Ouro";
    }else if(balance < 91){
        return "Diamante";
    }else if(balance < 101){
        return "Lendário";
    }else{
        return "Imortal";
    }
}