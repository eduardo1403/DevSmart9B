// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');

// i18n dependencies. i18n is the main module, sprintf allows us to include variables with '%s'.
const i18n = require('i18next');
const sprintf = require('i18next-sprintf-postprocessor');

// We create a language strings object containing all of our strings. 
// The keys for each string will then be referenced in our code
// e.g. requestAttributes.t('WELCOME')
const languageStrings = {
  en: {
    translation: {
      WELCOME_MESSAGE: 'Welcome to the currency converter, what do you want to convert?',
      ED1: ' the conversion of ',
      ED2: ' euros equals ',
      ED3: ' in dollars ',
      ED4: 'Enter only positive numbers, try saying Convert 5 euros to dollars',
      ED5: ' the conversion of',
      ED6: ' dollars equals',
      ED7: ' en euros ',
      ED8: ' Ingresa sólo numeros positivos, prueba decir Convertir 5 dolares a euros ',
      ED9: ' the conversion of ',
      ED10: ' euros equals ',
      ED11: ' in pesos ',
      ED12: ' Enter only positive numbers, try saying Convert 5 euros to pesos ',
      ED13: ' the conversion of ',
      ED14: ' dollars equals ',
      ED15: ' in pesos ',
      ED16: ' Enter only positive numbers, try saying Convert 5 dollars to pesos ',
      ED17: ' the conversion of ',
      ED18: ' pesos equals ',
      ED19: ' in dollars ',
      ED20: ' Enter only positive numbers, try saying Convert 5 pesos to dollars',
      ED21: ' the conversion of ',
      ED22: ' pesos equals',
      ED23: ' in euros ',
      ED24: ' Enter only positive numbers, try saying Convert 5 pesos to euros ',
      HELP_MESSAGE: 'You can say hello to me! How can I help?',
      GOODBYE_MESSAGE: 'Goodbye!',
      REFLECTOR_MESSAGE: 'You just triggered %s',
      FALLBACK_MESSAGE: 'Sorry, I don\'t know about that. Please try again.',
      ERROR_MESSAGE: 'Sorry, there was an error. Please try again.'
    }
  },
  es:{
    translation: {
      WELCOME_MESSAGE: 'Bienvenido al conversor de divisas, que desea convertir?',
      ED1: 'la conversion de',
      ED2: 'euros equivale a',
      ED3: 'en dolares',
      ED4: 'Ingresa sólo numeros positivos, prueba decir Convertir 5 euros a dolares',
      ED5: ' la conversion de ',
      ED6: ' dolares equivale a ',
      ED7: ' en euros ',
      ED8: ' Ingresa sólo numeros positivos, prueba decir Convertir 5 dolares a euros ',
      ED9: ' la conversion de ',
      ED10: ' euros equivale a ',
      ED11: ' en pesos ',
      ED12: ' Ingresa sólo numeros positivos, prueba decir Convertir 5 euros a pesos ',
      ED13: ' la conversion de ',
      ED14: ' dolares equivale a ',
      ED15: ' en pesos ',
      ED16: ' Ingresa sólo numeros positivos, prueba decir Convertir 5 dolares a pesos ',
      ED17: ' la conversion de  ',
      ED18: ' pesos equivale a ',
      ED19: ' en dolares ',
      ED20: ' Ingresa sólo numeros positivos, prueba decir Convertir 5 pesos a dolares ',
      ED21: ' la conversion de ',
      ED22: ' pesos equivale a ',
      ED23: ' en euros ',
      ED24: ' Ingresa sólo numeros positivos, prueba decir Convertir 5 pesos a euros ',
      HELP_MESSAGE: 'Puedes decirme hola. Cómo te puedo ayudar?',
      GOODBYE_MESSAGE: 'Adiós!',
      REFLECTOR_MESSAGE: 'Acabas de activar %s',
      FALLBACK_MESSAGE: 'Lo siento, no se nada sobre eso. Por favor inténtalo otra vez.',
      ERROR_MESSAGE: 'Lo siento, ha habido un problema. Por favor inténtalo otra vez.'
    }
  }
}

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('WELCOME_MESSAGE');
                          
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const Convertir_euro_dolar_Handler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CustomEuroDolar';
    },
    handle(handlerInput){
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.cantidad.value;
     if (cantidad >= 1){
         const valor = 1.12;
         const resultado = (cantidad * valor).toFixed(2);
         const o1 =  requestAttributes.t('ED1');
         const o2 = requestAttributes.t('ED2');
         const o3 = requestAttributes.t('ED3');
         const speakOutput = o1 + cantidad + o2 + resultado + o3;
         return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     }
     else{
        const o4 = requestAttributes.t('ED4')
        const speakOutput = o4;
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     }
    }
};

