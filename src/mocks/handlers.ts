import {HttpResponse, http} from "msw"
// JSON 파일을 불러온다.
import sick from "./db.json";

export const handlers = [
    http.get("/sick", async ({request}) => {
        const url = new URL(request.url)

        // 추출하려는 문자열을 지정한다.
        const qParam = url.searchParams.get('q')

        const filteredObjects = sick.sick.filter((object) => {
            if (qParam) {
                // Value가 특정 문자열을 포함하는지 확인한다.
                return object.sickNm.includes(qParam);
            }
          });
        
        return HttpResponse.json(filteredObjects, { status: 200 });
    }),
];