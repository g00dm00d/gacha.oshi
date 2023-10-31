const hasil = document.querySelectorAll("li img");
const spin = document.querySelector(".spin");
const prize = document.querySelector(".text-prize");
const areaSpin = document.querySelector(".area-spin");

const member = [
  "Raisha",
  "J48IEB",
  "Lyn",
  "Callie",
  "Lia",
  "Indira",
  "Ella",
  "Amanda",
];

function getGacha() {
  const gacha = Math.random();
  if (gacha < 0.125) return "Raisha";
  if (gacha >= 0.125 && gacha < 0.25) return "Lyn";
  if (gacha >= 0.25 && gacha < 0.375) return "Callie";
  if (gacha >= 0.375 && gacha < 0.5) return "Lia";
  if (gacha >= 0.5 && gacha < 0.625) return "Indira";
  if (gacha >= 0.625 && gacha < 0.75) return "Ella";
  if (gacha >= 0.75 && gacha < 0.875) return "Amanda";
  return "J48IEB";
}

function getPrize(hasil0, hasil1, hasil2) {
  if (hasil0 == hasil1 && hasil1 === hasil2) {
    hasil[0].classList.remove("grayscale");
    hasil[1].classList.remove("grayscale");
    hasil[2].classList.remove("grayscale");
    return hasil0;
  }
  if (hasil0 == hasil1) {
    hasil[0].classList.remove("grayscale");
    hasil[1].classList.remove("grayscale");
  }
  if (hasil0 == hasil2) {
    hasil[0].classList.remove("grayscale");
    hasil[2].classList.remove("grayscale");
  }
  if (hasil1 == hasil2) {
    hasil[1].classList.remove("grayscale");
    hasil[2].classList.remove("grayscale");
  }
  return "ZONK";
}

function putar(index) {
  hasil[0].classList.add("grayscale");
  hasil[1].classList.add("grayscale");
  hasil[2].classList.add("grayscale");
  let i = 0;
  const waktuMulai = new Date().getTime();
  const interval = setInterval(function () {
    if (new Date().getTime() - waktuMulai > 999) {
      clearInterval(interval);
      return;
    }
    hasil[index].setAttribute("src", `dist/member/${member[i]}.jpg`);
    i = (i + 1) % member.length;
  }, 100);
}

function putarPrize() {
  let i = 0;
  const waktuMulai = new Date().getTime();
  const titik = [".", "..", "..."];
  const interval = setInterval(function () {
    if (new Date().getTime() - waktuMulai > 3000) {
      clearInterval(interval);
      return;
    }
    prize.innerHTML = `${titik[i]}`;
    i = (i + 1) % titik.length;
  }, 300);
}

spin.addEventListener("click", function () {
  const gachaResults = [getGacha(), getGacha(), getGacha()];
  spin.disabled = true;
  putarPrize();
  putar(0);
  setTimeout(function () {
    putar(1);
    hasil[0].setAttribute("src", `dist/member/${gachaResults[0]}.jpg`);
  }, 1000);
  setTimeout(function () {
    putar(2);
    hasil[1].setAttribute("src", `dist/member/${gachaResults[1]}.jpg`);
  }, 2000);
  setTimeout(function () {
    hasil[2].setAttribute("src", `dist/member/${gachaResults[2]}.jpg`);
    const log = (prize.innerHTML = getPrize(
      gachaResults[0],
      gachaResults[1],
      gachaResults[2]
    ));
    console.log(log);
    spin.disabled = false;
  }, 3000);
});
