import dbConnect from '../../utils/dbConnect';

import text from '../../models/text';

dbConnect();

export default async function changeInfoSwitch(req, res){
    const {method} = req;
    const {intro, caption1, caption2} = req.body.data

    // function refreshPage() {
    //     fetch(process.env.REFRESH_HOOK, {
    //         method: 'POST', // or 'PUT'
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //         })
    //         .then(() => console.log('Refresh hook executed'))
    //         .catch(() => console.log('Refresh hook error.'));
    // }

    switch(method) {
        case 'PUT':
            try {
                await text.findByIdAndUpdate(process.env.DATA_ID, {
                    intro, caption1, caption2
                }, {
                    new: true,
                    runValidators: true
                })
                // refreshPage();
                res.status(200).json({success: true})
            } catch (error) {
                res.status(400).json({success: false})
            }    
            break;
        default:
            res.status(400).json({success: false, default: true})
            break;
    }
}
