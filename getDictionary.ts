import "server-only";
import type { Locale } from "./i18n-config";


const loadDictionary = (lang: string) => import(`./dictionaries/${lang}.json`).then((module) => module.default);

const dictionaries = {
    en: () => loadDictionary("en"),
    es: () => loadDictionary("es"),
    fr: () => loadDictionary("fr"),
}

export const getDictionary = async (locale: Locale) =>
    dictionaries[locale]?.() ?? dictionaries.en(); // TODO maybe add await here?