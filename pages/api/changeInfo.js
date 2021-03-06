import dbConnect from "../../utils/dbConnect";

import text from "../../models/text";

import axios from "axios";

dbConnect();

export default async function changeInfoSwitch(req, res) {
  const { method } = req;
  const { intro1, intro2, intro3, caption1, caption2 } = req.body.data;

  switch (method) {
    case "PUT":
      try {
        await text.findByIdAndUpdate(
          process.env.DATA_ID,
          {
            intro1: intro1,
            intro2: intro2,
            intro3: intro3,
            caption1: caption1,
            caption2: caption2,
          },
          {
            new: true,
            runValidators: true,
          }
        );
        await axios.get(process.env.REFRESH_HOOK).then(() => console.log(" "));
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false, default: true });
      break;
  }
}
