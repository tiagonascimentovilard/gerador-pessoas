import NomePessoaFisica from './ghosts';

export const geradorNome = (gerar) => {
  if(gerar){
    return NomePessoaFisica();
  }else{
    return null;
  }
}
