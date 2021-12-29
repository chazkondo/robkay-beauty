import dbConnect from '../../utils/dbConnect';

import text from '../../models/text';

dbConnect();

export default async function infoSwitch(req, res){
    const {method} = req;

    switch(method) {
        case 'GET':
            try {
                const myMessage = await text.find({_id: process.env.DATA_ID});
                res.status(200).json({success: true, data: myMessage})
            } catch (error) {
                res.status(400).json({success: false})
            }    
            break;
        default:
            res.status(400).json({success: false, default: true})
            break;
    }
}