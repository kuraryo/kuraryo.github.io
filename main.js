
lottie.loadAnimation({
  container: document.getElementById('lottie'),
  renderer: 'svg', // 描画形式
  loop: true, // trueにしたらループ。1回再生の場合はfalse
  autoplay: true, // 自動再生
  path: 'data.json' // jsonのパスを指定
});

// animation();
// lottie.loadAnimation({
//   container: document.getElementById("lottie"),
//   renderer: "html",
//   loop: true,
//   autoplay: true,
//   path: "data.json"
// });
