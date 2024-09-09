<template>
  <div class="page">
    <ul class="button-list">
      <li><button @click="testInfoResponse11">情報レスポンス (100)_レスポンスメッセージ設定</button></li>
      <li><button @click="testSuccessResponse12">成功レスポンス (200)_レスポンスメッセージ設定</button></li>
      <li><button @click="testRedirectResponse13">リダイレクトメッセージ (300)_レスポンスメッセージ設定</button></li>
      <li><button @click="testClientErrorResponse14">クライアントエラー (400)_レスポンスメッセージ設定</button></li>
      <li><button @click="testServerErrorResponse15">サーバーエラー (500)_レスポンスメッセージ設定</button></li>
    </ul>
    <ul class="button-list">      
      <li><button @click="testInfoResponse21">情報レスポンス (100)_レスポンスメッセージ設定上書き</button></li>
      <li><button @click="testSuccessResponse22">成功レスポンス (200)_レスポンスメッセージ設定上書き</button></li>
      <li><button @click="testRedirectResponse23">リダイレクトメッセージ (300)_レスポンスメッセージ設定上書き</button></li>
      <li><button @click="testClientErrorResponse24">クライアントエラー (400)_レスポンスメッセージ設定上書き</button></li>
      <li><button @click="testServerErrorResponse25">サーバーエラー (500)_レスポンスメッセージ設定上書き</button></li>
    </ul>
    <ul class="button-list">     
      <li><button @click="testInfoResponse31">情報レスポンス (100)_レスポンスメッセージ設定なし</button></li>
      <li><button @click="testSuccessResponse32">成功レスポンス (200)_レスポンスメッセージ設定なし</button></li>
      <li><button @click="testRedirectResponse33">リダイレクトメッセージ (300)_レスポンスメッセージ設定なし</button></li>
      <li><button @click="testClientErrorResponse34">クライアントエラー (400)_レスポンスメッセージ設定なし</button></li>
      <li><button @click="testServerErrorResponse35">サーバーエラー (500)_レスポンスメッセージ設定なし</button></li>
    </ul>
    <ul class="button-list">     
      <li><button @click="testStatusCodeStrOnlyResponse6">成功レスポンス ('200')_ステータスコード文字列数字のみ</button></li>
      <li><button @click="testStatusCodeErrorResponse7">ステータスコード無効レスポンス(a)_ステータスコード数値以外</button></li>
      <li><button @click="testStatusCodeUnexpectedResponse8">ステータスコード想定外レスポンス(10000)_ステータスコード想定外数値</button></li>
    </ul>   
  </div>
</template>

<script setup lang="ts">
import { showToastBasedOnResponse } from '@/helpers/toastHelper';

//使用しない import type { ApiResponse } from '@/types/api'; // 型定義をインポート
export interface ApiResponse {
  statusCode: number | string;
  // 他のフィールドがあれば追加
  message?: string;
}

const testInfoResponse11 = async () => {
  try {
    console.log("testInfoResponse11 start")
    const response = await fetch("http://localhost:4000/api/someApiCall11");
    if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
    }
    const jsonData = await response.json();
    showToastBasedOnResponse(jsonData.statusCode, jsonData.message);
    console.log("testInfoResponse11 completed")
  } catch (error) {
    console.error("testInfoResponse11 Detailed Error:", error);
    showToastBasedOnResponse('error', `処理中にエラーが発生しました : ${error}`);
  }
};

const testSuccessResponse12 = async () => {
  try {
    console.log("testSuccessResponse12 start")
    const response = await fetch("http://localhost:4000/api/someApiCall12");
    if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
    }
    const jsonData = await response.json();
    showToastBasedOnResponse(jsonData.statusCode, jsonData.message);
    console.log("testSuccessResponse12 completed")
  } catch (error) {
    console.error("testSuccessResponse12 Detailed Error:", error);
    showToastBasedOnResponse('error', '処理中にエラーが発生しました');
  }
};


const testRedirectResponse13 = async () => {
  try {
    console.log("testRedirectResponse13 start")
    const response = await fetch("http://localhost:4000/api/someApiCall13");
    if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
    }
    const jsonData = await response.json();
    showToastBasedOnResponse(jsonData.statusCode, jsonData.message);
    console.log("testRedirectResponse13 completed")
  } catch (error) {
    console.error("testRedirectResponse13 Detailed Error:", error);
    showToastBasedOnResponse('error', '処理中にエラーが発生しました');
  }
};

