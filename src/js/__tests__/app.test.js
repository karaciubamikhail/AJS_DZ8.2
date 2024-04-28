import ErrorRepository from "../app.js"

test('Должен создать объект ErrorRepository', () => {
    const result = new ErrorRepository();
    expect(result).toEqual(new ErrorRepository());
});

test('Должен вернуть значение по ключу', () => {
    let error = new ErrorRepository();
    error.repository.set('name', "Alex");
    const result = error.translate('name');
    expect(result).toEqual('Alex');
});

test('Должен вернуть Unknown error', () => {
    let error = new ErrorRepository();
    const result = error.translate('name');
    expect(result).toEqual('Unknown error');
});