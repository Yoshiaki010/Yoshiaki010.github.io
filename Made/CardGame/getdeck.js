// URLにアクセスしてデータを取得
const url = 'https://www.pokemon-card.com/deck/deck.html?deckID=NHHggi-4r7wBe-gHngNH';

let text = document.getElementById('test').textContent; //宣言
fetch(url)
  .then(response => {
    // レスポンスが正常かどうかをチェック
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // レスポンスをテキストとして返す
  })
  .then(data => {
    // 取得したデータを処理
    console.log(response.json); // データをコンソールに表示
    document.getElementById('test').textContent = 'ok';
    
  })
  .catch(error => {
    // エラーが発生した場合の処理
    console.error('There has been a problem with your fetch operation:', error);
    document.getElementById('test').textContent = 'error';
  });


