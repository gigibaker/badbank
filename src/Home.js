import { React } from 'react';
import { Card } from './components/context'



export default function Home() {
    return (
        <Card
            bgcolor="light"
            txtcolor="black"
            header="BAD BANK"
            title="WELCOME TO THE BAD BANK!"
            text="For all your banking needs!"
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image" />)}
        />
    );
}
