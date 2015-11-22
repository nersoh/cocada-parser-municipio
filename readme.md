# cocada-parser-municipio

Parser para arquivos CSV gerados a partir da tabela `PAR_TB_MUNICIPIOS`.

Exemplo de saída:

```js
{
  "type": "municipio",
  "title": "NOME DO MUNICIPIO",
  "uf": "PB",
  "legacy": {
    CD_MUNICIPIO: "112233"
  }
}
```
