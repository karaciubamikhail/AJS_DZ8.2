export default class ErrorRepository {
    constructor() {
        this.repository = new Map();
    }
    translate(code) {
        return this.repository.get(code) ? this.repository.get(code) : 'Unknown error';
    }
}