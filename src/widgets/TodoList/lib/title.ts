export const getTitle = (title: string) => {
    switch (title) {
        case 'completed':
            return 'TODOS: Completed';
        case 'active':
            return 'TODOS: Active';
                
        default:
           return 'TODOS'
    }
}