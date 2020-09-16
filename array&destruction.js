// 20200916140253
// https://quran.kemenag.go.id/api/v1/surat/0/10

// var dataJSON = { //json berfungsi untuk menghilangkan string di data API
let orang = [
  // msg: "All Surat Data",
  // data: [
  {
    id: 1,
    surat_name: "Al-Fatihah",
    surat_text: " الفاتحة",
    surat_terjemahan: "Pembukaan",
    count_ayat: 7,
  },
  {
    id: 2,
    surat_name: "Al-Baqarah",
    surat_text: " البقرة",
    surat_terjemahan: "Sapi",
    count_ayat: 286,
  },
  {
    id: 3,
    surat_name: "Ali 'Imran",
    surat_text: " اٰل عمران",
    surat_terjemahan: "Keluarga Imran",
    count_ayat: 200,
  },
  {
    id: 4,
    surat_name: "An-Nisa'",
    surat_text: " النساۤء",
    surat_terjemahan: "Wanita",
    count_ayat: 176,
  },
  {
    id: 5,
    surat_name: "Al-Ma'idah",
    surat_text: " الماۤئدة",
    surat_terjemahan: "Hidangan",
    count_ayat: 120,
  },
  {
    id: 6,
    surat_name: "Al-An'am",
    surat_text: " الانعام",
    surat_terjemahan: "Binatang Ternak",
    count_ayat: 165,
  },
  {
    id: 7,
    surat_name: "Al-A'raf",
    surat_text: " الاعراف",
    surat_terjemahan: "Tempat Tertinggi",
    count_ayat: 206,
  },
  {
    id: 8,
    surat_name: "Al-Anfal",
    surat_text: " الانفال",
    surat_terjemahan: "Rampasan Perang",
    count_ayat: 75,
  },
  {
    id: 9,
    surat_name: "At-Taubah",
    surat_text: " التوبة",
    surat_terjemahan: "Pengampunan",
    count_ayat: 129,
  },
  {
    id: 10,
    surat_name: "Yunus",
    surat_text: " يونس",
    surat_terjemahan: "Yunus",
    count_ayat: 109,
  },
];
// };

// JSON.parse(dataJSON); //json berfungsi untuk menghilangkan string di data API, dengan diakhiri ini
// ================================================================

// method 1

// orang = orang.filter((orang) => orang.id >= 5); //.filter berfungsi untuk menampilkan seluruh properti yang dipanggil

// orang.map((orang) => {
//   document.write(
//     "<br>" +
//       orang.id +
//       orang.surat_name +
//       orang.surat_text +
//       orang.surat_terjemahan +
//       orang.count_ayat +
//       "</br>"
//   );
// });
// ================================================================

// method 2

// document.write(orang[1].id); //berfungsi untuk memanggil salah satu properti

// var x = orang.map((value, indx) => {
var x = orang.map((value) => {
  return (
    "<br>" +
    // indx +
    value.surat_text +
    "<br>" +
    value.id +
    ". " +
    value.surat_name +
    "<br>" +
    value.surat_terjemahan +
    "<br>" +
    // value.count_ayat +
    "<hr>" +
    "</hr>"
  );
});

document.write(x);
