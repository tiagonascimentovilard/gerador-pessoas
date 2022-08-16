
export const geradorCpf = (gerar) => {
  if(gerar){
    const n1 = randomNum();
    const n2 = randomNum();
    const n3 = randomNum();
    const d1 = dig(n1, n2, n3);
    const d2 = dig(n1, n2, n3, d1);
    return `${n1}${n2}${n3}${d1}${d2}`;
  }else{
    return null;
  }
}

const dig = (n1, n2, n3, n4) => {
  const nums = n1.split("").concat(n2.split(""), n3.split(""));
  if (n4 !== undefined) nums[9] = n4;
  let x = 0;
  for (let i = (n4 !== undefined ? 11:10), j = 0; i >= 2; i--, j++) {
    x += parseInt(nums[j]) * i;
  }
  const y = x % 11;
  return y < 2 ? 0 : 11 - y; 
};

const randomNum = () => ("" + Math.floor(Math.random() * 999)).padStart(3, '0'); 
