import app from "./app";
import {job} from "./modules/airQuality";
const PORT: Number = 5051;

app.listen(PORT, (): void => console.log(`running on port ${PORT}`));
job.start();
