import * as Localization from 'expo-localization';
// @ts-ignore
import i18n from "i18n-js";
import {rus} from './ru'
import {eng} from "./eng";
// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
    en: {...eng},
    ru: {...rus},
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// i18n.locale = 'ru-Ru';
// i18n.locale = 'en-Us';
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export {i18n}
