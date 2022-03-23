"use strict"

let calculator = {
    total_price: 0,
    chosen_web_site_type: "",
    chosen_design: "",
    chosen_adaptation: "",
    web_site_type:{
        bisness_card_site: 15000,
        lending: 20000,
        internet_shop: 30000,
        portal: 5000
    },
    design: {
        minimalistic: 1000,
        classic: 2000,
        retro: 3000,
        polygonal: 5000,
    },
    adaptation:{
        coputer: 1000,
        mobile: 2000,
        cross_platform: 5000,
    },
};

function siteOrderInfoFromUser()
{    
    let response;
    while(true){
        response = prompt("Какой тип сайта необходим?");
        response = response.toLowerCase();
        if(response == "сайт визитка" || response == "визитка"){
            calculator.total_price += calculator.web_site_type.bisness_card_site;
            calculator.chosen_web_site_type = "Cайт визитка";
            break;
        }
        else if(response == "лендинг")
        {    calculator.total_price += calculator.web_site_type.lending;
            calculator.chosen_web_site_type = "Лендинг";
            break;
        }
        else if(response == "интернет магазин" || response == "магазин")
        {    calculator.total_price += calculator.web_site_type.internet_shop;
            calculator.chosen_web_site_type = "Интернет магазин";
            break;
        }
        else if(response == "портал")
        {    calculator.total_price += calculator.web_site_type.portal;
            calculator.chosen_web_site_type = "Портал";
            break;
        }
        else 
            alert("Тип не распознан! \nВыберите из доступных: \nCайт визитка \nЛендинг \nИнтернет магазин \nПортал");
    }

    while(true){
        response = prompt("Какой дизайн сайта необходим?");
        response = response.toLowerCase();
        if(response == "минималистичный" || response == "минимализм"){
            calculator.total_price += calculator.design.minimalistic;
            calculator.chosen_design = "Минималистичный";
            break;
        }
        else if(response == "класический"){    
            calculator.total_price += calculator.design.classic;
            calculator.chosen_design = "Класический";
            break;
        }
        else if(response == "ретро"){    
            calculator.total_price += calculator.design.retro;
            calculator.chosen_design = "Ретро";
            break;
        }
        else if(response == "полигональный"){    
            calculator.total_price += calculator.design.polygonal;
            calculator.chosen_design = "Полигональный";
            break;
        }
        else 
            alert("Дизайн не распознан! \nВыберите из доступных: \nМинималистичный \nКласический \nРетро \nПолигональный");
    }

    while(true){
        response = prompt("Какая адаптивность сайта необходима?");
        response = response.toLowerCase();
        if(response == "компьютер"){
            calculator.total_price += calculator.adaptation.coputer;
            calculator.chosen_adaptation = "Компьютер";
            break;
        }
        else if(response == "мобильный" || response == "телефон"){    
            calculator.total_price += calculator.adaptation.mobile;
            calculator.chosen_adaptation = "Мобильный";
            break;
        }
        else if(response == "кроссплатформеный" || response == "кроссплатформа"){    
            calculator.total_price += calculator.adaptation.cross_platform;
            calculator.chosen_adaptation = "Кроссплатформеный";
            break;
        }
        else 
            alert("Дизайн не распознан! \nВыберите из доступных: \nКомпьютер \nМобильный \nКроссплатформеный");
    }

    alert("                               Расчет стоимости \n\nТип сайта: " + calculator.chosen_web_site_type 
    + "\nДизайн сайта: " + calculator.chosen_design + "\nАдаптивность сайта: " + calculator.chosen_adaptation 
    + "\nСтоимость: " + calculator.total_price + "руб");
}

setTimeout(siteOrderInfoFromUser, 2000);