import * as request from "supertest";
// import { Helper } from "../helpers/instance-getter";
// import { WixDataRequests } from "../wixdata.types";

export namespace SearchApi {

    export class SearchApi {

        private baseUrl: string = 'https://rrr.lt/graphql'
        public query: string

        public async search(method: 'post', query) {
            
            return request(this.baseUrl)
                .post(method)
                .set('Content-Type', 'application/json')
                .send(query);
        }

    }
}