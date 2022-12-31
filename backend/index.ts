import dotenv from 'dotenv'
dotenv.config()
import express, {Express, Response, Request} from 'express';

const app: Express = express()
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send("Hello world")
});

app.listen(port, ()=> {
    console.log(`App is listening on port: ${port}`)
});
