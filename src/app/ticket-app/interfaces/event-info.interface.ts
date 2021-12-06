/** Interface de la data de evento recibida **/
export interface EventInfo {
    event:    Event;
    sessions: Session[];
}

export interface Event {
    id:       string;
    title:    string;
    subtitle: string;
    image:    string;
}

export interface Session {
    date:         string;
    availability: string;
}

