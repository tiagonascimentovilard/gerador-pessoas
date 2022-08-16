# gerador-pessoas
Biblioteca para geração de registros de pessoas físicas, com dados aleatórios.
Usado em:
 - Criação de dados validos para tabela de clientes e usuários para testes
 - Teste de carga para banco de dados e aplicação
 - Testes unitários
 - Simulação de API de clientes/usuários para desenvolvimento Front-end


## Instalação
```bash
$ npm install gerador-pessoas
```

## Exemplo
```bash
import gerador from 'gerador-pessoas';

//Habilita campos
gerador.setCampoNome("nome_cliente");
gerador.setCampoCpf();
//Executa o metodo para gerar JSON passando o 
//Quantidade de registros JSON
const registrosJSON = gerador.gerarJson(3);
//Quantidade de registros para insert. Nome da tabela do banco
const queryInsertSQL = gerarSql(3, 'clientes');
```

### Resultado JSON
```bash
[
  {"index":0,"nome_cliente":"MARCILIO MATOS PORTUGAL","cpf":"59550289435"},
  {"index":1,"nome_cliente":"JOSE MARTINS JUNIOR","cpf":"42140839030"},
  {"index":2,"nome_cliente":"FLORENCIO CAMPOS","cpf":"85312644994"}
]
```

### Resultado SQL
```bash
INSERT INTO clientes (nome_cliente, cpf) VALUES ('MARCILIO MATOS PORTUGAL','59550289435'), ('JOSE MARTINS JUNIOR','42140839030'), ('FLORENCIO CAMPOS','85312644994')
```

## Descrição técnica

### Origem dos dados
Aleatórios, baseado em listas Pré-definidas: nome e endereço
Randômico: CPF e número

### Campos disponíveis
```bash
gerador.setCampoCpf();
gerador.setCampoNome();
gerador.setCampoCep();
gerador.setCampoLogradouro();
gerador.setCampoNumero();
gerador.setCampoBairro();
gerador.setCampoMunicipio();
gerador.setCampoUf();
gerador.setCampoComplemento();
```

### Parâmetro opcional o setCampo, caso precise alterar o título do campo
```bash
gerador.setCampoNome("nome_cliente");
```

### Quantidade de registros
Mínimo de 1 e máximo 100.000
###### NOTE
 1) O desempenho pode variar dependendo da disponibilidade 
  de memória e processamento do servidor
###### NOTE
 2) A quantidade de campos habilitados interfere no 
  tempo total de execução

### Resultado JSON
```bash
const registrosJSON = gerador.gerarJson(3);
```

### Resultado em Query Insert SQL (String)
```bash
const queryInsertSQL = gerarSql(3, 'clientes');
```

## License
[MIT](LICENSE)