const testClientErrorResponse14 = async () => {
  try {
    console.log("testClientErrorResponse14 start")
    const response = await fetch("http://localhost:4000/api/someApiCall14");
    if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
    }
    const jsonData = await response.json();
    showToastBasedOnResponse(jsonData.statusCode, jsonData.message);
    console.log("testClientErrorResponse14 completed")
  } catch (error) {
    console.error("testClientErrorResponse14 Detailed Error:", error);
    showToastBasedOnResponse('error', '処理中にエラーが発生しました');
  }
};

const testServerErrorResponse15 = async () => {
  try {
    console.log("testServerErrorResponse15 start")
    const response = await fetch("http://localhost:4000/api/someApiCall15");
    if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
    }
    const jsonData = await response.json();
    showToastBasedOnResponse(jsonData.statusCode, jsonData.message);
    console.log("testServerErrorResponse15 completed")
  } catch (error) {
    console.error("testServerErrorResponse15 Detailed Error:", error);
    showToastBasedOnResponse('error', '処理中にエラーが発生しました');
  }
};

const testInfoResponse21 = async () => {
  try {
    console.log("testInfoResponse21 start")
    const response = await fetch("http://localhost:4000/api/someApiCall21");
    if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
    }
    const jsonData = await response.json();
    showToastBasedOnResponse(jsonData.statusCode, '情報レスポンスのメッセージ書き換え設定テストしました。');
    console.log("testInfoResponse21 completed")
  } catch (error) {
    console.error("testInfoResponse21 Detailed Error:", error);
    showToastBasedOnResponse('error', '処理中にエラーが発生しました');
  }
};

const testSuccessResponse22 = async () => {
  try {
    console.log("testSuccessResponse22 start")
    const response = await fetch("http://localhost:4000/api/someApiCall22");
    if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
    }
    const jsonData = await response.json();
    showToastBasedOnResponse(jsonData.statusCode, '成功レスポンスのメッセージ書き換え設定テストしました。');
    console.log("testSuccessResponse22 completed")
  } catch (error) {
    console.error("testSuccessResponse22 Detailed Error:", error);
    showToastBasedOnResponse('error', '処理中にエラーが発生しました');
  }
};

const testRedirectResponse23 = async () => {
  try {
    console.log("testRedirectResponse23 start")
    const response = await fetch("http://localhost:4000/api/someApiCall23");
    if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
    }
    const jsonData = await response.json();
    showToastBasedOnResponse(jsonData.statusCode, 'リダイレクトメッセージのメッセージ書き換え設定テストしました。');
    console.log("testRedirectResponse23 completed")
  } catch (error) {
    console.error("testRedirectResponse23 Detailed Error:", error);
    showToastBasedOnResponse('error', '処理中にエラーが発生しました');
  }
};

const testClientErrorResponse24 = async () => {
  try {
    console.log("testClientErrorResponse24 start")
    const response = await fetch("http://localhost:4000/api/someApiCall24");
    if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
    }
    const jsonData = await response.json();
    showToastBasedOnResponse(jsonData.statusCode, 'クライアントエラーのメッセージ書き換え設定テストしました。');
    console.log("testClientErrorResponse24 completed")
  } catch (error) {
    console.error("testClientErrorResponse24 Detailed Error:", error);
    showToastBasedOnResponse('error', '処理中にエラーが発生しました');
  }
};

const testServerErrorResponse25 = async () => {
  try {
    console.log("testServerErrorResponse25 start")
    const response = await fetch("http://localhost:4000/api/someApiCall25");
    if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
    }
    const jsonData = await response.json();
    showToastBasedOnResponse(jsonData.statusCode, 'サーバーエラーのメッセージ書き換え設定テストしました。');
    console.log("testServerErrorResponse25 completed")
  } catch (error) {
    console.error("testServerErrorResponse25 Detailed Error:", error);
    showToastBasedOnResponse('error', '処理中にエラーが発生しました');
  }
};

