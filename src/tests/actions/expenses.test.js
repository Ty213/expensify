import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '1234ab' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234ab'
    });
});

test('should setup editExpense action object', () => {
    const action = editExpense('1234ab', {note: 'new note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1234ab',
        updates: {
            note: 'new note'
        }
    });
});