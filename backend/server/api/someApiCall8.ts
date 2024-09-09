import { defineEventHandler, readBody } from "h3";

//使用しない import type { ApiResponse } from '@/types/api'; // 型定義をインポート
// types/api.ts
export interface ApiResponse {
    statusCode: number | string;
    // 他のフィールドがあれば追加
    message?: string;
  }
  
export default defineEventHandler(async (event) => {
    const res = event.node.res;
    const method = event.node.req.method;

    // CORS ヘッダーの設定
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    try {
        // console.info("someApiCall8 successed");
        // return {
        //      statusCode: 10000, 
        // };
        console.info("someApiCall8 successed");
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    {
                        statusCode: 10000
                    }
                );
            }, 1000);
          });
    } catch (error) {
        console.error("Error someApiCall8:", error);
        return {
            statusCode: -1,
            message: "someApiCall8 missing",
        };
    }
});
