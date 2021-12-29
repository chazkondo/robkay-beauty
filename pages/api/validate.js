export default async function infoSwitch(req, res){
    const {method} = req;
    const {username, password} = req.body

    switch(method) {
        case 'POST':
            if (password === process.env.PASSWORD && username === process.env.USERNAME) {
                res.status(200).json({success: true})
            } else {
                res.status(400).json({success: false})
            }
            break;
        default:
            res.status(400).json({success: false, default: true})
            break;
    }
}
