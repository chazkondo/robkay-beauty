import dbConnect from '../../utils/dbConnect';

import text from '../../models/text';

dbConnect();

export default async function infoSwitch(req, res){
  console.log('THIS WAS HIT !!!!')
    const {method} = req;

    switch(method) {
        case 'GET':
            try {
                const myMessage = await text.find({_id: "61cbb439cbaf4cc7a03d02eb"});
                console.log(myMessage, 'hello?')
                res.status(200).json({success: true, data: myMessage})
            } catch (error) {
              console.log(error, 'what is my error?')
                res.status(400).json({success: false})
            }    
            break;
        default:
            res.status(400).json({success: false, default: true})
            break;
    }
}