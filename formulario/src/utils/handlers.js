export const handleTypeError = (name, value) => {
    
    const option = {
        name: () => {
            if (!value) {return "This field is required"}
            if (value.length <= 6) {return "This require six characters min"}
        },
        email: () => {
            const regExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
            if (!regExp.test(value)) {
                return "This field is required"
            }
        },
        phone: () => {
            if (!value) { return "This field is required"}
        }
    }
    return option[name]()
}

export const handlePlaseHolder = (name) => {
    const options = {
        name: "e.g Stephen King",
        email: "e.g stephenking@lorem.com",
        phone: "e.g +1 234 567 890"
    }
    return options[name]
}
