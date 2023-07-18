/**
 * ロード時の初期化処理
 */
window.onload = () => {
    //blockquote内テキストの先頭改行と各行頭スペースを除去
    document.querySelectorAll('blockquote').forEach(ele => {
        ele.innerText = ele.innerText.replace(/^\n/, '').split('\n').map(line => line.replace(/^\s+/, '')).join('\n');
    });
}

//mainで１行追加
//mainでもう１行追加
//mainでさらに１行追加
