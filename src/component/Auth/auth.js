const verifyUserLogin = () => {
    let hash = sessionStorage.getItem("userid")
    if (hash) {
        return true
    }
    return false
}

const verifyAdminLogin = () => {
    let hash = sessionStorage.getItem("adminid");
    if (hash) {
        return true
    }
    return false
}

const logout = () => {
    if (window.confirm("are you sure you want to logout")) {
        sessionStorage.clear()
        window.location.reload();
    }
}


export {
    verifyAdminLogin,
    verifyUserLogin,
    logout
}