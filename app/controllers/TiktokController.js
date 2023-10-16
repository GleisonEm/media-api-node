import { TiktokService } from "../services/TiktokService";

export class TiktokController {
    constructor() {
        this.tiktokService = new TiktokService();
    }
    async getVideo(res, req) {
        this.tiktokService.getVideo(req.query.url).then((result) => {
            return res.send(result);
        });
    }
}