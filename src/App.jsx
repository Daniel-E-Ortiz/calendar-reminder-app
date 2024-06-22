import { Container } from '@mui/material';
import { Calendar } from './components/calendar';

export default function App() {
    return (
        <>
            <head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </head>
            <Container maxWidth="lg">
                <Calendar />
            </Container>
        </>
    );
}
