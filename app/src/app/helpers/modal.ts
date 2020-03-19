export class ModalComponent {

    static show(elt: string): void {
        document.getElementById(elt).style.display = 'block';
    }

    static dismiss(elt: string): void {
        document.getElementById(elt).style.display = 'none';
    }
}
