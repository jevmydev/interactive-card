export const INITIAL_CARD_STORE = {
    name: "",
    number: "",
    dateMM: "",
    dateYY: "",
    CVC: ""
} as const;

export const STRING_PATTERN = new RegExp("^[a-zA-Z ]*$");
export const NUMBER_PATTERN = new RegExp("^[0-9]+");
export const NUMBER_WITH_SPACES_PATTERN = new RegExp("^[0-9 ]*$");
