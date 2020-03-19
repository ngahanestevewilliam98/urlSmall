export class Dater {

    static parse(input: string): string {
        const date = new Date(input);
        const dayTitler = date.getDay();
        let dayTitle: string;
        if (dayTitler === 1) {
            dayTitle = `Lun`;
        } else if (dayTitler === 2) {
            dayTitle = `Mar`;
        } else if (dayTitler === 3) {
            dayTitle = `Mer`;
        } else if (dayTitler === 4) {
            dayTitle = `Jeu`;
        } else if (dayTitler === 5) {
            dayTitle = `Ven`;
        } else if (dayTitler === 6) {
            dayTitle = `Sam`;
        } else {
            dayTitle = `Dim`;
        }

        const dayNumbers = date.getDate();
        let dayNumber = `${dayNumbers}`;
        if (dayNumbers < 10) { dayNumber = `0${dayNumbers}`; }

        const months = date.getMonth() + 1;
        let month = `${months}`;
        if (months < 10) { month = `0${months}`; }

        const hours = date.getHours() - 1;
        let hour = `${hours}`;
        if (hours < 10) { hour = `0${hours}`; }

        const minutesr = date.getMinutes();
        let minutes = `${minutesr}`;
        if (minutesr < 10) { minutes = `0${minutesr}`; }

        return `${dayTitle} ${dayNumber}/${month}/${date.getFullYear()} à ${hour}:${minutes}`;
    }
}
