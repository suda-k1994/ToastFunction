//使用しない import type { ApiResponse } from '@/types/api'; // 型定義をインポート
// types/api.ts
export interface ApiResponse {
  statusCode: number | string;
  // 他のフィールドがあれば追加
  message?: string;
}

// ダミーのAPIコール関数 (情報レスポンス)
export const someApiCall11 = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ statusCode: 100, message:'情報レスポンスをテストしました。'});
    }, 1000);
  });
};

// ダミーのAPIコール関数 (成功レスポンス)
export const someApiCall12 = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ statusCode: 200, message:'成功レスポンスをテストしました。'});
    }, 1000);
  });
};

// ダミーのAPIコール関数 (リダイレクトメッセージ)
export const someApiCall13 = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ statusCode: 300, message:'リダイレクトメッセージをテストしました。'});
    }, 1000);
  });
};

// ダミーのAPIコール関数 (クライアントエラー)
export const someApiCall14 = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ statusCode: 400, message:'クライアントエラーをテストしました。'});
    }, 1000);
  });
};

// ダミーのAPIコール関数 (サーバーエラー)
export const someApiCall15 = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ statusCode: 500, message:'サーバーエラーをテストしました。'});
    }, 1000);
  });
};

// ダミーのAPIコール関数 (情報レスポンス)
export const someApiCall21 = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ statusCode: 100, message:'情報レスポンスをテストしました。'});
    }, 1000);
  });
};

// ダミーのAPIコール関数 (成功レスポンス)
export const someApiCall22 = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ statusCode: 200, message:'成功レスポンスをテストしました。'});
    }, 1000);
  });
};

// ダミーのAPIコール関数 (リダイレクトメッセージ)
export const someApiCall23 = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ statusCode: 300, message:'リダイレクトメッセージをテストしました。'});
    }, 1000);
  });
};

// ダミーのAPIコール関数 (クライアントエラー)
export const someApiCall24 = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ statusCode: 400, message:'クライアントエラーをテストしました。'});
    }, 1000);
  });
};

// ダミーのAPIコール関数 (サーバーエラー)
export const someApiCall25 = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ statusCode: 500, message:'サーバーエラーをテストしました。'});
    }, 1000);
  });
};

// ダミーのAPIコール関数 (情報レスポンス)
export const someApiCall31 = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ statusCode: 100});
    }, 1000);
  });
};

// ダミーのAPIコール関数 (成功レスポンス)
export const someApiCall32 = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ statusCode: 200});
    }, 1000);
  });
};

// ダミーのAPIコール関数 (リダイレクトメッセージ)
export const someApiCall33 = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ statusCode: 300});
    }, 1000);
  });
};

// ダミーのAPIコール関数 (クライアントエラー)
export const someApiCall34 = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ statusCode: 400});
    }, 1000);
  });
};

// ダミーのAPIコール関数 (サーバーエラー)
export const someApiCall35 = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ statusCode: 500});
    }, 1000);
  });
};

// ダミーのAPIコール関数 (ステータスコード文字列数字あり、メッセージなし)
export const someApiCall6 = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ statusCode: '200'});
    }, 1000);
  });
};

// ダミーのAPIコール関数 (ステータスコード数値以外、メッセージなし)
export const someApiCall7 = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ statusCode: 'a'});
    }, 1000);
  });
};

// ダミーのAPIコール関数 (ステータスコード想定外数値、メッセージなし)
export const someApiCall8 = async (): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ statusCode: 10000});
    }, 1000);
  });
};