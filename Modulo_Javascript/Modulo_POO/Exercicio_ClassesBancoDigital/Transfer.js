//TRANSFERENCIA
export class Export {
    constructor(usuarioEnviouTransferencia, quemRecebeuTransferencia, valor, dataCriacao) {
        this.usuarioEnviouTransferencia = usuarioEnviouTransferencia;
        this.quemRecebeuTransferencia = quemRecebeuTransferencia;
        this.valor = valor;
        this.dataCriacao = dataCriacao;
    }
}