const testInfoResponse31 = async () => {
  try {
    console.log("testInfoResponse31 start")
    const response = await fetch("http://localhost:4000/api/someApiCall31");
    if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
    }
    const jsonData = await response.json();
    showToastBasedOnResponse(jsonData.statusCode);
    console.log("testInfoResponse31 completed")
  } catch (error) {
    console.error("testInfoResponse31 Detailed Error:", error);
    showToastBasedOnResponse('error', '処理中にエラーが発生しました');
  }
};

const testSuccessResponse32 = async () => {
  try {
    console.log("testSuccessResponse32 start")
    const response = await fetch("http://localhost:4000/api/someApiCall32");
    if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
    }
    const jsonData = await response.json();
    showToastBasedOnResponse(jsonData.statusCode);
    console.log("testSuccessResponse32 completed")
  } catch (error) {
    console.error("testSuccessResponse32 Detailed Error:", error);
    showToastBasedOnResponse('error', '処理中にエラーが発生しました');
  }
};

const testRedirectResponse33 = async () => {
  try {
    console.log("testRedirectResponse33 start")
    const response = await fetch("http://localhost:4000/api/someApiCall33");
    if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
    }
    const jsonData = await response.json();
    showToastBasedOnResponse(jsonData.statusCode);
    console.log("testRedirectResponse33 completed")
  } catch (error) {
    console.error("testRedirectResponse33 Detailed Error:", error);
    showToastBasedOnResponse('error', '処理中にエラーが発生しました');
  }
};

const testClientErrorResponse34 = async () => {
  try {
    console.log("testClientErrorResponse34 start")
    const response = await fetch("http://localhost:4000/api/someApiCall34");
    if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
    }
    const jsonData = await response.json();
    showToastBasedOnResponse(jsonData.statusCode);
    console.log("testClientErrorResponse34 completed")
  } catch (error) {
    console.error("testClientErrorResponse34 Detailed Error:", error);
    showToastBasedOnResponse('error', '処理中にエラーが発生しました');
  }
};

const testServerErrorResponse35 = async () => {
  try {
    console.log("testServerErrorResponse35 start")
    const response = await fetch("http://localhost:4000/api/someApiCall35");
    if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
    }
    const jsonData = await response.json();
    showToastBasedOnResponse(jsonData.statusCode);
    console.log("testServerErrorResponse35 completed")
  } catch (error) {
    console.error("testServerErrorResponse35 Detailed Error:", error);
    showToastBasedOnResponse('error', '処理中にエラーが発生しました');
  }
};

const testStatusCodeStrOnlyResponse6 = async () => {
  try {
    console.log("testStatusCodeStrOnlyResponse6 start")
    const response = await fetch("http://localhost:4000/api/someApiCall6");
    if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
    }
    const jsonData = await response.json();
    showToastBasedOnResponse(jsonData.statusCode);
    console.log("testStatusCodeStrOnlyResponse6 completed")
  } catch (error) {
    console.error("testStatusCodeStrOnlyResponse6 Detailed Error:", error);
    showToastBasedOnResponse('error', '処理中にエラーが発生しました');
  }
};

const testStatusCodeErrorResponse7 = async () => {
  try {
    console.log("testStatusCodeErrorResponse7 start")
    const response = await fetch("http://localhost:4000/api/someApiCall7");
    if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
    }
    const jsonData = await response.json();
    showToastBasedOnResponse(jsonData.statusCode);
    console.log("testStatusCodeErrorResponse7 completed")
  } catch (error) {
    console.error("testStatusCodeErrorResponse7 Detailed Error:", error);
    showToastBasedOnResponse('error', '処理中にエラーが発生しました');
  }
};

const testStatusCodeUnexpectedResponse8 = async () => {
  try {
    console.log("testStatusCodeUnexpectedResponse8 start")
    const response = await fetch("http://localhost:4000/api/someApiCall8");
    if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
    }
    const jsonData = await response.json();
    showToastBasedOnResponse(jsonData.statusCode);
    console.log("testStatusCodeUnexpectedResponse8 completed")
  } catch (error) {
    console.error("testStatusCodeUnexpectedResponse8 Detailed Error:", error);
    showToastBasedOnResponse('error', '処理中にエラーが発生しました');
  }
};

</script>
