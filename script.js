const bgMusic = document.getElementById("bgMusic");

const startBtn = document.getElementById("startBtn");

const typingText = document.getElementById("typingText");

const text = "haii sayanggg!!!!, happy anniversary first year ya, ga nyangka bisa 1 tahun sama orang paling diminati cowo²🤭. um makasiiii ya buat semuanya, aku uda maafin seluruh kesalahanmu ya sayang. sering² senyum ya soalnya manis banget kalo diliat gitu, ibarat 1 gudang gula🤭. seru banget ya kisah kita selama 1 tahun ini, banyak susah senengnya dan uda beribu kata maaf dan memaafkan terucap, kaya gini terus ya biar kita bisa selamanya. apalagi ya aku bingung, oh iya seluruh dunia harus tau kalo kamu itu cantik, lucu, dan gemesin banget ya😻. kamu ga usah takut kalo lagi keringetan terus deketin aku, kamu ga usa pake parfum/sejenisnya, karna aku lebih suka wangi keringetmu🤭. mungkin itu doang, maaf kalo aku banyak salah, sering ngomong kasar/bentak² ke kamu, sering bikin kamu bm, marah, sama kecewa, maaf juga kalo aku ga sesuai apa yang kamu mau, intinya aku sayang banget sama kamu. 1 lagi, makasi banyak ya sayang, tunggu aku dalam waktu 10 tahun lagi ya, aku pengin hidup bahagia bareng kamu bukan sama cewe lain, karna kamu itu spesial buatku. uda ya itu aja, I LOVE YOU SAYANG!!!!!🤍🤍🤍";

let i = 0;

startBtn.addEventListener("click", () => {

  startBtn.style.display = "none";

  bgMusic.play();

  typeEffect();

});

function typeEffect() {

  if (i < text.length) {

    typingText.innerHTML += text.charAt(i);

    i++;

    setTimeout(typeEffect, 50);

  }

}