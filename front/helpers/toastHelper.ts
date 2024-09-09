// helpers/toastHelper.ts
import { useNuxtApp } from '#app';

// 処理結果に応じてトースト通知を表示する関数
export const showToastBasedOnResponse = (statusCode: string | number, message?: string) => {

  try {
    
    console.debug('toastHelper start');
    console.debug(`・statusCode : ${statusCode}`);
    console.debug(`・message : ${message}`);

    const { $toast } = useNuxtApp();  // Nuxtのトースト機能を取得

    // ステータスコードを数値に変換
    const status = typeof statusCode === 'number' ? statusCode : parseInt(statusCode as string, 10);

    // 数値に変換できない場合はエラーメッセージを表示
    if (isNaN(status)) {
      console.error('toastHelper statusCode unavailable.');
      $toast.error(message || 'ステータスコードが無効です。', {
        duration: 5000,
        dismissible: true,
      });
      return;
    }

    // ステータスコードに応じたトースト通知を出し分け
    if (status >= 100 && status <= 199) {
      console.info('toastHelper statusCode info response.');
      $toast.info(message || '情報レスポンスを受信しました。', {
        duration: 5000,
        dismissible: true,
      });
    } else if (status >= 200 && status <= 299) {
      console.info('toastHelper statusCode success response.');
      $toast.success(message || '成功しました！', {
        duration: 5000,
        dismissible: true,
      });
    } else if (status >= 300 && status <= 399) {
      console.info('toastHelper statusCode redirect response.');
      $toast.warning(message || 'リダイレクトメッセージです。', {
        duration: 5000,
        dismissible: true,
      });
    } else if (status >= 400 && status <= 499) {
      console.error('toastHelper statusCode client error response.');
      $toast.error(message || 'クライアントエラーが発生しました。', {
        duration: 5000,
        dismissible: true,
      });
    } else if (status >= 500 && status <= 599) {
      console.error('toastHelper statusCode server error response.');
      $toast.error(message || 'サーバーエラーが発生しました。', {
        duration: 5000,
        dismissible: true,
      });
    } else {
      console.warn('toastHelper statusCode unknown code response.');
      // 想定外のステータスコードに対してエラーメッセージを表示
      $toast.warning(message || '不明なステータスコードです。', {
        duration: 5000,
        dismissible: true,
      });
    }
    console.debug('toastHelper end');
  } catch (error) {
    console.error('toastHelper Detailed Error:', error);
  }
};
