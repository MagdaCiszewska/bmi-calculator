{
    const interpretation = (result) => {
       
        if(result < 16) {
            return "Twój wynik wskazuje na wygłodzenie."
        } else if(result >= 16 && result < 17) {
            return "Twój wynik wskazuje na wychudzenie (spowodowane często przez ciężką chorobę)."
        } else if(result >= 17 && result < 18.5) {
            return "Twój wynik wskazuje na niedowagę."
        } else if(result >= 18.5 && result < 25) {
            return "Twój wynik wskazuje wartość prawidłową."
       } else if(result >= 25 && result < 30) {
        return "Twój wynik wskazuje na nadwagę."
       } else if(result >= 30 && result < 35) {
        return "Twój wynik wskazuje na I stopień otyłości."
       } else if(result >= 35 && result < 40) {
        return "Twój wynik wskazuje na II stopień otyłości."
       } else {
        return "Twój wynik wskazuje na III stopień otyłości (otyłość skrajna)."
       }
    };

    const onResultText = (result) => {
        const resultElement = document.querySelector(".js-result");
        const interpretationElement = document.querySelector(".js-interpretation")

        resultElement.innerText = result.toFixed(2);
        interpretationElement.innerHTML = interpretation(result);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const heightElement = document.querySelector(".js-height");
        const weightElement = document.querySelector(".js-weight");
        
        const weight = weightElement.value;
        const height = heightElement.value;

        const result = weight / ((height / 100) ** 2);

        onResultText(result);
    };
 

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}

