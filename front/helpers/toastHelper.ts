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

    // 成功ハンドリング: statusCodeが0または"success"の場合
    if (statusCode === 0 || statusCode === "success") {
      $toast.success(message || '成功しました。');
      return;
    }

    // エラーハンドリング: statusCodeが-1または"error"の場合
    if (statusCode === -1 || statusCode === "error") {
      $toast.error(message || 'エラーが発生しました。');
      return;
    }

    // 通常のステータスコードのハンドリング
    switch (true) {
      case (status >= 100 && status <= 199):
        console.info('toastHelper statusCode info response.');
        $toast.info(message || '情報レスポンスを受信しました。');
        break;
      case (status >= 200 && status <= 299):
        console.info('toastHelper statusCode success response.');
        $toast.success(message || 'リクエストが成功しました。');
        break;
      case (status >= 300 && status <= 399):
        console.info('toastHelper statusCode redirect response.');
        $toast.warning(message || 'リダイレクトメッセージです。');
        break;
      case (status >= 400 && status <= 499):
        console.error('toastHelper statusCode client error response.');
        $toast.warning(message || 'クライアントエラーが発生しました。');
        break;
      case (status >= 500 && status <= 599):
        console.error('toastHelper statusCode server error response.');
        $toast.error(message || 'サーバーエラーが発生しました。');
        break;
      default:
        // 想定外のステータスコードに対してエラーメッセージを表示
        console.warn('toastHelper statusCode unknown code response.');
        $toast.warning(message || '予期しないステータスコードです。');
        break;
      }

    console.debug('toastHelper end');
  } catch (error) {
    console.error('toastHelper Detailed Error:', error);
  }
};
