// ページ読みこみ時にGoogleSpreadSheetのデータを取得する関数
// リクエストURL（GET）：https://script.google.com/macros/s/AKfycbzQb8dLOwkHNWzZpkQkJ3YRIF-okuOvFk_w_ztgPU2vYh7_oHHUom4O3iULrYkHx5Y/exec
function init() {
    // リクエストURL
    const requestURL = "https://script.google.com/macros/s/AKfycbzQb8dLOwkHNWzZpkQkJ3YRIF-okuOvFk_w_ztgPU2vYh7_oHHUom4O3iULrYkHx5Y/exec";
    // リクエストパラメータ
    const requestParam = {
        "method": "GET",
        "mode": "cors",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    };
    // リクエスト実行
    fetch(requestURL, requestParam)
        .then(response => response.json())
        .then(data => {
            // データ取得成功時の処理
            console.log(data);
            // データを表示する関数を実行
            displayData(data);
        })
        .catch(error => {
            // データ取得失敗時の処理
            console.log(error);
        });
}

window.onload = init();

// データを表示する関数
// キー名：id,post,user_id,user_name,user_image
function displayData(data) {
    // データを表示する要素を取得
    const gasLessonData = document.getElementById("gasLessonData");
    // データを表示する要素の中身を空にする
    gasLessonData.innerHTML = "";
    // データの数だけ繰り返し処理
    for (let i = 0; i < data.length; i++) {
        // データを表示する要素にデータを追加
        // idごとにdivを作成
        // user_nameの左側にuser_imageを画像として表示。画像のサイズは50px
        // user_nameの下にpostの内容を表示
        // id,user_idは表示しない。
        gasLessonData.innerHTML += "<div id='" + data[i].id + "'>" +
            "<img src='" + data[i].user_image + "' width='50px'>" +
            "<p>" + data[i].user_name + "</p>" +
            "<p>" + data[i].post + "</p>" +
            "</div>";

    }
}