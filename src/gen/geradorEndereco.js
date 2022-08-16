import endereco from './places.js'

export const geradorEndereco = (gerar) => {
  if(gerar){
    return endereco(Math.floor(Math.random() * 310));
  }else{
    return {};
  }
}
