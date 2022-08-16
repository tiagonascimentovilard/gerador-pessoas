'use strict'

import {geradorCpf} from "./gen/geradorCPF";
import {geradorNome} from "./gen/geradorNome";
import {geradorEndereco} from "./gen/geradorEndereco";

/**
 * Module exports.
 * @public
 */

class Gerador {

  _quantidade = 0;
  _registros = [{ "index":0 }];

  _campoCpf = false;
  _cpf = "cpf";

  _campoNome = false;
  _nome= "nome";

  _campoEndereco = false;
  _end = {};

  _campoCep = false;
  _cep= "cep";

  _campoLogr = false;
  _logr= "logradouro";

  _campoNumero = false;
  _numero= "numero";

  _campoBairro = false;
  _bairro= "bairro";

  _campoMunicipio = false;
  _municipio= "municipio";

  _campoUf = false;
  _uf= "uf";

  _campoCompl = false;
  _compl= "complemento";

  setCampoNome(nome) {
    this._campoNome = true;
    if(nome) this._nome = nome;
  }

  setCampoCpf(nome) {
    this._campoCpf = true;
    if(nome) this._cpf = nome;
  }

  setCampoCep(nome) {
    this._campoEndereco = true;
    this._campoCep = true;
    if(nome) this._cep = nome;
  }

  setCampoLogradouro(nome) {
    this._campoEndereco = true;
    this._campoLogr = true;
    if(nome) this._logr = nome;
  }

  setCampoNumero(nome) {
    this._campoNumero = true;
    if(nome) this._numero = nome;
  }

  setCampoBairro(nome) {
    this._campoEndereco = true;
    this._campoBairro = true;
    if(nome) this._bairro = nome;
  }

  setCampoMunicipio(nome) {
    this._campoEndereco = true;
    this._campoMunicipio = true;
    if(nome) this._municipio = nome;
  }

  setCampoUf(nome) {
    this._campoEndereco = true;
    this._campoUf = true;
    if(nome) this._uf = nome;
  }

  setCampoComplemento(nome) {
    this._campoEndereco = true;
    this._campoCompl = true;
    if(nome) this._compl = nome;
  }

  gerarJson(quantidade) {
    this._quantidade = parseInt(quantidade);
    if(this._quantidade > 0 && this._quantidade < 100001){
      if(this._campoEndereco) var { cep, municipio_uf, bairro, logradouro, complemento }  = geradorEndereco(this._campoEndereco);
      if(this._campoNome) this._registros[0][this._nome] = geradorNome(this._campoNome);
      if(this._campoCpf) this._registros[0][this._cpf] = geradorCpf(this._campoCpf);
      if(this._campoCep) this._registros[0][this._cep] = cep.trim();
      if(this._campoLogr) this._registros[0][this._logr] = logradouro.trim();
      if(this._campoNumero) this._registros[0][this._numero] = this.getNumero();
      if(this._campoBairro) this._registros[0][this._bairro] = bairro.trim();
      if(this._campoMunicipio) this._registros[0][this._municipio] = this.getMunicipio(municipio_uf);
      if(this._campoUf) this._registros[0][this._uf] = this.getUf(municipio_uf);
      if(this._campoCompl) this._registros[0][this._compl] = complemento.trim();
      for (let i = 1; i < this._quantidade; i++) {
        if(this._campoEndereco) var { cep, municipio_uf, bairro, logradouro, complemento } = geradorEndereco(this._campoEndereco);
        this._registros.push({"index":i});
        if(this._campoNome) this._registros[i][this._nome] = geradorNome(this._campoNome);
        if(this._campoCpf) this._registros[i][this._cpf] = geradorCpf(this._campoCpf);
        if(this._campoCep) this._registros[i][this._cep] = cep.trim();
        if(this._campoLogr) this._registros[i][this._logr] = logradouro.trim();
        if(this._campoNumero) this._registros[i][this._numero] = this.getNumero();
        if(this._campoBairro) this._registros[i][this._bairro] = bairro.trim();
        if(this._campoMunicipio) this._registros[i][this._municipio] = this.getMunicipio(municipio_uf);
        if(this._campoUf) this._registros[i][this._uf] = this.getUf(municipio_uf);
        if(this._campoCompl) this._registros[i][this._compl] = complemento.trim();
      }
    }
    return this._registros;
  }

  gerarSql(quantidade, tabela) {
    let query = "INSERT INTO " + tabela + " ("
    if(this._campoNome) query += this._nome + ","
    if(this._campoCpf) query += this._cpf + ","
    if(this._campoCep) query += this._cep + ","
    if(this._campoLogr) query += this._logr + ","
    if(this._campoNumero) query += this._numero + ","
    if(this._campoBairro) query += this._bairro + ","
    if(this._campoMunicipio) query += this._municipio + ","
    if(this._campoUf) query += this._uf + ","
    if(this._campoCompl) query += this._compl + ","
    query = query.substring(0, query.length - 1);
    query += ") VALUES "
    this._quantidade = parseInt(quantidade);
    if(this._quantidade > 0 && this._quantidade < 100001){
      for (let i = 0; i < this._quantidade; i++) {
        if(this._campoEndereco) var { cep, municipio_uf, bairro, logradouro, complemento }  = geradorEndereco(this._campoEndereco);
        query += "("
        if(this._campoNome) query += "'" + geradorNome(this._campoNome) + "',";
        if(this._campoCpf) query += "'" + geradorCpf(this._campoCpf) + "',";
        if(this._campoCep) query += "'" + cep.trim() + "',";
        if(this._campoLogr) query += "'" + logradouro.trim() + "',";
        if(this._campoNumero) query += "'" + this.getNumero() + "',";
        if(this._campoBairro) query += "'" + bairro.trim() + "',";
        if(this._campoMunicipio) query += "'" + this.getMunicipio(municipio_uf) + "',";
        if(this._campoUf) query += "'" + this.getUf(municipio_uf) + "',";
        if(this._campoCompl) query += "'" + complemento.trim() + "',";
        query = query.substring(0, query.length - 1);
        query += "), "
      }
    }
    query = query.substring(0, query.length - 2);
    return query;
  }

  getUf(mun_uf){
    return (mun_uf.split("/"))[1].substring(0,2);
  }

  getMunicipio(mun_uf){
    return (mun_uf.split("/"))[0].trim();
  }

  getNumero(){
    return String(Math.floor(Math.random() * 2900));
  }

}

module.exports = gerador;