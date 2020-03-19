export class Alert {

    static show(message: string, time: number = 2000): void {
        const alt = document.getElementById('alertPage');
        alt.innerHTML = message;
        alt.classList.remove('t-alert-hidden');
        alt.classList.add('t-alert-show');
        setTimeout(() => {
            alt.classList.remove('t-alert-show');
            alt.classList.add('t-alert-hidden');
        }, time);
    }
}
