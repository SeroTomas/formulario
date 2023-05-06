const handleTypeError = (name, value) => {
    
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

export default handleTypeError;