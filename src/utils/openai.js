import OpenAI from 'openai';
<<<<<<< HEAD

=======
import { OPENAI_KEY } from './Constant';
>>>>>>> recovered-branch

const client = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});


export default client