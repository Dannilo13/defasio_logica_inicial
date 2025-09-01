

    heroi1 = {
        name: "gavião arqueiro",
        xp: "999"
    },
    heroi2 = {
        name:"Pantera Negra",
        xp: "2000"
    },
    heroi3 = {
        name: "homem-aranha",
        xp: "3000"
    },
    heroi4 = {
        name: "viúva negra",
        xp: "5002"
    },
    heroi5 = {
        name: "homem formiga",
        xp: "7002"
    },
    heroi6 = {
        name: "capitão américa",
        xp: "8002"
    },
    heroi7 = {
        name: "Hulk",
        xp: "9002"
    },

    heroi8 = {
        name: "Thor",
         xp: "10002"
    }

 

    switch (true) {
        case (heroi1.xp < 1000):
            console.log(heroi1.name + " é nivel de Ferro!");
            break;
        case (heroi2.xp > 1001 && heroi2.xp < 2000): {
            console.log(heroi2.name + " é nivel de Bronze!");
            break;
        }
        case (heroi3.xp > 2001): {
            console.log(heroi3.name + " é nivel de Prata!");
            break;
        }
        case (heroi4.xp > 5001): {
            console.log(heroi4.name + " é nivel de Ouro!");
            break;
        }
        case (heroi5.xp > 7001): {
            console.log(heroi5.name + " é nivel de Platina!");
            break;
        }
        case (heroi6.xp > 8001): {
            console.log(heroi6.name + " é nivel de Ascendente!");
            break;
        }
        case (heroi7.xp > 9001): {
            console.log(heroi7.name + " é nivel de Imortal!");
            break;
        }
        case (heroi8.xp > 10001): {
            console.log(heroi8.name + " é nivel de Radiante!");
            break;
            }
    }
    default: {
        console.log("Heroi não encontrado.")
    }