const Convertir_dolar_euro_Handler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CustomDolarEuro';
    },
    handle(handlerInput){
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.cantidad.value;
     if (cantidad >= 1){
         const o1 =  requestAttributes.t('ED5');
         const o2 = requestAttributes.t('ED6');
         const o3 = requestAttributes.t('ED7');
         const valor = 0.92;
         const resultado = (cantidad * valor).toFixed(2);
         const speakOutput = o1 + cantidad + o2 + resultado + o3;
         return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     }
     else{
         const o4 = requestAttributes.t('ED8')
        const speakOutput = o4;
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     }
    }
};

const Convertir_euro_peso_Handler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CustomEuroPeso';
    },
    handle(handlerInput){
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.cantidad.value;
     if (cantidad >= 1){
         const o1 =  requestAttributes.t('ED9');
         const o2 = requestAttributes.t('ED10');
         const o3 = requestAttributes.t('ED11');
         const valor = 18.97;
         const resultado = (cantidad * valor).toFixed(2);
         const speakOutput = o1 + cantidad + o2 + resultado + o3;
         return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     }
     else{
         const o4 = requestAttributes.t('ED12')
        const speakOutput = o4;
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     } 
    }
};

const Convertir_dolar_peso_Handler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CustomDolarPeso';
    },
    handle(handlerInput){
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.cantidad.value;
     if (cantidad >= 1){
         const o1 =  requestAttributes.t('ED13');
         const o2 = requestAttributes.t('ED14');
         const o3 = requestAttributes.t('ED15');
         const valor = 17.49;
         const resultado = (cantidad * valor).toFixed(2);
         const speakOutput = o1 + cantidad + o2 + resultado + o3;
         return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     }
     else{
          const o4 = requestAttributes.t('ED16')
        const speakOutput = o4;
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     } 
    }
};

const Convertir_peso_dolar_Handler ={
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CustomPesoDolar';
    },
    handle(handlerInput){
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
       const cantidad = handlerInput.requestEnvelope.request.intent.slots.cantidad.value;
     if (cantidad >= 1){
         const o1 =  requestAttributes.t('ED17');
         const o2 = requestAttributes.t('ED18');
         const o3 = requestAttributes.t('ED19');
         const valor = 0.057;
         const resultado = (cantidad * valor).toFixed(2);
         const speakOutput = o1 + cantidad + o2 + resultado + o3;
         return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     }
     else{
         const o4 = requestAttributes.t('ED20')
        const speakOutput = o4;
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     } 
    }
};

const Convertir_peso_euro_Handler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CustomPesoEuro';
    },
    handle(handlerInput){
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.cantidad.value;
     if (cantidad >= 1){
         const o1 =  requestAttributes.t('ED21');
         const o2 = requestAttributes.t('ED22');
         const o3 = requestAttributes.t('ED23');
         const valor = 0.053;
         const resultado = (cantidad * valor).toFixed(2);
         const speakOutput = o1 + cantidad + o2 + resultado + o3;
         return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     }
     else{
         const o4 = requestAttributes.t('ED24')
        const speakOutput = o4;
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     } 
    }
}



const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('HELP_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('GOODBYE_MESSAGE');
      
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('FALLBACK_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = handlerInput.requestEnvelope.request.intent.name;
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('REFLECTOR_MESSAGE', intentName);

        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.message}`);
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('ERROR_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

// This request interceptor will log all incoming requests to this lambda
const LoggingRequestInterceptor = {
    process(handlerInput) {
        console.log(`Incoming request: ${JSON.stringify(handlerInput.requestEnvelope.request)}`);
    }
};

// This response interceptor will log all outgoing responses of this lambda
const LoggingResponseInterceptor = {
    process(handlerInput, response) {
      console.log(`Outgoing response: ${JSON.stringify(response)}`);
    }
};

// This request interceptor will bind a translation function 't' to the requestAttributes.
const LocalizationInterceptor = {
  process(handlerInput) {
    const localizationClient = i18n.use(sprintf).init({
      lng: handlerInput.requestEnvelope.request.locale,
      fallbackLng: 'en',
      overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
      resources: languageStrings,
      returnObjects: true
    });

    const attributes = handlerInput.attributesManager.getRequestAttributes();
    attributes.t = function (...args) {
      return localizationClient.t(...args);
    }
  }
}

// This handler acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        Convertir_euro_dolar_Handler,
        Convertir_dolar_euro_Handler,
        Convertir_euro_peso_Handler,
        Convertir_dolar_peso_Handler,
        Convertir_peso_dolar_Handler,
        Convertir_peso_euro_Handler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler) // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    .addErrorHandlers(
        ErrorHandler)
    .addRequestInterceptors(
        LocalizationInterceptor,
        LoggingRequestInterceptor)
    .addResponseInterceptors(
        LoggingResponseInterceptor)
    .lambda();