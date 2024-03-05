const verifyRoles = (...allowedRoles) => {
    return (req,res,next) => {
        if (!req?.role) return res.sendStatus(401);
        const rolesArray = [...allowedRoles];
        console.log(rolesArray)
        console.log(req.role);
        const result = req.role.find(role => rolesArray.includes(role)) //.find(val => val ===true);
        if(!result) return res.sendStatus(401);
        console.log(result);
        next();
    }
}

module.exports = verifyRoles;