let ptBac2 = (a: number, b: number, c: number) => {
  //kiem tra dieu kien co phai pt bac 2
  if (a === 0) {
    console.log("Khong phai phuong trinh bac 2");
  } else {
    //tinh delta
    const delta: number = Math.pow(b, 2) - 4 * a * c;
    if (delta < 0) {
      console.log("Phuong trinh vo nghiem");
    }
    if (delta === 0) {
      console.log("Phuong trinh co nghiem kep x1 = x2 = " + (-b / 2) * a);
    }
    if (delta > 0) {
      console.log("Phuong trinh co 2 nghiem phan biet");
      console.log("x1 = " + (-b + Math.sqrt(delta)) / (2 * a));
      console.log("x2 = " + (-b - Math.sqrt(delta)) / (2 * a));
    }
  }
};
//case 1:
// ptBac2(2,5,3)

// //case 2:
// ptBac2(1,2,1)

// //case 3:
ptBac2(1, 1, 1);

// //case 4:
// ptBac2("string", 2,1)

// //case 5:
// ptBac2(null, null, 1)

//case 6: (tu cho)
// ptBac2(0,1,1)
//Nhan xet: case 4,5 sai kieu du lieu dau vao, phai la number.
