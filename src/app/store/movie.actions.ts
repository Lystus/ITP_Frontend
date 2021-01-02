export class GetMovies {
    static readonly type = '[Movies] Get Movies';
    constructor(
        public readonly limit: number, 
        public readonly offset: number, 
        public readonly asc: boolean, 
        ) {}
}