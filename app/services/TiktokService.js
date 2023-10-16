import { TwitterDL } from 'twitter-downloader';

export class TiktokService {
    async getVideo(url) {
        TwitterDL(url).then((result) => {
            console.log(result);
        });
    }
}

