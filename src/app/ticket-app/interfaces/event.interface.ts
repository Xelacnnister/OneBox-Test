/** Interface de la data de la lista de eventos recibida **/

export interface Event {
    id:          string;
    title:       string;
    subtitle:    string;
    image:       string;
    place:       string;
    startDate:   string;
    endDate:     string;
    description: string;
}
