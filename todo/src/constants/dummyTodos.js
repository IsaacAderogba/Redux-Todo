import uuid from 'uuid';

export default [
    {
        id: uuid(),
        value: 'Walk the dog.',
        completed: false
    },
    {
        id: uuid(),
        value: 'Fry hamburgers.',
        completed: false
    },
    {
        id: uuid(),
        value: 'Pay the bills.',
        completed: true
    },
]