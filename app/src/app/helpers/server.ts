export class Server {
    static protocol = 'http';
    static host = '127.0.0.1';
    static port = '8084';

    static baseUrl(): string {
        return `${this.protocol}://${this.host}:${this.port}`;
    }
}
