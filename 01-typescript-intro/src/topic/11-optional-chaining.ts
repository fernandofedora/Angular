export interface Passenger{
    name: string;
    children?: string[];    
    }

    const passenger1: Passenger = {
        name: 'fernando'
    }
    const passenger2: Passenger = {
        name: 'fernando',
        children: ['tony', 'bruce']
    }
    const printChildren = (passenger: Passenger) => {
        const howManyChildren = passenger.children?.length || 0;
        console.log(howManyChildren);
    }
    printChildren(passenger1);