//TRANSFERENCIA
export class Transfer {
    constructor(usuarioEnviouTransferencia, quemRecebeuTransferencia, valor) {
        this.usuarioEnviouTransferencia = usuarioEnviouTransferencia;
        this.quemRecebeuTransferencia = quemRecebeuTransferencia;
        this.valor = valor;
        this.dataCriacao = new Date();
    }
}