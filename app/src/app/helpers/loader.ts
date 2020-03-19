export class Loader {

    static show(): void {
        document.getElementById('loaderInitPage').style.display = 'block';
    }

    static dismiss(): void {
        document.getElementById('loaderInitPage').style.display = 'none';
    }
}
