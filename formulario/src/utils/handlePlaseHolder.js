const handlePlaseHolder = (name) => {
    const options = {
        name: "e.g Stephen King",
        email: "e.g stephenking@lorem.com",
        phone: "e.g +1 234 567 890"
    }
    return options[name]
}

export default handlePlaseHolder;