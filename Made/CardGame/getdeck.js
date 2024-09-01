// URLにアクセスしてデータを取得
const url = 'https://www.pokemon-card.com/deck/deck.html?deckID=NHHggi-4r7wBe-gHngNH';

fetch(url)
  .then(response => {
    // レスポンスが正常かどうかをチェック
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text(); // レスポンスをテキストとして返す
  })
  .then(data => {
    // 取得したデータを処理
    console.log("ok"); // データをコンソールに表示
  })
  .catch(error => {
    // エラーが発生した場合の処理
    console.error('There has been a problem with your fetch operation:', error);
  });
