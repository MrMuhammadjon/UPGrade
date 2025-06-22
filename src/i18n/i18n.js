import i18n from "i18next"

import LanguageUZ from './uz.json';
import LanguageEn from './en.json'
import LanguageRu from './ru.json'
import { initReactI18next } from "react-i18next";

import { interpolate } from "framer-motion";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            uz: {
             translation: LanguageUZ   
            },
            en: {
                translation: LanguageEn
            },
            ru: {
                translation: {
                    LanguageRu
                }
            }
        },
        lng: 'ru',
        fallbackLng: 'en',
        interpolate: {
            escapeValue: false
        }
    })