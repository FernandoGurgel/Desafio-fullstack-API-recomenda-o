import { resolve } from 'path'

import * as dotenv from "dotenv";

dotenv.config();
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV =='development'){
    dotenv.config({ path: resolve(__dirname, '../../.env') })
}
else{
  dotenv.config();
}
